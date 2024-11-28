import { useMediaQuery } from 'react-responsive'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import moment from 'moment'

const MySwal = withReactContent(Swal)

export const useScreenSizes = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isPortrait,
    isRetina,
  }
}


interface PreConfirmAlertOptions {
  title: string;
  text: string;
  confirmButtonText: string;
  denyButtonText: string;
  confirmButton: string;
  denyButton: string;
}
export const preConfirmAlert = async ({
  title = 'Submit updated data?',
  text = "You won't be able to revert this!",
  confirmButtonText = 'Save and Submit',
  denyButtonText = 'Submit',
  confirmButton = 'btn btn-primary',
  denyButton = 'btn btn-primary ml-1',
  ...rest
}: PreConfirmAlertOptions) => {
  const result = await MySwal.fire({
    title,
    text,
    icon: 'warning',
    showDenyButton: true,
    confirmButtonText,
    denyButtonText,
    customClass: {
      confirmButton,
      denyButton,
    },
    buttonsStyling: false,
    showLoaderOnConfirm: true,
    allowOutsideClick: true,
    ...rest
  })
  return result
}
// (() => {console.log('hello world')})()
// (async () => {

//   /* inputOptions can be an object or Promise */
//   const inputOptions = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         'Insert, Edit & Delete': 'Insert, Edit & Delete',
//         'Insert & Edit' : 'Insert & Edit',
//         'Insert & Delete': 'Insert & Delete',
//         'Edit & Delete': 'Edit & Delete',
//         'Insert': 'Insert',
//         'Edit': 'Edit',
//         'Delete' : 'Delete'
//       })
//     }, 1000)
//   })
  
//   const { value: color } = await Swal.fire({
//     title: 'Select what you performed.',
//     input: 'radio',
//     inputOptions: inputOptions,
//     inputValidator: (value) => {
//       if (!value) {
//         return 'You need to choose something!'
//       }
//     }
//   })
  
//   if (color) {
//     console.log(color);
//     // Swal.fire({ html: `You selected: ${color}` })
//     (async () => {
//              const { value: text } = await Swal.fire({
//                input: 'textarea',
//                inputPlaceholder: 'Tell the approver what you changed.',
//                inputAttributes: {
//                  'aria-label': 'Tell the approver what you changed.'
//                },
//                showCancelButton: true,
//                inputValidator: (value) => {
//                  if (!value) {
//                    return 'You need to write something!'
//                  }
//                }
//              })
//              if (text) {
//               console.log(text);
//             }
//     })();
//   }
  
//   })()


// // inputOptions can be an object or Promise
// var inputOptions = new Promise(function(resolve) {
//   resolve({
//     '#ff0000': 'Red',
//     '#00ff00': 'Green',
//     '#0000ff': 'Blue'
//   });
// });

// swal({
// title: 'Select color',
// input: 'radio',
// inputOptions: inputOptions,
// inputValidator: function(result) {
//   return new Promise(function(resolve, reject) {
//     if (result) {
//       resolve();
//     } else {
//       reject('You need to select something!');
//     }
//   });
// }
// }).then(function(result) {
// swal({
//   type: 'success',
//   html: 'You selected: ' + result
// });
// })

// $(document).on("click",".swal2-container input[name='swal2-radio']", function() {
// var id = $('input[name=swal2-radio]:checked').val();
// console.log('id: ' + id);
// });


export const encodeQuery = (data: any) => {

  let query = '?'
  for (const d in data) {
    if (data[d]) {
      query += `${encodeURIComponent(d)}=${
        encodeURIComponent(data[d])}&`
    }
  }
  return query.slice(0, -1)
}

const DATE_FORMAT = 'DD-MM-YYYY';
const TIME_FORMAT = 'HH:mm';
export const setTimeFormat = (time : any) => time.format('HH:mm:ss');
export const getTimeFormat = (time : any) => moment(new Date(time), TIME_FORMAT);
export const viewTimeFormat = (time : any) => moment(time).format(TIME_FORMAT);

export const setDateFormat = (date : any) => date.format(DATE_FORMAT);
export const getDateFormat = (date : any) => moment(new Date(date), DATE_FORMAT);
export const viewDateFormat = (date : any, format = DATE_FORMAT) => {
  if (date) {
    return moment(date).format(format)
  }
  return 'N/A'
};


export const emailValidationRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
