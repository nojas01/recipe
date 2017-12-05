import ApiClient from '../../api/client'
export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new ApiClient()

export default () => {
  return dispatch => {

    api.post('/users')
      .then(res => dispatch({ type: FETCHED_RECIPES, paylaod: res.body
}))
  }
}


SignUp#submitForm
