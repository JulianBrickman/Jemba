import { LitElement, html } from 'lit';
import {HomePageTemplate} from './homePage-template';

export class HomePage extends LitElement {
    render() {
      return HomePageTemplate(this);
    }

    static get properties() {
        return {
            popupOpen: {type: Boolean},
            eventData: {type: Object},
            user: {type: Object},
            succesfullyEnrolled: {type: String}
        };
        }
    
        constructor() {
            super();
            this.popupData = {}
            this.popupOpen = false
            this.eventData= [];
            this.currentUser = sessionStorage.getItem('Name');
            this.user = "";
            this.succesfullyEnrolled = null;
        }

        connectedCallback() {
            super.connectedCallback();
            fetch("http://localhost:5001/api/events")
            .then(response => response.json())
            .then(data => {
              this.eventData = data.eventData; // Assign the data // Log the data here
            })
            .catch(error => {
              console.error("Error fetching data:", error);
            });
            this.fetchUserData({"Name":String(this.currentUser)});
        }

        fetchUserData(userData) {
            fetch("http://localhost:5001/api/findUser", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            })
              .then((response) => response.json())
              .then((data) => {
                this.user = data; // Assign the data
              })
              .catch((error) => {
                console.error("Error fetching data:", error);
              });
          }

        togglePopup(e) {
            this.popupOpen = !this.popupOpen
        }

        closePopup(e) {
            this.popupOpen = false;
            this.succesfullyEnrolled = null;
        }

        setPopupData(event){
            this.popupData = event;
        }

        handleEnroll(e,eventID) {
            if (this.isInputMatchingKey(eventID.id,this.user.events)) {
                this.succesfullyEnrolled = " You have already registered for this event";
                return;
            } else {
                this.addEventToUser(this.user.Name, eventID)
                    .then((data) => {
                        this.succesfullyEnrolled = "Sucessfully Regitered";
                    })
                    .catch((error) => {
                        this.succesfullyEnrolled = "Application Error";
                    });
                }
        }

        isInputMatchingKey(input, array) {
            for (const obj of array) {
              if (obj.id === input) {
                return true; 
              }
            }
            return false;
        }

        async addEventToUser(userId, eventId) {
            try {
              const response = await fetch(`http://localhost:5001/addEvent/${userId}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ eventId }),
              });
          
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
          
              const data = await response.json();
              return data;
            } catch (error) {
              console.error('Error:', error);
              throw error;
            }
          }


}


customElements.define('home-page', HomePage);