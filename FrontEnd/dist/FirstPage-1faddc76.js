import{x as t,s as e}from"./navbar-8539f17c.js";import{R as i}from"./router-0e2744e9.js";import"./input-string-05256bd8.js";import"./infobox-98da95c6.js";import{a as r}from"./config-0934718f.js";import"./popup-f35f991d.js";customElements.define("first-page",class extends e{render(){return t`
    <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      height: 100vh;
      margin: 0;
      display: flex;
      align-items:center;
      justify-content: center;
      margin-top: 100px;
    }

    .container {
      background-color: #fff;
      height: ${(e=this).pageHeight}px;
      display: flex;
      align-items:center;
      justify-content: center;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      max-width: 1000px;
      margin-top: 100px;
    }
  
  .promo-section{
      padding-top:30px;
      padding-bottom: 30px;
      padding-left:30px;
     
  }
  .login-section {
    padding-right: 30px;
    padding-left: 100px;
    
  }

  .icons {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
  }
  
  .icons div {
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  
  .login-section input {
      width: 100%;
      padding: 20px;
      margin: 10px 0;
      border: 1px solid #ddd;
      border-radius: 4px;
  }
  
  .login-btn, .create-account-btn, .ready-btn {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      color: white;
  }
  
  .login-btn {
      background-color: #1877F2;
  }
  
  .create-account-btn {
      background-color: #42B72A;
  }
  
  .ready-btn {
      background-color: #3B5998;
  }
  
    .button {
        background-color: rgb(6, 28, 113);
        color: #fff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius:6px;
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
    ${e.studentCheckBoxClicked?t`<style>
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


  .row {
    display: flex;
      justify-content: space-between;
      
      margin-bottom: 10px;
      
      width:80%;
  }
  .header{
      text-align: center;
      margin-bottom: 10px;
      width:100%;
  }

  .input-component {
    width: 35%;
     
  }
  .button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }

  </style>
  <div style="display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;">
      <div 
        style=
        "width: 65%;
        height: 65%;
        background-color:white;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        
        "
        >
        
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113); border-bottom-style: solid;text-align:center; padding-bottom: 20px;">Signup</h2>
          
          <div class="header">
          </div>
          <div class="header" style="color: rgb(6, 28, 113);
        font-size: x-large; text-align: left; margin-left: 11%;">
        Login Information
    </div>
    <div style="display: flex; justify-content: center;">
    <div class="row" style="">
              <div class="input-component" style="position: relative;
              top: 10px">
                <input-string
                width=90%;
                placeholder="Email"
                type="email"
                >
                </input-string>
              </div>
              <div class="input-component">
                  <input-password 
                    width=90%
                    placeholder="Password"
                    type="Password">
                  </input-password>
              </div>
              <div class="input-component">
              <input-password
                width=90%
                placeholder="Confirm Password"
              type="Confirm Password"
              >
              </input-password>
        </div>
          </div>
          </div>
          <div class="header" style="color: rgb(6, 28, 113);
        font-size: x-large;text-align: left; margin-left: 11%;">
        Personal Information
    </div>
    <div style="display: flex; justify-content: center;">
        <div class="row">
              <div class="input-component">
                <input-string
                width=90%
                placeholder="First Name"
                type="FirstName"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Last Name"
                type="LastName"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Age"
                type="Age"
                >
                </input-string>
              </div>
          </div>
          </div>
          <div style="display: flex; justify-content: center;">
          <div class="row">
              <div class="input-component">
                    <input-string
                    width=90%
                    placeholder="Phone Number"
                    type="Phone Number"
                    >
                    </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="School"
                type="school"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Years Completed"
                type="year"
                >
                </input-string>
              </div>
          </div>
          </div>
          <div style="display: flex; justify-content: center;">
          <div class="row">
              <div class="input-component">
                <input-string
                width=90%
                placeholder="GPA"
                type="gpa"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="City of residence"
                type="city"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Province"
                type="province"
                >
                </input-string>
              </div>
          </div>
          </div>
          <div style="
          height:18.5px;
          margin-left: 5px;
          color:rgb(6, 28, 113);
            ">
          ${e.error?t`${e.error}`:t``}
          </div>
          <div class="button-container">
            <button class="button" style="" @click=${t=>e.studentuncheckBox(t)}>
              Back
            </button>
            <div>
              <button class="button" style="" @click=${t=>e.routeToHome(t)}>
                Continue
              </button>
            </div>
          </div>
      </div>
    </div>
    </div>
 `:t`
  
  <body>
    <div class="container">
      <!-- Promotional Section -->
      <div class="promo-section">
        ${e.studentCheckBoxClicked?t``:t`<info-box></info-box>`}
      </div>
      <div class="login-section" >
        <div style="
         border: 1.5px solid lightgray;
         border-radius: 10px;
         padding:20px;
        ">
           <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113); border-bottom-style: solid;text-align:center; padding-bottom: 20px;">Login</h2>
           
           <input-string 
             width=97%
             placeholder="Email"
             type="Email">
          </input-string>
           <input-password 
             width=97%
            placeholder="Password"
             type="Password">
          </input-password>
           ${e.error?t`${e.error}`:t``}
           
          <button class="button" id="myButton" style=
          "width: 98.5%;
            margin-left: 5px;
            margin-top: 30px;
            font-size: 15px;
            padding-bottom: 10px;"
          @click=${t=>e.memberLogin(t)}
          >Ready</button>
          <button id="myButton" style=
           "background-color: rgba(250,235,240,255);
            color: black;
            padding: 5px 10px;
            border: none;
            cursor: pointer;
            border-radius: 6px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
            width: 98.5%;
            margin-left: 5px;
            margin-top: 20px;
            font-size: 15px;
            padding-bottom: 10px;
            margin-bottom:20px;
            "
          @click=${t=>e.studentcheckBox(t)}
          >
          Don't have an account? Sign up</button>
        </div>
      </div>
    </div>
    </div>

