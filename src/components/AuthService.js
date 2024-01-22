import { setTokens, clearTokens } from '../store/AuthSlice.js'
import axios from '@/api/axios.js';
import cookie from 'js-cookie'
export const refreshToken = async () => {
    try {
      const refreshtoken = cookie.get('refreshtoken');
      console.log('hhj',refreshtoken)
      const response = await axios.post('api/auth/refresh-access-token', { refreshtoken: refreshtoken });
      const newAccessToken = response.data.data.accesstoken;
      setTokens({ accesstoken: newAccessToken, refreshtoken });
      cookie.set('accesstoken', newAccessToken);
    } catch (error) {
        console.log(error.response)
      clearTokens();
      cookie.remove('accesstoken');
      cookie.remove('refreshtoken');
    }
  };
  
  export const logout = () => {
    clearTokens();
    cookie.remove('accessToken');
    cookie.remove('refreshToken');
  };