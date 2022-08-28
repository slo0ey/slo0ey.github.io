import { useState } from 'react';

import styled from '@emotion/styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={null}></Route>
          <Route path='*' element={null}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
