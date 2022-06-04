import moment from 'moment';

function getTime() {
    return moment().format("DD.MM.YYYY HH:mm:ss");
}

console.log(getTime());