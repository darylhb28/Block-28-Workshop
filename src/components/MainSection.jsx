import { Routes, Route, Link } from 'react-router-dom'
import Blue from './Blue'
import Red from './Red'
import Home from './Home'
import Violet from './Violet'
import Rainbow from './Rainbow'


export default function MainSection ({}){
    return(
        <div id="main-section">
            <Routes>
                <Route path="/blue" element={<Blue/>}/>
                <Route path="/red" element={<Red/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/violet" element={<Violet/>} />
                <Route path="/rainbow" element={<Rainbow/>} />
            </Routes>
        </div>


    )


}