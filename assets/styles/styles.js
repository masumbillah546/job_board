export const CLASSES = {
  items_center: 'd-flex align-items-center ',
  content_center: 'd-flex justify-content-center align-items-center ',
  content_end: 'd-flex justify-content-end align-items-center ',
  content_between: 'd-flex justify-content-between align-items-center ',
  content_around: 'd-flex justify-content-around align-items-center ',
}

export const backgroundImageStyle = (Background) => ({
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundColor: COLORS.theme,
  backgroundPosition: 'center',
  width: '100%',
  // height: '400px', // Set the height as needed
});

export const COLORS = {
  theme: '#12405A',
  input_border: '#303030',
  modal_bg: '#00000033',
  danger: '#FFB0B0', 
  danger_light: '#F2F2F2',
  success: '#04C100',
  button: '#000C3D',
  warning: '#FFA500',
  gray: '#D0D5DD',
  red: '#EF3333',
  white: 'white',
  blue: '#288BCF',
  black: '#000000', 
  black_50: '#747474',
} 