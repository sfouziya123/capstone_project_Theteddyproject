import {
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAILURE,

    // GET_SEARCH_PRODUCTS_REQUEST,
    // GET_SEARCH_PRODUCTS_SUCCESS,
    // GET_SEARCH_PRODUCTS_FAILURE,

    // GET_PRODUCTS_REQUEST,
    // GET_PRODUCTS_SUCCESS,
    // GET_PRODUCTS_FAILURE

} from "./ActionType";

import axios from "axios";

export const getAllProductsRequest = () => ({
    type: GET_ALL_PRODUCTS_REQUEST,
});
export const getAllProductsSuccess = (Playloads) => ({
    type: GET_ALL_PRODUCTS_SUCCESS,
    Playloads
});
export const getAllProductsFailure = () => ({
    type: GET_ALL_PRODUCTS_FAILURE,
    
});

export const getAllProducts =() => (dispatch) => {
    dispatch(getAllProductsRequest());
    axios
        .get("http://localhost:8080/api/v1/teddys")
        .then((res) => dispatch(getAllProductsSuccess(res.data)))
        .catch(() => dispatch (getAllProductsFailure()));
};


// export const getSearchProductsRequest = () => ({
//     type: GET_SEARCH_PRODUCTS_REQUEST,
// });
// export const getSearchProductsSuccess = (Playloads) => ({
//     type: GET_SEARCH_PRODUCTS_SUCCESS,
//     Playloads
// });
// export const getSearchProductsFailure = () => ({
//     type: GET_SEARCH_PRODUCTS_FAILURE,
//     Playload
// });


// export const getProductsRequest = () => ({
//     type: GET_PRODUCTS_REQUEST,
// });
// export const getProductsSuccess = (Playloads) => ({
//     type: GET_PRODUCTS_SUCCESS,
//     Playloads
// });
// export const getProductsFailure = () => ({
//     type: GET_PRODUCTS_FAILURE,
//     Playload
// });




