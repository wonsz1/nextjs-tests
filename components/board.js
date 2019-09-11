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
        let squareBoard = [];
        let col = [];

        for(let i=1; i<10; i++) {
            col.push(this.renderSquare(i-1));
            
            if(i%3 == 0) {
                squareBoard.push(<div key={i} className="board-row">{col}</div>);
                col = [];
            }
        }

        return (
            <div>
                {squareBoard}

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
                    .status {
                        padding: 5px;
                        background: #a5a4a1;
                        color: #fff;
                        width: 140px;
                        margin: 5px 0;
                        text-align: center;
                    }
                `}</style>
            </div>
        );
    }
}

export default Board;