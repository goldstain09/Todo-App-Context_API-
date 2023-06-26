import React, { useContext, useEffect, useState } from 'react';
import './TodoHome.css';
import Store from '../Context/Todo.Store';

export default function Input() {

    // using context for getting data from store
    const cntxt = useContext(Store);

    // using useState for setting the value of input in inputData..
    const [inputData, setInputData] = useState('');

    // it's for popuping an error of empty value on adding empty value
    const [emptyError, setEmptyError] = useState(false);

    const addInputData = () => {
        if (inputData.length > 0) {
            if(cntxt.Edit_is){
                cntxt.updateTodo(inputData, cntxt.DataForEdit.unique_ID);
            }else{
                cntxt.addTodo(inputData); 
            }
        } else {
            setEmptyError(true)
        }

        setInputData('')
    }


    useEffect(()=>{
        setInputData(cntxt.DataForEdit.item)
    }, [cntxt.Edit_is,cntxt.DataForEdit.item , cntxt.DataForEdit.unique_ID])

    return (
        <>
            <div className={emptyError ? 'Input_Div_forError d-flex align-content-center' : 'Input_Div d-flex align-content-center'}>

                <input
                    placeholder='Type here...'
                    type='text'
                    className='Todo_input'
                    autoFocus
                    value={inputData}
                    onChange={(event) => {
                        setInputData(event.target.value);
                    }}
                    // both are same I used two times bcz of learning purpose...
                    onInput={()=>{
                        setEmptyError(false);
                    }}/>
                <button onClick={addInputData} className='Add_btn'><i className={ cntxt.Edit_is ? 'bi bi-journal-arrow-up':'bi bi-plus-square'}></i></button>

            </div>
            {
                emptyError && (
                    <div className='error_Div'>
                        <p className='text-danger'>Please type something before adding...</p>
                    </div>
                )
            }

        </>
    )
}
