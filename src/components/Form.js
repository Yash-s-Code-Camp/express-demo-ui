import React, { Component } from 'react';


class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            age: 0
        }
    }

    handleChange = (e) => {
        // console.log([e.target.name], e.target.value)

        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )


    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target)
        console.log(this.state)

        fetch('http://localhost:3000/students/add',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(this.state)
            }
        ).then((res) => {
            console.log("data added")
        })
    }


    render() {
        return (
            <form method="POST" onSubmit={this.handleFormSubmit}>
                <input name="name" id="name" placeholder="Enter your name" onChange={this.handleChange} /><br />
                <input name="age" id="age" placeholder="Enter your age" onChange={this.handleChange} /> <br />
                <button>Add</button>
            </form>
        )
    }
}


export default Form;