import React, { Component } from 'react';


function DeleteButton(props) {


    const deleteStudent = (e) => {
        console.log(e.target)
        console.log(`id- ${props.id}`)

        fetch(`http://localhost:3001/students/id/${props.id}`,
            {
                method: 'DELETE',
            }
        ).then((res) => {
            console.log("data deleted")
        })
    }

    return (
        <button onClick={deleteStudent}>Delete</button>
    );

}

export default DeleteButton;
