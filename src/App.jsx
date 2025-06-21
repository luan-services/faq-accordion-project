import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'


function App() {

  return (
    <>
      <div  className="min-h-screen w-full font-worksans bg-custom-purple-100"> 
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </HashRouter>
      </div>
    </>
  )
}

export default App
