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
				}

				.texto .titulo h1 {
					font-size: clamp(2.75rem, 5vw + 1rem, 7rem);
					color: var(--color-texto-blanco);
				}

				 .texto .subtitulo p {
					font-size: clamp(1.25rem, 1.5vw + 0.75rem, 2rem);
					color: var(--color-quinario);
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