import * as types from "./actionTypes";
import {axiosWithAuth} from "../auth/axiosWithAuth";

export const getItems = () => dispatch => {
	dispatch({ type:types.GET_ITEMS_START });
	axiosWithAuth()
		.get("/products")
		.then(res => {
			console.log(res.data);
			dispatch({ type: types.GET_ITEMS_SUCCESS, payload: res.data })
		  }
		  )
		  .catch(err => dispatch({ type: types.GET_ITEMS_FAIL, payload: err.response }));
        }
        
export const addItems = additems => dispatch => {
    dispatch({ type: types.ADD_ITEMS_START })
    axiosWithAuth()
    .post("/carts", additems)
    .then(response => {
        console.log(response.data);
        
        dispatch({
        type: types.ADD_ITEMS_SUCCESS,
        payload: response.data
        });
    })
    .catch(error => {
        console.log(error.response)
        dispatch({
        type: types.ADD_ITEMS_FAILURE,
        payload: error.response.data.Error
        });
    });
    };
          
    export const deleteItem = id =>  dispatch => {
    dispatch({ type: types.DELETE_ITEM_START})
    const token = localStorage.getItem("token");
        axiosWithAuth()
    .delete(`/products/${id}` , {
    headers: {
        Authorization: token
        }
    })
    .then(res => {
        dispatch({ type: types.DELETE_ITEM_SUCCESS, payload: id });
    })
    .catch(err => {
        dispatch({ type: types.DELETE_ITEM_FAILURE, payload: err.errorMessage });
    });
};
    