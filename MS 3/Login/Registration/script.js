const wrapper = document.querySelector('.wrapper');
const LoginLink = document.querySelector('.login-link');
const RegisterLink = document.querySelector('.register-link');
const btn = document.querySelector('.btnLogin');
const close = document.querySelector('.icon-close');
const login = document.querySelector('.btn');

RegisterLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

LoginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});


btn.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});


close.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
/*login.addEventListener('click', () => {
    window.location.href = "C:\Users\HP\Desktop\SE_FrontEnd\Client\Client.html";
});*/


         
         function auth(){
             var Username = document.getElementById("Username").value;
             var password = document.getElementById("password").value;

         if(Username === "algohary" && password === "123")
         {
             window.location.replace("Banker\banker.html");   
             console.log(Username) ;
             console.log(password) ;
            alert("login successfuly");
        
        }          
        else {
            alert("Invalid information");
             return ;
           }
           
       }