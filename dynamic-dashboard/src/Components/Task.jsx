const Task =({ taskName, isComplete }) => {
  
    return (
       <ul>{isComplete ? "✅" : "❌"} {taskName}</ul>
    )  
}

export default Task;
