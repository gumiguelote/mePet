import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';
import {
  LoginOuterContainer,
  LoginInnerContainer,
  ButtonLogin,
  ButtonLabel,
  InputLogin,
  LogoImage
} from './styles';

//logo
const logoImg = require('../../../assets/images/logo/mePetLogo.png');

//video login
const introVideo = require('../../../assets/intro/intro.mp4');
const { height } = Dimensions.get("window");

export default function login(props) {
  return (
    <LoginOuterContainer>
      <Video
        style={styles.backgroundVideo}
        source={introVideo}
        muted={true}
        repeat={true}
        resizeMode={"cover"}
        rate={0.9}
        ignoreSilentSwitch={"obey"}
        playWhenInactive={true} />
      <LogoImage source={logoImg} />
      <LoginInnerContainer>
        <InputLogin
          textContentType="username"
          placeholder="Digite seu email"
          autoCorrect={false}
        />
        <InputLogin
          textContentType="password"
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
        <ButtonLogin
          onPress={() => props.navigation.navigate('SingUpPage')}>
          <ButtonLabel>Entrar</ButtonLabel>
        </ButtonLogin>
      </LoginInnerContainer>
    </LoginOuterContainer>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.4
  }
});
