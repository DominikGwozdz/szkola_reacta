const prompt = require('prompt');

function getNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

const randomNumber = getNumber();

const schema = {
    properties: {
        yourNumber: {
            description: 'Podaj cyfre od 1 do 10',
            pattern: /^\d+$/,
            message: 'Spróbuj ponownie',
            required: true,
            type: 'integer',
            conform: function (value) {
                return value === randomNumber;
            }
        }
    }
}

prompt.start();

prompt.get(schema, function (err, result) {
    console.log("Udało się");
});
