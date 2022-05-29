const menuFormat = () => {
    return new Promise ((resolve, reject) => {
        console.clear();
        console.log("----- TO-DO App -----");
        console.log('Select which format you want to work with:');
        console.log('1. JSON');
        console.log('2. Mongo DB');
        console.log('0. Exit \n');

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Select option: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });
}

module.exports = menuFormat;