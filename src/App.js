import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import HireMe from "./hireMe/HireMe";
import Welcome from "./welcome/Welcome";
import {HashRouter} from "react-router-dom";

function App() {
    return (
            <div className="App">
                <Header/>
                <Welcome/>
                <Main/>
                <Skills/>
                <HireMe/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </div>
    );
}

export default App;
