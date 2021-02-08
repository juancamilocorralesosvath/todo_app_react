import './Todo.css'
function Todo(props){
   const showCompleted = (isCompleted) => {
        return isCompleted 
            ? {'textDecorationLine': 'line-through',
                'margin-left': '20px',        
                } 
            : {'margin-left': '20px' };
    }
    return(
        <div className="todo">
        <input type="checkbox" onClick={()=>props.setCompleted(props.index)}/>
        <span style={showCompleted(props.isCompleted)}>
        {props.text}
        </span>
        </div>
    )
}
export default Todo;