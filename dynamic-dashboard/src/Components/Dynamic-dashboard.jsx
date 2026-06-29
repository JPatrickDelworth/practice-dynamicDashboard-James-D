import Greeting from "./Greeting";
import TaskList from "./Task-list";

const DynamicDashboard =() => {
  
    const isPremium = false;
    return (
        <section>
            <Greeting isPremium={isPremium} />
            <TaskList />
        </section>  
    )  
}

export default DynamicDashboard;
