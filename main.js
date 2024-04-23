function generatePassword() {
    var length = $("#number").val();
    var uppercase = $("input[type=checkbox]:first").is(":checked");
    var lowercase = $("input[type=checkbox]:nth-of-type(2)").is(":checked");
    var numbers = $("input[type=checkbox]:nth-of-type(3)").is(":checked");
    var symbols = $("input[type=checkbox]:nth-of-type(4)").is(":checked");

    var charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (symbols) charset += "!@#$%^&*()_+-=";

    if (!charset.length) {
      alert("Please select at least one character set");
      return;
    }

    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    return password;
  }
  function copyPassword() {
    var password = $("#password").val();
