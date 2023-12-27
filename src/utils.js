

export const getData = (url, method, data) => {
    return new Promise((resolve, reject) => {
        if (!url)
            reject("Url not found");

        const requestOptions = {
            method: method,
            body: "",
            redirect: 'follow',
            headers: {
                "x-api-key": "PMAK-658bdf66983490003203247a-7b25aa7bd120425573c3c8fc7799548088",
                // "Content-Type": "application/json;charset=UTF-8",
                // "Access-Control-Allow-Origin": "*",
                // "mode": "no-cors",
            }
        };

        fetch(url, {method: method})
        .then(response => response.json())
        .then(response => {
            console.log("response", response);
            resolve(response)
        })
    })
}