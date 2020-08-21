import React, { Component } from 'react';


class Details extends Component {

    constructor() {
        super()
        this.state = {

            name: '',
            age: 0,
            isEditMode: false,
        }

    }

    deleteStudent = () => {

        fetch(`http://localhost:3001/students/id/${this.props.match.params.id}`, {
            method: 'DELETE',
        }).then(() => {
            document.location.href = "/"
        })
    }
    updateStudent = () => {
        // console.log({ name: this.state.name, age: this.state.age })
        // console.log("updated")
        fetch(`http://localhost:3001/students/id/${this.props.match.params.id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({ name: this.state.name, age: this.state.age })
        }).then(() => {
            this.setState({ isEditMode: !this.state.isEditMode })
        })
    }
    editMode = () => {
        this.setState({ isEditMode: !this.state.isEditMode })
    }
    handleChange = (e) => {
        // console.log([e.target.name], e.target.value)

        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }



    getAllStudents = async () => {
        await fetch(`http://localhost:3001/students/id/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(students => {

                this.setState({ name: students[0].name, age: students[0].age })
                // console.log(students)
            })

    }
    componentDidMount() {
        this.getAllStudents()
    }


    render() {
        return (
            <div>
                <h1>Detail</h1>

                <div className="card mb-3">
                    < div className="card-body" >
                        {this.state.isEditMode
                            ? <input className="form-control mb-4" value={this.state.name} name="name" id="name" placeholder="Enter your name" onChange={this.handleChange} />
                            : < h5 className="card-title" > {this.state.name}</h5>}
                        {this.state.isEditMode ? <input className="form-control mb-4" value={this.state.age} name="age" id="age" placeholder="Enter your age" onChange={this.handleChange} />
                            : <p className="card-text">{this.state.age}</p>}
                        {this.state.isEditMode
                            ? <button className="btn btn-info mr-3" onClick={this.updateStudent}>Update</button>
                            : <button className="btn btn-danger mr-3" onClick={this.deleteStudent}>Delete</button>}
                        {this.state.isEditMode
                            ? <button className="btn btn-secondary mr-3" onClick={this.editMode}>Cancel</button>
                            : <button className="btn btn-info" onClick={this.editMode}>Edit</button>}
                    </div>
                </div >
            </div >
        );
    }
}

export default Details;
