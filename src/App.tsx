import * as React from 'react';

import '../node_modules/normalize.css/normalize.css';
import './App.css';

import ITodo from './interfaces/ITodo';
import IhandleTick from './interfaces/IhandleTick';
// import IaddTask from './interfaces/IaddTask';
import IdeleteTask from './interfaces/IdeleteTask';
import IeditTask from './interfaces/IeditTask';
import ItoggleEditTask from './interfaces/ItoggleEditTask';

import Body from './components/Body';
import Sidebar from './components/Sidebar';
import UserPanel from './components/UserPanel';
import TodoContainer from './components/TodoContainer';
import EditTask from './components/EditTask';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

interface IAppProps {
}

interface IAppState {
  name: string;
  email: string;
  todos: ITodo[];
  currentTask: {
    opened: boolean;
    todo: ITodo;
  };
  interval: any;
  secs: number;
  records: any;
}

class App extends React.Component<IAppProps, IAppState> {  
  todosDbRef: any;
  handleTick: IhandleTick = (e: any, k: number) => {
    const newState: IAppState = this.state;
    newState.todos[k].completed = !newState.todos[k].completed;

    this.setState(newState);
  }

  deleteTask: IdeleteTask = (todo: ITodo) => {
    const newState: IAppState = this.state;
    newState.todos = newState.todos.filter(t => t !== todo);

    this.setState(newState);
  }

  editTask: IeditTask = (todo: ITodo) => {
    let { todos } = this.state;
    todos = todos.map(t => t._id === todo._id ? todo : t);
    
    this.setState({todos});
  }

  toggleEditTask: ItoggleEditTask = (todo: ITodo) => {
    const {currentTask} = this.state;
    
    this.setState({ currentTask : {
      todo,
      opened: !currentTask.opened
    }});
  }

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      name: 'Raxx Alderon',
      email: 'example@example.com',
      todos: [
        
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
          ticking: false,
          interval: null,
          timeElapsed: 0
        }
      },
      interval: null,
      secs: 0,
      records: []
    };

    this.toggleTimer = this.toggleTimer.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  addTask (text: string) {
    let newState: IAppState = this.state;
    const newTodo = { 
      _id: newState.todos.length,
      completed: false, 
      text,
      ticking: false,
      interval: null,
      timeElapsed: 0
    };
    newState.todos.push(newTodo);

    this.setState(newState);
  }

  toggleTimer(i: number) {
    let nextTodo = {...this.state.todos[i]};
    
    if (nextTodo.interval && nextTodo.ticking) {
      clearInterval(nextTodo.interval);
      nextTodo.ticking = false;
      nextTodo.interval = null;
    } else if (!nextTodo.interval) {
      const interval = setInterval(() => {
        nextTodo = {...this.state.todos[i]};
        nextTodo.timeElapsed += 1;
        const { todos } = this.state;
        todos[i] = nextTodo;
        this.setState({ todos });
      }, 1000);
      nextTodo.interval = interval;
      nextTodo.ticking = true;
    }

    const { todos } = this.state;
    todos[i] = nextTodo;
    this.setState({ todos });
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
        <Body>
          <Sidebar>
            <UserPanel 
              user={{
                displayName: this.state.name,
              }}
            />
          </Sidebar>
          <TodoContainer>
            <TodoInput
              addTask={this.addTask}
            />
            <TodoList>
              {
                this.state.todos.map((todo, i) => (
                  <Todo 
                    key={i}
                    index={i}
                    todo={todo}
                    handleTick={this.handleTick}
                    toggleEditTask={this.toggleEditTask}
                    toggleTimer={this.toggleTimer}
                  />
                ))
              }
            </TodoList>
          </TodoContainer>
        </Body>
      </div>
    );
  }
}

export default App;
