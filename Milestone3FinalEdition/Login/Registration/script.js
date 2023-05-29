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


         
function auth() {
    var Username = document.getElementById("Username").value;
    var password = document.getElementById("password").value;
    if (Username === "Doma" && password === "123") {
      console.log(Username);
      console.log(password);
      alert("Login successful!");
    /* the setTimeout function is used with a delay of 0 milliseconds to ensure that the success message is displayed before the redirection occurs.*/ 
      setTimeout(function() {
        window.location.href = "../../Client/Home.html";
      }, 0);
    } 
    else if (Username === "algohary" && password === "123") {
      console.log(Username);
      console.log(password);
      alert("Login successful!");
    /* the setTimeout function is used with a delay of 0 milliseconds to ensure that the success message is displayed before the redirection occurs.*/ 
      setTimeout(function() {
        window.location.href = "../../banker/Home.html";
      }, 0);
    } else {
      alert("Invalid information");
    }
  }
  checkAuthentication();
  function checkAuthentication() {
    var urlParams = new URLSearchParams(window.location.search);
    var isAdmin = urlParams.get("kamilia");

    if (isAdmin === "true") { // Check if the URL parameter indicates admin authentication
      setTimeout(function() {
        alert("You are authorized as an admin!");
      window.location.href = "../../Admin/Home.html";
    }, 0); // Redirect to admin page
  }//  else {
    //   alert("You are not authorized as an admin!"); // Show an error message if not authenticated
    // }
  
  }