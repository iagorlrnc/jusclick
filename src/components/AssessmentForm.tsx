import React, { useState, useEffect } from 'react';
import './AssessmentForm.css';

export const AssessmentForm: React.FC = () => {
  const [anonymous, setAnonymous] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [description, setDescription] = useState('');
  const [threat, setThreat] = useState<string | null>(null);
  const [control, setControl] = useState<string | null>(null);
  const [aggression, setAggression] = useState<string | null>(null);
  const [fear, setFear] = useState<string | null>(null);
  const [prevented, setPrevented] = useState<string | null>(null);
  const [urgency, setUrgency] = useState<string | null>(null);
  const [location, setLocation] = useState('');

  const [resultMessage, setResultMessage] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (resultMessage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [resultMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    let recommendationText = "";
    let finalResultMessage: React.ReactNode | null = null;

    if (urgency === 'Sim') {
      recommendationText = "ALERTA DE PERIGO IMEDIATO: Ligue imediatamente para a Polícia Militar (190). Se possível, procure um local seguro longe do agressor. Não hesite em pedir ajuda a vizinhos ou pessoas próximas.";
      finalResultMessage = (
        <>
          <strong style={{ color: '#FF0000' }}>ALERTA DE PERIGO IMEDIATO:</strong> Ligue imediatamente para a Polícia Militar (190). Se possível, procure um local seguro longe do agressor. Não hesite em pedir ajuda a vizinhos ou pessoas próximas.
        </>
      );
    } else if (aggression === 'Sim') {
      recommendationText = "SITUAÇÃO DE ALTO RISCO. Em caso de agressão, você pode registrar boletim de ocorrência em qualquer delegacia, preferencialmente na DEAM (Delegacia Especializada de Atendimento à Mulher). Ligue 180 para orientações e procure atendimento médico se necessário.";
      finalResultMessage = (
        <>
          <strong style={{ color: '#E69500' }}>SITUAÇÃO DE ALTO RISCO.</strong> Em caso de agressão, você pode registrar boletim de ocorrência em qualquer delegacia, preferencialmente na DEAM (Delegacia Especializada de Atendimento à Mulher). Ligue 180 para orientações e procure atendimento médico se necessário.
        </>
      );
    } else if (threat === 'Sim' || fear === 'Sim') {
      recommendationText = "SUA SEGURANÇA ESTÁ AMEAÇADA. Ameaça e violência psicológica são crimes. Considere buscar medida protetiva de urgência. Ligue 180 para a Central de Atendimento à Mulher para receber orientações jurídicas e psicológicas gratuitas.";
      finalResultMessage = (
        <>
          <strong style={{ color: '#E69500' }}>SUA SEGURANÇA ESTÁ AMEAÇADA.</strong> Ameaça e violência psicológica são crimes. Considere buscar medida protetiva de urgência. Ligue 180 para a Central de Atendimento à Mulher para receber orientações jurídicas e psicológicas gratuitas.
        </>
      );
    } else if (control === 'Sim' || prevented === 'Sim') {
      recommendationText = "Isso é violência psicológica e controle abusivo. Você tem o direito de ir e vir e tomar suas próprias decisões. Recomendamos buscar apoio psicológico e jurídico. O Ligue 180 pode te orientar e indicar centros de referência perto de você.";
      finalResultMessage = (
        <>
          <strong style={{ color: '#E69500' }}>Isso é violência psicológica e controle abusivo.</strong> Você tem o direito de ir e vir e tomar suas próprias decisões. Recomendamos buscar apoio psicológico e jurídico. O Ligue 180 pode te orientar e indicar centros de referência perto de você.
        </>
      );
    } else {
      recommendationText = "Agradecemos por compartilhar sua situação. Se você sente que algo não está certo no seu relacionamento, ligue 180 para conversar e receber orientação profissional sigilosa.";
      finalResultMessage = recommendationText;
    }

    setResultMessage(finalResultMessage);

    // Preparando os dados para o EmailJS
    const identData = anonymous 
      ? "Usuário Anônimo" 
      : `Nome: ${name || 'Não informado'}\nIdade: ${age || 'Não informada'}\nCPF: ${cpf || 'Não informado'}\nTelefone: ${phone || 'Não informado'}\nLocal: ${location || 'Não informado'}`;
      
    const situacaoText = description || 'Nenhuma situação descrita na caixa de texto.';

    // Função de envio "fire-and-forget" transparente para o usuario
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        template_params: {
          identificacao: identData,
          situacao: situacaoText,
          recomendacao: recommendationText
        }
      })
    }).then(res => {
      if (!res.ok) console.error("EmailJS request fail", res.status);
    }).catch(err => console.error("EmailJS error", err));

  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 11) v = v.substring(0, 11);
    if (v.length === 0) {
      setCpf("");
      return;
    }

    let formatted = "";
    if (v.length <= 3) {
      formatted = v;
    } else if (v.length <= 6) {
      formatted = `${v.substring(0, 3)}.${v.substring(3)}`;
    } else if (v.length <= 9) {
      formatted = `${v.substring(0, 3)}.${v.substring(3, 6)}.${v.substring(6)}`;
    } else {
      formatted = `${v.substring(0, 3)}.${v.substring(3, 6)}.${v.substring(6, 9)}-${v.substring(9)}`;
    }
    setCpf(formatted);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 11) v = v.substring(0, 11);
    if (v.length === 0) {
      setPhone("");
      return;
    }

    let formatted = "";
    if (v.length <= 2) {
      formatted = `(${v}`;
    } else if (v.length <= 6) {
      formatted = `(${v.substring(0, 2)}) ${v.substring(2)}`;
    } else if (v.length <= 10) {
      formatted = `(${v.substring(0, 2)}) ${v.substring(2, 6)}-${v.substring(6)}`;
    } else {
      formatted = `(${v.substring(0, 2)}) ${v.substring(2, 7)}-${v.substring(7)}`;
    }
    setPhone(formatted);
  };

  const handleClearForm = () => {
    setIsSubmitted(false);
    setAnonymous(false);
    setName('');
    setAge('');
    setCpf('');
    setPhone('');
    setLocation('');
    setDescription('');
    setThreat(null);
    setControl(null);
    setAggression(null);
    setFear(null);
    setPrevented(null);
    setUrgency(null);

    setTimeout(() => {
      const formElement = document.getElementById('formulario');
      if (formElement) {
        const topOffset = formElement.getBoundingClientRect().top + window.scrollY;
        
        const startY = window.scrollY;
        const distance = topOffset - startY;
        let startTime: number | null = null;
        const duration = 1200; // 1.2 segundos exatos rolando a tela

        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          
          // Easing InOutQuad (acelera no começo e freia suave no final)
          const ease = progress < 0.5 
                        ? 2 * progress * progress 
                        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
          
          window.scrollTo(0, startY + distance * ease);

          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        };
        
        requestAnimationFrame(animation);
      }
    }, 100);
  };

  return (
    <section className="section assessment-section" id="formulario">
      <div className="container">
        <div className="assessment-card paper-card">
          <div className="assessment-header">
            <h2 className="display-subtitle">
              <span className="cutout-text blue">FORMULÁRIO <br /> JUSCLICK</span>
            </h2>
            <p className="text-hand">Suas respostas são importantes e avaliadas com sigilo.</p>
          </div>

          <form onSubmit={handleSubmit} className="assessment-form">
            <div className="form-section-title box-shadow-hard">Identificação</div>

            <div className="anonymous-checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={anonymous}
                  disabled={isSubmitted}
                  onChange={(e) => {
                    setAnonymous(e.target.checked);
                    if (e.target.checked) {
                      setName('');
                      setAge('');
                      setCpf('');
                      setPhone('');
                      setLocation('');
                    }
                  }}
                />
                Não quero me identificar (anônima)
              </label>
            </div>

            <div className={`identification-fields ${(anonymous || isSubmitted) ? 'disabled-fields' : ''}`}>
              <div className="form-group">
                <label className="form-label font-bold">Nome completo</label>
                <input
                  type="text"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={anonymous || isSubmitted}
                  placeholder="Seu nome"
                />
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label className="form-label font-bold">Idade</label>
                  <input
                    type="number"
                    className="form-input"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    disabled={anonymous || isSubmitted}
                    placeholder="00"
                  />
                </div>

                <div className="form-group half">
                  <label className="form-label font-bold">CPF</label>
                  <input
                    type="text"
                    className="form-input"
                    value={cpf}
                    onChange={handleCpfChange}
                    disabled={anonymous || isSubmitted}
                    placeholder="000.000.000-00"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <label className="form-label font-bold">Telefone</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={phone}
                    onChange={handlePhoneChange}
                    disabled={anonymous || isSubmitted}
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="form-group half location-group" style={{ marginTop: 0 }}>
                  <label className="form-label font-bold">Localização</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Cidade/Estado"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    disabled={anonymous || isSubmitted}
                  />
                </div>
              </div>
            </div>

            <div className="form-section-title box-shadow-hard" style={{ marginTop: '1rem' }}>Situação</div>

            <div className="form-group">
              <label className="form-label font-bold">Conte sua situação</label>
              <textarea
                className="form-input"
                rows={4}
                placeholder="Descreva o que está acontecendo com você"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={isSubmitted}
              ></textarea>
            </div>

            <div className="form-section-title box-shadow-hard">Perguntas objetivas</div>

            <div className={`form-radio-group ${isSubmitted ? 'disabled-fields' : ''}`}>
              <p className="form-question">1. Você já sofreu algum tipo de ameaça?</p>
              <div className="radio-options">
                <label><input type="radio" name="threat" value="Sim" checked={threat === 'Sim'} disabled={isSubmitted} onChange={() => setThreat('Sim')} required /> Sim</label>
                <label><input type="radio" name="threat" value="Não" checked={threat === 'Não'} disabled={isSubmitted} onChange={() => setThreat('Não')} /> Não</label>
              </div>
            </div>

            <div className={`form-radio-group ${isSubmitted ? 'disabled-fields' : ''}`}>
              <p className="form-question">2. Há controle sobre sua rotina, amizades ou redes sociais?</p>
              <div className="radio-options">
                <label><input type="radio" name="control" value="Sim" checked={control === 'Sim'} disabled={isSubmitted} onChange={() => setControl('Sim')} required /> Sim</label>
                <label><input type="radio" name="control" value="Não" checked={control === 'Não'} disabled={isSubmitted} onChange={() => setControl('Não')} /> Não</label>
              </div>
            </div>

            <div className={`form-radio-group ${isSubmitted ? 'disabled-fields' : ''}`}>
              <p className="form-question">3. Já houve agressão física?</p>
              <div className="radio-options">
                <label><input type="radio" name="aggression" value="Sim" checked={aggression === 'Sim'} disabled={isSubmitted} onChange={() => setAggression('Sim')} required /> Sim</label>
                <label><input type="radio" name="aggression" value="Não" checked={aggression === 'Não'} disabled={isSubmitted} onChange={() => setAggression('Não')} /> Não</label>
              </div>
            </div>

            <div className={`form-radio-group ${isSubmitted ? 'disabled-fields' : ''}`}>
              <p className="form-question">4. Você sente medo dessa pessoa?</p>
              <div className="radio-options">
                <label><input type="radio" name="fear" value="Sim" checked={fear === 'Sim'} disabled={isSubmitted} onChange={() => setFear('Sim')} required /> Sim</label>
                <label><input type="radio" name="fear" value="Não" checked={fear === 'Não'} disabled={isSubmitted} onChange={() => setFear('Não')} /> Não</label>
              </div>
            </div>

            <div className={`form-radio-group ${isSubmitted ? 'disabled-fields' : ''}`}>
              <p className="form-question">5. Já tentou se afastar e foi impedida?</p>
              <div className="radio-options">
                <label><input type="radio" name="prevented" value="Sim" checked={prevented === 'Sim'} disabled={isSubmitted} onChange={() => setPrevented('Sim')} required /> Sim</label>
                <label><input type="radio" name="prevented" value="Não" checked={prevented === 'Não'} disabled={isSubmitted} onChange={() => setPrevented('Não')} /> Não</label>
              </div>
            </div>

            <div className="form-section-title box-shadow-hard yellow">Urgência</div>

            <div className={`form-radio-group danger-group ${isSubmitted ? 'disabled-fields' : ''}`}>
              <p className="form-question">Você está em perigo imediato?</p>
              <div className="radio-options">
                <label><input type="radio" name="urgency" value="Sim" checked={urgency === 'Sim'} disabled={isSubmitted} onChange={() => setUrgency('Sim')} required /> Sim</label>
                <label><input type="radio" name="urgency" value="Não" checked={urgency === 'Não'} disabled={isSubmitted} onChange={() => setUrgency('Não')} /> Não</label>
              </div>
            </div>

            <div className="submit-section">
              <button type="submit" disabled={isSubmitted} className="submit-btn box-shadow-hard-hover">
                Analisar minha situação
              </button>
              
              {isSubmitted && (
                <button type="button" onClick={handleClearForm} className="clear-btn">
                  Responder novamente
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {resultMessage && (
        <div className="modal-overlay">
          <div className={`result-modal box-shadow-hard ${urgency === 'Sim' || aggression === 'Sim' ? 'urgent' : ''}`}>
            <h3 className="result-title">Recomendação:</h3>
            <p>{resultMessage}</p>
            <div className="result-actions">
              <a href="tel:180" className="result-btn call-180">Ligue 180</a>
              {(urgency === 'Sim' || aggression === 'Sim') && <a href="tel:190" className="result-btn call-190">Ligue 190</a>}
            </div>
            <div className="result-ok-container">
              <button type="button" onClick={() => setResultMessage(null)} className="result-btn call-ok">Entendi</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
