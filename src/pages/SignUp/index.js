import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signUpRequest } from '../../store/modules/auth/actions';
import Logo from '../../assets/logo.png';
import Background from '../../Components/Background/index';

import { 
  Container, 
  Form, 
  FormInput, 
  SubmitButton, 
  SignLink, 
  SignLinkText 
} from './styles';

const SignUp = ({ navigation }) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ name, setName ] = useState('');

  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  const emailRef= useRef();
  const passwordRef= useRef();

  function handleSubmit () {
    dispatch(signUpRequest(name, email, password));
  }

  return (
   <Background>
     <Container>
      <Image source={Logo} />
      <Form>
        <FormInput 
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome Completo"
          returnKeyType="next"
          onSubmitEditing={ () => emailRef.current.focus() }
          value={name}
          onChangeText={setName}
        />

        <FormInput 
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={ () => passwordRef.current.focus() }
          value={email}
          onChangeText={setEmail}
        />

        <FormInput 
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua senha secreta"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Criar Conta
        </SubmitButton>
      </Form>

      <SignLink onPress={() => navigation.navigate('SignIn') }>
        <SignLinkText>Já tenho conta</SignLinkText>
      </SignLink>

     </Container>
   </Background>
  )
}

export default SignUp;