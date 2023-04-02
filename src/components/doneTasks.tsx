import React from "react";
import styles from './../styles.module.css'
import { List, Button, Typography  } from 'antd';
import { DeleteOutlined, UndoOutlined } from '@ant-design/icons';
import { taskType } from "../store/toDoState";


type propsType = {
    doneTasks: Array<taskType>
    deleteTask: (id: number) => void
    markTaskAsUndone: (id: number) => void
}

const { Title } = Typography
 
const EmptyText = () => {

    return(
      <Title style={{
        color: "white",
    }} level={5}>No done tasks...</Title>
    )
  }

const DoneTasks = ({
    doneTasks,
    deleteTask,
    markTaskAsUndone,
}: propsType) => {

    return (
        <>
        <Title style={{
            color: "white"
        }} level={2}>Done Tasks</Title>
         <List
          className={styles.listParent}
          bordered
          locale={{
            emptyText: <EmptyText />
          }}
          dataSource={doneTasks}
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
              <Button onClick={(event) => markTaskAsUndone(item.id)} type="primary" icon={<UndoOutlined />} />
              </div>
            </List.Item>
          )}
        />
        </>
    )
}



export default DoneTasks;