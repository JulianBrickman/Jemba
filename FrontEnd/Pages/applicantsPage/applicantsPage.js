import { LitElement} from 'lit';
import { Router } from "@vaadin/router";
import {ApplicantsPageTemplate} from './applicantsPageTemplate.js';
import { apiUrl } from '../../config.js';
import { initRouter } from "../../router.js";


export class ApplicantsPage extends LitElement {
  render() {
    return ApplicantsPageTemplate(this);
  }
  static get properties() {
    return {
        exp: {Type: String},
        year: {Type: Number},
        gpa: {Type: Number},
        submissions: {Type: Array},
        filteredSubmissions: {Type: Array},
        liked: {Type: Boolean},
        likedCandidates: {Type: Array},
        filePreview: {Type: Boolean},
        fileUrl: { type: String },
        fileContent: { type: String }
    };
    }

    constructor() {
        super();
        this.exp = "all";
        this.gpa = 0;
        this.year = 0;
        this.submissions = [{name: 'Benjamin Falkner', email:'bfalkner9@gmail.com', gpa:3.0,year:0,exp:'none',liked:false, filePath: "/Assets/360A5.txt"},{name: 'Julia Brickman', email:'juliabrickman@gmail.com ', gpa:4.0,year:4,exp:'internship',liked:false, filePath: "/Assets/360A5.txt"}];
        this.filteredSubmissions = this.submissions; 
        this.liked = false
        this.likedCandidates = []
        this.filePreview = false
        this.fileUrl = '';
        this.fileContent = '';
    }
    filterSubmissions() {
      this.filteredSubmissions = this.submissions.filter(submission => {
        const gpaMatch = this.gpa === 0 || submission.gpa === this.gpa;
        const yearMatch = this.year === 0 || submission.year === this.year;
        const expMatch = this.exp === 'all' || submission.exp === this.exp;
        
        return gpaMatch && yearMatch && expMatch;
      });
      
    }
    filterLiked(e){
      this.liked = !this.liked
      if (this.liked === true){
        this.filteredSubmissions = this.likedCandidates
        
      }else{
        this.filteredSubmissions = this.submissions
        
      }
      this.gpa = 0
      this.year = 0
      this.exp = 'all'
    }
    // HAS TO BE SERVER SIDE
    //
    //!!!!!!!
    addLiked(e, candidate){
      
      candidate.liked = true
      console.log(candidate)
      this.likedCandidates = [...this.likedCandidates, candidate];
    }
    removeLiked(e, candidate) {
      
      candidate.liked = false;
      console.log(candidate)
      this.likedCandidates = this.likedCandidates.filter(c => c !== candidate);
    }
    
    handleXPChange(e, exp){
      this.exp = exp;
      this.filterSubmissions();
    }
   
    handleGPAChange(e, gpa){
        this.gpa = gpa
        this.filterSubmissions();
    }

    handleYearChange(e, year){
        this.year = year
        this.filterSubmissions();
     }

     handleFilePreview(e, filePath){
      this.filePreview = !this.filePreview
     }

     async updateFile(e, submission) {
      try {
        const response = await fetch(submission.filePath);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        this.fileContent = await response.text();
        console.log(this.fileContent)
      } catch (error) {
        console.error('Error fetching file:', error);
        this.fileContent = 'Error loading file content.';
      }
    }
    
    async togglePopup(e, submission) {
      if(!this.filePreview ){
         // Update the fileUrl before fetching the content
        this.fileUrl = submission.filePath;
      
        // Fetch the content only if the popup is currently not showing
        if (!this.filePreview) {
          await this.updateFile(e, submission);
        }
      }

      // Toggle the visibility of the popup after fetching the content
      this.filePreview = !this.filePreview;
    
      // Since properties were updated asynchronously, request an update
      this.requestUpdate();
    }
    
    

    downloadFile() {
      const a = document.createElement('a');
      a.href = this.fileUrl;
      a.download = this.fileUrl.split('/').pop();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
}

customElements.define('applicants-page', ApplicantsPage);
