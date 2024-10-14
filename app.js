const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// hire me alret box and text call action
let add_up = "But contact me through my mail i will definetly approach when i was free";
let innovation_var = "Sorry i was busy in idea validation of New innovative train service app idea validation!"
let research_stdy = "Sorry i was busy in research study PROJECT PLASTIC research study!"
let strategy_devp = "Sorry i was busy in strategy development Large scale vegetable vendor business"
let automation_incop = "Sorry i was busy in development of automated systems for cleaning the solar panels"

function hireMe(action) {
	const alertMessage = document.getElementById('alertMessage');
	if(action === "ideaValidation"){
		alertMessage.textContent = innovation_var + add_up;
	}
	else if(action === "reseachstdy"){
		alertMessage.textContent = research_stdy + add_up;
	}
	else if(action === "strgydevop"){
		alertMessage.textContent = strategy_devp + add_up;
	}
	else if(action === "autoIncop"){
		alertMessage.textContent = automation_incop + add_up;
	}

	
	const customAlert = document.getElementById('customAlert');
	customAlert.style.display = 'flex'; // Show the alert
  }
  
  function closeAlert() {
	const customAlert = document.getElementById('customAlert');
	customAlert.style.display = 'none'; // Hide the alert
  }
  
