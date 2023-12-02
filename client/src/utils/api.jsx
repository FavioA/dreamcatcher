const API_BASE_URL = 'http://localhost:5000'; // Replace with your actual API base URL
export const login = async (username, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        const data = await response.json();
        return data; // Return user data and token
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};
export const fetchDreamMeanings = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/dream-meanings`);
        if (!response.ok) {
            throw new Error('Failed to fetch dream meanings');
        }
        const meanings = await response.json();
        return meanings; // Return dream meanings
    } catch (error) {
        console.error('Error fetching dream meanings:', error);
        throw error;
    }
};
export const saveDreamEntry = async (dreamEntry, token) => {
    try {
        const response = await fetch(`${API_BASE_URL}/dreams`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Assuming JWT Bearer Token
            },
            body: JSON.stringify({ dreamEntry }),
        });
        if (!response.ok) {
            throw new Error('Failed to save dream entry');
        }
        return response.json();
    } catch (error) {
        console.error('Error saving dream entry:', error);
        throw error;
    }
};
export const fetchDreamEntries = async (token) => {
    try {
        const response = await fetch(`${API_BASE_URL}/dreams`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // Assuming JWT Bearer Token
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch dream entries');
        }
        const dreamEntries = await response.json();
        return dreamEntries; // Return dream entries
    } catch (error) {
        console.error('Error fetching dream entries:', error);
        throw error;
    }
};
