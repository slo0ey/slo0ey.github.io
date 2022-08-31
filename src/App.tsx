import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

import { title, subtitle, socials } from './introduction.json';

//TODO: 루트 element 채워넣기
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header 
          title={title}
          subtitle={subtitle}
          socials={socials}
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
