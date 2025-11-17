// src/components/About.tsx
import "./About.css";
import { useEffect, useRef } from "react";

const About = () => {
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
      { threshold: 0.7 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about">
      <div className="about-inner fade-up" ref={ref}>
        <h2 className="about-title">About The Game</h2>

        <p className="about-desc">
          세계는 마왕이 퍼뜨린 ‘광기’로 인해 무너져가고 있습니다.  
          이 광기는 사람들의 이성을 앗아가고 성격을 뒤틀어 사회에 혼란을 가져옵니다.
        </p>

        <p className="about-desc">
          플레이어는 신에게 선택받은 선지자로서 신력을 다룰 수 있으며,
          광기에 물든 존재들을 토벌하며 점점 강해집니다.
        </p>

        <p className="about-desc">
          과거 마왕에게 도달했지만 패배해 봉인당한 선지자들은
          전 세계에 흩어져 광기의 에너지원으로 이용되고 있습니다.
          당신은 그들을 구출해 힘을 계승하고, 최종적으로 마왕을 토벌해야 합니다.
        </p>

        <p className="about-desc strong">
          대검을 활용한 묵직한 전투, 성장하는 신력, 세계의 운명이 걸린 여정이 당신을 기다립니다.
        </p>
      </div>
    </section>
  );
};

export default About;
