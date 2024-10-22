import axiosClient from '../../api/axiosClient';
import Cookies from 'js-cookie'

export const signIn = async ({email, password}: {email: string, password: string}) => {
    try {
        const response = await axiosClient.post('/auth/sign_in', {
            email,
            password,
            dev_mode: true,
        }).then((response) => {
            const accessToken = response?.headers["access-token"];
            const uid = response?.headers["uid"]
            const expiry = response?.headers["expiry"]
            const client = response?.headers["client"]
            Cookies.set('accessToken', accessToken);
            Cookies.set('uid', uid);
            Cookies.set('expiry', expiry);
            Cookies.set('client', client);

            return response;
        });

        const authData = response.data;
        return authData

    } catch (error) {
        console.error('Error signing in:', error);
        throw error; 
    }
};
