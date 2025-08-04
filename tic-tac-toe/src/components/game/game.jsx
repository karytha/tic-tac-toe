"use client";
import Table from "@/components/table/table";
import Menu from "@/components/menu/menu";

const Game = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '40px', marginTop: '50px' }}>

            <h1>Tic Tac Toe</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                <Table />
                <Menu />
            </div>
        </div>
    )
}

export default Game;