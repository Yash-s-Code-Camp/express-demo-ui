import React, { Component } from 'react';
import DeleteButton from './DeleteButton';

class Student extends Component {

    constructor() {
        super()
        this.state = {
            students: [],
        }
    }

    async getAllStudents() {
        await fetch('http://localhost:3001/students/all')
            .then(res => res.json())
            .then(students => this.setState({ students }))
    }

    componentDidMount() {
        setInterval(() => {
            this.getAllStudents()
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>Students ({this.state.students.length}) </h1>
                <div >
                    {
                        this.state.students.map(student =>

                            <div className="card mb-3">

                                < div className="card-body" >
                                    < h5 className="card-title" > {student.name}</h5>
                                    <p className="card-text">{student.age}</p>
                                    <a href={`/detail/${student._id}`} className="btn btn-primary">Details</a>
                                </div>
                            </div >
                        )
                    }
                </div>
            </div >
        );
    }
}

export default Student;
