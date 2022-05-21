import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';


class ToDoList extends Component {
    state = {
        list: [],
        filteredList: [],
        addTaskMode: false,
        placeholder: 'Search...',
        currentFilter: 'all',
        inputValue: ''
    }

    componentDidMount(){
        this.setState({filteredList:this.state.list})
    }

    addTask = () => {
        const allTasks = JSON.parse(JSON.stringify(this.state.list))
        let task = {
            task:this.state.inputValue,
            isCompleted:false
        }
        allTasks.push(task)
        this.setState({list:allTasks,filteredList:allTasks,inputValue:"",addTaskMode:false,placeholder:'Search...'})
    }
    handleTaskCompletion =(taskIndex)=>{
        const allTasks = JSON.parse(JSON.stringify(this.state.list))
        let selectedTask = allTasks[taskIndex]
        if(selectedTask.isCompleted){
            selectedTask.isCompleted = false
        }else{
            selectedTask.isCompleted = true
        }

        this.setState({list:allTasks,filteredList:allTasks})
    }

    handleInputChange = (e) => {
        const { value, name } = e.target
        const { addTaskMode, list } = this.state
        this.setState({ inputValue: value })
        if (!addTaskMode) {
            const allTasks = JSON.parse(JSON.stringify(list))
            let filteredTasks = allTasks.filter(item => item.task.includes(value))
            this.setState({ filteredList: filteredTasks })
        }
    }

    handleAddTaskMode = () => {
        if (this.state.addTaskMode) {
            this.setState({ addTaskMode: false, placeholder: 'Search...', inputValue: "" })
        } else {
            this.setState({ addTaskMode: true, placeholder: 'Add item', inputValue: "" })
        }
    }

    deleteTask=(index)=>{
        console.log(index)
        const allTasks = JSON.parse(JSON.stringify(this.state.list))
        allTasks.splice(index,1)
        this.setState({list:allTasks,filteredList:allTasks})
    }

    hanldleFilter =(filter)=>{ 
      const allTasks = JSON.parse(JSON.stringify(this.state.list))
      if(filter=='all'){
       this.setState({filteredList:allTasks,currentFilter:filter})
      } 
      if(filter=='completed') {
        let filteredTasks = allTasks.filter(item => item.isCompleted==true)
        this.setState({filteredList:filteredTasks,currentFilter:filter})
      }
      if(filter=='remaining') {
        let filteredTasks = allTasks.filter(item => item.isCompleted==false)
        this.setState({filteredList:filteredTasks,currentFilter:filter})
      }
    }


    render() {
        const { list, filteredList, addTaskMode, placeholder, currentFilter, inputValue } = this.state
        return (
            <>
                <Header />
                <List
                    list={filteredList}
                    addTaskMode={addTaskMode}
                    placeholder={placeholder}
                    inputValue={inputValue}
                    handleInputChange={this.handleInputChange}
                    handleTaskCompletion={this.handleTaskCompletion}
                    deleteTask={this.deleteTask}
                    addTask={this.addTask}
                />
                <Footer
                    noOfItems={list.length}
                    addTaskMode={addTaskMode}
                    currentFilter={currentFilter}
                    handleAddTaskMode={this.handleAddTaskMode}
                    hanldleFilter={this.hanldleFilter}
                />
            </>
        );
    }
}

export default ToDoList;