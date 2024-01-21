import { LitElement} from 'lit';
import { Router } from "@vaadin/router";
import {EnterprisePageTemplate} from './enterprisePageTemplate.js';
import { apiUrl } from '../../config.js';
import { initRouter } from "../../router.js";


export class EnterprisePage extends LitElement {
  render() {
    return EnterprisePageTemplate(this);
  }
  static get properties() {
    return {
        ButtonClicked: { Type: Boolean},
        studentCheckBoxClicked: { Type: Boolean},
        employeeCheckBoxClicked: { Type: Boolean},
        error: { Type: String},
        employmentButton: { Type: String},
    };
    }

    constructor() {
        super();
        this.ButtonClicked = false;
        this.studentCheckBoxClicked = false;
        this.employeeCheckBoxClicked = false;
        this.error = null;
        this.UserAttributes = {};
        this.users = "";
        this.currentUser = null;
        this.userPassword = ""
        this.employmentButton = false;
        this.validCrendentials = false;
        this.addEventListener('custom-string-event', this.handleChangedValue);
    }

    connectedCallback() {
        super.connectedCallback();
        fetch("http://localhost:5001/api/enterprise")
        .then(response => response.json())
        .then(data => {
          this.users = this.convertValuesToLowerCaseJson(data.companyInformation); // Assign the data
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }

    handleChangedValue(e) {
        //e.stopPropagation();
        switch(e.detail.type) {
            case "Email" :
                this.userEmailLogin(e.detail.value,null);
                break;
            case "Password" :
                this.userPassword = e.detail.value;
                this.UserAttributes["Password"] = e.detail.value;
                break;
            case "Confirm Password":
                if (e.detail.value !== this.UserAttributes["Password"] ){
                    this.error = "Passwords do not match";
                    return
                } else {
                    this.error = null;
                }
                break;
            case "Age" :
                this.validateAge(e.detail.value,e.detail.type);
                break;
            case "email" :
                this.validateEmail(e.detail.value,e.detail.type);
                break;
            case "Years Completed":
                this.validateYearsCompleted(e.detail.value,e.detail.type);
                break;
            case "Phone Number":
                this.validatePhoneNumber(e.detail.value,e.detail.type);
                break;
            case "GPA":
                this.validateGPA(e.detail.value,e.detail.type);
                break;
            default: 
                this.validateString(e.detail.value,e.detail.type);
                return;     
        }
    }

    studentcheckBox(e) {
        this.studentCheckBoxClicked = true;
        this.error = null;
        this.currentUser = null;
        this.userPassword = null;
    }

    employeecheckBox(e) {
        this.employeeCheckBoxClicked = true;
    }

    validSignUpCredentials() {
        if (this.currentUser) {
            return true;
        }
        if (this.UserAttributes["Password"]!== undefined && this.UserAttributes["email"]!== undefined) {
            return true;
        } else {
            return false;
        }
    }

    convertValuesToLowerCaseJson(users) {
        for (let i = 0; i < users.length; i++) {
          const user = users[i];
          for (const key in user) {
            if (user.hasOwnProperty(key) && typeof user[key] === 'string') {
              user[key] = user[key].toLowerCase();
            }
          }
        }
        return users;
    }

    convertAllCharsToLowerCase(inputString) {
        if (typeof inputString === 'string') {
          return inputString.toLowerCase();
        }
    }

    routeToHome(e) {
        if (!this.validSignUpCredentials()) {
            this.error = "Invalid Sign up credentials";
            return;
        } else {
            this.error = null;
        }

        sessionStorage.setItem('Name', String(this.UserAttributes["FirstName"]+this.UserAttributes["LastName"]));
        this.addUser(this.UserAttributes);
        Router.go(`/home`);
    }

    memberLogin(e) {
        if (!this.currentUser) {
            this.error = "Please Enter valid Email Address";
            return;
        } else if (!this.userEmailPassword) {
            this.error = "Please Enter Password";
            return;
        }
        if (this.currentUser.Password!== this.userPassword) {
            this.error = "Incorrect password or email";
        } else {
            console.log(this.currentUser.CompanyName);
            sessionStorage.setItem('Name', String(this.currentUser.CompanyName));
            sessionStorage.setItem('role', 'enterprise');
            Router.go(`/home`);
        }
    }

    validateEmail(input,type) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(input)) {
            if (!type) {
                return false; //Used for user login
            }
           this.error = "Invalid Email";
        } else {
            if (!type) {
                return true; //Used for user login
            }
            this.error = null;
            this.UserAttributes["registered-email"] = input;
        }
    }

    userEmailLogin(input,type) {
        if (this.validateEmail(input,type)) {
            let foundUser = null;

            console.log(this.users);

            this.users.forEach(user => {
            if (user.registeredemail === this.convertAllCharsToLowerCase(input)) {
                foundUser = user;
            }
            });

            if (foundUser) {
                this.currentUser = foundUser;
                this.error = null;
            } else {
                this.error = "User not found";
            }
        } else {
            this.error = "Invalid Email";
        }

    }

    userEmailPassword(input) {
        if (!this.currentUser) {
            this.error = "Please enter an email address"
        }
    }

    validateAge(input,type) {
        if (input >= 15 && input <= 100) {
            this.error = null;
            this.UserAttributes[type] = input;
        } else {
            this.error = "Please Enter a Valid Age";
        }
    }

    validateGPA(input,type) {
        if (input >= 1.5 && input <= 4.3) {
            this.error = null;
            this.UserAttributes[type] = input;
        } else {
            this.error = "Please Enter a Valid Age";
        }
    }

    validateString(input,type) {
        const alphabetRegex = /^[a-zA-Z ]*$/;
        if (alphabetRegex.test(input)) {
            this.error = null;
            this.UserAttributes[type] = input;
        } else {
           this.error = "Invalid Input";
        }
    }

    validateYearsCompleted(input,type) {
        if (input >= 0 && input <= 4) {
            this.error = null;
            this.UserAttributes[type] = input;
        } else {
            this.error = "Invalid Input";
        }
    }

    validatePhoneNumber(input,type) {
        const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        if (phoneRegex.test(input)) {
            this.error = null;
            this.UserAttributes[type] = input;
        } else {
           this.error = "Invalid Input";
        }
    }

    buildEmploymentSection() {
        this.employmentButton = true;
    }

    addUser(newUser) {
        console.log(JSON.stringify(newUser));
        fetch("http://localhost:5001/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then(response => response.json())
          .then(data => {
            console.log("User added successfully:");
          })
          .catch(error => {
            console.error("Error adding user:", error);
          });
      }

}

customElements.define('enterprise-page', EnterprisePage);
