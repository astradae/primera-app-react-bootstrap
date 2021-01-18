export const TaskBanner = props => (
    <h4 className="bg-primary text-white text-center p-4">
        {props.userName}´s Task App (te faltan {props.taskItems.filter(t => !t.done).length} tarea/s cape)
    </h4>
)