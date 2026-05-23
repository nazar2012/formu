import { Component } from "react";

class Form extends Component {
    state = {
        userName: "",
        surName: "",
        courses: "",
        agree: false
    }

    handleInputChange = (evt) => {
        const { name, value } = evt.currentTarget
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (evt) => {
        evt.preventDefault()
        this.props.onFormSubmit(this.state)
    }

    handleAgree = (evt) => {
        this.setState({
        agree: evt.currentTarget.checked
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleFormSubmit}>
                    <label> Name
                        <input type="text" name='userName' value={this.state.userName} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label> Surname
                        <input type="text" name='surName' value={this.state.surName} onChange={this.handleInputChange} />
                    </label>
                    <br />


                    <label> HTML
                        <input checked={this.state.courses === "html"} type="radio" name="courses" value="html" onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label> JS
                        <input checked={this.state.courses === "js"} type="radio" name="courses" value="js" onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label> REACT
                        <input checked={this.state.courses === "react"} type="radio" name="courses" value="react" onChange={this.handleInputChange} />
                    </label>
                    <br />

                    <label> погоджуюся з умовами договору
                        <input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleAgree} />
                    </label>
                    <br />
                    <button disabled={!this.state.agree} type="submit">отправить</button>
                </form>
            </>
        )
    }
}

export default Form