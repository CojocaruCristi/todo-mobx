import React from "react";
import styles from './../styles.module.css'
import { Input, List, Button, Space } from 'antd';
import { taskType } from "../store/toDoState";
import { observer } from "mobx-react"
import TasksInWaiting from "./tasksInWaiting";
import DoneTasks from "./doneTasks";
type propsType = {
    toDoState: {
        tasks: Array<taskType>,
        inputValue: string,
        addNewTask: (taskValue: string) => void,
        deleteTask: (id: number) => void,
        markTaskDone: (id: number) => void,
        changeInputValue: (value: string) => void,
        markTaskAsUndone: (id: number) => void,
        allTasks: Array<taskType>,
        tasksInWaiting: Array<taskType>,
        doneTasks: Array<taskType>,
    }
}

const Todo = (props: propsType) => {

    const {
        toDoState
    } = props;

    return (
        <div className={styles.container}>

        <Space direction="vertical" className={styles.inputSpace}>
          <Space.Compact style={{ width: '100%' }}>
            <Input value={toDoState.inputValue} onChange={(event) => toDoState.changeInputValue(event.target.value)} placeholder="Your task..." className={styles.toDoInput} />
            <Button type="primary" className={styles.inputButton} onClick={(event) => toDoState.addNewTask(toDoState.inputValue)}>Add</Button>
          </Space.Compact>

        </Space>

        <TasksInWaiting  deleteTask={toDoState.deleteTask.bind(toDoState)} markTaskDone={toDoState.markTaskDone.bind(toDoState)} tasksInWaiting={toDoState.tasksInWaiting}  />

        <DoneTasks markTaskAsUndone={toDoState.markTaskAsUndone.bind(toDoState)} deleteTask={toDoState.deleteTask.bind(toDoState)} doneTasks={toDoState.doneTasks} />
      </div>
    )
}


export default observer(Todo);