import { ErrorGetOrder, ErrorGetProduct, ErrorGetUser, ErrorLogin } from "./errorAction";
import { StartGetOrders, StartGetProduct, StartGetUser, StartLogin } from "./startAction";
import { SuccessGetOrders, SuccessGetProduct, SuccessGetUser, SuccessLogin } from "./successAction";

let api = 'https://basrabackend.justcode.am/api/admin'
let token = localStorage.getItem('token')
console.log(token)

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
export const GetAllProducts = (page) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetProduct())
        fetch(`${api}/get_products?page=${page}`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    console.log(r)
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
    };
    return (dispatch) => {
        dispatch(StartGetOrders())
        fetch(`${api}/get_orders?page=${page}`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    console.log(r)
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