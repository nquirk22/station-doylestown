(function () {
	[...document.querySelectorAll('.tabs-container')].forEach(x => tabify(x));
})();

function tabify(element) {
	const header = element.querySelector('.tabs-header');
	const content = element.querySelector('.tabs');
	const tab_headers = [...header.children];
	const tab_contents = [...content.children];
	// tab_contents.forEach(x => x.style.display = 'none');
	let current_tab_index = -1;

	function setTab(index) {
		if (current_tab_index > -1) {
			// tab_headers[current_tab_index].style.fontWeight = 400;
			// tab_contents[current_tab_index].style.display = 'none';
			tab_headers[current_tab_index].classList.toggle('active');
			tab_contents[current_tab_index].classList.toggle('active');
		}
		// tab_headers[index].style.fontWeight = 800;
		// tab_contents[index].style.display = 'flex';
		// tab_headers[index].classList.add('active');
		// tab_contents[index].classList.add('active');
		tab_headers[index].classList.toggle('active');
		tab_contents[index].classList.toggle('active');
		current_tab_index = index;
	}

	let default_tab_index = tab_headers.findIndex(x => {
		return [...x.classList].indexOf('default-tab') > -1;
	});

	default_tab_index = default_tab_index === -1 ? 0 : default_tab_index;
	setTab(default_tab_index);
	tab_headers.forEach((x, i) => {
		x.onclick = (_) => setTab(i);
	});
}


