const baseUrl = "https://norma.nomoreparties.space/api";

export const checkResponse = (res) => {
    // console.log(res);
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(
            `Что-то пошло не так в checkResponse: Ошибка ${res.status} - ${res.statusText}`
        );
    }
};

export const getApiResponse = () => {
    return fetch(`${baseUrl}/ingredients`)
        .then(checkResponse);
};

export const getOrderResponse = (data) => {
    return fetch(`${baseUrl}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
    })
    .catch(checkResponse);
};
