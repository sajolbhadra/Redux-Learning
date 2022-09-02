import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  navBg: "#4D4C7D",
  navText: "#fff",
  buttonBg: "#18212F",
  buttonText: "#fff",
  footerBg: "#4D4C7D",
  footerText: "#fff",
  specialNotesBg: "#F1FDF9",
  overViewBg: "#f2f2ff",
  reviewBg:"#fff",
  borderColor: "#B3C5EF",
  linkColor: "#3ABFF8",
};

export const darkTheme = {
  body: "#0F1729",
  fontColor: "#B3C5EF",
  navBg: "#171212",
  navText: "#B3C5EF",
  buttonBg: "#f6e58d",
  buttonText: "#130f40",
  footerBg: "#171212",
  footerText: "#B3C5EF",
  specialNotesBg: "#0F1729",
  overViewBg: "#000000",
  reviewBg:"#00123b",
  borderColor: "#B3C5EF",
  linkColor: "#3ABFF8",
};

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.body};
    }
    .navStyle{
        background-color: ${(props) => props.theme.navBg};
        color:${(props) => props.theme.navText}
    }
    .button{
        background-color: ${(props) => props.theme.buttonBg};
        color:${(props) => props.theme.buttonText}
    }
    .footerStyle{
        background-color: ${(props) => props.theme.footerBg};
        color:${(props) => props.theme.footerText}
    }
    .specialNotesStyle{
        background-color: ${(props) => props.theme.specialNotesBg};
        
    }
    .overViewStyle{
        background-color: ${(props) => props.theme.overViewBg};   
    }
    .reviewStyle{
        background-color: ${(props) => props.theme.reviewBg};   
    }
    .borderStyle{
        border-color: ${(props) => props.theme.borderColor};   
    }
    .linkColor{
        color: ${(props) => props.theme.linkColor};
        
    }
    
    `;
