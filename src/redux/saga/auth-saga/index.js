import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../../actions/types';
import Api from '../../../services/api';
import {endPoints} from '../../../services';

export function* signUpRequest() {
  yield takeLatest(types.SIGNUP_REQUEST, signUp);
  yield takeLatest(types.LOGIN_REQUEST, login);
}

function* signUp(params) {
  console.log('[sign-up-saga]', params);
  try {
    let response = yield Api.postRequest(endPoints.register, params.params);
    console.log('[SIGN-UP-SAGA-RESPONSE]', response);
    if (response?.status === 201) {
      params.cbSuccess(response);
      yield put({
        type: types.SIGNUP_SUCCESS,
        data: response,
      });
    } else {
      params.cbFailure(response?.data?.data);
    }
  } catch (error) {
    params.cbFailure(error.response);
  }
}

function* login(params) {
  console.log('[login-saga]', params);
  try {
    let response = yield Api.postRequest(endPoints.login, params.params);
    if (response?.status === 200) {
      params.cbSuccess(response);
      yield put({
        type: types.LOGIN_SUCCESS,
        data: response.data,
      });
    } else {
      params.cbFailure(response);
    }
  } catch (error) {
    params.cbFailure(error);
  }
}
