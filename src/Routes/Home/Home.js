import { useState } from "react";
import IntroAnimation from "../../components/introAnimation/introAnimation";
import MainPage from "../../components/MainPage/MainPage";

const Home = () => {
   const [animationOver, setAnimationOver] = useState(false);
   return <div>{animationOver ? <MainPage /> : <IntroAnimation />}</div>;
};

export default Home;
