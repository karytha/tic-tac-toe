import React from 'react';

const NewGameButton = ({ onStartGame }) => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // ✅ Background transparente escuro
            display: 'flex',
            flexDirection: 'column', // ✅ Mudança para column para empilhar texto e botão
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            borderRadius: '8px', // ✅ Bordas arredondadas mais sutis
            backdropFilter: 'blur(1px)', // ✅ Efeito de blur mais sutil
            border: '1px solid rgba(255, 255, 255, 0.1)', // ✅ Borda sutil
            padding: '20px'
        }}>
            {/* ✅ Texto acima do botão */}
            <div style={{
                color: 'white',
                fontSize: 'clamp(18px, 4vw, 24px)', // ✅ Responsivo
                fontWeight: 'bold',
                marginBottom: 'clamp(15px, 3vw, 20px)', // ✅ Responsivo
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // ✅ Sombra no texto
                zIndex: 1001,
                lineHeight: '1.2'
            }}>
                Vamos jogar o jogo da velha?
            </div>

            <button
                onClick={onStartGame}
                style={{
                    padding: 'clamp(12px, 2.5vw, 16px) clamp(24px, 5vw, 32px)', // ✅ Responsivo
                    fontSize: 'clamp(14px, 3vw, 18px)', // ✅ Responsivo
                    fontWeight: 'bold',
                    backgroundColor: '#44c017',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,255,0.2)',
                    zIndex: 1001, // ✅ Z-index maior que o overlay
                    minWidth: 'clamp(120px, 25vw, 160px)', // ✅ Responsivo
                    minHeight: 'clamp(40px, 8vw, 50px)' // ✅ Responsivo
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#3aa015';
                    e.target.style.transform = 'translateY(-2px) scale(1.05)';
                    e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#44c017';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
                }}
            >
                NOVO JOGO
            </button>
        </div>
    );
};

export default NewGameButton; 