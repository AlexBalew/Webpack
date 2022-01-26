import _ from 'lodash';

async function start() {
    return 'async is working';
}

start().then(console.log)

class Util {
    static id = new Date()
}

console.log('Util id: ', Util.id)
