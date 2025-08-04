const Score = ({ points }) => {

    console.log(points, 'score');
    return (
        <div>
            <div>
                <h1>Pontuação</h1>
                <p>X: {points?.X || 0}</p>
                <p>O: {points?.O || 0}</p>
            </div>
        </div>
    )
}

export default Score;