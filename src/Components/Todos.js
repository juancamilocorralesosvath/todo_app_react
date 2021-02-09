import { useState } from 'react';
//useEffect ??
import Todo from './Todo';
function Todos(){
    // eslint-disable-next-line
    const [todos, setTodos] = useState(
        [
            {
                text: 'Comprar Chiles Poblanos',
                isCompleted: true,
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
    
    return(
            <>
                <h1>Todo App</h1>
                <h3>Crear Todo</h3>
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
                        />
                    })
                }
            </>
        )
}
export default Todos;