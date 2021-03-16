import React, { useEffect } from "react";
import Main from "./components/Main.js";
import ContentBox from "./components/ContentBox";
import Footer from "./components/Footer";
import { gsap, TweenMax, TweenLite, Expo, Power1 } from "gsap";

function App() {
  let gradient = {
      value:
        "linear-gradient(180deg, rgba(254,176,42,1)0%, rgba(253,150,34,1) 100%)",
    },
    target = document.querySelector("body");
  gsap.to(gradient, {
    value:
      "linear-gradient(180deg, rgba(254,210,51,1) 0%, rgba(253,155,36,1) 100%)",
    duration: 10,
    repeat: 3,
    yoyo: true,
    onUpdate: () => (target.style.backgroundImage = gradient.value),
  });

  gsap.registerPlugin({
    name: "gradient",
    init(target, value) {
      let forceDeg = (value) =>
        ~value.indexOf("deg")
          ? value
          : (value = value.split("(")) &&
            value.shift() + "(180deg, " + value.join("(");
      this.add(
        target.style,
        "backgroundImage",
        forceDeg(window.getComputedStyle(target).backgroundImage + ""),
        forceDeg(value)
      );
    },
  });
  useEffect(() => {
    gsap.to("body", {
      gradient:
        "linear-gradient(180deg, rgba(165, 75, 75) 0%, rgba(145, 152, 229) 100%)",
      duration: 10,
      repeat: 9999,
      yoyo: true,
    });
    gsap.set(".follower", { xPercent: -50, yPercent: -50 });
    gsap.set(".cursor", { xPercent: -50, yPercent: -50 });
    let follow = document.querySelector(".follower");
    let cur = document.querySelector(".cursor");

    window.addEventListener("mousemove", (e) => {
      gsap.to(cur, 0.2, { x: e.clientX, y: e.clientY });
      gsap.to(follow, 0.9, { x: e.clientX, y: e.clientY });
    });
  }, []);
  return (
    <body className="body body__gradient">
      <div className="cursor"></div>
      <div className="follower"></div>
      <div className="page">
        <Main />
        <ContentBox />
        <Footer />
      </div>
    </body>
  );
}

export default App;
