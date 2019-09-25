import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import {
  ContainerChat,
  MacAvatar,
  ChatDialog,
  MacDialog,
  ContainerChatInput,
  SendButton,
  ChatInput,
  SendButtonImg
} from './styles';

const arrowImg = require('../../../assets/images/left-arrow.png');
const macPhotoChat = require('../../../assets/images/macPhoto.png');

export default function signupQuestions(props) {
  return (
    <>
      <ContainerChat>
        <ChatDialog>
          <MacAvatar source={macPhotoChat}/>
          <MacDialog>Oi! Eu sou o Mac. Já imaginou guardar todas as informações
             do seu pet em um só lugar, e ainda ser notificado quando a
             data da proxima vacina estiver chegando ou quando a ração esta acabando?
          </MacDialog>
        </ChatDialog>
        <ChatDialog>
          <MacAvatar source={macPhotoChat} />
          <MacDialog>
            Para começar, vamos nos conhecer melhor? 
            Como você ser chamado?
            </MacDialog>
        </ChatDialog>
      </ContainerChat>
      <KeyboardAvoidingView behavior="position" contentContainerStyle={{ paddingBottom: 50 }}>
        <ContainerChatInput>
          <ChatInput />
          <SendButton onPress={() => props.navigation.navigate('Dashboard')}>
            <SendButtonImg source={arrowImg} />
          </SendButton>
        </ContainerChatInput>
      </KeyboardAvoidingView>
    </>
  );
}
