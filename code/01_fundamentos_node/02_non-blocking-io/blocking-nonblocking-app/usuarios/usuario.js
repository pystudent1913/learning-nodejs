function getUserSync(id) {
    const startPoint = new Date().getTime()
    while (new Date().getTime() - startPoint <= 3000) {
        // esperando ...
    }

    return {
        id,
        nombre: `Usuario${ id }`
    };
}

function getUser(id, callback) {
    let usuario = {
        id,
        nombre: `Usuario${ id }`
    }

    setTimeout(() => callback(usuario), 3000);

}

module.exports = {
    getUserSync,
    getUser
}