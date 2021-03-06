import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

const Button = ({children, loading, ...rest}) => {
  return (
    <Container>
      { loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>      
      )}
    </Container>
  )
}

export default Button;