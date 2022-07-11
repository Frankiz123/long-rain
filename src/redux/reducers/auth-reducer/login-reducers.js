import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isKeepLogin: null,
  token: null,
  user: null,
  error: null,
  isSuccess: false,
  isFailure: false,
};
const loginReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.SIGNUP_SUCCESS:
      console.log('[SIGNUP_SUCCESS_REDUCER]', actions.data);
      return {
        ...state,
        token: actions.data.data.token,
        user: actions.data.data,
        isKeepLogin: true,
        error: null,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.SIGNUP_FAILURE:
      return {
        ...state,
        error: actions.data,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        token: actions.data.token,
        user: actions.data.user,
      };
    case TYPES.UPDATE_PROFILE_DATA:
      let newData = {...state.user, ...actions.data};
      return {
        ...state,
        user: newData,
      };
    default:
      return state;
  }
};
export default loginReducer;
