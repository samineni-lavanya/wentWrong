function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$(".signup").click(function(){
  var errorMessage="";
  var sucessMessage="";
  if($("#name").val() == ""){
    errorMessage +="> user Name is empty!\n";
  }
  if (isEmail($("#email").val()) == false){
    errorMessage += "> Email is in valid\n";
  }
  if ($.isNumeric($("#phone").val()) == false) {
    errorMessage += "> invalid number\n";
  }
  if($("#password").val() == ""){
    errorMessage += "> password are empty\n";
  }
  if($("#password").val() != $("#passwordConfirm").val()){
    errorMessage += "> password not match";
  }
  if(errorMessage != ""){
    alert(errorMessage);
  } else{
    $("#sucessMessage").show();

  }
});
$( "#date" ).datepicker();
