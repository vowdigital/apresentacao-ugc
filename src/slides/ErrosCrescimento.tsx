import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { SlideDefinition } from '../deck/types';
import { assets } from '../deck/assets';

function ErrorsTop({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <header className="slide-top">
      <img className="brand" src={light ? assets.vowWhite : assets.vowBlack} alt="Vow Digital" />
      <span>{label}</span>
    </header>
  );
}

function ErrorsEyebrow({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>;
}

const errorLabels = [
  'Marketing em segundo plano',
  'Falta de direção',
  'Execução sem estratégia',
  'Dados sem decisão',
  'Frentes isoladas',
];

const errorItems = [
  {
    number: '01',
    title: 'Deixar o marketing em segundo plano',
    subtitle: 'como plano de emergência.',
    paragraphs: [
      'Muitas empresas priorizam estrutura física, aluguel, estoque e desenvolvimento de produtos, mas deixam o marketing em segundo plano. Tratam o marketing como um último recurso, acionado apenas quando as vendas caem. Esperam milagres em poucos dias de algo que nunca receberam prioridade para funcionar.',
      'Marketing não é socorro para empresas em crise. É combustível para empresas que querem crescer. Quem investe apenas quando precisa vender mais já está atrasado.',
    ],
  },
  {
    number: '02',
    title: 'Investir em marketing',
    subtitle: 'sem uma direção clara.',
    paragraphs: [
      'Sem planejamento, análise de indicadores e otimização constante, o marketing se torna apenas mais uma despesa, em vez de contribuir para o crescimento do negócio.',
      'O objetivo não é simplesmente investir mais em marketing, mas fazer cada investimento ter um propósito claro dentro da estratégia de vendas.',
    ],
  },
  {
    number: '03',
    title: 'Contratar profissionais',
    subtitle: 'sem a capacidade estratégica necessária.',
    paragraphs: [
      'Muitas empresas já investiram no digital, contrataram agências ou profissionais autônomos e se frustraram com os resultados.',
      'O problema é que contratar alguém para executar campanhas não é o mesmo que contar com uma estratégia capaz de conectar posicionamento, oferta, aquisição de clientes e conversão.',
    ],
  },
  {
    number: '04',
    title: 'Não transformar dados',
    subtitle: 'em decisões de crescimento.',
    paragraphs: [
      'Muitas empresas até conseguem gerar vendas e obter retorno com o digital, mas não sabem exatamente quais canais, campanhas ou estratégias estão trazendo os melhores resultados.',
      'Não basta gerar retorno. É preciso entender de onde ele vem e saber como potencializá-lo.',
    ],
  },
  {
    number: '05',
    title: 'Investir em frentes isoladas',
    subtitle: 'sem uma estratégia central.',
    paragraphs: [
      'Contratar diferentes profissionais, investir em anúncios, produzir conteúdo e desenvolver canais de venda não garante resultados quando essas ações não estão conectadas. Sem uma estratégia central que alinhe todas as frentes aos objetivos comerciais, a empresa desperdiça recursos e perde oportunidades de crescimento.',
      'O resultado não está apenas em fazer cada parte funcionar, mas em fazer todas trabalharem juntas.',
    ],
  },
];

function ErrorsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeError = errorItems[activeIndex];

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + errorItems.length) % errorItems.length);
  };

  return (
    <div className="presentation errors-carousel">
      <ErrorsTop label="VOW DIGITAL / O QUE TRAVA O CRESCIMENTO" />
      <div className="errors-carousel__intro">
        <ErrorsEyebrow>ANTES DE INVESTIR MAIS</ErrorsEyebrow>
        <h1>Os erros mais comuns que impedem empresas de vender mais<br />e crescer no digital.</h1>
      </div>
      <div className="errors-carousel__content" aria-live="polite">
        <aside className="errors-carousel__rail" aria-label="Erros apresentados">
          <ErrorsEyebrow>5 PONTOS DE ATENÇÃO</ErrorsEyebrow>
          <p className="errors-carousel__counter">{activeError.number} <span>/ 05</span></p>
          <ol>
            {errorLabels.map((label, index) => (
              <li key={label} className={index === activeIndex ? 'is-active' : undefined}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{label}</strong>
              </li>
            ))}
          </ol>
        </aside>

        <article className="errors-carousel__panel">
          <span className="errors-carousel__number">{activeError.number}</span>
          <h2>{activeError.title}</h2>
          <p className="errors-carousel__subtitle">{activeError.subtitle}</p>
          <div className="errors-carousel__body">
            {activeError.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </article>
      </div>

      <div className="errors-carousel__actions" aria-label="Navegação dos erros">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Erro anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Próximo erro"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

function CostOfInaction() {
  return (
    <div className="presentation method-detail slide-cost">
      <div className="method-detail__background">
        <img src={assets.grafico} alt="Gráfico em barras roxas mostrando queda de resultados" />
      </div>
      <ErrorsTop label="VOW DIGITAL / O CUSTO DA INÉRCIA" />
      <div className="method-detail__content">
        <ErrorsEyebrow>O PREÇO DA INÉRCIA</ErrorsEyebrow>
        <h2>O preço de continuar,<br /><em>fazendo tudo do mesmo jeito.</em></h2>
        <p>Se você continuar repetindo as mesmas ações, insistindo nos mesmos erros e seguindo as mesmas práticas, como espera alcançar resultados diferentes?</p>
        <div className="method-detail__closing">
          <span>O custo da oportunidade</span>
          <strong>O custo mais caro é aquilo que sua empresa deixa de ganhar por não estar fazendo o que realmente precisa ser feito para crescer.</strong>
        </div>
      </div>
      <div className="method-detail__index">01 <span>/ 01</span></div>
    </div>
  );
}

export const errosCarousel: SlideDefinition = {
  id: 'erros-carousel',
  title: 'Os erros mais comuns',
  tone: 'light',
  notes: 'Use as setas para passar pelos cinco erros e conecte cada ponto à realidade atual do cliente.',
  render: () => <ErrorsCarousel />,
};

export const precoContinuar: SlideDefinition = {
  id: 'preco-continuar',
  title: 'O preço de continuar fazendo tudo do mesmo jeito',
  tone: 'light',
  notes: 'Use este slide para criar tensão e mostrar que a inércia também tem um custo: o custo da oportunidade perdida.',
  render: () => <CostOfInaction />,
};
