"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "5500000000000"; // PLACEHOLDER: substituir pelo número real.
const PHONE_DISPLAY = "(00) 00000-0000"; // PLACEHOLDER: substituir pelo telefone real.

type IconName =
  | "arrow"
  | "bank"
  | "chat"
  | "check"
  | "clock"
  | "document"
  | "folder"
  | "globe"
  | "lock"
  | "mail"
  | "person"
  | "phone"
  | "shield"
  | "target";

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    bank: <><path d="m3 10 9-6 9 6"/><path d="M5 10h14M6 10v8m4-8v8m4-8v8m4-8v8M4 20h16"/></>,
    chat: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.7-5A7 7 0 0 1 3 12a8 8 0 0 1 8-8h3a7 7 0 0 1 7 7Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    document: <><path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></>,
    folder: <><path d="M3 7h7l2 2h9v10H3Z"/><path d="M3 7V5h6l2 2"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    person: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-3.5-1.5-6.5-4.5-8-8l2-2Z"/>,
    shield: <><path d="M12 3 4 6v6c0 5 3.4 8 8 10 4.6-2 8-5 8-10V6Z"/><path d="m8 12 3 3 5-6"/></>,
    target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="m15 9 6-6M17 3h4v4"/></>,
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const preparationSteps = [
  { icon: "folder" as IconName, title: "Preserve as provas", text: "Guarde comprovantes, prints, mensagens, extratos e protocolos." },
  { icon: "chat" as IconName, title: "Conte o que aconteceu", text: "Explique quando percebeu o golpe, o valor envolvido e como ocorreu." },
  { icon: "document" as IconName, title: "Organize os documentos", text: "Separe o que já possui. O escritório indicará o que realmente será necessário." },
  { icon: "target" as IconName, title: "Entenda os próximos passos", text: "Receba orientação sobre possibilidades, limites e medidas adequadas ao caso." },
];

const serviceSteps = [
  ["person", "Você relata o ocorrido", "O primeiro contato serve para compreender a situação."],
  ["document", "O caso é analisado", "O escritório avalia as informações e solicita somente o necessário."],
  ["bank", "Possibilidades são explicadas", "Você entende caminhos, limites e riscos antes de decidir."],
  ["shield", "A decisão é transparente", "A contratação ocorre apenas quando houver clareza para avançar."],
  ["check", "Você recebe acompanhamento", "Se houver contratação, o escritório informa cada etapa relevante."],
] as const;

const faqs = [
  ["Preciso pagar para o escritório analisar meu caso?", "Informe aqui a política real de análise do escritório. Não use ‘gratuito’ sem confirmação."],
  ["Em quanto tempo recebo uma orientação?", "O prazo deve refletir a operação real do escritório e nunca ser prometido sem capacidade de cumprimento."],
  ["O atendimento pode ser feito de forma online?", "Sim, quando o escritório oferecer atendimento por canais oficiais e seguros."],
  ["A análise garante a recuperação do valor?", "Não. A análise identifica possibilidades e limites, mas nenhum resultado deve ser garantido antecipadamente."],
];

