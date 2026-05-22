import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Hero() {
  const [tagline, setTagline] = useState('');
  
  useEffect(() => {
    const fetchAITagline = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/ai/tagline`);
        if (res.data?.tagline) setTagline(res.data.tagline);
      } catch (error) {
        console.error('AI tagline failed, using default');
      }
    };
    fetchAITagline();
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="badge">Fullstack-разработчик</div>
        <h1>Ислам <span className="gradient-text">Хаджимурадов</span></h1>
        <p>Создаю современные веб- и мобильные приложения под ключ. 3 года коммерческого опыта, экспертиза в React, TypeScript, Django и React Native.</p>
        <div className="hero-stats">
          <div><span>3+</span> года опыта</div>
          <div><span>15+</span> переисп. компонентов</div>
          <div><span>25%</span> оптимизация загрузки</div>
        </div>
        <div>
          <h3> от AI текст</h3>
          <p>{tagline.length ? tagline : 'Походу AI думает эээхх'}</p>
        </div>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Связаться <i className="fas fa-arrow-right"></i></a>
          <a href="https://github.com/islamhadjime?tab=repositories" target="_blank" className="btn-outline">GitHub <i className="fab fa-github"></i></a>
        </div>
      </div>
    </section>
  );
}