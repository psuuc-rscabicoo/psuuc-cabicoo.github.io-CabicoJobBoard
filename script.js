$(document).ready(function() {
    // Hide alert messages
    $(".alert").hide();
  
    // Switch to the registration form
    $("#register-link").click(function() {
      $("#login-box").hide();
      $("#register-box").show();
    });
  
    // Switch to the login form
    $("#login-link").click(function() {
      $("#register-box").hide();
      $("#login-box").show();
    });
  
    // Switch to the forgot password form
    $("#forgot-link").click(function() {
      $("#login-box").hide();
      $("#forgot-box").show();
    });
  
    // Switch back to the login form from the forgot password form
    $("#back-link").click(function() {
      $("#forgot-box").hide();
      $("#login-box").show();
    });
  
    // Validate registration form
    $("#register-form").submit(function(e) {
      e.preventDefault();
      var name = $("#name").val();
      var email = $("#remail").val();
      var password = $("#rpassword").val();
      var confirmPassword = $("#cpassword").val();
  
      // Perform form validation
      if (name === "" || email === "" || password === "" || confirmPassword === "") {
        $("#passError").text("Please fill in all fields.");
      } else if (password !== confirmPassword) {
        $("#passError").text("Passwords do not match.");
      } else {
        // Registration successful, update user details in the dashboard
        $("#dashboard-name").text(name);
        $("#dashboard-email").text(email);
  
        // Show success message
        $("#register-success").show();
  
        // Clear form inputs
        $("#name").val("");
        $("#remail").val("");
        $("#rpassword").val("");
        $("#cpassword").val("");
  
        // Switch to the login form
        $("#register-box").hide();
        $("#login-box").show();

         // Redirect to dash.html
      window.location.href = "dash.html";
      }
    });
  
    // Reset password form
    $("#forgot-form").submit(function(e) {
      e.preventDefault();
      var email = $("#femail").val();
  
      // Perform form validation and send reset instructions to the email
      if (email === "") {
        $("#forgotAlert").text("Please enter your email address.");
      } else {
        // Send reset instructions to the email
  
        // Show success message
        $("#forgot-success").show();
  
        // Clear form input
        $("#femail").val("");
  
        // Switch to the login form
        $("#forgot-box").hide();
        $("#login-box").show();
      }
    });
  });
  