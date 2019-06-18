console.log("It works")

$(document).ready(function () {
	$('.submit').click(function(event){
		event.preventDefault()
		console.log('Clicked Button')

		var email = $('.email').val()
		var subject = $('.subject').val()
		var message = $('.message').val()
		var statusElm = $('.status')
		statusElm.empty()

		if(email.length > 5 && email.includes('@') && email.includes('.')) {
			statusElm.append('<div>Email is valid</div>')
		} else {
			statusElm.append('<div>Email is not valid</div>')
			alert("Please Enter Correct Email")
		}

		if(subject.length >= 2) {
			statusElm.append('<div>Subject is valid</div>')
		} else {
			statusElm.append('<div>Subject is not valid</div>')
			alert("Please Enter Correct Subject")
		}

		if (message.length >= 10) {
			statusElm.append('<div>Message is valid</div>')
		} else {
			statusElm.append('<div>Message is not valid</div>')
			alert("Please Enter Proper Message")
		}
	})
})