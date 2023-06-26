
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            let data = [...state, action.payload]
            localStorage.setItem('todosLists', JSON.stringify(data));
            return [...data]

        case 'DELETE':
            let dataa = [...state.filter((item, index) => item + index !== action.payload)]
            localStorage.setItem('todosLists', JSON.stringify(dataa));
            return [...dataa]

        case 'UPDATE':
            let dataaa;
            let value = state.map((item, index) => {
                if (item + index === action.payload.unique_ID) {
                    return action.payload.NewItem;
                }
                return item;
            })
            dataaa = value
            localStorage.setItem('todosLists', JSON.stringify(dataaa));
            return [...dataaa]

            
        default:
            return state;
    }
}

export default todoReducer;


