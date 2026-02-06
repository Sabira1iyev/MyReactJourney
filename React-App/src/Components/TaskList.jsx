import TaskShow from "./TaskShow";

function TaskList({ tasks }) {
    return (
        <>
            {tasks.map((task, index) => {
                return <TaskShow key={index} task={task} />;

            })}
        </>
    );
}

export default TaskList;