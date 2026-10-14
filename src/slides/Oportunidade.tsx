import { assets } from '../deck/assets';
import type { SlideDefinition } from '../deck/types';
import { Eyebrow, Heading } from '../components/Typography';

const errors = [
  {
    title: 'Deixar o marketing em segundo plano, como plano de emergência.',
    text: 'Muitas empresas priorizam estrutura física, aluguel, estoque e desenvolvimento de produtos, mas deixam o marketing em segundo plano. Tratam o marketing como um último recurso, acionado apenas quando as vendas caem. Esperam milagres em poucos dias de algo que nunca recebeu prioridade para funcionar. Marketing não é socorro para empresas em crise. É combustível para empresas que querem crescer. Quem investe apenas quando precisa vender mais já está atrasado.',
  },
  {
    title: 'Investir em marketing sem uma direção clara.',
    text: 'Sem planejamento, análise de indicadores e otimização constante, o marketing se torna apenas mais uma despesa, em vez de contribuir para o crescimento do negócio. O objetivo não é simplesmente investir mais em marketing, mas fazer cada investimento ter um propósito claro dentro da estratégia de vendas.',
  },
  {
    title: 'Contratar profissionais sem a capacidade estratégica necessária.',
    text: 'Muitas empresas já investiram no digital, contrataram agências ou profissionais autônomos e se frustraram com os resultados. O problema é que contratar alguém para executar campanhas não é o mesmo que contar com uma estratégia capaz de conectar posicionamento, oferta, aquisição de clientes e conversão.',
  },
  {
    title: 'Não transformar dados em decisões de crescimento.',
    text: 'Muitas empresas até conseguem gerar vendas e obter retorno com o digital, mas não sabem exatamente quais canais, campanhas ou estratégias estão trazendo os melhores resultados. Não basta gerar retorno. É preciso entender de onde ele vem e saber como potencializá-lo.',
  },
  {
    title: 'Investir em agências, ferramentas e estratégias de forma isolada.',
    text: 'Contratar diferentes profissionais, investir em anúncios, produzir conteúdo e desenvolver canais de venda não garante resultados quando essas ações não estão conectadas. Sem uma estratégia central que alinhe todas as frentes aos objetivos comerciais, a empresa desperdiça recursos e perde oportunidades de crescimento. O resultado não está apenas em fazer cada parte funcionar, mas em fazer todas trabalharem juntas.',
  },
];

export const oportunidade: SlideDefinition = {
  id: 'oportunidade',
  title: 'Os erros mais comuns',
  tone: 'light',
  footer: true,
  notes: 'Explore os cinco erros que mais impedem empresas de vender e crescer no digital. Use os exemplos para identificar quais deles fazem parte da realidade do cliente.',
  render: () => (
    <div className="errors-slide">
      <img className="errors-slide__image" src={assets.phoneShowcase} alt="" aria-hidden="true" />
      <div className="errors-slide__heading">
        <Eyebrow>Os erros mais comuns</Eyebrow>
        <Heading>O que impede empresas de <span className="accent">vender mais</span> e crescer no digital.</Heading>
      </div>
      <div className="errors-slide__grid">
        {errors.map((error, index) => (
          <article key={error.title} className="errors-slide__card">
            <div className="errors-slide__card-heading">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{error.title}</h3>
            </div>
            <p>{error.text}</p>
          </article>
        ))}
      </div>
    </div>
  ),
};
