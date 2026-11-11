import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Hero() {
  const [tagline, setTagline] = useState('');

  useEffect(() => {
    const fetchAITagline = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/ai/tagline`);
        if (res.data?.tagline) setTagline(res.data.tagline);
      } catch {
        console.error('AI tagline failed, using default');
      }
    };
    fetchAITagline();
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="badge">Middle Fullstack-разработчик</div>
        <h1>Ислам <span className="gradient-text">Хаджимурадов</span></h1>
        <p>
          Fullstack-разработчик с коммерческим опытом запуска веб-приложений.
          Специализируюсь на React, TypeScript, Next.js и backend на Node.js / Python.
        </p>
        <div className="hero-stats">
          <div><span>3+</span> года опыта</div>
          <div><span>5K+</span> пользователей Mashar</div>
          <div><span>40</span> школ на doska-oo</div>
        </div>
        <div>
          <h3>AI-инсайт</h3>
          <p>{tagline.length ? tagline : 'Генерирую короткий AI-теглайн…'}</p>
        </div>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Связаться <i className="fas fa-arrow-right"></i></a>
          <a href="https://github.com/islamhadjime?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-outline">
            GitHub <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
