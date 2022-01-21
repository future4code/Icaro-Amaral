import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Ícaro'}
          fotoUsuario={'https://i.imgur.com/zuOq4SW.jpg'}
          fotoPost={'https://i.imgur.com/me0k1gj.jpg'}
        />

        <Post
          nomeUsuario={'Evelim'}
          fotoUsuario={'https://i.imgur.com/AEApkpC.jpg'}
          fotoPost={'https://i.imgur.com/ivDpkRl.jpg'}
        />

        <Post
          nomeUsuario={'Mario Mariola'}
          fotoUsuario={'https://i.imgur.com/VralE9m.jpg'}
          fotoPost={'https://i.imgur.com/CR5Qp2T.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
