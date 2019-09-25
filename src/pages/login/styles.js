import styled from 'styled-components/native';
import Colors from '../../colors';
import { Fonts, Inputs, Buttons } from '../../defaultStyles';

export const LoginOuterContainer = styled.View`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  padding-top:20px;
  align-items:center;
  background-color:${Colors.primary};
  height:100%;
`;

export const LogoImage = styled.Image`
  width:250px;
`;

export const LoginInnerContainer = styled.KeyboardAvoidingView.attrs({
  behavior: "position"
})`
  margin:0px 15px;
  border-radius:15;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export const ButtonLogin = styled.TouchableHighlight.attrs({
  underlayColor: Colors.primarySoft,
  // onShowUnderlay:alert("teste")
})`
   background-color:${Colors.white};
   padding:5px 15px;
   margin:15px 0px;
   border-radius:2px;
   box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.9);
   display:flex;
   justify-content:center;
   align-items:center;
   height:${Buttons.height};
`;

export const ButtonLabel = styled.Text`
   font-size:${Fonts.normalSize};
   font-family:${Fonts.regular};
   color:${Colors.black};
`;

export const InputLogin = styled.TextInput.attrs({
  autoCompleteType: "email",
  keyboardAppearance: "dark",
  placeholderTextColor: Colors.white,
  autoCapitalize:"none",
})`
  height:${Inputs.height};
  font-size:${Fonts.normalSize};
  font-family:${Fonts.regular};
  border-left-width:0px;
  border-right-width:0px;
  border-top-width:0px;
  border:1px solid ${Colors.white};
  color:${Colors.white};
  margin:5px 0px;
  padding:0px 10px;
  width:300px;
`;



