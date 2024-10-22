import Cookies from "js-cookie";

export const getCredentials = () => {
    const accessToken = Cookies.get('accessToken');
    const uid = Cookies.get('uid');
    const expiry = Cookies.get('expiry');
    const client = Cookies.get('client');

    if(accessToken && uid && expiry && client) {
        return {
            accessToken,
            uid,
            expiry,
            client
        }
    }
    return null
};

export const logout = () => {
    Cookies.remove('accessToken')
    Cookies.remove("uid")
    Cookies.remove("expiry")
    Cookies.remove("client");
}