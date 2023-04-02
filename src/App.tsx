import React from 'react';
import logo from './logo.svg';
import styles from './styles.module.css'
import { Input, List, Button, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { observer } from "mobx-react"
import {TodoState} from "./store/toDoState";
import Todo from './components/toDo';





const toDoState = new TodoState();

function App() {
  
  return (
    <div className={styles.App}>
      <Todo toDoState={toDoState} />
    </div>
  );
}

export default App;
