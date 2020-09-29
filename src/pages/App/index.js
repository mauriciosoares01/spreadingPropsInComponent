import React from 'react';

import Button1 from '../../components/button1';
import {Container, StyledButton} from './styles';

const App = () => {
  return (
    <Container>
      <Button1
        label="Button styled by styles prop"
        style={{backgroundColor: '#ff3333', width: 100, margin: 25}}
        onPress={() => console.log('Button styled by styles prop')}
      />

      <StyledButton
        label="Styled button"
        onPress={() => console.log('Styled button')}
      />
    </Container>
  );
};

export default App;
