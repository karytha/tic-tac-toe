# 🎮 Tic Tac Toe Game

Um jogo da velha interativo desenvolvido com **Next.js**, **React** e **Styled Components**.

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd tic-tac-toe
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm run dev
```

4. **Acesse o jogo**
Abra seu navegador e acesse: `http://localhost:3000`

## 🎯 Funcionalidades do Jogo

### ✨ Características Principais

- **Jogo da Velha Clássico**: Tabuleiro 3x3 com jogadores X e O
- **Timer Automático**: 5 segundos por jogada
- **Jogada Automática**: Se o jogador não jogar no tempo, o sistema faz uma jogada aleatória
- **Sistema de Pontos**: Conta vitórias de cada jogador
- **Cores Personalizáveis**: Interface com tema futurista
- **Auto-restart**: Nova partida automaticamente após 2 segundos

### 🎨 Personalização

- **Cores do Tabuleiro**: Personalize a cor de fundo
- **Cores dos Jogadores**: Diferentes cores para X e O
- **Cores de Vitória**: Destaque para células vencedoras
- **Cores de Fonte**: Personalize as cores dos textos

### ⏱️ Timer e Jogadas

- **Timer de 5 segundos** por jogada
- **Jogada automática** se o tempo esgotar
- **Troca automática** de jogadores
- **Pausa de 2 segundos** entre partidas

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # Páginas Next.js
├── components/             # Componentes React
│   ├── game/              # Componente principal do jogo
│   ├── table/             # Tabuleiro do jogo
│   ├── player/            # Componente dos jogadores
│   ├── timer/             # Timer do jogo
│   ├── menu/              # Menu de configurações
│   └── score/             # Placar de pontos
├── context/               # Contextos React
│   ├── color-context.jsx  # Gerenciamento de cores
│   ├── points-context.jsx # Sistema de pontuação
│   └── message-context.jsx # Mensagens do jogo
├── constants/             # Constantes do projeto
└── hooks/                 # Hooks customizados
```

## 🎮 Como Jogar

### Regras Básicas
1. **Objetivo**: Alinhar 3 símbolos (X ou O) em linha
2. **Jogadores**: X sempre começa
3. **Timer**: 5 segundos por jogada
4. **Vitória**: Primeiro a alinhar 3 símbolos vence

### Controles
- **Clique**: Faça sua jogada clicando em uma célula vazia
- **Timer**: Observe o tempo restante para sua jogada
- **Menu**: Configure cores e outras opções
- **Pontuação**: Acompanhe seus pontos no placar

### Estados do Jogo
- **Jogando**: Timer ativo, aguardando jogada
- **Vitória**: Jogador vence, timer para
- **Empate**: Tabuleiro cheio sem vencedor
- **Auto-restart**: Nova partida em 2 segundos

## 🛠️ Tecnologias Utilizadas

- **Next.js 14**: Framework React com App Router
- **React 18**: Biblioteca para interface
- **Styled Components**: Estilização CSS-in-JS
- **Context API**: Gerenciamento de estado global
- **Custom Hooks**: Lógica reutilizável

## 🎨 Sistema de Cores

### Contexto de Cores
O jogo usa um sistema de cores personalizável através do `ColorContext`:

- **Cor do Tabuleiro**: Fundo do tabuleiro
- **Cor do X**: Cor do jogador X
- **Cor do O**: Cor do jogador O
- **Cor de Vitória**: Destaque para células vencedoras
- **Cor da Fonte**: Cor dos textos

## ⚡ Performance

### Otimizações Implementadas
- **useCallback**: Funções memoizadas
- **useMemo**: Cálculos otimizados
- **Context API**: Estado global eficiente
- **Styled Components**: CSS otimizado

### Estrutura Modular
- **Componentes reutilizáveis**
- **Hooks customizados**
- **Contextos separados**
- **Lógica isolada**

### Debug
- **Console logs**: Informações de debug
- **React DevTools**: Inspecionar estado
- **Network tab**: Verificar requisições

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção

# Linting
npm run lint         # Executa ESLint
```

## 🤝 Contribuição

1. **Fork** o projeto
2. **Crie** uma branch para sua feature
3. **Commit** suas mudanças
4. **Push** para a branch
5. **Abra** um Pull Request


## 🎯 Próximas Funcionalidades

- [ ] Modo multiplayer online
- [ ] Diferentes tamanhos de tabuleiro
- [ ] Sistema de ranking
- [ ] Modo contra IA
- [ ] Sons e efeitos
- [ ] Modo escuro/claro

---

**Desenvolvido com ❤️ usando Next.js e React**
