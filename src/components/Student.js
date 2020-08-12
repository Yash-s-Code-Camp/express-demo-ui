import React, { Component } from 'react';
import DeleteButton from './DeleteButton';


class Student extends Component {

    constructor() {
        super()
        this.state = {
            students: []
        }
    }

    async getAllStudents() {
        await fetch('http://localhost:3000/students/all')
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

                            <div key={student._id} style={{ width: ' 100%', backgroundColor: "#1e90ff", marginBottom: 5, padding: 5 }}>
                                <h5>{student.name}</h5>
                                <h6>{student.age}</h6>
                                <DeleteButton id={student._id} />
                            </div>

                        )
                    }
                </div>


            </div >
        );
    }
}

export default Student;
