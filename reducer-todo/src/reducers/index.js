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
        case "TOGGLE_COMPLETED":
            return state;
        case "REMOVE_COMPLETED":
            return state;
        default:
            return state;
    }
}