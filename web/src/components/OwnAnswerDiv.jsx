import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { fetchOwnerQuestions, deleteQuestion } from '../actions/questionActions'

export const OwnAnswerDiv = ({ answer }) => {
  

  const dispatch = useDispatch();
  
  const deleteAnswer = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    swalWithBootstrapButtons.fire({
      title: 'Estás seguro?',
      text: "No podrás recuperar esta respuesta si la eliminas!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Borrada',
          'Su respuesta ha sido borrada.',
          'success'
        )
        dispatch(deleteAnswer(answer))
      }
    })
  }

  return (
    <>
      <div className="answer">
        <p>{answer.answer}</p>
        <button onClick={deleteAnswer} className="btn btn-danger">Delete</button>
      </div>
    </>
  );
};

