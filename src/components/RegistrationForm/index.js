import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isSuccess: false,
    firstName: '',
    lastName: '',
    isFNameError: false,
    isLNameError: false,
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState({isSuccess: true})
    } else {
      if (firstName === '') {
        this.setState({isFNameError: true})
      }
      if (lastName === '') {
        this.setState({isLNameError: true})
      }
    }
  }

  onFirstNameChange = event => {
    this.setState({firstName: event.target.value, isFNameError: false})
  }

  onLastNameChange = event => {
    this.setState({lastName: event.target.value, isLNameError: false})
  }

  onFirstNameBlur = () => {
    const {firstName} = this.state
    console.log(firstName)
    if (firstName === '') {
      this.setState({isFNameError: true})
    }
  }

  onLastNameBlur = () => {
    const {lastName} = this.state
    console.log(lastName)
    if (lastName === '') {
      this.setState({isLNameError: true})
    }
  }

  onSubmit = () => {
    this.setState({
      isSuccess: false,
      firstName: '',
      lastName: '',
      isFNameError: false,
      isLNameError: false,
    })
  }

  render() {
    const {
      isSuccess,
      firstName,
      lastName,
      isFNameError,
      isLNameError,
    } = this.state
    const fExtra = isFNameError ? 'error-input' : ''
    const lExtra = isLNameError ? 'error-input' : ''

    return (
      <div className="bg-custom">
        <div className="card">
          <h1 className="head">Registration</h1>
          {isSuccess ? (
            <div className="form-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="img"
              />
              <p className="msg">Submitted Successfully</p>
              <button type="button" className="btn" onClick={this.onSubmit}>
                Submit Another Response
              </button>
            </div>
          ) : (
            <form className="form-con" onSubmit={this.onSubmitForm}>
              <label htmlFor="fName" className="label">
                FIRST NAME
              </label>
              <input
                id="fName"
                type="text"
                value={firstName}
                className={`input ${fExtra}`}
                onChange={this.onFirstNameChange}
                onBlur={this.onFirstNameBlur}
                placeholder="First name"
              />
              {isFNameError && <p className="error">Required</p>}
              <label htmlFor="lName" className="label">
                LAST NAME
              </label>
              <input
                id="lName"
                type="text"
                value={lastName}
                className={`input ${lExtra}`}
                onChange={this.onLastNameChange}
                placeholder="Last name"
                onBlur={this.onLastNameBlur}
              />
              {isLNameError && <p className="error">Required</p>}
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
