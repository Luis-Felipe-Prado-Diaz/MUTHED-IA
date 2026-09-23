export default (() => {

  class Titulo extends HTMLElement {

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
		/* ==========================================================================
					HERO — Título y subtítulo
					========================================================================== */

				 .texto {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					gap: 0.5rem;
				}

				.texto .titulo h1 {
					font-size: clamp(2.75rem, 5vw + 1rem, 7rem);
					line-height: 1.1;
					color: var(--color-texto-blanco);
					letter-spacing: 0.03em;
					text-shadow: var(--shadow-soft);
				}

				 .texto .subtitulo p {
					font-size: clamp(1.25rem, 1.5vw + 0.75rem, 2rem);
					color: var(--color-quinario);
				}

        @media (min-width: 768px) {
          .texto .titulo h1 {
		      font-size: 3.5rem;
					line-height: 1.1;
				}

				 .texto .subtitulo p {
					font-size: 1.5rem;
				}
        }

      </style>
		<div class="texto">
			<div class="titulo">
				<h1>MUTHED</h1>
			</div>
			<div class="subtitulo">
				<p>Chat IA</p>
			</div>
		</div>
      `

    }

  }

  customElements.define('titulo-component', Titulo);
})()