import * as React from 'react';

import '../node_modules/normalize.css/normalize.css';
import './App.css';

import ITodo from './interfaces/ITodo';
import IhandleTick from './interfaces/IhandleTick';
import IaddTask from './interfaces/IaddTask';
import IdeleteTask from './interfaces/IdeleteTask';
import IeditTask from './interfaces/IeditTask';
import ItoggleEditTask from './interfaces/ItoggleEditTask';

import Header from './components/Header';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import UserPanel from './components/UserPanel';
import TodoContainer from './components/TodoContainer';
import EditTask from './components/EditTask';

interface IAppProps {
  
}

interface IAppState {
  appName: string;
  name: string;
  email: string;
  todos: ITodo[];
  currentTask: {
    opened: boolean;
    todo: ITodo;
  };
}

class App extends React.Component<IAppProps, IAppState> {  
  handleTick: IhandleTick = function (this: App, e: any, k: number) {
    const newState: IAppState = this.state;
    newState.todos[k].completed = !newState.todos[k].completed;

    this.setState(newState);
  };

  addTask: IaddTask = function(this: App, text: string) {
    let newState: IAppState = this.state;
    newState.todos.push({ 
      _id: newState.todos.length,
      completed: false, 
      text,
      timeElapsed: {
        hours: 0,
        mins: 0,
        secs: 0
      }
    });

    this.setState(newState);
  };

  deleteTask: IdeleteTask = function(this: App, todo: ITodo) {
    const newState: IAppState = this.state;
    newState.todos = newState.todos.filter(t => t !== todo);

    this.setState(newState);
  };

  editTask: IeditTask = function(this: App, todo: ITodo) {
    let { todos} = this.state;
    todos = todos.map(t => t._id === todo._id ? todo : t);
    
    this.setState({...this.state, todos});
  };

  toggleEditTask: ItoggleEditTask = function (this: App, todo: ITodo) {
    const newState: IAppState = this.state;
    newState.currentTask.opened = !newState.currentTask.opened;
    
    newState.currentTask.todo = todo;

    this.setState(newState);
  };

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      appName: 'Conscious',
      name: 'Raxx Alderon',
      email: 'example@example.com',
      todos: [
        {
          _id: 0,
          completed: true,
          text: 'Send vibes',
          timeElapsed: {
            hours: 0,
            mins: 0,
            secs: 0
          }
        },
        {
          _id: 1,
          completed: false,
          text: 'Planted trees',
          timeElapsed: {
            hours: 0,
            mins: 0,
            secs: 0
          }
        },
        {
          _id: 2,
          completed: false,
          text: 'Watered the trees',
          timeElapsed: {
            hours: 0,
            mins: 0,
            secs: 0
          }
        }
      ],

      /*
        This is a dummy todo I have to put it because,
        I am not able to find a way to specify optional types for my interfaces.
      */
      currentTask: {
        opened: false,
        todo: {
          _id: 0,
          completed: false,
          text: 'Fake todo',
          timeElapsed: {
            hours: 0,
            mins: 0,
            secs: 0
          }
        }
      }
    };

    this.handleTick = this.handleTick.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.toggleEditTask = this.toggleEditTask.bind(this);
  }  

  render() {
    return (
      <div className="App">
        {
          this.state.currentTask.opened ? 
            <EditTask 
              toggleEditTask={this.toggleEditTask}
              editTask={this.editTask}
              deleteTask={this.deleteTask}
              opened={this.state.currentTask.opened}
              todo={this.state.currentTask.todo}
            /> : null
        }
        <Header>
          <h1>{this.state.appName}</h1>
        </Header>
        <Body>
          <Sidebar>
            <UserPanel user={this.state}/>
          </Sidebar>
          <TodoContainer 
            todos={this.state.todos}
            handleTick={this.handleTick}
            addTask={this.addTask}
            toggleEditTask={this.toggleEditTask}
          />
        </Body>
      </div>
    );
  }
}

export default App;
