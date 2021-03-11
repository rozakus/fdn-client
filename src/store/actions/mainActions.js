import axios from 'axios'
const BASE_URL = 'http://localhost:3000'

export function getProducts() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(BASE_URL + '/products')

      dispatch({
        type: 'UPDATE_PRODUCTS',
        payload: data
      })

    } catch (err) {
      console.log(err)
    }
  }
}

export function getOrders() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(BASE_URL + '/orders')

      dispatch({
        type: 'UPDATE_ORDERS',
        payload: data
      })

    } catch (err) {
      console.log(err)
    }
  }
}

export function getPivots() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(BASE_URL + '/pivots')

      dispatch({
        type: 'UPDATE_PIVOTS',
        payload: data
      })

    } catch (err) {
      console.log(err)
    }
  }
}