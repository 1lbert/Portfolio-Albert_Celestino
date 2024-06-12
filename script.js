const navMenuMobile = document.querySelector('.nav-menu-mobile')

function showMenu() { 
    navMenuMobile.style.display = 'flex'
}
function closeMenu() { 
    navMenuMobile.style.display = 'none'
}


const scrollers = document.querySelectorAll(".scroller"); 

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) { 
    addAnimation()
}

function addAnimation() { 
    scrollers.forEach((scroller) => { 
        scroller.setAttribute("data-animated", true) 
        // add data-animated="true" to every `.scroller` on the page

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => { 
            const duplicatedItem = item.cloneNode(true); 
            duplicatedItem.setAttribute("area-hidden", true);
            scrollerInner.appendChild(duplicatedItem)
        })
    });
}



// const formSubmit = document.getElementById('form');
// const name = formSubmit.elements['name'];
// const email = formSubmit.elements['email'];

// // getting the element's value
// let fullName = name.value;
// let emailAddress = email.value;

// // show a message with a type of the input
// function showMessage(input, message, type) {
// 	// get the small element and set the message
// 	const msg = input.parentNode.querySelector("small");
// 	msg.innerText = message;
// 	// update the class for the input
// 	input.className = type ? "success" : "error";
// 	return type;
// }

// function showError(input, message) {
// 	return showMessage(input, message, false);
// }

// function showSuccess(input) {
// 	return showMessage(input, "", true);
// }

// function hasValue(input, message) {
// 	if (input.value.trim() === "") {
// 		return showError(input, message);
// 	}
// 	return showSuccess(input);
// }

// function validateEmail(input, requiredMsg, invalidMsg) {
// 	// check if the value is not empty
// 	if (!hasValue(input, requiredMsg)) {
// 		return false;
// 	}
// 	// validate email format
// 	const emailRegex =
// 		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// 	const email = input.value.trim();
// 	if (!emailRegex.test(email)) {
// 		return showError(input, invalidMsg);
// 	}
// 	return true;
// }

// // const form = document.querySelector("#signup");

// const NAME_REQUIRED = "Please enter your name";
// const EMAIL_REQUIRED = "Please enter your email";
// const EMAIL_INVALID = "Please enter a correct email address format";

// formSubmit.addEventListener("submit-btn", function (event) {
// 	// stop form submission
// 	event.preventDefault();

// 	// validate the form
// 	let nameValid = hasValue(fullName, NAME_REQUIRED);
// 	let emailValid = validateEmail(email, EMAIL_REQUIRED, EMAIL_INVALID);
// 	// if valid, submit the formSubmit.
// 	if (nameValid && emailValid) {
// 		alert("Form Submitted");
// 	}
// });


/* Intersection Observer for animation scroll 
	const observer = new IntersectionObserver(
		entries => { 
			entries.forEach(entry => {
				entry.target.classList.toggle("show", entry.isIntersecting)
				if (entry.isIntersecting) observer.unobserve(entry.target) // removing animationscroll when going upward/going back 
			})
		}, {
			threshold: 1,
			//rootMargin: "-100px", //limit the area
		}	
	)

	body.forEach(body => { 
		observer.observe(body)
	})
*/