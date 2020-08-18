import React, { useState, useEffect } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


function Details(props) {

    const [students, setStudents] = useState([
        {
            name: '',
            age: 0
        }
    ])
    const getAllStudents = async () => {
        await fetch(`http://localhost:3001/students/id/${props.match.params.id}`)
            .then(res => res.json())
            .then(students => {
                setStudents({ ...students })
                console.log(students)
            })

    }
    useEffect(() => {
        getAllStudents()
    }, [])


    return (
        <div>
            <h1>Detail</h1>

            <div className="card mb-3">
                < div className="card-body" >
                    < h5 className="card-title" > {students[0].name}</h5>
                    <p className="card-text">{students[0].age}</p>
                </div>
            </div >
        </div>
    );
}

export default Details;
