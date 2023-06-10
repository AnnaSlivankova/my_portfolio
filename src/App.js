import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import Footer from "./footer/Footer";
import HireMe from "./hireMe/HireMe";
import Welcome from "./welcome/Welcome";
import {createTheme, ThemeProvider} from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0072ff'
      },
      secondary: {
        main: '#00c6ff'
      },
      info: {
        main: '#fff'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Welcome/>
      <Main/>
      <Skills/>
      <HireMe/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
