import { DefaultTheme } from 'styled-components';

// Define what props.theme will look like
const theme: DefaultTheme = {
  device: {
    mobile: {
      min: '0px',
      max: '799px',
    },
    tablet: {
      min: '800px',
      max: '1199px',
    },
    desktop: {
      min: '1200px',
      max: '2000px',
    },
  },
  colors: {
    veraneos: '#14716a',
    superdarkaneos: '#013839',
    darkaneos: '#005c56',
    lime: '#12b886',
    'lime-dark': '#038b62',
    'lime-darker': '#095d44',
    'lime-lightest': '#d6f8ee',
    blue: '#129cab',
    ink: '#343a40',
    'ink-light': '#868e96',
    'ink-lighter': '#adb5bd',
    'paper-darker': '#eee9e5',
    'paper-dark': '#f5f3f1',
    paper: '#faf9f8',
    'paper-light': '#fdfcfb',
    white: '#fff',
    red: '#db2c24',
    'red-light': '#eb706a',
    gold: '#ffb200',
    'gold-lightest': '#fff3d2',
    orange: '#ee641c',
    'orange-light': '#f79a57',
    'orange-lighter': '#ffc194',
    pink: '#faab95',
  },
  margin: {
    main: '10%',
    secondary: '5%',
    third: '3%',
  },
};

export default theme;
