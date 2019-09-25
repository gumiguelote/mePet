import styled from 'styled-components/native';

import Colors from '../../colors';
import { Fonts } from '../../defaultStyles';

export const ContainerChat = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "space-between",
  }
})`
  display:flex;
  flex-direction:column;
`;

export const MacAvatar = styled.Image`
  width:44px;
  height:44px;
  border-radius:5px;
`;

export const ChatDialog = styled.View`
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  padding:20px 20px 20px 20px;
`;

export const MacDialog = styled.Text` 
   font-size:${Fonts.normalSize};
   padding-left:10px;
   padding-right:50px;
`;

export const ContainerChatInput = styled.View` 
  display:flex;
  flex-direction:row;
  background-color:${Colors.primarySoft};
  align-items:center;
  height:80px;
`;

export const SendButton = styled.TouchableOpacity` 
  margin-right:10px;
  border-radius:50px;
  padding:15px;
  background-color:${Colors.primary};
`;

export const ChatInput = styled.TextInput` 
  border:solid 0px;
  font-size:${Fonts.normalSize};
  border-radius:2px;
  flex:1;
  height:50px;
  padding-left:20px;
  color:${Colors.white}
`;

export const SendButtonImg = styled.Image` 
  width:25px;
  height:25px;
`;






