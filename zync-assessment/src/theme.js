import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    typography: {
        fontFamily: ['Raleway','sans-serif'].join(','),
        h3: {
            fontWeight: 'bold'
        },
    },
    components: {
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    border: 0,
                    '&:hover': {
                        color: '#000000',
                        backgroundColor: 'transparent',
                    },

               },
           }, 
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor:'#bdbdbd',
                    '&:hover': {
                        color: '#000000',
                        backgroundColor: 'transparent',
                    },

               },
           }, 
        },
    },
  });
export default theme;