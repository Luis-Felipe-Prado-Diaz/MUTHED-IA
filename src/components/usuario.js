export default (() => {

  class User extends HTMLElement {

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
        .user{
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 0 15px;
        transition: opacity 0.3s ease;
        background: var(--color-septimo);
        border-radius: var(--radius-sm);
      }
      .user:hover{
        opacity: 0.8;
        cursor: pointer;
      }

      .user-active{
        flex-direction: row-reverse;
        padding: 0 0px;
      }
      
      .imagen-user{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: white;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .user-active .imagen-user{
        width: 24px;
        height: 24px;
        display: flex;
        align-items: end;
        justify-content: flex-end;
        margin: 0px 10px;
      }
      .imagen-user svg{
        width: 24px;
        height: 24px;
        fill: var(--color-primario);
      }
      .name-user h3{
        font-size: 1.3rem;
        font-weight: 700;
        line-height: 0.5;
      }
      .name-user p{
        font-size: 1rem;
        font-weight: 400;
        line-height: 1;
      }

      
      </style>
			<div class="user">
				<div class="imagen-user">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
						<path
							d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
					</svg>
				</div>
				<div class="name-user">
					<h3>Luis Prado</h3>
					<p>Administrador</p>
				</div>
			</div>

      `
	document.addEventListener('menu-toggle', () => {
		const user = this.shadow.querySelector('.user')
		user.classList.add('user-active')
	})

  document.addEventListener('menu-toggle-remove', () => {
    const user = this.shadow.querySelector('.user')
    user.classList.remove('user-active')
  })
    }

  }

  customElements.define('user-component', User);
})()