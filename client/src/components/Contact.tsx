import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  name: string;
  phone: string;
  email: string;
  comment: string;
};

type ModalState = {
  isOpen: boolean;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors }, setValue, getValues } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [improving, setImproving] = useState(false);
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: 'info',
    title: '',
    message: ''
  });

  const showModal = (type: ModalState['type'], title: string, message: string) => {
    setModal({ isOpen: true, type, title, message });
    setTimeout(() => {
      setModal(prev => ({ ...prev, isOpen: false }));
    }, 3000);
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, data);
      showModal('success', 'Успешно! 🎉', 'Сообщение отправлено! Копия пришла вам на почту.');
      reset();
    } catch (err: any) {
      const errorMsg = err.response?.data?.error || 'Ошибка отправки. Попробуйте позже.';
      showModal('error', 'Ошибка ❌', errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const improveComment = async () => {
    const comment = getValues('comment');
    if (!comment.trim()) {
      showModal('warning', 'Внимание ⚠️', 'Напишите сообщение для улучшения');
      return;
    }
    setImproving(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/ai/improve`, { text: comment });
      if (res.data.improved) {
        setValue('comment', res.data.improved);
        showModal('success', 'Готово! ✨', 'Сообщение улучшено с помощью AI');
      }
    } catch (err) {
      showModal('error', 'Ошибка 🔧', 'Не удалось улучшить сообщение');
    } finally {
      setImproving(false);
    }
  };

  return (
    <>
      {/* Модальное окно */}
      {modal.isOpen && (
        <div className="modal-overlay" onClick={() => setModal(prev => ({ ...prev, isOpen: false }))}>
          <div className={`modal-content modal-${modal.type}`} onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              {modal.type === 'success' && <i className="fas fa-check-circle"></i>}
              {modal.type === 'error' && <i className="fas fa-times-circle"></i>}
              {modal.type === 'warning' && <i className="fas fa-exclamation-triangle"></i>}
              {modal.type === 'info' && <i className="fas fa-info-circle"></i>}
            </div>
            <h3>{modal.title}</h3>
            <p>{modal.message}</p>
            <button className="modal-close" onClick={() => setModal(prev => ({ ...prev, isOpen: false }))}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}

      <section id="contact">
        <div className="contact-card glass-card">
          <h2>Давайте создадим что-то великое</h2>
          <div className="contact-info">
            <div><i className="fas fa-phone-alt"></i> +7 (964) 066-00-81</div>
            <div><i className="fas fa-envelope"></i> islam.hadjime@gmail.com</div>
            <div><i className="fab fa-telegram"></i> @history_none</div>
            <div><i className="fab fa-github"></i> github.com/islamhadjime</div>
          </div>
          <div className="resume-note">Грозный | Россия | Готов к переезду и командировкам</div>
        </div>

        <div className="contact-form-card glass-card">
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Напишите мне</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Имя *</label>
              <input {...register('name', { required: 'Имя обязательно' })} />
              {errors.name && <div className="error-message">{errors.name.message}</div>}
            </div>
            <div className="form-group">
              <label>Телефон</label>
              <input
                {...register('phone', {
                  pattern: {
                    value: /^[\+\d\s\-\(\)]{10,}$/,
                    message: 'Номер должен содержать минимум 10 цифр и символы +, -, пробелы, скобки'
                  }
                })}
                placeholder="+7 (964) 066-00-81"
              />
              {errors.phone && <div className="error-message">{errors.phone.message}</div>}
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input {...register('email', { required: 'Email обязателен', pattern: { value: /^\S+@\S+$/i, message: 'Неверный формат email' } })} />
              {errors.email && <div className="error-message">{errors.email.message}</div>}
            </div>
            <div className="form-group">
              <label>Сообщение *</label>
              <textarea {...register('comment', { required: 'Сообщение обязательно' })} rows={4} />
              {errors.comment && <div className="error-message">{errors.comment.message}</div>}
              <button type="button" onClick={improveComment} disabled={improving} className="btn-outline" style={{ marginTop: '0.8rem' }}>
                {improving ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-magic"></i>} Улучшить с помощью AI
              </button>
            </div>
            <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%' }}>
              {loading ? 'Отправка...' : 'Отправить'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}