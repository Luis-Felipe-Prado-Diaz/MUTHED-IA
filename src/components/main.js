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
				 *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

				main {
					margin-left: var(--sidebar-width);
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					min-height: 100vh;
					transition: margin-left var(--transition-base);
					z-index: 2;
					position: relative;
				}

				body:has(header .menu.active) main {
					margin-left: var(--sidebar-width-collapsed);
				}
    
				@media (min-width: 768px) {
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
	</main>

      
  
      `

    }

  }

  customElements.define('main-component', Main);
})()