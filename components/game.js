import Board from './board';
import calculateWinner from './calculateWinner';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true
        }
    }

    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if(calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X': 'O';

        console.log(current);
        console.log(squares);

        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[history.length - 1].squares;
        const winner = calculateWinner(current);

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
                    <ol>todo</ol>
                </div>
            </div>
        );
    }
}

export default Game;