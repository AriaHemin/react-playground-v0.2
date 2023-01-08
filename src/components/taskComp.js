function Task(props){
    return(
    <>
        <div>
            <input type="checkbox"/><span> {props.todo}</span>
        </div>
    </>)
}

export default Task