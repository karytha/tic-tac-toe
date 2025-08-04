🎮 Tic Tac Toe Game

Jogo da velha interativo desenvolvido com Next.js, React e Styled Components.

* Como rodar o projeto

Pré-requisitos:
- Node.js (versão 16 ou superior)
- npm ou yarn

Instalação:

1. Clone o repositório:
   git clone <url-do-repositorio>
   cd tic-tac-toe

2. Instale as dependências:
   npm install

3. Execute o projeto:
   npm run dev

4. Acesse em:
   http://localhost:3000

* Funcionalidades

Principais recursos:
- Tabuleiro 3x3 com jogadores X e O
- Timer de 5 segundos por jogada
- Jogadas automáticas ao esgotar o tempo
- Contador de vitórias por jogador
- Interface com opções de personalização de cores
- Reinício automático após o término da partida

Personalização:
- Cor de fundo do tabuleiro
- Cores dos jogadores (X e O)
- Cor de destaque para células vencedoras
- Cor da fonte

Tempo e jogadas:
- Tempo limite de 5 segundos por jogada
- Jogadas automáticas ao esgotar o tempo
- Alternância automática entre jogadores
- Reinício automático após 2 segundos

🏗️ Estrutura de pastas

src/
├── app/                    // Páginas (Next.js App Router)
├── components/             // Componentes visuais
│   ├── game/               // Componente principal do jogo
│   ├── table/              // Tabuleiro
│   ├── player/             // Informações dos jogadores
│   ├── timer/              // Temporizador
│   ├── menu/               // Menu de configurações
│   └── score/              // Placar
├── context/                // Contextos globais
│   ├── color-context.jsx   // Cores do jogo
│   ├── points-context.jsx  // Pontuação
│   └── message-context.jsx // Mensagens exibidas
├── constants/              // Constantes do sistema
└── hooks/                  // Hooks personalizados

*Instruções de uso

Regras:
1. Alinhar 3 símbolos (X ou O) em linha, coluna ou diagonal
2. O jogador X sempre inicia
3. Cada jogada deve ser feita em até 5 segundos
4. O primeiro a alinhar 3 símbolos vence

* Controles:
- Clique em uma célula vazia para jogar
- O temporizador exibe o tempo restante
- O menu permite personalizar as cores
- O placar mostra a pontuação atual

* Estados possíveis:
- Em jogo: aguardando jogada
- Vitória: jogador vence a partida
- Empate: tabuleiro completo sem vencedor
- Reinício: nova partida após 2 segundos

* Tecnologias

- Next.js 14 – Framework React com App Router
- React 18 – Biblioteca para interface do usuário
- Styled Components – Estilização com CSS-in-JS
- Context API – Gerenciamento de estado global
- Hooks personalizados – Lógica reutilizável

*Cores
Gerenciadas pelo ColorContext:
- Cor de fundo do tabuleiro
- Cor do jogador X
- Cor do jogador O
- Cor das células vencedoras
- Cor da fonte dos textos

 *Otimizações

- useCallback para evitar recriação de funções
- useMemo para memorizar valores derivados
- Componentes modulares reutilizáveis
- Separação de lógica e apresentação
