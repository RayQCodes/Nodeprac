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


const listTask = () => {
    const tasks = loadTasks()
    tasks.forEach((task,index) => console.log(`${index + 1} - ${task.task}`))     
}



function saveTasks(tasks){
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJSON)
}
const addTask = (task)=> {
    const tasks = loadTasks()
    tasks.push({task})
    saveTasks(tasks)
    console.log("task added" , task)
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
