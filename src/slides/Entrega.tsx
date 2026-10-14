import { Check } from 'lucide-react';
import { assets } from '../deck/assets';
import type { SlideDefinition } from '../deck/types';
import { IconRow } from '../components/Primitives';
import { Eyebrow, Heading } from '../components/Typography';

// Ajustar ao escopo real do pacote vendido.
const deliverables = [
  'Loja no ar em até 15 dias',
  'Layout exclusivo da sua marca',
  'Experiência pensada para celular',
  'Catálogo organizado',
  'Pagamentos e frete configurados',
  'Integrações do seu negócio',
  'Treinamento e suporte',
];

export const entrega: SlideDefinition = {
  id: 'entrega',
  title: 'A entrega',
  tone: 'light',
  footer: true,
  notes:
    'Ajuste a lista ao escopo real do pacote (quantidade de produtos cadastrados, integrações inclusas, dias de suporte). O lead precisa sair da reunião sabendo exatamente o que vai receber.',
  render: () => (
    <div
      className="row"
      style={{
        position: 'absolute',
        inset: 0,
        padding: '128px 128px 160px',
        alignItems: 'center',
        background: 'radial-gradient(circle at 25% 50%, var(--mist) 0%, var(--paper) 58%)',
      }}
    >
      <img
        src={assets.mockupFlex}
        alt="Loja de cosméticos desenvolvida pela Vow exibida em notebook e celular"
        style={{ position: 'absolute', left: 80, top: 110, width: 840, height: 840, objectFit: 'contain' }}
      />
      <div style={{ width: 872, flex: 'none' }} />
      <div className="stack" style={{ position: 'relative', flex: 1, gap: 40 }}>
        <div className="stack" style={{ gap: 20 }}>
          <Eyebrow>A entrega</Eyebrow>
          <Heading>Sua loja pronta para vender.</Heading>
        </div>
        <div className="stack" style={{ gap: 18 }}>
          {deliverables.map((d) => (
            <IconRow key={d} icon={Check}>
              {d}
            </IconRow>
          ))}
        </div>
      </div>
    </div>
  ),
};
