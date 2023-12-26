import { ErrorGetOrder, ErrorGetProduct, ErrorGetUser, ErrorLogin, ErrprGetSinglUser } from "./errorAction";
import { StartGetOrders, StartGetProduct, StartGetSinglUser, StartGetUser, StartLogin } from "./startAction";
import { SuccessGetOrders, SuccessGetProduct, SuccessGetSinglUser, SuccessGetUser, SuccessLogin } from "./successAction";

let api = 'https://basrabackend.justcode.am/api/admin'
let token = localStorage.getItem('token')

export const LoginAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartLogin())
        fetch(`${api}/login`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessLogin(r))
                }
                else {
                    dispatch(ErrorLogin())
                }
            })
            .catch((error) => {
                dispatch(ErrorLogin())
            });
    }
}

export const GetAllUsersAction = (page) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,

    };
    return (dispatch) => {
        dispatch(StartGetUser())
        fetch(`${api}/all_users?page=${page}`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetUser(r.data))
                }
                else {
                    dispatch(ErrorGetUser())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetUser())
            });
    }
}
export const GetAllProducts = (page, data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetProduct())
        fetch(`${api}/get_products?page=${page}`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetProduct(r.data))
                    // dispatch(SuccessGetUser(r.data))
                }
                else {
                    dispatch(ErrorGetProduct())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetProduct())
            });
    }
}

export const GetAllOrder = (data, page) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetOrders())
        fetch(`${api}/get_orders?page=${page}`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetOrders(r.data))
                }
                else {
                    dispatch(ErrorGetOrder())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetOrder())
            });
    }
}

export const GetSinglUser = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetSinglUser())
        fetch(`${api}/single_page_user`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetSinglUser(r))
                }
                else {
                    dispatch(ErrprGetSinglUser())
                }
            })
            .catch((error) => {
                dispatch(ErrprGetSinglUser())
            });
    }
}