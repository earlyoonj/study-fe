const API_URL = 'https://jjalbot.com';

export const request = async (url) => {
    const response = await fetch(`${API_URL}${url}`);

    if (!response.ok) {
        throw new Error('API ERROR');
    }
    
    return response.json();
}

export const fetchJjalImages = (keyword) => {
    return request(`/api/jjals?text=${keyword}`);
}