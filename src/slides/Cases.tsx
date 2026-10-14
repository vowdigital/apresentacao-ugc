import { CheckCircle2, Code2, Megaphone, Palette, Settings2, Target, Users, Video } from 'lucide-react';
import type { SlideDefinition } from '../deck/types';
import { Eyebrow, Heading } from '../components/Typography';
import { assets } from '../deck/assets';

const specialties = [
  { label: 'Gerente de projeto', icon: Settings2 },
  { label: 'Estrategista', icon: Target },
  { label: 'Gestores de tráfego pago', icon: Megaphone },
  { label: 'Time de design', icon: Palette },
  { label: 'Editores de vídeo', icon: Video },
  { label: 'Creators reais', icon: Users },
  { label: 'Desenvolvedores de sites', icon: Code2 },
  { label: 'Sucesso do cliente (CS)', icon: CheckCircle2 },
];

export const cases: SlideDefinition = {
  id: 'cases',
  title: 'Uma equipe multidisciplinar',
  tone: 'light',
  footer: true,
  notes: 'Apresente a Vow Digital como um squad completo: diferentes especialistas coordenados por uma única parceria, com processos e objetivos compartilhados.',
  render: () => (
    <div className="team-slide">
      <img className="team-slide__image" src={assets.woman} alt="" aria-hidden="true" />
      <div className="team-slide__heading">
        <Eyebrow>Uma única parceria</Eyebrow>
        <Heading>Uma equipe inteira trabalhando<br /> para o <span className="accent">seu negócio.</span></Heading>
      </div>
      <div className="team-slide__grid">
        <div className="team-slide__squad">
          <div className="team-slide__label">
            <span>01</span><h3>Um squad multidisciplinar</h3>
          </div>
          <div className="team-slide__specialties">
            {specialties.map(({ label, icon: Icon }) => (
              <div key={label} className="team-slide__specialty">
                <Icon size={25} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="team-slide__benefits">
          <div className="team-slide__benefit">
            <span>02</span><h3>Gestão e integração</h3>
            <p>
              Profissionais coordenados por processos, prioridades e objetivos compartilhados.
            </p>
          </div>
          <div className="team-slide__benefit team-slide__benefit--accent">
            <span>03</span><h3>Mais especialidades em uma única contratação</h3>
            <p>
              Acesso a diferentes competências sem precisar recrutar e administrar cada profissional separadamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};
