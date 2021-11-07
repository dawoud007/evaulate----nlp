const dataposting = async (url = "", info = {}) => {
    
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(info )
    });
    try {
        const Data = await response.json();
     
        return Data;
    } catch (error) {
        console.log('error', error);
    }
};

export {dataposting}
