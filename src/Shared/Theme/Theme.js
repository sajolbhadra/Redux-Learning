import {createGlobalStyle} from 'styled-components'

export const lightTheme = {
    body: '#fff',
    fontColor: '#000',
    navBg: '#4D4C7D',
    navText:'#fff',
    buttonBg: '#18212F',
    buttonText: '#fff',
    footerBg: '#4D4C7D',
    footerText: '#fff',
    specialNotesBg: '#F1FDF9',
    linkColor: '#3ABFF8',
}

export const darkTheme = {
    body: '#0F1729',
    fontColor: '#B3C5EF',
    navBg: '#171212',
    navText:'#B3C5EF',
    buttonBg: '#f6e58d',
    buttonText: '#130f40',
    footerBg:'#171212',
    footerText:'#B3C5EF',
    specialNotesBg: '#0F1729',
    linkColor: '#3ABFF8',
}

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${props => props.theme.body};
    }
    .navStyle{
        background-color: ${props => props.theme.navBg};
        color:${props => props.theme.navText}
    }
    .button{
        background-color: ${props => props.theme.buttonBg};
        color:${props => props.theme.buttonText}
    }
    .footerStyle{
        background-color: ${props => props.theme.footerBg};
        color:${props => props.theme.footerText}
    }
    .specialNotesStyle{
        background-color: ${props => props.theme.specialNotesBg};
        
    }
    .linkColor{
        color: ${props => props.theme.linkColor};
        
    }
    
    `