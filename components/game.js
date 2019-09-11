import Board from './board';
import calculateWinner from './calculateWinner';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                move: [],
            }],
            stepNumber: 0,
            xIsNext: true
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        let squares = current.squares.slice();

        if(calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X': 'O';

        this.setState({
            history: history.concat([{
                squares: squares,
                move: i
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step %2) === 0
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber].squares;
        const winner = calculateWinner(current);

        const moves = history.map((history, i) => {
            const desc = i ? `Przejdź fo ruchu #${i} (pole nr ${history.move + 1})` :
            'Reset';
            return (
                <li key={i}>
                    <button onClick={() => this.jumpTo(i)}>{desc}</button>
                </li>
            )
        })

        let status = `Next player: ${this.state.xIsNext ? 'X': 'O'}`;
        if(winner) {
            status = `-----> And the winner is... ${winner} <-------`; 
        }

        return (
            <div className="game">
                <br/>
                <div className="game-board">
                <Board
                    squares={current}
                    onClick={(i) => this.handleClick(i)}
                />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;