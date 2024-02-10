function validate() {
	if (document.myForm.firstname.value == "") {
		alert("Please provide your First Name!");
		return false;
	}
	if (document.myForm.lastname.value == "") {
		alert("Please provide your Last Name!");
		return false;
	}
	if (document.myForm.email.value == "") {
		alert("Please provide your Email!");
		return false;
	}
	if (document.myForm.gender.value == "") {
		alert("Please provide your Gender!");
		return false;
	}
	return true;
}
