import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

import intro from './introduction.json';

//TODO: 루트 element 채워넣기
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header 
          title={intro.title}
          subtitle={intro.subtitle}
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
