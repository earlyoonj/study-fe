const API_URL = 'https://todo-api.roto.codes';

export const request = async (url, options) => {
    const response = await fetch(`${API_URL}${url}`, options);

    if (!response.ok) {
        throw new Error('API ERROR');
    }

    return response.json();
};

export const getTodos = (userId) => {
    return request(`/${userId}`);
};

export const addTodo = (userId, content) => {
    return request(`/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
    });
};

export const removeTodo = (userId, todoId) => {
    request(`/${userId}/${todoId}`, {
        method: 'DELETE',
    });
};

export const removeAllTodo = (userId) => {
    request(`/${userId}/all`, {
        method: 'DELETE',
    });
};

export const toggleTodo = async (userId, todoId) => {
    request(`/${userId}/${todoId}/toggle`, {
        method: 'PUT',
    });
};
