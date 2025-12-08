// src/components/Hero.tsx
import React, { useState, useEffect } from "react";
import "./Hero.css";

// ✅ 이미지 모듈 import
import imgMadness from "../assets/images/광기.png";
import imgDivine from "../assets/images/신.png";
import imgGreatsword from "../assets/images/대검.png";

type HoverZone = "left" | "center" | "right" | null;

const Hero: React.FC = () => {
  const [hovered, setHovered] = useState<HoverZone>(null);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pm-hero">
      <div className="hero-inner">
        <div
          className={`pm-strip ${hovered ? `hover-${hovered}` : ""}`}
          onMouseLeave={() => setHovered(null)}
        >
          {/* 왼쪽 패널 */}
          <div
            className="pm-panel pm-panel-left"
            onMouseEnter={() => setHovered("left")}
          >
            <div className="pm-panel-inner">
              <img src={imgMadness} alt="왼쪽 인게임 스크린샷" className="pm-image" />
            </div>
            <div className="pm-overlay">
              <h3 className="overlay-title">광기로 물든 세계</h3>
              <p className="overlay-sub">모든 생명이 이성을 잃었다.</p>
            </div>
          </div>

          {/* 가운데 패널 */}
          <div
            className="pm-panel pm-panel-center"
            onMouseEnter={() => setHovered("center")}
          >
            <div className="pm-panel-inner">
              <img src={imgDivine} alt="대표 인게임 스크린샷" className="pm-image" />
            </div>
            <div className="pm-overlay">
              <h3 className="overlay-title">신에게 선택받은 존재</h3>
              <p className="overlay-sub">당신만이 광기를 정화할 수 있다.</p>
            </div>
          </div>

          {/* 오른쪽 패널 */}
          <div
            className="pm-panel pm-panel-right"
            onMouseEnter={() => setHovered("right")}
          >
            <div className="pm-panel-inner">
              <img src={imgGreatsword} alt="오른쪽 인게임 스크린샷" className="pm-image" />
            </div>
            <div className="pm-overlay">
              <h3 className="overlay-title">대검으로 끝내라</h3>
              <p className="overlay-sub">묵직한 한 방으로 전장을 바꿔라</p>
            </div>
          </div>
        </div>

        {showScroll && (
          <div className="scroll-indicator">
            <span>스크롤 하여 더 많은 정보를 확인 해보세요</span>
            <div className="arrow"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
