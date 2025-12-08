// src/components/Features.tsx
import { useEffect, useRef } from "react";
import "./Features.css";

// ✅ 이미지 모듈 import
import gifAttack from "../assets/images/공격.gif";
import gifDodge from "../assets/images/구르기.gif";
import imgStory from "../assets/images/스토리.png";

const Features = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="features">
      <div className="features-inner fade-up" ref={ref}>
        <h2 className="features-title">게임 핵심 시스템</h2>

        {/* 전투 시스템 */}
        <h3 className="features-subtitle">전투 시스템</h3>

        {/* 공격 */}
        <div className="feature-item left">
          <div className="feature-gif-box">
            <img src={gifAttack} alt="공격" className="pm-image" />
          </div>
          <div className="feature-text">
            <h4>공격</h4>
            <p>묵직한 대검으로 강력한 타격을 가합니다.</p>
          </div>
        </div>

        {/* 회피 */}
        <div className="feature-item right">
          <div className="feature-gif-box">
            <img src={gifDodge} alt="회피" className="pm-image" />
          </div>
          <div className="feature-text">
            <h4>회피</h4>
            <p>타이밍을 맞춰 적의 공격을 회피하는 핵심 능력.</p>
          </div>
        </div>

        {/* 가드 */}
        <div className="feature-item left">
          <div className="feature-gif-box">{/* 추후 가드 GIF 추가 가능 */}</div>
          <div className="feature-text">
            <h4>가드</h4>
            <p>대검으로 공격을 막아 체력을 보호합니다.</p>
          </div>
        </div>

        {/* ====================== 퀘스트 시스템 ======================= */}
        <h3 className="features-subtitle quest">퀘스트 시스템</h3>

        <div className="feature-item center">
          <div className="feature-gif-wide">
            <img src={imgStory} alt="퀘스트" className="feature-gif-img" />
          </div>
          <div className="feature-text center-text">
            <h4>스토리 중심 진행</h4>
            <p>
              세계 곳곳에 흩어진 선지자를 구출하며 스토리가 전개됩니다.
              지역마다 독특한 성격의 퀘스트가 준비되어 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
