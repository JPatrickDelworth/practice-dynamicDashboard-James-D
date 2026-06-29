const Task =({ taskName, isComplete }) => {
  
    return (
       <ul style={{color: isComplete ? "green": "black"}}>{isComplete ? "✅" : "❌"} {taskName}</ul>
    )  
}

export default Task;
