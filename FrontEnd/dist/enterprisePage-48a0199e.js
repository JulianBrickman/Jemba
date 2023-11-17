import{x as e,s as t}from"./navbar-b4489946.js";import{R as r}from"./router-b7720290.js";import"./input-string-82438ba0.js";import"./infobox-3b1d1422.js";import"./popup-ae2bc6fc.js";class i extends t{render(){return e`
    <style>
    .button {
        background-color: rgb(6, 28, 113);
        color: #fff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
    .inputText {
      border-radius: 5px;
      width: 270px;
      background-color: #faf7f7;
      height: 30px;
      border-style: solid;
      border-color: lightgray;
      margin-left: 5px;
      margin-right: 5px;
  }
</style>
    <div style="position: fixed;">
    <div 
    style=
    "width:400px; 
    height: 467px;
    position: relative;
    background-color:whitesmoke;
    border-radius: 20px;
    top: 150px;
    left: 150px;"
    >
      <div
      style=
      " background-color: rgb(6, 28, 113);
      border-radius: 10px;
      height: 50px;
      text-align: center;
      width: 400px;
      font-size: x-large;
      font-family: sans-serif;
      color: white;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);"
      >
      Sign Up</div>
      <div style ="
      position: relative;
      top: 18px;
      width: 300px;
      left: 50px;
      
      ">
      <header style=
        "background-color: rgb(6, 28, 113);
        height: 30px;
        border-radius: 10px;
        color: white;
        font-size: x-large;
        text-align: center;
        padding: 10px 0;
        width: 100%;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);">Already a Member ?</header>

    </div>
    ${(t=this).studentCheckBoxClicked?e`<style>
    .inputText {
      flex: 1;
      border-radius: 5px;
      width: 250px;
      background-color: #faf7f7;
      height: 30px;
      border-style: solid;
      border-color: lightgray;
      margin-left: 5px;
      margin-right: 5px;
  }
  .button {
      background-image: rgb(6, 28, 113);
      color: #fff;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      border-radius: 10px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  .labelClass {
      color: #aeaeae;
  }
  .container {
      width: 800px;
      margin: 0 auto; /* Center the container horizontally */
  }

  .row {
      display: flex;
      margin-bottom: 20px;
  }

  </style>
  <div style="
      height: 600px;
      width: 804px;
      position: relative;
      top: -166px;
      left: -100px;
      background-color: white;
      border-radius: 10px;
      border-style: solid;
      border-color: lightgray;
     " class="container">
     <div style="height: 55px;
     background-color: rgb(6, 28, 113);
     border-radius: 9px;
     border-bottom-left-radius: 0;
     border-bottom-right-radius: 0;
     color: white;
     text-align: center;
     font-size: x-large;
     margin-bottom: 10px;
     border-bottom-style: solid;
     border-color: lightgray;"
 >About You</div>
 <div class="row">
    <div style="
    text-align: center;
    width: 100%;
    color: rgb(6, 28, 113);
    font-size: x-large;"
    >Login Infomation</div>
 </div>
 <div class="row">
          <div class="input-component">
            <input-string
            width=250px;
            placeholder="Email"
            type="email"
            >
            </input-string>
          </div>
          <div class="input-component">
              <input-password 
                width=250
                placeholder="Password"
                type="Password">
              </input-password>
          </div>
          <div class="input-component">
          <input-password
            width=250
            placeholder="Confirm Password"
          type="Confirm Password"
          >
          </input-password>
    </div>
      </div>
      <div class="row">
    <div style="
    text-align: center;
    width: 100%;
    color: rgb(6, 28, 113);
    font-size: x-large;"
    >Company Information</div>
 </div>
     <div class="row">
          <div class="input-component">
            <input-string
            width=250
            placeholder="Company Name"
            type="FirstName"
            >
            </input-string>
          </div>
          <div class="input-component">
            <input-string
            width=250
            placeholder="Industry"
            type="LastName"
            >
            </input-string>
          </div>
      </div>

      <div class="row">
          <div class="input-component">
            <input-string
            width=250
            placeholder="GPA"
            type="GPA"
            >
            </input-string>
          </div>
      </div>
      <div style="
      height:18.5px;
      margin-left: 5px;
      color:rgb(6, 28, 113);
        ">
      ${t.error?e`${t.error}`:e``}
      </div>
      <button class="button" id="'submitButton" @focusout=${e=>t.routeToHome(e)} style=
      "position: relative;
      top: 131px;
      left: 10px;"
      >
      I'll do this later</button>
      <button class="button" @click=${e=>t.routeToHome(e)} style=
      "position: relative;
      top: 131px;
      left: 570px;"
      >
      Continue</button>
  </div>`:e``}
    <div style="
      width: 297px;
      height: 300px;
      border-style: solid;
      border-color: lightgrey;
      position: relative;
      left: 49px;
      top: 13px;
      border-top-style: none;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;">
      <p style="
      margin: 0px;
      position: relative;
      top: 30px;
      text-align: center;
      font-size: x-large;
      color: rgb(6, 28, 113);"
      >Login</p>
      
      <input-string style="position: relative;
      top: 80px;"
        width=278
        placeholder="Email"
        type="Email">
      </input-string>
      <input-password 
      style="position: relative;
      top: 85px;"
        width=278
        placeholder="Password"
        type="Password">
      </input-password>
      <div style="
      height:18.5px;
      margin-left: 5px;
      position: relative;
      top: 88px;
      color: rgb(6, 28, 113);
      text-align: center;
        ">
      ${t.error?e`${t.error}`:e``}
      </div>
      <button class="button" id="myButton" style=
      "position: relative;
      top: 120px;
      left: 73px;
      width: 150px;"
      @click=${e=>t.memberLogin(e)}
      >Login</button>
    </div>
      <button class="button" style=
      "position: relative;
      top: 22px;
      left: 106px;"
      @click=${e=>t.studentcheckBox(e)}
      >
      Enterprise sign up</button>
  </div>
  
</div>

${t.studentCheckBoxClicked?e``:e`<info-box></info-box>`}
    `;var t}static get properties(){return{ButtonClicked:{Type:Boolean},studentCheckBoxClicked:{Type:Boolean},employeeCheckBoxClicked:{Type:Boolean},error:{Type:String},employmentButton:{Type:String}}}constructor(){super(),this.ButtonClicked=!1,this.studentCheckBoxClicked=!1,this.employeeCheckBoxClicked=!1,this.error=null,this.UserAttributes={},this.users="",this.currentUser=null,this.userPassword="",this.employmentButton=!1,this.validCrendentials=!1,this.addEventListener("custom-string-event",this.handleChangedValue)}connectedCallback(){super.connectedCallback(),fetch("http://localhost:5001/api/enterprise").then((e=>e.json())).then((e=>{this.users=this.convertValuesToLowerCaseJson(e.companyInformation)})).catch((e=>{console.error("Error fetching data:",e)}))}handleChangedValue(e){switch(e.detail.type){case"Email":this.userEmailLogin(e.detail.value,null);break;case"Password":this.userPassword=e.detail.value,this.UserAttributes.Password=e.detail.value;break;case"Confirm Password":if(e.detail.value!==this.UserAttributes.Password)return void(this.error="Passwords do not match");this.error=null;break;case"Age":this.validateAge(e.detail.value,e.detail.type);break;case"email":this.validateEmail(e.detail.value,e.detail.type);break;case"Years Completed":this.validateYearsCompleted(e.detail.value,e.detail.type);break;case"Phone Number":this.validatePhoneNumber(e.detail.value,e.detail.type);break;case"GPA":this.validateGPA(e.detail.value,e.detail.type);break;default:return void this.validateString(e.detail.value,e.detail.type)}}studentcheckBox(e){this.studentCheckBoxClicked=!0,this.error=null,this.currentUser=null,this.userPassword=null}employeecheckBox(e){this.employeeCheckBoxClicked=!0}validSignUpCredentials(){return!!this.currentUser||void 0!==this.UserAttributes.Password&&void 0!==this.UserAttributes.email}convertValuesToLowerCaseJson(e){for(let t=0;t<e.length;t++){const r=e[t];for(const e in r)r.hasOwnProperty(e)&&"string"==typeof r[e]&&(r[e]=r[e].toLowerCase())}return e}convertAllCharsToLowerCase(e){if("string"==typeof e)return e.toLowerCase()}routeToHome(e){this.validSignUpCredentials()?(this.error=null,sessionStorage.setItem("Name",String(this.UserAttributes.FirstName+this.UserAttributes.LastName)),this.addUser(this.UserAttributes),r.go("/home")):this.error="Invalid Sign up credentials"}memberLogin(e){this.currentUser?this.userEmailPassword?this.currentUser.Password!==this.userPassword?this.error="Incorrect password or email":(console.log(this.currentUser.CompanyName),sessionStorage.setItem("Name",String(this.currentUser.CompanyName)),sessionStorage.setItem("role","enterprise"),r.go("/home")):this.error="Please Enter Password":this.error="Please Enter valid Email Address"}validateEmail(e,t){if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)){if(!t)return!0;this.error=null,this.UserAttributes["registered-email"]=e}else{if(!t)return!1;this.error="Invalid Email"}}userEmailLogin(e,t){if(this.validateEmail(e,t)){let t=null;console.log(this.users),this.users.forEach((r=>{r.registeredemail===this.convertAllCharsToLowerCase(e)&&(t=r)})),t?(this.currentUser=t,this.error=null):this.error="User not found"}else this.error="Invalid Email"}userEmailPassword(e){this.currentUser||(this.error="Please enter an email address")}validateAge(e,t){e>=15&&e<=100?(this.error=null,this.UserAttributes[t]=e):this.error="Please Enter a Valid Age"}validateGPA(e,t){e>=1.5&&e<=4.3?(this.error=null,this.UserAttributes[t]=e):this.error="Please Enter a Valid Age"}validateString(e,t){/^[a-zA-Z ]*$/.test(e)?(this.error=null,this.UserAttributes[t]=e):this.error="Invalid Input"}validateYearsCompleted(e,t){e>=0&&e<=4?(this.error=null,this.UserAttributes[t]=e):this.error="Invalid Input"}validatePhoneNumber(e,t){/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(e)?(this.error=null,this.UserAttributes[t]=e):this.error="Invalid Input"}buildEmploymentSection(){this.employmentButton=!0}addUser(e){console.log(JSON.stringify(e)),fetch("http://localhost:5001/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{console.log("User added successfully:")})).catch((e=>{console.error("Error adding user:",e)}))}}customElements.define("enterprise-page",i);export{i as EnterprisePage};
