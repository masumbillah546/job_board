export default function UnauthorizedPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Unauthorized</h1>
      <p>You do not have permission to access this page.</p>
      <a href="/" className="btn btn-primary">Go Home</a>
    </div>
  );
}
