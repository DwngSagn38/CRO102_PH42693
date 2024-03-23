
// 2. dinh nghia reducer
// khoi tao bien dem
const initstate = {
    dem: 0
};

const demReducer = (state = initstate, action) => {
    switch (action.type) { // kiem tra hanh dong duoc goi
        case "TANG":
            return { ...state, dem: state.dem + 1 };
            // cập nhật kho và tăng giá trị đếm
        case "GIAM":
            return { ...state, dem: state.dem - 1 };
        default:
            return state; // mặc định k có thay đổi
    }
};

export default demReducer;
