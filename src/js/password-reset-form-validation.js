function validatePasswordResetForm() {
	const LOWERCASE_NOTICE = "#lowercase-notice";
	const LENGTH_NOTICE = "#length-notice";
	const MATCH_NOTICE = "#match-notice";
	const PASSWORD1 = "#password1";
	const PASSWORD2 = "#password2";
	const NUMBER_NOTICE = "#number-notice";
	const SPECIAL_CHARACTER_NOTICE = "#special-character-notice";
	const UPPERCASE_NOTICE = "#uppercase-notice";
	const PASSWORD_LENGTH = 8;

	let lowerCaseRegExp = /[a-z]+/;
	let upperCaseRegExp = /[A-Z]+/;
	let numberRegExp = /\d+/;
	let specialCharacterRegExp = /[!@#$%^&*()_+]+/;

	setGlyphIcon($(LOWERCASE_NOTICE), lowerCaseRegExp.test($(PASSWORD1).val()));
	setGlyphIcon($(LENGTH_NOTICE), $(PASSWORD1).val().length >= PASSWORD_LENGTH);
	setGlyphIcon($(MATCH_NOTICE), $(PASSWORD1).val() == $(PASSWORD2).val());
	setGlyphIcon($(NUMBER_NOTICE), numberRegExp.test($(PASSWORD1).val()));
	setGlyphIcon($(SPECIAL_CHARACTER_NOTICE), specialCharacterRegExp.test($(PASSWORD1).val()));
	setGlyphIcon($(UPPERCASE_NOTICE), upperCaseRegExp.test($(PASSWORD1).val()));
}

function setGlyphIcon(element, isValid) {
	if (isValid) {
		$(element).removeClass("bi-x").addClass("bi-check").css("color", "#00A41E");
	} else {
		$(element).removeClass("bi-check").addClass("bi-x").css("color", "#FF0004");
	}
}

function toggleShowPassword() {
	$(this).text($(this).text() == "Show" ? "Hide" : "Show");
	$(this).prev().attr('type', function (index, attr) { return attr == 'password' ? 'text' : 'password'; });
}
