import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {

    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(task.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);

    };

    const handleSubmit = (id, updatedTitle, updatedTeskDesc) => {
        setShowEdit(false);
        onUpdate(id, updatedTitle, updatedTeskDesc);
    }

    return (
        <div className="task-show">

            {showEdit ? (<TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />) : (
                <div >
                    <h3 className="task-title">Goreviniz</h3>
                    <p>{task.title}</p>
                    <h3 className="task-title">Yapilacaklar</h3>
                    <p>{task.taskDesc}</p>
                    <div>
                        <button className="task-delete" onClick={handleDeleteClick}>Sil</button>
                        <button className="task-edit" onClick={handleEditClick}>Guncelle</button>
                    </div>
                </div>)}
        </div>
    );
}

export default TaskShow;