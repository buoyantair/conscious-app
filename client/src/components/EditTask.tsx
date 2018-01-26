/**
 * This component appears when ever the user edits a task.
 * The primary goal of this component is to provide a sleek and 
 * smooth experience while editing their Task.
 * 
 * The user can delete and update their tasks.
 */

import * as React from 'react';
import styled from '../styled-components';

import ITheme from '../interfaces/ITheme';
import ItoggleEditTask from '../interfaces/ItoggleEditTask';
import IdeleteTask from '../interfaces/IdeleteTask';
import ITodo from '../interfaces/ITodo';
import IeditTask from '../interfaces/IeditTask';

import fadeInAnim from './animations/fadeInAnim';
import fadeOutAnim from './animations/fadeOutAnim';

import InputGroup from './InputGroup';
import Button from './Button';

interface IeditTaskProps {
    className?: string;
    theme: ITheme;
    toggleEditTask: ItoggleEditTask;
    editTask: IeditTask;
    deleteTask: IdeleteTask;
    opened: boolean;
    todo: ITodo;
}

interface IeditTaskState {
    todo: ITodo;
}

interface IonChange {
    (e: any): void;
}

interface IpageEvent {
    (e: any): void;
}

class EditTask extends React.Component<IeditTaskProps, IeditTaskState> {

    onChange: IonChange = (e: any) => {
        this.setState({ todo: { ...this.state.todo, text: e.target.value } });
    }

    Save: IpageEvent = (e: any) => {
        e.preventDefault();
        this.props.editTask(this.state.todo);
        this.props.toggleEditTask();
    }

    Delete: IpageEvent = (e: any) => {
        e.preventDefault();
        this.props.toggleEditTask().then(() => {
           this.props.deleteTask(this.props.todo);
        });
        
    }

    constructor(props: IeditTaskProps) {
        super(props);
        this.state = {
            todo: this.props.todo
        };
    }

    render () {
        return (
            <div className={this.props.className}>
                <i 
                    className="ion-ios-close-outline close-edit" 
                    onClick={(e) => this.props.toggleEditTask()}
                />
                <div className="task-settings aside">
                  <div className="heading">
                    <h1>Edit your task here</h1>
                    <p>
                        You can edit your tasks, adjust timing and write task-specific goals here
                    </p>
                  </div>
                  <form 
                    onSubmit={this.Save}
                  >
                      <InputGroup>
                        <label>Task</label>
                        <input 
                            type="text" 
                            onChange={this.onChange}
                            value={this.state.todo.text}
                        />
                      </InputGroup>
                      <div className="align-around">
                        <Button
                            onClick={this.Delete}
                        >
                            Delete
                        </Button>
                        <Button 
                            primary={true}
                            onClick={this.Save}
                            type="submit"
                        >
                            Save
                        </Button>
                      </div>
                  </form>
                </div>
                <div className="task-details aside">
                  <div className="heading">
                    <h1>Details</h1>
                    <p>
                        Be sure to add in some extra details to help you out with managing your day!
                    </p>
                  </div>
                </div>
            </div>
        );
    }
}

export default styled(EditTask)`
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #FFF;
    z-index: 100;
    transition: all 0.5s;
    color: ${(props: IeditTaskProps) => props.theme.colors.OUTER_SPACE};

    ${(props: IeditTaskProps) => `
        ${
            props.opened ? `
                display: grid;
                
                animation: ${fadeInAnim} 0.5s;
            ` : `
                animation: ${fadeOutAnim} 0.5s;
                display: none;
            `
        }
    `}

    grid-template-columns: auto 400px auto 400px auto;
    grid-template-rows: 50px auto 50px;

    > .task-settings {
      grid-column: 2;
      grid-row: 2;
    }

    > .task-details {
      grid-column: 4;
      grid-row: 2;
    }

    > .aside {
      display: grid;
      grid-gap: 15px;
      grid-template-columns: auto;
      grid-template-rows: 100px 150px 50px 50px;
      font-family: 'Roboto', sans-serif;
      color: ${(props: IeditTaskProps) => props.theme.colors.AUROMETAL_SAURUS};
      
      > .heading {
        > h1 {
            font-size: 30px;
            font-weight: 100;
            color: ${(props: IeditTaskProps) => props.theme.colors.OUTER_SPACE};
        }
        > p {
            font-size: 15px;
        }
      }

      > form .align-around {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            margin: 10px auto;
        }
    }

    > .close-edit {
        position: absolute;
        top: 50px;
        right: 50px;
        color: ${(props: IeditTaskProps) => props.theme.colors.SILVER_SAND};
        font-size: 50px;
        transition: all 0.5s;
        &:hover {
            cursor: pointer;
            ${(props: IeditTaskProps) => `
                color: ${props.theme.colors.CO_RED};
            `};
        }
    }
`;