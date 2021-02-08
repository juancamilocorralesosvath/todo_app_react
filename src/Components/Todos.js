import { useState } from 'react';
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
        //setTodos(todos[index].isCompleted)
        console.log('hola desde el padre!', index);
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