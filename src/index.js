import './components/header.js';
import './components/main.js';

document.addEventListener('sidebar-change', ({ detail }) => {
	const main = document.querySelector('app-main');

	main?.toggleAttribute('sidebar-collapsed', detail.collapsed);
});
