import Task from './Task';

const TaskList =() => {
  
    const list = [
        {
            task: "Email clients", 
            isComplete: true
        },
        {
            task: "Send memo", 
            isComplete: false
        },
        {
            task: "Go to meeting", 
            isComplete: true
        },
        {
            task: "Type up TPS reports", 
            isComplete: false
        },
        {
            task: "Commit embezzlement", 
            isComplete: false
        }
    ]

    const componentList = list.map(task => <Task taskName={task.task} isComplete={task.isComplete} />)
    
    return (
        <li>
             {componentList}
        </li>  
    )  
}

export default TaskList;
