import{x as e,s as t}from"./navbar-ee2a1968.js";import"./popup-4fbae7cf.js";customElements.define("input-password",class extends t{render(){return e`
    <style>
    .inputText {
        border-radius: 5px;
        width: 100%;
        background-color: #faf7f7;
        height: 30px;
        border-style: solid;
        border-color: lightgray;
        margin-left: 5px;
        margin-right: 5px;
        margin-top:10px;
       
    }
    .inputWrapper {
        position: relative;
        width: ${(t=this).width};  /* or any desired width */
        display: inline-block;
    }
    .eyeIcon {
        width: 20px;
        cursor: pointer;
        position: absolute;
        top: 17px;  /* centers the icon vertically */
        right: 0px;  /* distance from the right edge */
    }
    </style>
    <div class="inputWrapper">
    <input 
    type="text" 
    .value=${t.tempValue}
    class="inputText" 
    placeholder=${t.placeholder} 
    @keydown=${e=>t.passwordFormatter(e)}
    @blur=${e=>t.dispatchCustomEvent(e)}
    >
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
    class="eyeIcon"
    left: ${t.width-15}px;
    " @click=${e=>t.showPassword(e)}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12" r="3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> </g></svg>
    </div>

     `;var t}static get properties(){return{value:{type:String},width:{type:String},placeholder:{type:String},type:{type:String},tempValue:{type:String}}}constructor(){super(),this.value="",this.tempValue="",this.width="",this.placeholder="",this.type="",this.passwordRegex=/.*/}connectedCallback(){super.connectedCallback(),this.width||(this.width=250)}passwordFormatter(e){if("Backspace"==e.key)return this.value="",void(this.tempValue="");1===String(e.key).length&&(e.preventDefault(),this.value+=e.key,this.tempValue=this.value.replace(/./g,"*"))}showPassword(e){this.tempValue=this.value}dispatchCustomEvent(e){const t=new CustomEvent("custom-string-event",{detail:{type:this.type,value:this.value},bubbles:!0,composed:!0});this.dispatchEvent(t)}});customElements.define("info-box",class extends t{render(){return e`
    <style>
      .box {
        width: 100%;
        background-color: white;
        border: 1px solid lightgrey;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        flex: 1;
        padding: 5%;
        
      }

      .title {
        font-size: 28px;
        color: 62929E;
      }

      .description {
        font-size: 25px; /* Increase the font size */
        font-weight: bold; /* Make the text bold */
        text-align: left; /* Align the text to the left */
        color: black;
        padding-left:5%
    }


      .features {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:20px;
        padding-left:40px; 
        padding-right:40px; 
        
      }
      .feature {
        text-align: center;
        max-width: 30%;
        font-size: 15px;
      }
      .icon {
        width:130px;
        margin-bottom: 10px;
        color: #0078d4; /* Use your brand color */
      }
      .icons {
        width:150px;
        color: #0078d4; /* Use your brand color */
      }
      
      .button {
        background-color: rgb(6, 28, 113);
        color: #fff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        
      }
    </style>
    <div class="box">
      <p class="description">Showcase Your Skills. <br/> Fast-Track Your Career.</p>
      <div class="features">
        <div class="feature">
        <img src="/Assets/CompetitionB.png" class="icon" alt="Logo">
          <p >Compete for Jobs</p>
        </div>
        <div class="feature">
        <img src="/Assets/ExperienceB.png" class="icon" alt="Logo">
          <p>Gain Experience</p>
        </div>
        <div class="feature">
        <img src="/Assets/RecrutingB.png" class="icon" alt="Logo">
          <p>Simplify Recruiting</p>
        </div>
      </div>
      <!-- <pop-up 
    buttonTitle = "Learn more"
    > -->
    </pop-up>
    </div>
    
  `}static get properties(){return{}}constructor(){super()}connectedCallback(){super.connectedCallback(),console.log("Loaded into the dom")}});
