const stylesUrl = new URL('../../styles/styles.css', import.meta.url).href;

export default (() => {
	class AppMain extends HTMLElement {
		constructor() {
			super();
			this.shadow = this.attachShadow({ mode: 'open' });
		}

		connectedCallback() {
			this.render();
		}

		render() {
			this.shadow.innerHTML = /*html*/`
				<link rel="stylesheet" href="${stylesUrl}">
				<style>
					:host {
						display: block;
						margin-left: var(--sidebar-width);
						transition: margin-left var(--transition-base);
					}

					:host([sidebar-collapsed]) {
						margin-left: var(--sidebar-width-collapsed);
					}

					main {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: space-between;
						gap: 1rem;
						min-height: 100vh;
						padding: 2rem;
					}

					@media (max-width: 768px) {
						:host,
						:host([sidebar-collapsed]) {
							margin-left: 0;
							margin-top: 70px;
						}

						main {
							min-height: calc(100vh - 70px);
							padding: 1rem;
						}
					}
				</style>
				<main>
					<slot name="welcome">
						<div class="texto">
							<div class="titulo">
								<h1>MUTHED</h1>
							</div>
							<div class="subtitulo">
								<p>Chat IA</p>
							</div>
						</div>
					</slot>

					<slot name="composer">
						<div class="caja-de-busqueda">
							<div class="label-container">
								<label for="busquda">Bienvenido, ¿en qué puedo ayudarte?</label>
							</div>
							<div class="input-container">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
									<path d="M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0,0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z" />
								</svg>
								<textarea id="busquda" placeholder="Pregunta lo que quieras" rows="1"></textarea>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-action="enviar" aria-hidden="true" focusable="false">
									<path d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,7L7,12H10V16H14V12H17L12,7Z" />
								</svg>
							</div>
						</div>
					</slot>
				</main>
			`;
		}
	}

	customElements.define('app-main', AppMain);
})();
