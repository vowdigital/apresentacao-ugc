import { assets } from '../deck/assets';
import type { SlideDefinition } from '../deck/types';
import { Accent, Display } from '../components/Typography';

const nextSteps = [
  { n: '01', title: 'Aprovação', text: 'Alinhamos o plano ideal.' },
  { n: '02', title: 'Imersão', text: 'Entendemos seu negócio e suas metas.' },
  { n: '03', title: 'Operação', text: 'Começamos a executar e evoluir.', highlight: true },
];

export const fechamento: SlideDefinition = {
  id: 'fechamento',
  title: 'Próximos passos',
  tone: 'light',
  notes: 'Conclua a apresentação convidando o cliente a escolher o plano e marcar a reunião de imersão estratégica.',
  render: () => (
    <div className="closing-slide">
      <div className="closing-slide__top">
        <img src={assets.vowBlack} alt="Vow Digital" />
        <span>VAMOS CRESCER JUNTOS?</span>
      </div>
      <div className="closing-slide__hero">
        <div className="closing-slide__copy">
          <Display>Vamos transformar presença digital em <Accent>crescimento real.</Accent></Display>
          <p>O próximo passo começa com uma conversa sobre o seu negócio.</p>
        </div>
        <img src={assets.mockupStores} alt="Exemplos de lojas digitais em diferentes segmentos" />
      </div>
      <ol className="closing-slide__steps">
        {nextSteps.map((s) => (
          <li key={s.n} className={s.highlight ? 'closing-slide__step closing-slide__step--accent' : 'closing-slide__step'}>
            <span>{s.n}</span>
            <div><h3>{s.title}</h3><p>{s.text}</p></div>
          </li>
        ))}
      </ol>
    </div>
  ),
};
