import './App.css'
import {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import {Route, Routes} from "react-router-dom"
import HelloWorld from "./pages/helloWorld.tsx";
import HeaderNavigation from "./pages/headerNavigation.tsx";
import Home from "./pages/home.tsx";


function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    return (
        <>
            <HeaderNavigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/welcome" element={<HelloWorld/>}/>
                <Route path="/characters" element={<CharacterGallery  characters={characters}/>}/>
            </Routes>
        </>
    )
}

export default App
