const stylesUrl = new URL('../../styles/styles.css', import.meta.url).href;

export default (() => {
	class AppHeader extends HTMLElement {
		constructor() {
			super();
			this.shadow = this.attachShadow({ mode: 'open' });
			this.handleClick = this.handleClick.bind(this);
		}

		connectedCallback() {
			this.render();
			this.menuToggle = this.shadow.querySelector('#menu-toggle');
			this.menuToggle?.addEventListener('click', this.handleClick);
			this.syncToggleState();
		}

		disconnectedCallback() {
			this.menuToggle?.removeEventListener('click', this.handleClick);
		}

		render() {
			this.shadow.innerHTML = /*html*/`
				<link rel="stylesheet" href="${stylesUrl}">
				<header>
					<div class="menu" id="chat-sidebar">
						<slot name="primary-menu">
							<nav class="Principal-menu" aria-label="Menú principal">
								<ul>
									<li><a href="#">MD</a></li>
									<li>
										<button type="button" aria-label="Buscar">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
												<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
											</svg>
										</button>
									</li>
									<li>
										<button type="button" id="menu-toggle" aria-label="Abrir o cerrar menú" aria-controls="chat-sidebar" aria-expanded="true">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
												<path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
											</svg>
										</button>
									</li>
								</ul>
								<ul>
									<li>
										<button type="button">
											Nuevo
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
												<path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
											</svg>
										</button>
									</li>
								</ul>
							</nav>
						</slot>

						<slot name="recent-chats">
							<nav class="secundary-menu" aria-label="Historial de chats">
								<h3>Chats Recientes</h3>
								<ul>
									<li><a href="#">Como funciona este codigo css</a></li>
									<li><a href="#">adaptar css grid a responsive</a></li>
									<li><a href="#">cambiar resolucion externa</a></li>
									<li><a href="#">imagen de fondo css</a></li>
									<li><a href="#">valorar este ordenador</a></li>
									<li><a href="#">valorar este ordenador</a></li>
									<li><a href="#">valorar este ordenador</a></li>
									<li><a href="#">valorar este ordenador</a></li>
									<li><a href="#">valorar este ordenador</a></li>
									<li><a href="#">valorar este ordenador</a></li>
									<li><a href="#">valorar este ordenador</a></li>
									<li><a href="#">valorar este ordenador</a></li>
								</ul>
							</nav>
						</slot>

						<slot name="user-profile">
							<div class="user">
								<div class="imagen-user">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
										<path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
									</svg>
								</div>
								<div class="name-user">
									<h3>Luis Prado</h3>
									<p>Administrador</p>
								</div>
							</div>
						</slot>
					</div>
				</header>
			`;
		}

		handleClick() {
			const sidebar = this.shadow.querySelector('.menu');
			if (!sidebar) return;

			sidebar.classList.toggle('active');
			this.syncToggleState();

			this.dispatchEvent(new CustomEvent('sidebar-change', {
				bubbles: true,
				composed: true,
				detail: { collapsed: sidebar.classList.contains('active') }
			}));
		}

		syncToggleState() {
			const toggle = this.shadow.querySelector('#menu-toggle');
			const sidebar = this.shadow.querySelector('.menu');

			if (toggle && sidebar) {
				toggle.setAttribute('aria-expanded', String(!sidebar.classList.contains('active')));
			}
		}
	}

	customElements.define('app-header', AppHeader);
})();
