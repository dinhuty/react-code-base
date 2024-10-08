import { urlApiAuth } from '~/utils/constants/common';
import axiosClient from './axiosClient';

const authApi = {
  login(params: any) {
    const url = `${urlApiAuth.login}`;
    return axiosClient.post(url, params);
  },
};

export default authApi;
