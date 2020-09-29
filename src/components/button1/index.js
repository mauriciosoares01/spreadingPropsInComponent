import React from 'react';

import {Container, Text} from './styles';

const Button1 = ({label, ...rest}) => {
  return (
    <Container {...rest}>
      <Text>{label}</Text>
    </Container>
  );
};

//Adicionar proptypes apenas para a prop label

export default Button1;