`}
    `;var e}static get properties(){return{ButtonClicked:{Type:Boolean},studentCheckBoxClicked:{Type:Boolean},employeeCheckBoxClicked:{Type:Boolean},error:{Type:String},employmentButton:{Type:String}}}constructor(){super(),this.ButtonClicked=!1,this.studentCheckBoxClicked=!1,this.employeeCheckBoxClicked=!1,this.error=null,this.UserAttributes={FirstName:"",LastName:"",email:"",school:"",gpa:"",year:"",Password:"",province:"",city:"",events:[],experience:[],skills:[]},sessionStorage.clear(),this.users="",this.currentUser=[],this.inputtedPassword=null,this.employmentButton=!1,this.validCrendentials=!1,this.pageHeight=0,this.addEventListener("custom-string-event",this.handleChangedValue)}connectedCallback(){super.connectedCallback(),this.pageHeight=document.documentElement.scrollHeight}handleChangedValue(t){switch(t.stopPropagation(),t.detail.type){case"Email":this.userEmailLogin(t.detail.value,null);break;case"Password":this.inputtedPassword=t.detail.value,this.UserAttributes.Password=t.detail.value;break;case"Confirm Password":if(t.detail.value!==this.UserAttributes.Password)return void(this.error="Passwords do not match");this.error=null;break;case"Age":this.validateAge(t.detail.value,t.detail.type);break;case"email":this.validateEmail(t.detail.value,t.detail.type);break;case"year":this.validateYearsCompleted(t.detail.value,t.detail.type);break;case"Phone Number":this.validatePhoneNumber(t.detail.value,t.detail.type);break;case"gpa":this.validateGPA(t.detail.value,t.detail.type);break;default:return void this.validateString(t.detail.value,t.detail.type)}}studentcheckBox(t){this.studentCheckBoxClicked=!0,this.error=null,this.currentUser=null,this.inputtedPassword=null}studentuncheckBox(t){this.studentCheckBoxClicked=!1,this.error=null,this.currentUser=null,this.inputtedPassword=null}areAllFieldsFilled(t){for(const e in t)if(t.hasOwnProperty(e)){const i=t[e];if(Array.isArray(i))continue;if("string"==typeof i&&""===i.trim())return!1}return!0}convertValuesToLowerCaseJson(t){for(let e=0;e<t.length;e++){const i=t[e];for(const t in i)i.hasOwnProperty(t)&&"string"==typeof i[t]&&(i[t]=i[t].toLowerCase())}return t}convertAllCharsToLowerCase(t){if("string"==typeof t)return t.toLowerCase()}routeToHome(t){this.areAllFieldsFilled(this.UserAttributes)?(this.error=null,this.UserAttributes.Name=this.UserAttributes.FirstName+" "+this.UserAttributes.LastName,this.UserAttributes.aboutMe="",console.log(this.UserAttributes),this.addUser(this.UserAttributes)):this.error="Invalid Sign up credentials"}memberLogin(t){this.currentUser?this.inputtedPassword?this.currentUser.Password!==this.inputtedPassword?this.error="Incorrect password or email":(sessionStorage.setItem("email",this.currentUser.email),sessionStorage.setItem("role","user"),i.go("/home")):this.error="Please Enter Password":this.error="Please Enter valid Email Address"}validateEmail(t,e){if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(t)){if(!e)return!0;this.error=null,this.UserAttributes[e]=this.convertAllCharsToLowerCase(t)}else{if(!e)return!1;this.error="Invalid Email"}}userEmailLogin(t,e){fetch(`${r}/api?username=${t}`).then((t=>t.json())).then((e=>{this.currentUser.Password=e.Password,this.currentUser.Name=e.Name,this.currentUser.email=t})).catch((t=>{this.error="User Not Found"})),this.validateEmail(t,e)?this.currentUser.email=t:this.error="Invalid Email"}userEmailPassword(t){this.currentUser||(this.error="Please enter an email address")}validateAge(t,e){t>=15&&t<=100?(this.error=null,this.UserAttributes[e]=String(t)):this.error="Please Enter a Valid Age"}validateGPA(t,e){t>=1.5&&t<=4.3?(this.error=null,this.UserAttributes[e]=String(t)):this.error="Please Enter a Valid Age"}validateString(t,e){/^[a-zA-Z \p{P}]*$/u.test(t)?(this.error=null,this.UserAttributes[e]=t):this.error="Invalid Input"}validateYearsCompleted(t,e){t>=0&&t<=4?(this.error=null,this.UserAttributes[e]=String(t)):this.error="Invalid Input"}validatePhoneNumber(t,e){/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(t)?(this.error=null,this.UserAttributes[e]=String(t)):this.error="Invalid Input"}addUser(t){fetch(`${r}/api/users`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{"Account exists under this email"===t.message?this.error="Account exists under this email":(sessionStorage.setItem("email",this.UserAttributes.email),sessionStorage.setItem("role","user"),i.go("/home"))})).catch((t=>{console.error("Error adding user:",t)}))}});
