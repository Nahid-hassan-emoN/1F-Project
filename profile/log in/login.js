function validateLoginForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var userType = document.getElementById("user-type").value;

  if (username == "" || password == "") {
    alert("Username and password are required.");
    return false;
  } else if (username.length < 4 || password.length < 6) {
    alert("Username must be at least 4 characters long and password must be at least 6 characters long.");
    return false;
  } else if (userType == "teacher" && !username.startsWith("teacher")) {
    alert("Teacher usernames must start with 'teacher'.");
    return false;
  } else if (userType == "student" && !username.startsWith("student")) {
    alert("Student usernames must start with 'student'.");
    return false;
  }

  // If validation passes, the form will be submitted
  return true;
}
