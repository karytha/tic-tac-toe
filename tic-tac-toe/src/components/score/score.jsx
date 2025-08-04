import { ScoreCard, ScoreTitle, ScoreValue } from "./score-styles";
import { useColor } from "@/context/color-context";
import { SCORE_LABEL, X_LABEL, O_LABEL } from "@/constants/constantes";

const Score = ({ points }) => {
    const { fontColorX, fontColorO } = useColor();
    return (
        <ScoreCard>
            <ScoreTitle>{SCORE_LABEL}</ScoreTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: fontColorX,
                        borderRadius: '50%'
                    }}></div>
                    <span>Jogador {X_LABEL}: {points?.X || 0}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: fontColorO,
                        borderRadius: '50%'
                    }}></div>
                    <span>Jogador {O_LABEL}: {points?.O || 0}</span>
                </div>
            </div>
        </ScoreCard>
    )
}

export default Score;