const mongoose = require('mongoose');

const showTodoAppMenu = require('./menu/showtodoappmenu');
const showMenu = require('./menu/showMenu');
const menuFormat = require('./menu/menuFormat');

let  listAll, searchById, readData;
let {updateTask, showTaskState} = require('./controllers/mongo_updatetask.js');
let {addTask, deleteTask} =  require('./controllers/mongo_addtask.js');  

const pause = () => { 
    return new Promise ((resolve, reject) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('\n Press ENTER to continue\n', (opt) => {
            readline.close();
            resolve();
        });
    });
}

const menuMain = async (jsonMongo) => {
    let opt = '';
    do {    
        opt = await showTodoAppMenu();
        switch (opt) {
            case '1':
                const userName = await showMenu('Write your username: ');
                const description = await showMenu("Write task's description: ");
                addTask(userName, description);
            break; 
            case '2':
                const id2 = await showMenu('Write ID to update: ');
                if (jsonMongo === '1') {
                    if (searchById(readData(), id2) === -1) {
                        console.log(`Task ${id2} doesn't exist.`);                    
                    } else {
                        const state = await showMenu('Select pending/executing/completed: ');
                        updateTask(id2, state);
                    }    
                } else if (jsonMongo === '2') {
                    if (await searchById(id2) === null) {
                        console.log(`Task ${id2} doesn't exist.`);                    
                    } else {
                        const state = await showMenu('Select pending/executing/completed: ');
                        updateTask(id2, state);
                    }    
                }
            break;
            case '3':
                const id3 = await showMenu('Write ID to delete: ');
                deleteTask(id3);
            break;
            case '4':
                const id4 = await showMenu('Write ID to list: ');
                listTask(id4);
            break;          
            case '5':
                listAll();
            break;
            case '6':
                const id6 = await showMenu('Write ID to show state: ');
                showTaskState(id6);
            break;
        }
        if (opt !== '0') await pause();
    } while (opt !== '0');        
};

(async () => {
    let opt = ''; 
    opt = await menuFormat();
    switch (opt) {
        case '1': //JSON selected
            addTask = require('./controllers/addtask');
            listTask = require('./controllers/listtask');  
            listAll = require('./controllers/listall'); 
            updateTask = require('./controllers/updatetask');  
            deleteTask = require('./controllers/deletetask');  
            showTaskState = require('./controllers/showtaskstate');  
            searchById = require('./controllers/searchbyid');  
            readData = require('./controllers/readData');  
            menuMain(opt);
        break; 
        case '2': //Mongo DB selected
            main().catch(err => console.log(err));
            async function main() {
                await mongoose.connect('mongodb://localhost:27017/todoDB'); 
            }
            searchById = require('./controllers/mongo_searchbyid.js'); 
            menuMain(opt);
        break;
    
    }     
})();