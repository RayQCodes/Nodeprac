const fs = require('fs')
const { isArgumentsObject } = require('util/types')
const filePath = "./tasks.json"


const loadTasks = () => {
    try {
       const dataBuffer =  fs.readFileSync(filePath)
       const datajson = dataBuffer.toString()
       return JSON.parse(datajson)
    } catch (error) {
        return []
        
    }
}

function saveTasks(tasks){
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync
}
const addTask = (task)=> {
    const tasks = loadTasks()
    tasks.push(tasks)
    saveTasks(tasks)
}

const command = process.argv[2]
const argument = process.argv[3]


 if(command === 'add'){
    addTask(argument)
 }else if (command === "list"){
    listTask()
 }else if (command === "remove"){
    removeTask(parseInt(argument))
 }else{
    console.log("command not found");
 }
