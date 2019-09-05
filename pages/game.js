import Layout from '../components/MyLayout';
import Board from '../components/board';

export default () => {
    return (
        <Layout>
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        </Layout>
    )
}