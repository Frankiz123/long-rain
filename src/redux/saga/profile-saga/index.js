import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../../actions/types';
import {endPoints} from '../../../services';
import Api from '../../../services/api';
import {UPDATE_PROFILE_DATA} from '../../actions/types';

export function* profileSaga() {
  yield takeLatest(types.PROFILE_REQUEST, profileRequest);
  yield takeLatest(types.GET_USER_PROFILE, getUserProfile);
}

function* profileRequest(params) {
  console.log('[profile-up-saga]', params);
  try {
    let response;

    let options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${params.token}`,
      },
    };
    let configration = Object.assign(options);

    if (params.profileId) {
      response = yield Api.putAxios(
        endPoints.changeProfile(params.profileId),
        params.params,
        configration,
      );
    } else {
      response = yield Api.postAxios(
        endPoints.makeProfile,
        params.params,
        configration,
      );
    }
    console.log('[PROFILE-SAGA-RESPONSE]', response);
    if (
      (response.status === 200 || response.status === 201) &&
      response?.data?.id
    ) {
      response.data.profileId = response?.data?.id;
      delete response?.data?.id;
      delete response?.data?.user;
      yield put({type: UPDATE_PROFILE_DATA, data: response.data});
      params.cbSuccess(response?.data);
    } else {
      params.cbFailure(response);
    }
  } catch (error) {
    params.cbFailure(error);
  }
}

function* getUserProfile(params) {
  console.log('[profile-up-saga]', params);
  try {
    let response;

    let options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${params.token}`,
      },
    };

    let configration = Object.assign(options);

    response = yield Api.getAxios(
      endPoints.getProfile(params.params.user_id),
      configration,
    );

    console.log('[get profile-SAGA-RESPONSE]', response);
    if (
      (response.status === 200 || response?.data?.count > 0) &&
      params.params.user_id
    ) {
      let userProfile = {};
      response.data.results.map(item => {
        if (item.user.toString() === params.params.user_id.toString()) {
          userProfile = item;
          userProfile.profileId = item?.id;
          delete userProfile.user;
          delete userProfile.id;
        }
      });

      if ('profileId' in userProfile) {
        yield put({type: UPDATE_PROFILE_DATA, data: userProfile});
      }
    }
  } catch (error) {
    console.log(' following are errors -> ', error);
  }
}
