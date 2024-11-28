import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Container, Button, Form, ListGroup, Modal } from "react-bootstrap";

// Initialize Socket.IO client
const socket = io("http://localhost:4000");

export default function ChatWidget({ job }) {
  const [chatVisible, setChatVisible] = useState(false); // To toggle chat room
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const roomId = `job-${job.id}`; // Unique room ID for the job

  // Join chat room on mount
  useEffect(() => {
    if (chatVisible) {
      socket.emit("join", roomId);

      // Load existing chat history
      socket.on("chatHistory", (history) => {
        setChatHistory(history);
      });

      // Listen for new messages
      socket.on("newMessage", (newMessage) => {
        setChatHistory((prev) => [...prev, newMessage]);
      });
    }

    return () => {
      if (chatVisible) {
        socket.off("chatHistory");
        socket.off("newMessage");
      }
    };
  }, [roomId, chatVisible]);

  // Store chat history in localStorage for persistence
  useEffect(() => {
    localStorage.setItem(`chat-${roomId}`, JSON.stringify(chatHistory));
  }, [chatHistory, roomId]);

  // Load stored chat history from localStorage
  useEffect(() => {
    const storedHistory = localStorage.getItem(`chat-${roomId}`);
    if (storedHistory) {
      setChatHistory(JSON.parse(storedHistory));
    }
  }, [roomId]);

  // Handle sending messages
  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = { id: Date.now(), text: message, sender: "candidate" };
      socket.emit("message", { roomId, message });
      setChatHistory((prev) => [...prev, newMessage]); // Update local history
      setMessage(""); // Clear input field
    }
  };

  return (
    <Container className="mt-4">
      {/* Chat Icon */}
      <Button
        variant="info"
        className="chat-icon"
        onClick={() => setChatVisible(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "24px",
        }}
      >
        💬
      </Button>

      {/* Chat Room Modal */}
      <Modal show={chatVisible} onHide={() => setChatVisible(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Chat with Recruiter</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column justify-content-between" style={{ maxHeight: "calc(100vh - 210px)", minHeight: 400, overflowY: "auto" }}>
          <ListGroup className="chat-history mb-3">
            {chatHistory.map((chat) => (
              <ListGroup.Item key={chat.id} className="text-start">
                <strong>{chat.sender}:</strong> {chat.text}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Form className="d-flex w-100">
            <Form.Group controlId="messageInput" className="flex-grow-1 me-2">
              <Form.Control
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

// Fetch job data dynamically for the page
export async function getStaticProps({ params }) {
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      description: "Develop and maintain software systems.",
    },
  ];
  const job = jobs.find((job) => job.id === parseInt(params.id));
  return { props: { job } };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: false,
  };
}
