function getResponseFromAPI()
{
    return new Promise((resolve, reject) => {
        const success = true;
        setTimeout(() => {
            if (success)
                resolve(true);
            else
            reject(false);
        }, 1000);
    });
}

module.exports = getResponseFromAPI;
