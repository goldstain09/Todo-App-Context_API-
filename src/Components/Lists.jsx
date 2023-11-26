import React, { useContext, useEffect, useState } from "react";
import "./TodoHome.css";
import arrow from "./Images/arrow.png";
import { RingLoader } from "react-spinners";
import Store from "../Context/Todo.Store";
export default function Lists() {
  // using context for getting data from store
  const cntxt = useContext(Store);

  return (
    <div>
      {
        // reason of this why I'm using this here is that if a user edit a list and
        // then without updating it, delete that particular list then it Delete ...
        // and not gettting update,,,,,, their solution is in another todoapp.....
        cntxt.Edit_is ? (
          <div class="loading d-flex align-items-center justify-content-center">
            <RingLoader color="rgb(114, 114, 114)" />
          </div>
        ) : cntxt.todosLists.length > 0 ? (
          cntxt.todosLists.map((item, indexx) => (
            <div
              key={item + indexx}
              className="Todo_List d-flex justify-content-between"
            >
              <div className="d-flex">
                <img src={arrow} className="Image_Todolist" />
                <p>&emsp;{item}</p>
              </div>
              <div className="d-flex  gap-lg-5 gap-xl-5 gap-md-4 gap-sm-1">
                <button
                  onClick={() => {
                    cntxt.editTodo(item, item + indexx);
                  }}
                  className="edit_btn"
                >
                  <i className="bi bi-pen text-warning"></i>
                </button>
                <button
                  onClick={() => {
                    cntxt.deleteTodo(item + indexx);
                  }}
                  className="delete_btn"
                >
                  <i className="bi bi-trash3 text-danger"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="Todo_List d-flex justify-content-between">
            <div className="d-flex">
              <img src={arrow} className="Image_Todolist" />
              <p>&emsp;Write Down your today's Tasks Man</p>
            </div>
          </div>
        )
      }
    </div>
  );
}
