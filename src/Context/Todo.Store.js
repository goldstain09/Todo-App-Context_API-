import { createContext, useReducer, useState } from "react";
import todoReducer from "./Todo.Reducer";
import React from 'react';




// getting values from local storage
const gettingVAlueLocalStorage = () => {
    let todos = JSON.parse(localStorage.getItem('todosLists'));

    if (todos) {
        return todos
    } else {
        return ['This is one of my decent Projects',
            'A To-Do Application',
            'You can easily add, edit, & delete.',
            "& don't worry all these will not going anywhere after refreshing..."]
    }
}
// Initial state or values...
const Init = {
    todosLists: gettingVAlueLocalStorage(),
    DataForEdit: {},
    Edit_is: false,
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { },
    editTodo: () => { }
}
const Store = createContext(Init);
export default Store;

const StoreProvider = (props) => {

    const [todosLists, dispatch] = useReducer(todoReducer, Init.todosLists)

    const addTodo = (item) => {
        
        dispatch({
            type: 'ADD',
            payload: item
        })
    }
    const deleteTodo = (unique_ID) => {
        dispatch({
            type:"DELETE",
            payload:unique_ID
        })
    }

    // we have to declare here by useState for sending these values...
    const [DataForEdit, setDataForEdit] = useState({item:'',unique_ID:''});
    const [Edit_is,setEdit_is] = useState(false)
    const editTodo = (item , unique_ID) => {
        setDataForEdit({item:item , unique_ID:unique_ID});
        setEdit_is(true);
        dispatch({
            type:'EDIT',
            payload:{
                item, unique_ID
            }
        })
    }
    const updateTodo = (NewItem, unique_ID) => {
        setDataForEdit({item:'' , unique_ID:''});
        setEdit_is(false)
        dispatch({
            type:'UPDATE',
            payload:{
                NewItem,unique_ID
            }
        })
    }


    return <Store.Provider value={{...Init , todosLists:[...todosLists] ,addTodo , editTodo, deleteTodo, updateTodo, Edit_is, DataForEdit }}>
        {props.children}
    </Store.Provider>

}

export {StoreProvider}