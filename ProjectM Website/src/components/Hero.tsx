// src/components/Hero.tsx
import React, { useState } from "react";
import "./Hero.css";

type HoverZone = "left" | "center" | "right" | null;

const Hero: React.FC = () => {
  const [hovered, setHovered] = useState<HoverZone>(null);

  return (
    <section className="pm-hero">
      <div className="hero-inner">
        <h1 className="pm-title">Project M</h1>

        <div
          className={`pm-strip ${hovered ? `hover-${hovered}` : ""}`}
          onMouseLeave={() => setHovered(null)}
        >
          {/* 선 4개 (항상 고정, 위치만 애니메이션) */}
          <div className="hero-lines">
            <div className="hero-line line-1" />
            <div className="hero-line line-2" />
            <div className="hero-line line-3" />
            <div className="hero-line line-4" />
          </div>

          {/* 왼쪽 패널 */}
          <div
            className="pm-panel pm-panel-left"
            onMouseEnter={() => setHovered("left")}
          >
            <div className="pm-panel-inner">
              <img
                src="/images/shot-left.png"
                alt="왼쪽 인게임 스크린샷"
                className="pm-image"
              />
            </div>
          </div>

          {/* 가운데 패널 */}
          <div
            className="pm-panel pm-panel-center"
            onMouseEnter={() => setHovered("center")}
          >
            <div className="pm-panel-inner">
              <img
                src="/images/shot-center.png"
                alt="대표 인게임 스크린샷"
                className="pm-image"
              />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
