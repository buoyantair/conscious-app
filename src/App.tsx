import * as React from 'react';
import '../node_modules/normalize.css/normalize.css';
import './App.css';

import IUser from './interfaces/IUser';
import ITodo from './interfaces/ITodo';

import IhandleTick from './interfaces/IhandleTick';
import IaddTask from './interfaces/IaddTask';
import IdeleteTask from './interfaces/IdeleteTask';

import Header from './components/Header';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import UserPanel from './components/UserPanel';
import TodoContainer from './components/TodoContainer';

interface IAppProps {
  
}

interface IAppState {
  appName: string;
  currentUser: IUser;
}

class App extends React.Component<IAppProps, IAppState> {  
  handleTick: IhandleTick = function (this: App, e: any, k: number) {
    let newState: IAppState = this.state;
    newState.currentUser.data.todos[k].completed = !newState.currentUser.data.todos[k].completed;

    this.setState(newState);
  };

  addTask: IaddTask = function(this: App, text: string) {
    let newState: IAppState = this.state;
    newState.currentUser.data.todos.push({ 
      _id: newState.currentUser.data.todos.length,
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
    let newState: IAppState = this.state;
    newState.currentUser.data.todos = newState.currentUser.data.todos.filter(t => t !== todo);

    this.setState(newState);
  };

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      appName: 'Conscious',
      currentUser: {
        name: 'Raxx Alderon',
        email: 'example@example.com',
        data: {
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
          ]
        }
      }
    };

    this.handleTick = this.handleTick.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }  

  EditTask(todo: ITodo) {
    let newState: IAppState = this.state;
    newState.currentUser.data.todos = newState.currentUser.data.todos.map(t => t._id === todo._id ? todo : t);
  }

  render() {
    return (
      <div className="App">
        <Header>
          <h1>{this.state.appName}</h1>
        </Header>
        <Body>
          <Sidebar>
            <UserPanel user={this.state.currentUser}/>
          </Sidebar>
          <TodoContainer 
            todos={this.state.currentUser.data.todos}
            handleTick={this.handleTick}
            addTask={this.addTask}
          />
        </Body>
      </div>
    );
  }
}

export default App;
