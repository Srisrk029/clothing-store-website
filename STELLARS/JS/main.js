$(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
      e.preventDefault();
  
      let name = $('#uname').val().trim();
      let email = $('#email').val().trim();
      let msg = $('#message').val().trim();
  
      if (!name || !email || !msg) {
        alert('Please fill all required fields!');
        return;
      }
  
      alert(`Thank you, ${name}! We'll get back to you soon.`);
      this.reset();
    });


    // open modal
    $("#openModal").click(function() {
        $("#MyCollections").fadeIn();
      });
    
      // close modal
      $(".close, .close-btn").click(function() {
        $("#MyCollections").fadeOut();
      });
    
      // close when clicking outside content
      $(window).on('click', function(e) {
        if ($(e.target).is("#MyCollections")) {
          $("#MyCollections").fadeOut();
        }
      });

    $(document).on("keydown", function(e) {
        if (e.key === "Escape") {
          $("#MyCollections").fadeOut();
        }
    });

});


function validateSignUpForm() {
    let email = document.getElementById("s_email").value;
    let password = document.getElementById("s_password").value;
    if(email == "" || password == "") {
        alert("Please fill the required fields");
        return false;
    }
    else if (password.length < 8) {
        alert("Your password must include 8 characters!");
        return false;
    }
    else if(password !== document.getElementById("s_confirm").value){
        alert("Your password doesn't match!");
        return false;
    }
    else {
        alert("Successfully signed up");
        return true;
    }
}
function validateLoginForm(){
    const user_mail = "srixyz@gmail.com";
    const user_password = "Hello@1234";
    const mail = document.getElementById("l_email").value;
    const password = document.getElementById("l_password").value;
    if (!mail || !password){
        alert("Please enter your email and password!");
        return false;
    }
    else if(user_mail !== mail  || user_password !== password){
        alert("Invalid username or password !");
        return false;
    }
    else{
        alert("Successfully logged in");
        return true;
    }
}