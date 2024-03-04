//  <<<<<<<<<<<nav-bar>>>>>>>>>>>>>> //
const header = document.querySelector("nav");

const sectionOne = document.querySelector(".sec-one");

const sectionOneOptions = {};

console.log(header);

const sectionOneObserver= new IntersectionObserver(function(entries) {

       entries.forEach(entry=>{
    console.log("enter")
    if(!entry.isIntersecting){
        header.classList.add("bg-light"); 
        header.style.boxShadow = "0px 0px 8px gray"    
    }else{
        header.classList.remove("bg-light");
        header.style.boxShadow = "unset"    
    }
});
},sectionOneOptions);


sectionOneObserver.observe(sectionOne);

// Watch-onClick //

// var show;
// function show_hide(){
//     <div id="password">
//         <h4>hj</h4>
//     </div>
//     if (show==1){
//         document.getElementById('password').style.display="inline";
//         return show = 0;
//     }
// }

// watch-size

let MainImg = document.getElementById('MainImg');
let smallimg = document.getElementsByClassName('small-img')

smallimg[0].onclick = function(){
  MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
  MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
  MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
  MainImg.src = smallimg[3].src;
}
// buy page watch color

// login page js code------------------------------------------------

const form = document.querySelector('#form')
const username = document.querySelector('#username');
const Email = document.querySelector('#Email');
const Password = document.querySelector('#Password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = Email.value.trim();
    const passwordVal = Password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if(usernameVal===''){
        success=false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false;
        setError(Email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(Email,'Please enter a valid email')
    }
    else{
        setSuccess(Email)
    }

    if(passwordVal === ''){
        success= false;
        setError(Password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(Password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(Password)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    return success;

}
//element - password, msg- pwd is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }; 