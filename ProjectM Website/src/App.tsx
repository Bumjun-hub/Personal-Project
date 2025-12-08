import About from "./components/About";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Features/>
      {/* 이 아래부터 소개 / 특징 / 다운로드 섹션 등 추가 */}
    </>
  );
}

export default App;
