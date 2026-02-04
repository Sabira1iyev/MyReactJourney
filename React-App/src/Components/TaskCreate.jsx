function TaskCreate() {
    return (
        <div className="task-create">

            <h3>Lutfen task ekleyiniz</h3>
            <form className="task-form">
                <label className="task-label">Baslik</label>
                <input className="task-input" />
                <label className="task-label">Task girin</label>
                <textarea className="task-input" rows={5} />
                <button className="task-button">Olustur</button>
            </form>
        </div>
    )

}

export default TaskCreate;