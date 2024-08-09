import './App.css'
import {Routes,Route} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home'
import About from './Components/About'
import DisplayItems from './Components/DisplayItems'
import AddItem from './Components/AddItem'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
function App() {

  return (
    <>
    
      
        <Routes>
         <Route path='/'  element={<Navbar/>}>
         <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<DisplayItems />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/contact" element={<Contact />} />
         </Route>
        </Routes>


    </>
  )
}

export default App
