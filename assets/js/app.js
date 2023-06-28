import { auth } from './assets/js/frontend/api.js'
let loggedin = auth.checkStatus()
 

let loginbtn = dox.querySelector('#login')
let signupbtn = dox.querySelector('#signup')
console.log(loginbtn,   signupbtn)
function login(){
    if(!loggedin){
     let emailel = dox.querySelector('[name="email"]');
     let passwordel = dox.querySelector('[name="password"]');
     let email = getState('email');
     let password = getState('password');
     loginbtn.inject('<span class="loading loading-dots loading-md"></span>')

     let emailregex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
        if(emailregex.test(email)){
            auth.login(email,password).then((res)=>{
              window.location.hash = '#/dash'
                
            }).catch((err)=>{
                let error = dox.querySelector('#error');
                emailel.classes.toggle('border-red-500')
                passwordel.classes.toggle('border-red-500')
                error.classes.toggle('hidden')
                error.inject('We could not find an account with that email and password, please try again. or <a class="link text-sky-500" href="/register">Create One</a>')
                error.classes.toggle('text-red-500')
                loginbtn.inject('Login')
                
            })
        }else{
           
            let error = dox.querySelector('#error');
            error.classes.toggle('hidden')
            error.classes.toggle('text-red-500')
            error.inject('Please enter a valid email address')
            emailel.classes.toggle('border-red-500')
            loginbtn.inject('Login')
            setTimeout(()=>{
                emailel.classes.toggle('border-red-500')
                error.classes.toggle('hidden')
            },3000)
        }

    }else{
        console.log('logged in')
    }
}
function signup(){
    if(loggedin){
        window.location.hash = '#/dash'

    }

    let emailel = dox.querySelector('[name="email"]');
    let passwordel = dox.querySelector('[name="password"]');
    let usernameel = dox.querySelector('[name="username"]');
    let email = getState('email');
    let password = getState('password');
    let username = getState('username');
    
    signupbtn.inject('<span class="loading loading-dots loading-md"></span>')
    let emailregex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
    let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let usernameregex = /^[a-zA-Z0-9]{3,20}$/;
    if(emailregex.test(email) &&   usernameregex.test(username)){
        auth.signup(email,password,username).then((res)=>{
            if(res.data.data.email){
                emailel.classes.toggle('border-red-500')
                let error = dox.querySelector('#error');
                error.classes.toggle('hidden')
                error.inject('Email already exists, please try again. or <a class="link text-sky-500" href="#/login">Login</a>')
                signupbtn.inject('Signup')
                setTimeout(()=>{
                    emailel.classes.toggle('border-red-500')
                    error.classes.toggle('hidden')
                },3000)
            }else if (res.data.data.username){
                usernameel.classes.toggle('border-red-500')
                let error = dox.querySelector('#error');
                error.classes.toggle('hidden')
                error.inject('Username already exists, please try again. or <a class="link text-sky-500" href="#/login">Login</a>')
                signupbtn.inject('Signup')
                setTimeout(()=>{
                    usernameel.classes.toggle('border-red-500')
                    error.classes.toggle('hidden')
                }, 3000)
            }
            else if (res.data.data.username && res.data.data.email){
                usernameel.classes.toggle('border-red-500')
                emailel.classes.toggle('border-red-500')
                error.classes.toggle('hidden')
                error.inject('Both Email and Username already exists, please try again. or <a class="link text-sky-500" href="#/login">Login</a>')
                signupbtn.inject('Signup')
                setTimeout(()=>{
                    usernameel.classes.toggle('border-red-500')
                    emailel.classes.toggle('border-red-500')
                    error.classes.toggle('hidden')
                },3000)
            } else if (res.data.data.password){
                passwordel.classes.toggle('border-red-500')
                let error = dox.querySelector('#error');
                error.classes.toggle('hidden')
                error.inject('Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters')
                signupbtn.inject('Signup')
                setTimeout(()=>{
                    passwordel.classes.toggle('border-red-500')
                    error.classes.toggle('hidden')
                    
                },3000)
            } 
            else{
                window.location.hash = '#/login'
            }
            
        }).catch((err)=>{
             signupbtn.inject('Signup')
            
        })
    }else{
        if(!emailregex.test(email)){
            emailel.classes.toggle('border-red-500')
            signupbtn.inject('Signup')

        }
        if(!passwordregex.test(password)){
            passwordel.classes.toggle('border-red-500')
            signupbtn.inject('Signup')
        }
         
    }

}
if(loginbtn){
    loginbtn.on('click',login)
}else{
    signupbtn.on('click',signup)
}

 