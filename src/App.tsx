import * as React from 'react';
import '../node_modules/normalize.css/normalize.css';
import './App.css';

import UserInterface from './interfaces/UserInterface';
import TodoInterface from './interfaces/TodoInterface';

import Header from './components/Header';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import UserPanel from './components/UserPanel';
import TodoContainer from './components/TodoContainer';

interface AppProps {
  
}

interface AppState {
  appName: string;
  currentUser: UserInterface;
}

class App extends React.Component<AppProps, AppState> {  
  constructor(props: AppProps) {
    super(props);
    this.state = {
      appName: 'Conscious',
      currentUser: {
        name: 'Raxx Alderon',
        email: 'example@example.com',
        data: {
          todos: [
            {
              completed: true,
              text: 'Send vibes'
            },
            {
              completed: false,
              text: 'Planted trees'
            },
            {
              completed: false,
              text: 'Watered the trees'
            }
          ]
        }
      }
    };

    this.handleTick = this.handleTick.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleTick(e: any, k: number) {
    let newState: AppState = this.state;
    newState.currentUser.data.todos[k].completed = !newState.currentUser.data.todos[k].completed;

    this.setState(newState);
  }

  addTask(text: string) {
    let newState: AppState = this.state;
    newState.currentUser.data.todos.push({ completed: false, text });

    this.setState(newState);
  }

  deleteTask(todo: TodoInterface) {
    let newState: AppState = this.state;
    newState.currentUser.data.todos = newState.currentUser.data.todos.filter(t => t !== todo);

    this.setState(newState);
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
            deleteTask={this.deleteTask}
          />
        </Body>
      </div>
    );
  }
}

export default App;
