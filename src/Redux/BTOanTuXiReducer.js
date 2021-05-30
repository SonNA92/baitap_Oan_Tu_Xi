
const stateDefault = {
    mangDatCuoc:[
        {ma:'keo',hinhAnh:'./img/GameOanTuXi/keo.png',datCuoc:true},
        {ma:'bua',hinhAnh:'./img/GameOanTuXi/bua.png',datCuoc:false},
        {ma:'bao',hinhAnh:'./img/GameOanTuXi/bao.png',datCuoc:false}
    ],
    ketQua: 'I love you 3000 <3',
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma:'bao',hinhAnh:'./img/GameOanTuXi/keo.png'}
}

export const BTOanTuXiReducer = (state = stateDefault,action) => {
    switch (action.type){
        case 'DAT_CUOC': {
            // reset mang dat cuoc
            let mangDatCuocUpdate = [...state.mangDatCuoc];
            mangDatCuocUpdate = mangDatCuocUpdate.map((item,index) => {
                // thay doi trang thai dat cuoc ung voi ma duoc chon
                if (item.ma === action.maCuoc){
                    return {...item,datCuoc: true};
                }
                return {...item,datCuoc: false}
            });
            
            state.mangDatCuoc = mangDatCuocUpdate;
            return {...state};

        }
        case 'RAN_DOM': {
            let soNN = Math.floor(Math.random()*3);
            let ketQuaNN = state.mangDatCuoc[soNN];
            state.computer = ketQuaNN;
            return {...state};
        }
        case 'KET_QUA': {
            state.soBanChoi += 1;
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch (player.ma){
                case 'keo': 
                    if (computer.ma === 'keo'){
                        state.ketQua = 'hòa nhau !!!';
                    }else if (computer.ma === 'bua'){
                        state.ketQua = 'bạn đã thua :((';
                    }else {
                        state.soBanThang += 1;
                        state.ketQua = 'bạn đã thắng :v';
                    };
                    break;
                case 'bua':
                    if (computer.ma === 'keo'){
                        state.soBanThang += 1;
                        state.ketQua = 'bạn đã thắng :v';
                    }else if (computer.ma === 'bua'){
                        state.ketQua = 'hòa nhau !!!';
                    }else {
                        state.ketQua = 'bạn đã thua :((';
                    };
                    break;
                case 'bao':
                    if (computer.ma === 'keo'){
                        state.ketQua = 'bạn đã thua :((';
                    }else if (computer.ma === 'bua'){
                        state.soBanThang += 1;
                        state.ketQua = 'bạn đã thắng :v';
                    }else {
                        state.ketQua = 'hòa nhau !!!';
                    };
                    break;
                default : state.ketQua = 'I love you 3000 <3';
                return {...state};
            }
        }
        return {...state};
        default: return {...state};
    }
       
}
