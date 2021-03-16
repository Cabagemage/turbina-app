import React, { useEffect } from "react";
import Main from "./components/Main.js";
import ContentBox from "./components/ContentBox";
import Footer from "./components/Footer";
import { gsap, TweenMax, TweenLite, Expo, Power1 } from "gsap";

function App() {
  var colors = {top:"blue", bottom:"yellow"};

  useEffect(() => {
    // TweenMax.to(".body__gradient", 1, {
    //   css: { className: ".body__gradient_now" },
    //   repeat: 15,
    //   delay: 1,
    //   repeatDelay: 0.5,
    //   yoyo: true,
    // });
    // TweenMax.to("body", 1, {
    //   className: "+=body__gradient body__gradient_now",
    //   duration: 100,
    //   repeat: 1000,
    //   delay: 1,
    //   repeatDelay: 1,
    //   yoyo: true,
    //   ease: Power1.easeOut,
    // });
 
  });
  return (
    <body className="body body__gradient">
      <div className="cursor"></div>
      <div className="page">
        <Main />
        <ContentBox />
        <Footer />
      </div>
    </body>
  );
}

export default App;
