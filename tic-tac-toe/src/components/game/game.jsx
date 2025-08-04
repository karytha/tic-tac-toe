"use client";
import Table from "@/components/table/table";
import Menu from "@/components/menu/menu";
import Timer from "@/components/timer/timer";
import useHandleGame from "../table/hooks/useHandleGame";
import Player from "../player/player";
import { useColor } from "@/context/color-context";
import Score from "../score/score";
import { usePoints } from "@/context/points-context";
import { useMessage } from "@/context/message-context";
import { GameContainer, Header, PlayersAndTimer, MessageBox, TableAndScore } from "./game-styles";

const Game = () => {
    const gameState = useHandleGame();
    const { timeLeft } = gameState;
    const { fontColorX, fontColorO } = useColor();
    const { points } = usePoints();
    const { message } = useMessage();

    return (
        <GameContainer>
            <div>
                <Header>
                    <h1>Tic Tac Toe</h1>
                    <Menu />
                </Header>
                <PlayersAndTimer>
                    <div>
                        <Player
                            player="X"
                            currentColor={fontColorX}
                        />
                        <Player
                            player="O"
                            currentColor={fontColorO}
                        />
                    </div>
                    <Timer timeLeft={timeLeft} />
                </PlayersAndTimer>
                {message && <MessageBox>{message}</MessageBox>}
            </div>

            <TableAndScore>
                <Table gameState={gameState} />
                <Score points={points} />
            </TableAndScore>
        </GameContainer>
    )
}

export default Game;