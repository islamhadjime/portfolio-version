import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

type Question = {
  question: string;
  options: string[];
  correct: string;
};

const topics = ['JavaScript', 'TypeScript', 'React', 'Node.js'];

export default function Quiz() {
  const [topic, setTopic] = useState('React');
  const [question, setQuestion] = useState<Question | null>(null);
  const [selected, setSelected] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(false);

  const generateQuestion = async () => {
    setLoading(true);
    setQuestion(null);
    setFeedback('');
    setSelected('');
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/ai/generate-quiz`, { topic });
      setQuestion(res.data);
    } catch (err) {
      toast.error('Не удалось сгенерировать вопрос');
    } finally {
      setLoading(false);
    }
  };

  const checkAnswer = async () => {
    if (!selected) {
      toast.warning('Выберите ответ');
      return;
    }
    setChecking(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/ai/check-answer`, {
        question: question?.question,
        answer: selected,
        correct: question?.correct,
      });
      setFeedback(res.data.feedback);
    } catch (err) {
      toast.error('Ошибка проверки');
    } finally {
      setChecking(false);
    }
  };

  return (
    <section id="quiz" className="glass-card" style={{ padding: '2rem', margin: '3rem 0' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        🧠 AI‑тест: проверь свои знания
      </h3>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <label style={{ marginRight: '1rem' }}>Выбери тему:</label>
        <select value={topic} onChange={(e) => setTopic(e.target.value)} style={{ padding: '0.5rem', borderRadius: '12px', background: '#1e293b', color: 'white', border: '1px solid #8b5cf6' }}>
          {topics.map(t => <option key={t}>{t}</option>)}
        </select>
        <button onClick={generateQuestion} className="btn-outline" style={{ marginLeft: '1rem' }} disabled={loading}>
          {loading ? 'Генерация...' : 'Сгенерировать вопрос'}
        </button>
      </div>

      {question && (
        <div style={{ marginTop: '1.5rem' }}>
          <p><strong>{question.question}</strong></p>
          <div style={{ margin: '1rem 0' }}>
            {question.options.map((opt, idx) => (
              <label key={idx} style={{ display: 'block', margin: '0.5rem 0' }}>
                <input
                  type="radio"
                  name="quiz"
                  value={opt}
                  onChange={(e) => setSelected(e.target.value)}
                  checked={selected === opt}
                /> {opt}
              </label>
            ))}
          </div>
          <button onClick={checkAnswer} className="btn-primary" disabled={checking}>
            {checking ? 'Проверка...' : 'Проверить ответ'}
          </button>
          {feedback && (
            <div style={{ marginTop: '1rem', padding: '0.8rem', borderRadius: '16px', background: 'rgba(139, 92, 246, 0.2)', borderLeft: '4px solid #c084fc' }}>
              {feedback}
            </div>
          )}
        </div>
      )}
    </section>
  );
}