import { useEffect, useRef } from "react";
import "./Features.css";

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
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="features">
      <div className="features-inner fade-up" ref={ref}>
        <h2 className="features-title">게임 핵심 시스템</h2>

        <div className="features-grid">
          {/* 전투 */}
          <div className="feature-card">
            <h3 className="feature-head">전투 시스템</h3>

            {/* GIF placeholder */}
            <div className="feature-gif">
              {/* 나중에 이렇게 넣으면 됨 */}
              {/* <img src="/images/combat.gif" alt="전투 GIF" /> */}
            </div>

            <div className="feature-detail">
              <span className="dot" />
              <p><b>공격</b> — 묵직한 대검으로 강력한 타격을 가합니다.</p>
            </div>

            <div className="feature-detail">
              <span className="dot" />
              <p><b>패링</b> — 타이밍을 맞춰 적의 공격을 되받아치는 핵심 능력.</p>
            </div>

            <div className="feature-detail">
              <span className="dot" />
              <p><b>가드</b> — 대검으로 공격을 막아 체력을 보호합니다.</p>
            </div>
          </div>

          {/* 퀘스트 */}
          <div className="feature-card">
            <h3 className="feature-head">퀘스트 시스템</h3>

            {/* GIF placeholder */}
            <div className="feature-gif">
              {/* <img src="/images/quest.gif" alt="퀘스트 GIF" /> */}
            </div>

            <div className="feature-detail">
              <span className="dot" />
              <p><b>스토리 중심 진행</b> — 마왕의 광기에 맞서는 서사 구조.</p>
            </div>

            <div className="feature-detail">
              <span className="dot" />
              <p>선지자들을 찾아 구출하고 능력을 계승합니다.</p>
            </div>

            <div className="feature-detail">
              <span className="dot" />
              <p>지역마다 서로 다른 성격의 퀘스트와 이야기가 이어집니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
