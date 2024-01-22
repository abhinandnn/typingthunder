import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { refreshToken } from './AuthService';
import { selectTokens } from '@/store/AuthSlice';
import axios from '@/api/axios';
import cookie from 'js-cookie'

const ProtectedRoute = ({ children }) => {
    const { accesstoken, refreshtoken } = useSelector(selectTokens);
    const dispatch = useDispatch();
    const router = useRouter();
    const token=cookie.get('accesstoken');
  
    useEffect(() => {
      const checkAuth = async () => {
        if (!token) {
          router.push('/login');
        } else {
            console.log(token);
          try {
            response = await axios.post('api/auth/check-token',{headers:{'auth-token':`${token}`}});
        } catch (error) {
            console.log(error.response)
            console.log('heyo') 
            await refreshToken();
          }
        }
      };
  
      checkAuth();
    }, [token]);
  
    return <>{children}</>;
  };
  
  export default ProtectedRoute;