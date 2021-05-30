import React, { Component } from 'react'
import {connect} from 'react-redux';

class Computer extends Component {
    render() {
        return (
            <div>
                <div className="text-center player">
                    <div className="choice">
                        <img width={100} height={75} src={this.props.computer.hinhAnh} alt="game" />
                    </div>
                    <div className="speech-bubble"></div>
                    <img height={200} width={200} src="./img/GameOanTuXi/playerComputer.png" alt="game" />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        computer: state.BTOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)