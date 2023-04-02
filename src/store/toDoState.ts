
import { action, computed, makeObservable, observable } from "mobx"


export type taskType = {
    value: string
    id: number,
    isDone: boolean,
}

export class TodoState {

    tasks: Array<taskType> = [
        {
        value: "Improve yourself!",
        id: 32141234,
        isDone: false,
    },
    {
        value: "Learn...more and more",
        id: 321415234523234,
        isDone: false,
    },
    {
        value: "i'm not in danger, i am the danger",
        id: 2134234,
        isDone: false,
    },
];
    inputValue: string = '';

    constructor() {
        makeObservable(this, {
            tasks: observable,
            inputValue: observable,
            addNewTask: action,
            deleteTask: action, 
            markTaskDone: action,
            changeInputValue: action,
            markTaskAsUndone: action,
            allTasks: computed,
            tasksInWaiting: computed,
            doneTasks: computed,
        });
    }

    addNewTask(taskValue: string) {
        if(!taskValue.trim()) return;

        const newTask: taskType = {
            value: taskValue,
            id: Math.random(),
            isDone: false
        }

        this.tasks.push(newTask);
        this.inputValue = '';
    }

    deleteTask(id: number) {
       const filteredTasks = this.tasks.filter((task) => {
        if(task.id === id) {
            return false;
        }
        return true
       })
       this.tasks = filteredTasks;
    } 

    markTaskDone(id: number) {
        this.tasks.forEach((el: taskType, index: number) => {
            id === el.id && (el.isDone = true)
        })

    }

    markTaskAsUndone(id: number) {
        this.tasks.forEach((el: taskType, index: number) => {
            id === el.id && (el.isDone = false)
        })

    }

    changeInputValue(value: string) {
        this.inputValue = value;
    }
    

    get allTasks() {
        return this.tasks;
    }

    get tasksInWaiting() {
        const undoneTasks = this.tasks.filter((task) => !task.isDone)

        return undoneTasks;
    }

    get doneTasks() {
        const doneTasks = this.tasks.filter((task) => task.isDone)

        return doneTasks;
    }
}