'use strict';

const btMenu = () => {
	let btElement = document.querySelector('#bt-menu');
	if( btElement )
		btElement.addEventListener("click", function () {
			let element = document.querySelector('.offcanvas-collapse')
			element.classList.toggle("open");
		})
}
const btCloseAlert = () => {
	let btElement = document.querySelector('.bt-close-alert');
	if( btElement )
		btElement.addEventListener("click", function (e) {
			let element = e.target.parentElement.parentElement;
			element.classList.add("hidden");
		})
}

const filterByInnerTextNotContain = (elementSearch, text) => {
		let taskList = document.querySelectorAll(elementSearch)
		var arrTaskList = Array.from(taskList)
		return arrTaskList.filter(e => e.innerText.indexOf(text)==-1 );
}

const showElements = (elementSearch) => 
	document.querySelectorAll(elementSearch).
		forEach( e => e.classList.remove('hidden'));

const hideArrayElements = (Array) => 
	Array.forEach( e => e.classList.add('hidden'));

const search = () => {
	let btElement = document.querySelector('#search');
	if( btElement )
		btElement.addEventListener("keyup", function (e) {
			let ElementsFiltered = filterByInnerTextNotContain('#tasksList .list-group-item', e.target.value);
			console.log(ElementsFiltered)
			showElements('#tasksList .list-group-item')
			hideArrayElements(ElementsFiltered)
		})
}


document.addEventListener("DOMContentLoaded", function(event) {
	btMenu()
	btCloseAlert()
	search()
})

