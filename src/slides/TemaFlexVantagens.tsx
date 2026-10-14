import { FileText, MousePointerClick, Palette, Smartphone } from 'lucide-react';
import { assets } from '../deck/assets';
import type { SlideDefinition } from '../deck/types';
import { Accent, Eyebrow, Heading } from '../components/Typography';

const advantages = [
  {
    icon: Palette,
    title: 'Personalização de verdade',
    text: 'Banners, vitrines, cores e seções que acompanham a identidade da marca.',
  },
  {
    icon: MousePointerClick,
    title: 'Compra mais rápida',
    text: 'Produtos em destaque, compra rápida e navegação pensada para reduzir atritos.',
  },
  {
    icon: FileText,
    title: 'Página de produto completa',
    text: 'Galeria, variações, WhatsApp, produtos relacionados e cálculo de frete.',
  },
  {
    icon: Smartphone,
    title: 'Experiência no celular',
    text: 'Layouts responsivos e leves para comprar bem de qualquer dispositivo.',
  },
];

export const temaFlexVantagens: SlideDefinition = {
  id: 'tema-flex-vantagens',
  title: 'Vantagens do Tema Flex',
  tone: 'light',
  footer: true,
  notes:
    'Use as imagens para mostrar que o Tema Flex não é apenas um visual pronto. Ele combina liberdade para construir a vitrine da marca com recursos que ajudam o cliente a encontrar produtos, decidir e comprar. Na primeira imagem, destaque a aplicação em uma loja de perfumes: banners, categorias, lançamentos, promoções, prova social e FAQ. Na segunda, mostre os recursos nativos do tema: seções personalizáveis, compra rápida, banners rotativos e páginas de produto completas.',
  render: () => (
    <div className="flex-slide">
      <img className="flex-slide__mockup" src={assets.mockupFlex} alt="Loja Flex em computador e celular" />
      <div className="flex-slide__hero">
        <Eyebrow>Estrutura na prática · Tema Flex</Eyebrow>
        <Heading>Uma base pronta para vender <Accent>do seu jeito.</Accent></Heading>
        <span className="flex-slide__rule" aria-hidden="true" />
        <p className="flex-slide__lead">Liberdade visual e recursos de conversão para transformar a identidade da sua marca em uma loja completa.</p>
      </div>
      <section className="flex-slide__rail" aria-label="Vantagens do Tema Flex">
        <div className="flex-slide__rail-header">
          <p>O QUE O FLEX ENTREGA</p>
          <span>Recursos nativos, prontos para personalizar.</span>
        </div>
        <div className="flex-slide__features">
          {advantages.map(({ icon: Icon, title, text }) => (
            <article key={title} className="flex-slide__feature">
              <h3><Icon size={26} strokeWidth={2.2} aria-hidden="true" />{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  ),
};
