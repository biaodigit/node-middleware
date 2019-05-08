const http = require('http');
const slice = Array.prototype.slice;

class miniExpress {
    constructor() {
        // 存放中间件列表
        this.routes = {
            all: [],
            get: [],
            post: []
        }
    }

    register(path, callback) {
        const info = {};
        if (typeof path === 'string') {
            info.path = path;
            info.stack = slice.call(arguments, 1)
        } else {
            info.path = '/';
            info.stack = slice.call(arguments, 0)
        }
    }

    use() {

    }

    get() {

    }

    post() {

    }

    listen() {

    }
}

module.exports = () => {
    return new miniExpress()
}