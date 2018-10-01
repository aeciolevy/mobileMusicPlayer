const to = promise => promise
    .then(response => [null, response])
    .catch(error => [error, null]);

export default to;
