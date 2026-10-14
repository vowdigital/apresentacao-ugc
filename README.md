# Vow Digital — Apresentação comercial UGC

Apresentação de vendas em React + TypeScript (Vite), com quinze slides e foco em conteúdo UGC. O palco preenche a janela inteira; a exportação em PDF mantém o formato 16:9.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:5173/apresentacao-ugc/`. Para gerar a versão de produção, execute `npm run build`; os arquivos ficam em `dist/`.

## Durante a reunião

- Setas, Espaço, Enter ou PageDown: avançar ou voltar slides.
- Home / End: primeiro ou último slide.
- N: mostrar ou ocultar notas do apresentador.
- F: entrar ou sair da tela cheia.
- Clique nas barras superiores para ir diretamente a um slide.
- Os vídeos do slide de exemplos começam pausados e são reproduzidos individualmente.

Cada slide tem um endereço próprio, por exemplo `http://localhost:5173/apresentacao-ugc/#/valores` para os planos. Em celular na vertical, gire a tela para ver a apresentação.

## Exportar em PDF

Abra `http://localhost:5173/apresentacao-ugc/?print`, use **Imprimir → Salvar como PDF**, sem margens e com gráficos de fundo ativados. Cada slide ocupa uma página de 1920 × 1080. Os vídeos aparecem como imagens de capa.

## Editar

- `src/slides/PresentationV2.tsx`: conteúdo, ordem, notas e dados dos planos.
- `src/presentation-v2.css`: aparência e layout.
- `src/deck/`: navegação e escala do palco.
- `public/images/`: logos, vídeos e imagens de capa.

Os slides e estilos anteriores permanecem no projeto como referência, mas não são importados pela apresentação atual.
