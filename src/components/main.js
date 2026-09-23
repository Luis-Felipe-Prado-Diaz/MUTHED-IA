export default (() => {

  class Main extends HTMLElement {

    constructor() {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
      this.render()
    }

    render() {
      this.shadow.innerHTML =
      /*html*/`
      <style>

				main {
					margin-left: var(--sidebar-width);
					padding: 2rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					gap: 1rem;
					min-height: 100vh;
					transition: margin-left var(--transition-base);
				}

				body:has(header .menu.active) main {
					margin-left: var(--sidebar-width-collapsed);
				}

		

				/* ==========================================================================
					CAJA DE BÚSQUEDA
					========================================================================== */

				main .caja-de-busqueda {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					gap: 1rem;
					padding: 1rem;
					max-width: 720px;
					width: 100%;
				}

				main .caja-de-busqueda .label-container label {
					font-size: 1.5rem;
					font-weight: 400;
					color: var(--color-texto-blanco);
					text-align: start;
					width: 100%;
				}

				main .caja-de-busqueda .input-container {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 1rem;
					padding: 1rem;
					background-color: var(--color-terciario);
					border: 1px solid var(--color-cuaternario);
					border-radius: var(--radius-md);
					width: 100%;
					transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
				}

				main .caja-de-busqueda .input-container:focus-within {
					border-color: var(--color-septimo);
					box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.08);
				}

				main .caja-de-busqueda .input-container svg {
					fill: var(--color-texto-blanco);
					width: 2.75rem;
					height: 2.75rem;
					background-color: var(--color-quinario);
					padding: 0.6rem;
					border-radius: var(--radius-sm);
					cursor: pointer;
					flex-shrink: 0;
					transition: background-color var(--transition-fast), transform var(--transition-fast);
				}

				main .caja-de-busqueda .input-container svg:hover {
					background-color: var(--color-cuaternario);
					transform: scale(1.05);
				}

				/* El icono de enviar se distingue como acción principal, reutilizando el gris más claro de la paleta */
				main .caja-de-busqueda .input-container svg[data-action="enviar"] {
					background-color: var(--color-septimo);
					fill: var(--color-texto-negro);
				}

				main .caja-de-busqueda .input-container svg[data-action="enviar"]:hover {
					background-color: var(--color-sexto);
				}

				main .caja-de-busqueda .input-container textarea {
					font-size: 1rem;
					font-weight: 400;
					color: var(--color-texto-blanco);
					background: transparent;
					cursor: text;
					outline: none;
					border: none;
					resize: none;
					padding: 0.5rem;
					width: 100%;
					max-height: 200px;
				}

				main .caja-de-busqueda .input-container textarea::placeholder {
					color: var(--color-sexto);
				}
        
				@media (min-width: 768px) {
					main .texto .titulo h1 {
					font-size: 3.5rem;
					line-height: 1.1;
				}

				main .texto .subtitulo p {
					font-size: 1.5rem;
				}

				main .caja-de-busqueda .label-container label {
					font-size: 1.2rem;
					text-align: center;
				}

				main .caja-de-busqueda {
					padding: 0.5rem 0;
				}

				main .caja-de-busqueda .input-container {
					padding: 0.5rem;
					gap: 0.5rem;
				}

				main .caja-de-busqueda .input-container svg {
					width: 2rem;
					height: 2rem;
					padding: 0.3rem;
				}
				main {
					margin-left: 0;
					margin-top: 70px;
					padding: 1rem;
					min-height: calc(100vh - 70px);
				}

				body:has(header .menu.active) main {
					margin-left: 0;
					display: none;
				}

	}
      </style>

			<main>
			<slot></slot>

		<div class="caja-de-busqueda">
			<div class="label-container">
				<label for="busquda">Bienvenido, ¿en qué puedo ayudarte?</label>
			</div>
			<div class="input-container">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
					<path
						d="M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z" />
				</svg>
				<textarea id="busquda" placeholder="Pregunta lo que quieras" rows="1"></textarea>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-action="enviar" aria-hidden="true" focusable="false">
					<path d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,7L7,12H10V16H14V12H17L12,7Z" />
				</svg>
			</div>
		</div>

	</main>

      
  
      `

    }

  }

  customElements.define('main-component', Main);
})()