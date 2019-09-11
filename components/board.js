import Square from './square';

class Board extends React.Component {
      renderSquare(i) {
        return (
            <Square
              value={this.props.squares[i]}
              onClick={() => this.props.onClick(i)}
            />
        );
      }

    render() {
        return (
            <div>
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
                    .board-row button {
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