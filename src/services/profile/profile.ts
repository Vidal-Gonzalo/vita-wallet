import axiosClient from '../../api/axiosClient';

export const getProfileData = async () => {
    try {
        const response = await axiosClient.get('/profile');

        const authData = response.data;
        return authData?.data

    } catch (error) {
        console.error('Error in:', error);
    }
};

export const getProfileTransactions = async () => {
    try {
        const response = await axiosClient.get('/transactions');

        const transactions = response.data;
        return transactions
    } catch (error) {
        console.error('Error in:', error);
    }
}