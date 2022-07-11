export const liveServer = 'https://long-rain-23446.botics.co/';

export const baseURL = liveServer;
export const endPoints = {
  register: 'api/v1/signup/',
  login: 'api/v1/login/',
  makeProfile: '/users/account/profile/',
  changeProfile: id => `/users/account/profile/${id}/`,
  getProfile: id => `/users/account/profile/?user_id=${id}/`,
};
