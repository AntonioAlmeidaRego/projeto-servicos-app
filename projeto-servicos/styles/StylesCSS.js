
import styled from 'styled-components/native';
/*
* export const LoginBackgroudStyle = styled.View`position: relative;
width: 375px;
height: 667px;

background: rgba(34, 45, 159, 0.7);`;

export const LoginTitleStyle = styled.View`position: absolute;
width: 168px;
height: 18px;
left: 103px;
top: 29px; `

export const LoginSubtitleStyle = styled.View`position: absolute;
width: 183px;
height: 64px;
left: 96px;
top: 84px;`

export const LoginBoxStyle = styled.View`position: absolute;
width: 286px;
height: 305px;
left: 44px;
top: 200px;

background: #FFFFFF;
border-radius: 12px;`

export const LoginBoxTitleStyle = styled.View`position: absolute;
width: 54px;
height: 16px;
left: 112px;
top: 15px;
`

export const LoginBoxInputStyle = styled.View`position: absolute;
width: 250px;
height: 35px;
left: 20px;
right: 20px;
padding: 30px;
top: 55px;`

export const LoginBoxInputContainerStyle = styled.View`position: absolute;
left: 0px;
right: 0px;
top: 0px;
bottom: 0px; `

export const LoginBoxInputBorderStyle = styled.TextInput.attrs({
    placeholderTextColor: '#dbdbdb',
    placeholderStyle: {
        fontSize: 16,
    },
    placeholder: 'E-mail'
})`
border: 0.5px solid #A6AAB4;
padding-left: 35px;
border-radius: 6px;`;

// Input Password

export const LoginBoxPasswordStyle = styled.View`position: absolute;
width: 250px;
height: 35px;
left: 20px;
right: 20px;
padding: 30px;
top: 125px;`

export const LoginBoxPasswordContainerStyle = styled.View`position: absolute;
left: 0px;
right: 0px;
top: 0px;
bottom: 0px; `


export const LoginBoxPasswordBorderStyle = styled.TextInput.attrs({
    placeholderTextColor: '#dbdbdb',
    placeholderStyle: {
        fontSize: 16,
    },
    placeholder: 'Senha',
    secureTextEntry: true,
})`
border: 0.5px solid #A6AAB4;
padding-left: 35px;
border-radius: 6px;`;

export const LoginBoxButtonSigInStyle = styled.View`position: absolute;
height: 39px;
left: 66px;
right: 68px;
top: 414px;`

export const LoginButtonSigInStyle = styled.TouchableOpacity`position: absolute;
left: 0px;
right: 0px;
top: 0px;
bottom: 0px;

background: #613EEA;

box-shadow: 0px 8px 20px rgba(97, 62, 234, 0.32);
border-radius: 6px;`

export const LoginButtonTitleSigInStyle = styled.Text`
position: absolute;
left: 20px;
right: 20px;
top: 14px;
bottom: 14px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.1px;

color: #FFFFFF;`




*
* */
export default class StylesCSS{
    static onView(css){
        return styled.View`${css}`;
    }

    static onTextInput(css?: string){
        return styled.TextInput`${css}`;
    }

    static onTouchableOpacity(css){
        return styled.TouchableOpacity`${css}`;
    }
}


