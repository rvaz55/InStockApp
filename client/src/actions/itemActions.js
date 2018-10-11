// make backend requests here and receive data response

import {GET_ITEMS_BY_SEARCH, GET_ITEMS_BY_CATEGORY, ITEMS_LOADING } from "./types";
import axios from 'axios';

export const getItemsBySearch = (newSearch) => dispatch => {
    dispatch(setItemsLoading());
    return axios
        .get(`/api/items/search/${search}`)
<<<<<<< HEAD
=======

>>>>>>> bb96d82da99a4b2f0ffd1ef6632ca4faeba70ab2
        .then(res => 
            dispatch({
                type: GET_ITEMS_BY_SEARCH,
                payload: res.data
            })
        )
        .catch(err => console.log(err))
    };

export const getItemsByCategory = (category) => dispatch => {
    dispatch(setItemsLoading());
    return axios
        .get(`/api/items/category/${category}`)
        .then(res =>
            dispatch({
                type: GET_ITEMS_BY_CATEGORY,
                payload: res.data
            })
        )
        .catch(err=> console.log(err))
    }

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};

// these get sent to the reducer switch cases