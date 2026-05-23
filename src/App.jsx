import { Component } from 'react'
import './App.css'
import Form from './components/Form/Form'

class App extends Component {
  state = {
    appUserName: "",
    appSurName: "",
    appCourses: "",
    appAgree: false
  }

  handleSubmit = (evt) => {
    this.setState({
      appUserName: evt.userName,
      appSurName: evt.surName,
      appCourses: evt.courses,
      appAgree: evt.agree
    })
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Form onFormSubmit={this.handleSubmit} />
      </>
    )
  }
}

export default App
