//import React from 'react';
import Square from './square';
import claculateWinner from './calculateWinner';
import calculateWinner from './calculateWinner';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
          winner: null,
        };
      }
    
      handleClick(i) {
        const squares = this.state.squares.slice();
        
        if(this.state.winner) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X': 'O';

        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
            winner: this.state.winner
        });

      }
    
      renderSquare(i) {
        return (
            <Square
              value={this.state.squares[i]}
              onClick={() => this.handleClick(i)}
            />
        );
      }

    render() {
        let status = `Next player: ${this.state.xIsNext ? 'X': 'O'}`;
        this.state.winner = calculateWinner(this.state.squares);

        if(this.state.winner) {
            status = `-----> And the winner is... ${this.state.winner} <-------`; 
        }

        return (
            <div>
                <div className="status">{status}</div>

                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

                <style jsx global>{`
                    button {
                        padding: 5px 10px;
                        width: 50px;
                        height: 50px;
                        vertical-align: top; //change from a blank value to a value, the buttons move. It's due to weirdness with text/line alignments.
                    }
                    .square {
                        font-weight: bold;
                        font-size: 18px;
                    }
                    .oClass {
                        color: blue;
                    }
                    .xClass {
                        color: green;
                    }
                `}</style>
            </div>
        );
    }
}

export default Board;