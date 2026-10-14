import { assets } from '../deck/assets';
import type { SlideDefinition } from '../deck/types';
import { Eyebrow, Heading } from '../components/Typography';

export const problema: SlideDefinition = {
  id: 'problema',
  title: 'Sobre nós',
  tone: 'light',
  footer: true,
  notes: 'Apresente a Vow Digital como parceira de crescimento, conectando marketing, tecnologia e estratégia comercial para gerar impacto consistente.',
  render: () => (
    <div className="about-slide">
      <div className="about-slide__heading">
        <Eyebrow>Sobre nós</Eyebrow>
        <Heading>Conectamos as peças que fazem uma empresa <span className="accent">crescer.</span></Heading>
      </div>
      <div className="about-slide__body">
        <div className="about-slide__copy">
          <p className="about-slide__lead">
            A Vow Digital conecta marketing, tecnologia e estratégia comercial para ajudar empresas a vender mais e crescer com consistência.
          </p>
          <p>
            Atuamos em diferentes frentes do crescimento digital, integrando tráfego pago, produção de conteúdo e UGC, desenvolvimento de lojas virtuais e planejamento estratégico de vendas online.
          </p>
          <p>
            Mais do que executar ações isoladas, buscamos entender o que cada negócio precisa para avançar, identificar oportunidades e transformar estratégia em iniciativas que gerem impacto comercial.
          </p>
          <p className="about-slide__statement">
            Nosso trabalho é conectar as peças que fazem uma empresa crescer.
          </p>
        </div>
        <div className="about-slide__visual">
          <div className="about-slide__image-frame">
            <img src={assets.mockupStores} alt="Vitrines digitais em diferentes lojas e celulares" />
          </div>
          <p className="about-slide__certification">
            Somos certificados por gigantes da tecnologia e publicidade, como Google e Meta, representando apenas 3% das empresas reconhecidas no Brasil.
          </p>
          <div className="about-slide__partner-logos" aria-label="Certificações Google e Meta">
            <img src={assets.googlePartners} alt="Google Partners" />
            <img src={assets.metaBusiness} alt="Meta Business Partner" />
          </div>
        </div>
      </div>
      <div className="about-slide__stats">
        <div>
          <p>+500</p>
          <span>Negócios acelerados</span>
        </div>
        <div>
          <p>+7 anos</p>
          <span>De atuação</span>
        </div>
      </div>
    </div>
  ),
};
