"use client";
import Table from "@/components/table/table";
import Menu from "@/components/menu/menu";
import Timer from "@/components/timer/timer";
import handleTable from "../table/hooks/handleTable";
import Player from "../player/player";
import { useColor } from "@/context/color-context";
import Score from "../score/score";
import { usePoints } from "@/context/points-context";

const Game = () => {
    const { timeLeft, message } = handleTable();
    const { fontColorX, fontColorO } = useColor();
    const { points } = usePoints();

    console.log('Pontos', points);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'left', marginTop: '50px', width: '100%' }}>
            <div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '100px', width: '100%', marginBottom: '20px' }}>
                    <h1>Tic Tac Toe</h1>
                    <Menu />
                </div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <div >
                        <Player player='X' currentColor={fontColorX} />
                        <Player player='O' currentColor={fontColorO} />
                    </div>
                    <Timer timeLeft={timeLeft} />
                </div>
                {message && (
                    <div style={{
                        textAlign: 'center',
                        marginTop: '10px',
                        padding: '10px',
                        backgroundColor: '#f0f0f0',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        color: '#red'
                    }}>
                        {message}
                    </div>
                )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', width: '100%', marginTop: '20px' }}>
                <Table />
                <Score points={points} />
            </div>
        </div>
    )
}

export default Game;