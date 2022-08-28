import { useState } from 'react';

import styled from '@emotion/styled';

const TitleText = styled.h1`
  margin: 0;
  padding: 15px 0;
  border-bottom: 1px solid grey;
  text-align: center;
`;

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TitleText>잠온다 실험실</TitleText>
      <h2>* 할일 목록</h2>
      <div>- 나도 여기서 뭘 할진 모르겠거든?</div>
      <div>- 걍 심심해서 끄적여봄..</div>
    </div>
  )
}

export default App
