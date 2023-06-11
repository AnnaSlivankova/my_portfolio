import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import Skills from "./layout/skills/Skills";
import {Projects} from "./layout/projects/Projects";
import {Contacts} from "./layout/contacts/Contacts";
import Footer from "./layout/footer/Footer";
import HireMe from "./layout/hireMe/HireMe";
import Welcome from "./layout/welcome/Welcome";
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
