import { create } from "domain";
import {useState, useRef, useEffect} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    return(
        <>
        {
        <div>
            <p>{count}</p>
            <button onClick={() => {
                setCount((count) => (count += 1))
                }}>add
            </button>
        </div>
        }
        </>
    );
};

type Task = {
    id: number
    taskName: string,
    state: boolean
}

export const ToDoList = () => {
    const [tasks, setTask] = useState<Task[]>([]);
    const newTask = (taskName: string) => {
        setTask([...tasks,{
            id: tasks.length,
            taskName: taskName,
            state: false
        }])
    };

    const [fil_tasks, set_filTask] = useState<Task[]>([]);
    const filter_Task = (task: Task, state: boolean) => {
        setTask([...tasks,{
            id: task.id,
            taskName: task.taskName,
            state: state
        }])
    };

    function changeState(e: any){
        for(const task of tasks){
            console.log(task.id + " " + e.target.id)
            if(task.id.toString() === e.target.id.toString()){
                console.log("changed!")
                task.state = e.target.checked
                break
            }
        }
        console.log(tasks)
    }
    
    return(
        <>
            <div>
                <input type="text" id="task" name="task" required/>
                <button onClick={() => {
                    const taskName = sendTask()
                    if(taskName !== '' && taskName !== null){
                        newTask(taskName)
                    }
                }}>addTask</button>

                <button onClick={() => {
                    set_filTask(tasks.filter(x => true))
                }}>show ALL</button>

                <button onClick={() => {
                    set_filTask(tasks.filter(x => !x.state))
                }}>show not yet</button>

                <button onClick={() => {
                    set_filTask(tasks.filter(x => x.state))
                }}>show Done</button>

                <ul>
                    {fil_tasks.map(task => (
                        <div>
                            <li key={task.id}>{"id:" + task.id} {task.taskName}  state:{task.state.toString() }
                            <input type="checkbox" name="" id={task.id.toString()} onChange={changeState} />
                            </li>
                        </div>
                    ))}
                </ul>

            </div>
        </>
    )
}

function sendTask(){
    const form = (document.getElementById("task") as HTMLInputElement)
    if(form.value !== ''){
        const taskName = form.value
        form.value = ""
        return taskName
    }else{
        alert('task名が入力されていません')
        return null
    }
}