function WhatsAppLink({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      className={className}
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, gostaria de entender como funciona a análise de um caso de fraude via Pix.")}`}
      target="_blank"
      rel="noreferrer"
      data-placeholder="whatsapp"
      aria-label="Falar com o escritório pelo WhatsApp"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [fontScale, setFontScale] = useState(1);

  useEffect(() => {
    const saved = window.localStorage.getItem("vero-font-scale");
    if (saved) {
      const savedScale = Number(saved);
      setFontScale(savedScale);
      document.documentElement.style.setProperty("--font-scale", String(savedScale));
    }
  }, []);

  function changeScale(next: number) {
    setFontScale(next);
    document.documentElement.style.setProperty("--font-scale", String(next));
    window.localStorage.setItem("vero-font-scale", String(next));
  }

  return (
    <div className="site-shell" style={{ "--font-scale": fontScale } as React.CSSProperties}>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Início — Nome do Escritório">
            <span className="brand-mark" aria-hidden="true"><i /><b /></span>
            <span><strong>NOME DO ESCRITÓRIO</strong><small>ADVOCACIA BANCÁRIA</small></span>
          </a>
          <div className="header-actions">
            <div className="reading-control" aria-label="Ajuste do tamanho do texto">
              <span>Ajuste de leitura:</span>
              <div role="group" aria-label="Tamanho do texto">
                <button onClick={() => changeScale(.92)} aria-pressed={fontScale === .92}>A−</button>
                <button onClick={() => changeScale(1)} aria-pressed={fontScale === 1}>A</button>
                <button onClick={() => changeScale(1.09)} aria-pressed={fontScale === 1.09}>A+</button>
              </div>
            </div>
            <WhatsAppLink className="button button-small"><Icon name="chat" size={19}/> Fale no WhatsApp</WhatsAppLink>
            <a className="phone-link" href="tel:+5500000000000" data-placeholder="phone">
              <Icon name="phone" size={19}/><span><strong>{PHONE_DISPLAY}</strong><small>Atendimento humano</small></span>
            </a>
          </div>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">FRAUDE PIX</span>
              <h1>Sofreu um golpe via PIX?<br/><em>Nós podemos te orientar.</em></h1>
              <p className="hero-lede">Analisamos o seu caso com responsabilidade e explicamos, com clareza, quais medidas jurídicas podem ser consideradas.</p>
              <ul className="hero-points" aria-label="Diferenciais do atendimento">
                <li><span><Icon name="shield"/></span>Atendimento humano e especializado</li>
                <li><span><Icon name="clock"/></span>Análise responsável do seu caso</li>
                <li><span><Icon name="globe"/></span>Atuação online em todo o Brasil</li>
              </ul>
              <div className="hero-buttons">
                <WhatsAppLink className="button">Quero analisar meu caso <Icon name="arrow" size={19}/></WhatsAppLink>
                <a className="button button-outline" href="#como-funciona">Entender como funciona</a>
              </div>
              <p className="privacy-note"><Icon name="lock" size={17}/> Seus dados serão solicitados somente após orientação e por canais oficiais.</p>
            </div>

            <div className="hero-visual">
              <img
                src="/hero-trilha.webp"
                width="1440"
                height="900"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                alt="Pessoa diante de uma trilha serena com marcos que representam as etapas de orientação"
              />
              <aside className="welcome-card">
                <span className="welcome-icon"><Icon name="shield" size={26}/></span>
                <h2>Você não precisa enfrentar isso sozinho.</h2>
                <p>Cada caso precisa ser analisado com cuidado. Dependendo das circunstâncias, podem existir medidas jurídicas possíveis.</p>
                <strong>O primeiro passo é entender o que aconteceu.</strong>
              </aside>
            </div>
          </div>
        </section>

        <section className="section preparation" id="orientacao">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">ORIENTAÇÃO INICIAL</span>
              <h2>O que separar para analisarmos o seu caso</h2>
              <p>Organize as informações abaixo. O envio dos documentos acontece somente após o primeiro contato e a orientação do escritório.</p>
            </div>
            <div className="path-steps">
              <div className="organic-line" aria-hidden="true" />
              {preparationSteps.map((step, index) => (
                <article className={`path-step step-${index + 1}`} key={step.title}>
                  <span className="step-number">{index + 1}</span>
                  <div className="step-icon"><Icon name={step.icon} size={39}/></div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section situations">
          <div className="container split-grid">
            <div className="situation-copy">
              <span className="section-kicker">ENTENDA AS POSSIBILIDADES</span>
              <h2>Quais situações podem ser analisadas?</h2>
              <ul className="check-list">
                {[
                  "Transferências feitas sob engano, coação ou falsa identidade.",
                  "Falsa central bancária, falso gerente ou suporte fraudulento.",
                  "Falsos anúncios, vendas, investimentos ou empréstimos.",
                  "Invasão de conta e Pix não reconhecido ou não autorizado.",
                  "Outras situações envolvendo fraude bancária digital.",
                ].map((item) => <li key={item}><span><Icon name="check" size={16}/></span>{item}</li>)}
              </ul>
              <p className="fine-print">Cada situação depende das circunstâncias e das provas disponíveis. A análise não representa garantia de resultado.</p>
            </div>
            <aside className="measures-card">
              <div className="measures-title"><span><Icon name="shield"/></span><h2>Medidas que ajudam a preservar seus direitos</h2></div>
              <div className="measure-grid">
                {[
                  ["bank", "Avise o banco", "Registre e guarde o protocolo."],
                  ["document", "Registre a ocorrência", "Formalize um boletim de ocorrência."],
                  ["lock", "Proteja suas contas", "Altere senhas e revise os acessos."],
                  ["chat", "Preserve conversas", "Não apague mensagens nem comprovantes."],
                ].map(([icon, title, text]) => (
                  <div className="measure" key={title}>
                    <span><Icon name={icon as IconName} size={30}/></span><h3>{title}</h3><p>{text}</p>
                  </div>
                ))}
              </div>
              <p className="measure-note">Essas medidas não garantem recuperação, mas podem ajudar a documentar o ocorrido e preservar informações importantes.</p>
            </aside>
          </div>
        </section>

        <section className="section process" id="como-funciona">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">PASSO A PASSO</span>
              <h2>Como funciona o atendimento</h2>
              <p>Um processo claro para que você entenda o que acontece antes de tomar qualquer decisão.</p>
            </div>
            <ol className="service-steps">
              {serviceSteps.map(([icon, title, text], index) => (
                <li key={title}>
                  <div className="service-icon"><Icon name={icon as IconName} size={31}/><span>{index + 1}</span></div>
                  <h3>{title}</h3><p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="trust">
          <div className="container">
            <div className="trust-heading"><span>ATENDIMENTO RESPONSÁVEL</span><h2>Por que confiar neste escritório?</h2></div>
            <div className="trust-grid">
              {[
                ["person", "Atendimento humano", "Escuta cuidadosa e especializada."],
                ["globe", "Canais oficiais", "Atuação digital em todo o Brasil."],
                ["shield", "Transparência", "Possibilidades e limites explicados."],
                ["lock", "Sigilo e cuidado", "Proteção das suas informações."],
                ["check", "Sem promessas irreais", "Análise responsável do seu caso."],
              ].map(([icon, title, text]) => (
                <article key={title}><Icon name={icon as IconName} size={31}/><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
            <div className="professional-placeholder" data-placeholder="professional-profile">
              <div className="photo-placeholder"><Icon name="person" size={38}/><span>FOTO REAL</span></div>
              <div><span className="placeholder-label">ESPAÇO EDITÁVEL — DADOS REAIS</span><h3>Nome do advogado · OAB/UF 000.000</h3><p>Localização · canais oficiais · avaliações verificáveis</p></div>
              <span className="placeholder-chip">Substituir antes de publicar</span>
            </div>
          </div>
        </section>

        <section className="section faq-cta">
          <div className="container faq-grid">
            <div className="faq-column">
              <span className="section-kicker">DÚVIDAS FREQUENTES</span>
              <h2>Informação clara também é cuidado.</h2>
              <div className="accordion">
                {faqs.map(([question, answer], index) => (
                  <details key={question} open={index === 0}>
                    <summary>{question}<span aria-hidden="true">+</span></summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </div>
            <aside className="final-card">
              <div className="final-ornament" aria-hidden="true"><Icon name="shield" size={80}/></div>
              <span className="section-kicker">PRÓXIMO PASSO</span>
              <h2>Você não precisa enfrentar isso sozinho.</h2>
              <p>Converse com o escritório, explique o que aconteceu e receba uma orientação inicial sobre os próximos passos possíveis.</p>
              <div className="final-buttons">
                <WhatsAppLink className="button">Quero analisar meu caso <Icon name="arrow" size={19}/></WhatsAppLink>
                <WhatsAppLink className="button button-outline"><Icon name="chat" size={19}/> Falar no WhatsApp</WhatsAppLink>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand"><div className="brand brand-light"><span className="brand-mark" aria-hidden="true"><i/><b/></span><span><strong>NOME DO ESCRITÓRIO</strong><small>ADVOCACIA BANCÁRIA</small></span></div><p>Conteúdo informativo. A análise de cada caso depende das circunstâncias e das provas disponíveis.</p></div>
          <div><span className="footer-label">CANAIS OFICIAIS</span><a href="tel:+5500000000000">{PHONE_DISPLAY}</a><a href="mailto:contato@escritorio.com.br">contato@escritorio.com.br</a><WhatsAppLink>WhatsApp</WhatsAppLink></div>
          <div><span className="footer-label">INFORMAÇÕES</span><span>OAB/UF 000.000</span><a href="#privacidade">Política de privacidade</a><span>Atendimento online</span></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Nome do Escritório. Todos os direitos reservados.</span><span>Atendimento jurídico responsável e sem promessas de resultado.</span></div>
      </footer>

      <WhatsAppLink className="mobile-contact"><Icon name="chat" size={21}/> Conversar com o escritório</WhatsAppLink>
    </div>
  );
}
