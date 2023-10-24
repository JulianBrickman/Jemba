import { LitElement, html } from 'lit';
import { MyEventsTemplate } from './myEventsTemplate';

export class MyEventsPage extends LitElement {
    render() {
        return MyEventsTemplate(this);
    }

    static get properties() {
        return {
            popupOpen: { type: Boolean },
            eventData: {type: Object},
            user: {type: Object},
            filePopup: { type: Boolean },
            succesfullyUploaded: { type: String },
            submittedEvents: {type: Object},
            filesToDisplay: {type: Array}
        };
    }

    constructor() {
        super();
        this.popupData = {};
        this.popupOpen = false;
        this.previouslyLoaded = false;
        this.eventData= [];
        this.submittedEvents = [];
        this.currentUser = {"email":sessionStorage.getItem('email')};
        this.user = "";
        this.filePopup = false;
        this.succesfullyUploaded = null;
        this.filesToDisplay = [];
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchUserData({"Name":String(this.currentUser)});
    }

    fetchUserData(userData) {
        if (this.eventData.length === 0) {
            fetch(`http://localhost:5001/api/home/?username=${this.currentUser.email}`)
            .then(response => response.json())
            .then(data => {
            // Log the response from the API
            this.currentUser["events"] = data.events;
            this.eventData = this.currentUser.events.filter(event => {
                if (event.submissions.length!==0) {
                  this.submittedEvents.push(event); 
                  return false;
                }
                return true; 
              });
              //for (const index in this.submittedEvents) {
               // this.displayFile(this.submittedEvents[index].submittedFileName,this.submittedEvents[index].id);
              //}
            })
            .catch(error => {
            this.error = "User Not Found"
            });
        }
    }

    togglePopup(e) {
        this.popupOpen = !this.popupOpen
    }

    closePopup(e,id) {
        if (this.succesfullyUploaded === "Submission Sucessful") {
        this.eventData = this.eventData.filter(event => {
            if (event.id === id) {
              this.submittedEvents.push(event); 
              return false;
            }
            return true; 
          });
        }
        this.succesfullyUploaded = null;
        this.filePopup = false;
        this.popupOpen = false;
    }

    setPopupData(event){
        this.popupData = event;
    }

    fileSubmissionButton(e) {
        this.filePopup = true;
    }

    async fileSubmission(e,id) {
        e.preventDefault();
        const fileInput = this.shadowRoot.querySelector('#fileToUpload');
        const file = fileInput.files[0];
        const url = (window.URL.createObjectURL(file));
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank'; 
        link.textContent = String(file.name);
        link.setAttribute('download', file.name);
        this.filesToDisplay.push({link,id});
            if (file) {
                const formData = new FormData();
                formData.append('userId',String(this.currentUser.email));
                formData.append('eventId',String(id));
                formData.append('fileToUpload', file);
                fetch(`http://localhost:5001/user/addSubmission/${this.currentUser.email}`, {
                method: 'POST',
                body: formData,
                })
                    .then(response => response.json())
                    .then(data => {
                        this.succesfullyUploaded = "Submission Sucessful";
                    })
                    .catch(error => {
                        this.succesfullyUploaded = "Application Error";
                        console.error('Error:', error);
                    });
            }
    }

    displayFile(filename,id) {
        const userId = String(this.currentUser+id);
        fetch(`http://localhost:5001/api/files/${userId}/${filename}`)
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.blob(); // Get the file data as a Blob
          })
          .then(blobData => { // Append the file data to the array
            const url = (window.URL.createObjectURL(blobData));
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank'; 
            link.textContent = String(filename);
            link.setAttribute('download', filename);
            this.filesToDisplay.push({link,id});
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
    }
}

    

customElements.define('my-events', MyEventsPage);