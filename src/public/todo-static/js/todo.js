'use strict';

function btMenu() {
	let btElement = document.querySelector('#bt-menu');
	if( btElement )
		btElement.addEventListener("click", function () {
			let element = document.querySelector('.offcanvas-collapse')
			element.classList.toggle("open");
		})
}
function btCloseAlert() {
	let btElement = document.querySelector('.bt-close-alert');
	if( btElement )
		btElement.addEventListener("click", function (e) {
			let element = e.target.parentElement.parentElement;
			element.classList.add("hidden");
		})
}

document.addEventListener("DOMContentLoaded", function(event) {
	btMenu()
	btCloseAlert()
})
