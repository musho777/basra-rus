const initialState = {
    data: [],
    status: false,
    loading: true,
    error: ""
};
export const GetAllProductsReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartGetProduct':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessGetProduct':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorGetProduct':
            temp.data = []
            temp.status = false
            temp.loading = false
            temp.error = 'error'
            break
        default:
            return temp;
    }
    return temp;
} 