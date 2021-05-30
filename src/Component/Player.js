import React, { Component } from 'react'
import {connect} from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className="text-center player">
                <div className="choice">
                    <img width={100} height={75} src={this.props.mangDatCuoc.find( item => item.datCuoc === true).hinhAnh} alt="game" />
                </div>
                <div className="speech-bubble"></div>
                <img height={200} width={200} src="./img/GameOanTuXi/player.png" alt="game" />
                <div className="row">
                    {this.props.mangDatCuoc.map((item,index) => {

                        // them boder cho button duoc chon
                        let border = {};
                        if (item.datCuoc){
                            border = {border:'3px solid orange'};
                        }

                        return <div className="col-4" key={index}>
                                    <button style={border} height={50} width={50} onClick = {() => {this.props.datCuoc(item.ma)}}>
                                        <img height={35} width={35} src={item.hinhAnh} alt="game" />
                                    </button>
                                </div>
                    })}

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BTOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'DAT_CUOC',
                maCuoc
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)
