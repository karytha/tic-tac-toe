 Tic Tac Toe Game - Jogo da velha

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

* Estrutura de pastas

tic-tac-toe/
├── 📁 src/
│   ├── 📁 app/                    # Next.js App Router
│   │   ├── layout.js              # Layout principal
│   │   ├── page.jsx               # Página inicial
│   │   ├── globals.css            # Estilos globais
│   │   └── page.module.css        # CSS modules
│   │
│   ├── 📁 components/             # Componentes React
│   │   ├── �� game/              # Componente principal do jogo
│   │   ├── �� table/             # Tabuleiro do jogo
│   │   │   ├── �� hooks/         # Hooks customizados
│   │   │   │   ├── useHandleGame.js
│   │   │   │   └── useTurnPlayerTime.js
│   │   │   ├── table.jsx
│   │   │   └── table-styles.jsx
│   │   ├── �� player/            # Componente do jogador
│   │   ├── �� timer/             # Componente do timer
│   │   ├── �� score/             # Componente da pontuação
│   │   ├── �� menu/              # Menu de configurações
│   │   ├── �� color-selector/    # Seletor de cores
│   │   └── �� table-item/        # Item individual do tabuleiro
│   │
│   ├── 📁 context/               # Context API (Gerenciamento de Estado)
│   │   ├── color-context.jsx     # Contexto de cores
│   │   ├── points-context.jsx    # Contexto de pontuação
│   │   ├── message-context.jsx   # Contexto de mensagens
│   │   └── timer-context.jsx     # Contexto do timer
│   │
│   ├── 📁 constants/             # Constantes do projeto
│   │   └── constantes.js         # Labels e constantes
│   │
│   └── 📁 assets/                # Recursos estáticos
│
├── 📁 public/                    # Arquivos públicos
├── package.json                  # Dependências
├── next.config.mjs              # Configuração Next.js
└── jsconfig.json                # Configuração JavaScript


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

