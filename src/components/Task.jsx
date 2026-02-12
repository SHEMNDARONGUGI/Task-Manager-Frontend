export default function Task({ id, title, completed, onToggle}){
    return(
        <div className="flex items-centre justify-between p-4 bg-white rounded shadow mb-2">
            <span className={completed ? "line-through text-red-500" : ""}>
                {title}
            </span>

            <button className={`px-3 py-1 rounded ${completed ? "bg-green-200" : "bg-blue-200"}`} onClick={() => onToggle(id)}>
                {completed ? "undo" : "Done"}
            </button>
        </div>
    );
}

