import styled from '@emotion/styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import intro from './introduction.json';

const TitleText = styled.h1`
  margin: 0;
  padding: 15px 0;
  border-bottom: 1px solid grey;
  text-align: center;
`;

const Title = styled.div`
  
`;

//TODO: 루트 element 채워넣기
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header 
          title={intro.title}
          subtitle={intro.subtitle}
          army_timer={intro.army_timer}
        />
        <Routes>
          <Route path='/' element={null}></Route>
          <Route path='*' element={null}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
