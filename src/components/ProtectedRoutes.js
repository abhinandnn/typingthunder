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
    console.log(token);
    
    useEffect(() => {
      const checkAuth = async () => {
        if (!token) {
          router.push('/login');
        } else {
          try {
            const response = await axios.post('api/auth/check-token',{},{headers:{'auth-token': `${token}`},withCredentials: false});
            console.log(response);
        } catch (error) {
            await refreshToken();
          }
        }
      };
  
      checkAuth();
    }, [accesstoken]);
  
    return <>{children}</>;
  };
  
  export default ProtectedRoute;