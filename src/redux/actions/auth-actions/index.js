import * as TYPES from '../types';

//Sign up Action
export const signUpAction = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SIGNUP_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Sign up Action
export const loginAction = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.LOGIN_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

// Create / Update Action
export const profileAction = (
  params,
  profileId,
  token,
  cbSuccess,
  cbFailure,
) => {
  return {
    type: TYPES.PROFILE_REQUEST,
    params,
    profileId,
    cbSuccess,
    cbFailure,
    token,
  };
};

// Create / Update Action
export const getUserProfile = params => {
  return {
    type: TYPES.GET_USER_PROFILE,
    params,
  };
};
