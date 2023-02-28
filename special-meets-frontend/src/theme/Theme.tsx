import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#FF0000",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#00FF00",
    },
  },
  overrides:{
    MuiButton:{
      contained:{
        color: "#A020F0",
        backgroundColor: "#000000",
        '&:hover': {
          backgroundColor: "#FFFFFF",
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: "#FFFF00",
          },
        }
      }
    }
  }
});
interface IThemeProps{
  children:any;
}
export default function Theme(props: IThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}
