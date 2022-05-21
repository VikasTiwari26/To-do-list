import React from 'react';
import { checkedIcon, searchIcon, trashIcon, uncheckedIcon } from '../../images';
import './List.css'

const List = (props) => {
    const { list, addTaskMode, placeholder,handleInputChange,handleTaskCompletion, deleteTask,addTask,inputValue } = props


    const getCompletedTaskClass = (status) => {
        if (status) {
            return "completed-task"
        } else {
            return ""
        }
    }

    return (
        <div className='main-list-cntnr' >
            <div className='search-bar' >
                <input placeholder={placeholder} value={inputValue} onChange={handleInputChange} />
                {addTaskMode?<img onClick={addTask} className='search-btn'  src={searchIcon} />:null}
            </div>
            <div className='to-do-list' >
                {
                   list.length>0&& list.map((item, index) => (
                        <div className='list-item' key={index} >
                            <div className='task-detail' >
                                {/* <input type="checkbox" checked={item.isCompleted} /> */}
                                <img onClick={()=>handleTaskCompletion(index)} src={item.isCompleted?checkedIcon:uncheckedIcon}  />
                                <p className={getCompletedTaskClass(item.isCompleted)} >{item.task}</p>
                            </div>
                            <div className='delete-task' >
                               <img onClick={()=>deleteTask(index)} src={trashIcon} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default List;