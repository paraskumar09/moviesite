import './App.css'
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import Error from './components/Error';

function App() {

  return (
    <>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
    </>
  )
}

export default App
