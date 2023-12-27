const initialState = {
    data: [],
    status: false,
    loading: false,
    error: "",
};
export const CreateStoryTeamReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartCreataStoryTeam':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessCreateStoryTeam':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorCreatStoryTeam':
            temp.data = ''
            temp.status = false
            temp.loading = false
            temp.error = 'error'
            break
        default:
            return temp;
    }
    return temp;
} 