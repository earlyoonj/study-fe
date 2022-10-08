const API_URL = 'https://jjalbot.com';

export const request = (url) => {
    return fetch(`${API_URL}${url}`)
        .then((response) => response.json())
        .catch((e) => {
            console.log(e);
        })
}

export const fetchJjalImages = (keyword) => {
    return request(`/api/jjals?text=${keyword}`);
}