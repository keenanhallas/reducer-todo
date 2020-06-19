export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                todos: [...state.todos, action.payload]
            }
            return state;
        case "TOGGLE_COMPLETED":
            const toggledState = {
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload.id){
                        return {...action.payload, completed: !action.payload.completed};
                    } else {
                        return todo;
                    }
                })
            }
            return toggledState;
        case "CLEAR_COMPLETED":
            let clearedState = {
                todos: state.todos.filter(todo => !todo.completed)
            };
            return clearedState;
        default:
            return state;
    }
}

// if(todo.id === action.payload.id) {
//     return {...action.payload, completed: !action.payload.completed}
// }
// return todo;