import React from 'react';

const SquareState = {
    value: 0
};

type State = typeof SquareState;

class Square extends React.Component<State> {
    state: State = SquareState;

    // constructor(props: object) {
    //     super(props);
    //     this.state = {
    //         value: null,
    //     }
    // }
    render() {
        return (
            <button className="square">
                {this.state.value}
            </button>
        )
    }
}

export default Square;