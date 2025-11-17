// src/components/Hero.tsx
import React, { useState, useEffect } from "react";
import "./Hero.css";

type HoverZone = "left" | "center" | "right" | null;

const Hero: React.FC = () => {
  const [hovered, setHovered] = useState<HoverZone>(null);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pm-hero">
      <div className="hero-inner">

        {/* 패널 3개 */}
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
              <img
                src="/images/shot-left.jpg"
                alt="왼쪽 인게임 스크린샷"
                className="pm-image"
              />
              <div className="pm-overlay">
                <p>광기가 뒤덮은 세계</p>
              </div>
            </div>
          </div>

          {/* 가운데 패널 */}
          <div
            className="pm-panel pm-panel-center"
            onMouseEnter={() => setHovered("center")}
          >
            <div className="pm-panel-inner">
              <img
                src="/images/shot-center.jpg"
                alt="대표 인게임 스크린샷"
                className="pm-image"
              />
              <div className="pm-overlay">
                <p>신에게 선택받은 선지자</p>
              </div>
            </div>
          </div>

          {/* 오른쪽 패널 */}
          <div
            className="pm-panel pm-panel-right"
            onMouseEnter={() => setHovered("right")}
          >
            <div className="pm-panel-inner">
              <img
                src="/images/shot-right.png"
                alt="오른쪽 인게임 스크린샷"
                className="pm-image"
              />
              <div className="pm-overlay">
                <p>대검으로 펼치는 전투</p>
              </div>
            </div>
          </div>
        </div>

        {/* 👇 패널 바로 밑으로 이동된 Scroll Down */}
        {showScroll && (
          <div className="scroll-indicator">
            <span>더 많은 정보를 확인 해보세요</span>
            <div className="arrow"></div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Hero;
