import { useState } from 'react';
//useEffect ??
import Todo from './Todo';
function CreateTodo(props){
    const [newTodo, setNewTodo] = useState("");
    return(
        <div style={{
            display:'flex', 
            width: '500px', 
            margin: '10px',
            justifyContent: 'center' 
            }}>
        <input style={{
        width: '300px', 
        marginRight: '2em'
        }} 
        placeholder="agrega un todo!" 
        type="text"
        onChange={(e) => {
            setNewTodo(e.target.value)
            console.log(newTodo)
            }}
        //two way binding 
        //enlazado en ambas direcciones, tanto en la salida como en la entrada
        //value={newTodo}
        />
        <button style={{
            background: 'white',
            padding: '8px',
            borderRadius: '10px'
        }} 
        type='button'
        onClick={() => props.addTodo(newTodo)}
         >Agregar</button>
        </div>
    )
}
function Todos(){
    // eslint-disable-next-line
    const [todos, setTodos] = useState(
        [
            {
                text: 'Comprar Chiles Poblanos',
                isCompleted: false,
            },
            {
                text: 'Bañarme',
                isCompleted: false,
            },
            {
                text: 'Hacer la tarea del Devf',
                isCompleted: false,
            },
        ]
    );
    // ejercicio agregar un boton borrar al component todo, para poder eliminar todos del estsado del compoenee padre
    const setCompleted = (index) => {
        //bueno, estoy teniendo un problemota: no se como hacerle para escoger 
        //el todo que es y hacer que se tache
       /*  
       el segundo parametro es la variable que le indica al useEffect, es como un gatillo, si esa variable cambia, se dispara el useEffect
       si no le pongo un valor de dependencia se va a pegar de cualquier estado
       useEffect(()=>{
            setTodos(todos[index].isCompleted = false)
        }, [])
        console.log(todos[index].isCompleted)
        */
        const myTodos = [...todos];
        const isCompleted = myTodos[index].isCompleted;
        myTodos[index].isCompleted = !isCompleted;
        setTodos(myTodos);
    } 
    const addTodo = (todoText) => {
        const myTodos = [
            ...todos, 
            {text: todoText, isCompleted: false}
        ];
        setTodos(myTodos);
    }
    const deleteTodo = (index) => {
        const myTodos = [...todos];
        /* 
        first try
        const isGonnaBeDeleted = myTodos[index];
        console.log(isGonnaBeDeleted)
        delete myTodos[isGonnaBeDeleted]; */

       /*  second try
       for(let i = 0; i < myTodos.length; i++){
            if(i === index){
                myTodos[i] = '';
            }
        } */
        // third try, la tercera es la vencida 😁 gloria a Dios!
        myTodos.splice(index, 1);
        setTodos(myTodos);
    }
    return(
            <>
                <h1>Todo App</h1>
                <CreateTodo addTodo={addTodo} />
                {/* crear un componente con un input que permita insertar todos */}
                {
                    //ojo, que esto solo lo podemos hacer porque se trata de un arreglo
                    
                    todos.map((todo, index) => {
                        return <Todo
                        key={index}
                        index={index} 
                        text={todo.text} 
                        isCompleted={todo.isCompleted}
                        setCompleted={setCompleted}
                        deleteTodo={deleteTodo}
                        />
                    })
                }
            </>
        )
}
export default Todos;