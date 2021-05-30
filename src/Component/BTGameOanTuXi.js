import React, { Component } from 'react';
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import './OanTuXi.css';
import Player from './Player';
import {connect} from 'react-redux';

class BTGameOanTuXi extends Component {
    render() {
        return (
            <div className = "styleGame">
                <div className="row text-center mt-3">
                    <div className="col-3">
                        <Player/>
                    </div>
                    <div className="col-6">
                        <KetQuaTroChoi/>
                        <button className="btn btn-success mt-4" onClick={()=>{this.props.playGame()}}>Play game !!!</button>
                    </div>
                    <div className="col-3">
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            let count = 0;
            let randomComputer = setInterval(() => {
                dispatch({
                    type: 'RAN_DOM'
                });
                count++;
                if (count >= 50){
                    // dung ham Interval
                    clearInterval(randomComputer);
                    
                    // tra ve ket qua tro choi
                    dispatch({
                        type: 'KET_QUA'
                    })
                }
            },30)
            
        }
    }
}
 
export default connect(null,mapDispatchToProps)(BTGameOanTuXi)
