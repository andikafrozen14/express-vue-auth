import axios from 'axios';

export const register = async (name, username, password) => {
    try {
        const payload = { name, username, password };
        await axios.post('http://localhost:5000/api/auth/register', payload);
        return await login(username, password);
    } catch (error) {
        console.error('Error registering', error);
    }
}

export const login = async (username, password) => {
    try {
        const payload = { username, password };
        const response = await axios.post('http://localhost:5000/api/auth/login', payload);
        
        const token = response.data.token;
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        console.error('Error logging in', error);
    }
}

export const profile = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data.name;
    } catch (error) {
        console.error('Error fetching user info', error);
    }
}