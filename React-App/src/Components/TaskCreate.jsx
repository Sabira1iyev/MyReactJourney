import { useState } from "react";

function TaskCreate() {

    const [title, setTitle] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
    }

    return (
        <div className="task-create">

            <h3>Lutfen task ekleyiniz</h3>
            <form className="task-form">
                <label className="task-label">Baslik</label>
                <input value={title} onChange={handleChange} className="task-input" />
                <label className="task-label">Task girin</label>
                <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5} />
                <button className="task-button">Olustur</button>
            </form>
        </div>
    )

}

export default TaskCreate;