import Home from './components/Home/Home'
import './App.css'
import Error from './components/Error/Error'
import {Routes,Route} from 'react-router-dom'
import SingleMovie from './components/SingleMovie/SingleMovie'
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<SingleMovie/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      
    </>
  )
}

export default App
