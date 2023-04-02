import React from "react";
import styles from './../styles.module.css'
import { List, Button, Typography } from 'antd';
import { DeleteOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { taskType } from "../store/toDoState";


type propsType = {
    tasksInWaiting: Array<taskType>
    deleteTask: (id: number) => void
    markTaskDone: (id: number) => void,
}

const { Title } = Typography

const EmptyText = () => {

  return(
    <Title style={{
      color: "white",
  }} level={5}>No tasks to do...</Title>
  )
}

const TasksInWaiting = ({
    tasksInWaiting,
    deleteTask,
    markTaskDone,
}: propsType) => {

    return (
        <>
        <Title style={{
            color: "white",
            marginTop: 50
        }} level={2}>Tasks in Waiting</Title>
         <List
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          locale={{
            emptyText: <EmptyText />
          }}
          style={{
            color: 'white'
          }}
          className={styles.listParent}
          bordered
          dataSource={tasksInWaiting}
          renderItem={(item) => (
            <List.Item style={{
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              {item.value} 
              <div>
              <Button onClick={(event) => deleteTask(item.id)} type="primary" danger icon={<DeleteOutlined />} />
              {" "} | {" "}
              <Button onClick={(event) => markTaskDone(item.id)} type="primary" icon={<CheckSquareOutlined />} />
              </div>
            </List.Item>
          )}
        />
        </>
    )
}



export default TasksInWaiting;