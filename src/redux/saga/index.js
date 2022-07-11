import {fork} from 'redux-saga/effects';
import {profileSaga} from './profile-saga';
import {signUpRequest} from './auth-saga';

export function* rootSaga() {
  yield fork(signUpRequest);
  yield fork(profileSaga);
}
