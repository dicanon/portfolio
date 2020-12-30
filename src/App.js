import React, { createRef } from "react";
import theme from "./Theme";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import HomeScreen from "./Screens/Home";
import AboutMeScreen from "./Screens/AboutMe/AboutMe";
import Services from "./Screens/Services/Services";
import Footer from "./Screens/Footer";
import GetinTouch from "./Screens/ContactUs/GetinTouch";
import TextFieldBox from "./Screens/ContactUs/TextFieldBox";
import ContactBar from "./Screens/ContactUs/ContactBar";
import ContactUs from "./Screens/ContactUs/ContactUs";
import ProjectSlide from "./Screens/Slideshow/ProjectSlide";
import Header from "./Screens/Header";
import { Link, animateScroll as scroll } from "react-scroll";

//   render () {

function App() {
  const homeRef = createRef();
  const aboutmeRef = createRef();
  const services = createRef();
  const projectSlide = createRef();
  const contactUs = createRef();
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div id="section-home">
        <HomeScreen />
      </div>
      <div id="section-aboutme">
        <AboutMeScreen />
      </div>
      <div id="section-services">
        <Services />
      </div>
      <div id="section-projects">
        <ProjectSlide />
      </div>
      <div id="section-contact">
        <ContactUs />
      </div>
      <div id="section-footer">
        <Footer />{" "}
      </div>
    </ThemeProvider>
  );
}

export default App;
