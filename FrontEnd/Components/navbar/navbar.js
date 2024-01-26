import { LitElement, html } from 'lit';
import { NavbarTemplate } from './navbarTemplate';
import { Router } from "@vaadin/router";
import { initRouter } from "../../router";
import { apiUrl } from '../../config.js';

export class Navbar extends LitElement {
    render() {
      return NavbarTemplate(this);
    }

    static get properties() {
        return {
            isDropdownOpen : {type: Boolean},
            inMainApplication : {type: Boolean},
            entrepriseMode: {type: Boolean},
            triggerRerender : {type: Number}
        };
        }
        
        constructor() {
            super();
            this.isDropdownOpen = false;
            this.triggerRerender = 0;
            this.addEventListener('custom-string-event', this.handleChangedValue);
            this.inMainApplication = false;
            this.entrepriseMode = false;
            this.currentUser = "";
            this.role = "";
        }

        connectedCallback() {
            super.connectedCallback();
            this.triggerReload();
            //idk what this is
            window.addEventListener("popstate", () => {
                this.triggerReload();
            });
            window.addEventListener("beforeunload", () => {
                this.triggerReload();
              });
        }

        triggerReload() {
            this.triggerRerender+=1;
            var currentURL = window.location.href;
            console.log(currentURL)
            if (currentURL === ("http://localhost:8000/" || "http://localhost:8000/about" || "http://localhost:8000/enterpriseLoginPage" )  ) {
                this.inMainApplication = false;
            } else {
                console.log("here")
                this.inMainApplication = true;
                this.currentUser = sessionStorage.getItem('email');
                this.role = sessionStorage.getItem('role');
                if (this.role === "enterprise") {
                    this.entrepriseMode = true;
                    this.inMainApplication = true;
                        
                } else {
                    this.entrepriseMode = false;
                }
            }
          
        }

        handleChangedValue(e) {
            console.log("here");
        }
        
        toggleDropdown(e){
            this.isDropdownOpen = !this.isDropdownOpen;
        }
        routeToFirst(){
            initRouter();
            Router.go("/");
        }
        routeToHome() {
            var currentURL = window.location.href;
            Router.go("/home");
        }
        routeToProfile(){
            sessionStorage.setItem('searchedUser',this.currentUser);
            Router.go(`/profile`);
        }

        routeToMyEvents(e) {
            Router.go("/myEvents");
        }

        routeToJobPosting(e) {
            Router.go("/createjobposting");
        }
        routeToAbout(e) {
            var currentURL = window.location.href;
            Router.go("/about");
        }
        routeToAppli(e) {
            var currentURL = window.location.href;
            Router.go("/applicantsPage");
        }
}


customElements.define('nav-bar', Navbar);