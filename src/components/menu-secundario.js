export default (() => {

  class MenuSecundario extends HTMLElement {

    constructor() {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.data= []
    }

    connectedCallback() {
      this.loadData()
      this.render()
    }

    loadData(){
      this.data = [
        {
          name: "Como funciona este codigo css",
          url: "#"
        },
        {
          name: "adaptar css grid a responsive",
          url: "#"
        },
        {
          name: "como funciona este codigo css",
          url: "#"  
        },
        {
          name: "como funciona este codigo css",
          url: "#"
        },
        {
          name: "como funciona este codigo css",
          url: "#"
        },
        {
          name: "como funciona este codigo css",
          url: "#"
        },
        {
          name: "como funciona este codigo css",
          url: "#"
        },
        {
          name: "como funciona este codigo css",
          url: "#"
        },
        {
          name: "como funciona este codigo css",
          url: "#"
        },
        {
          name: "como funciona este codigo css",
          url: "#"
        },
        {
          name: "como funciona este codigo css",
          url: "#"
        },
        {
          name: "como funciona este codigo css",
          url: "#"
        },
        {
          name: "como funciona este codigo css",
          url: "#"
        },
        {
          name: "como funciona este codigo css",
          url: "#"
        },
      ]
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
        .secundary-menu{
          background-color: var(--color-terciario);
          width: var(--sidebar-width);
          padding: 0px 20px;
          display: flex;
          flex-direction: column;
          transition: width var(--transition-base);
         
        }
        .secundary-menu.active{
          display: none;  
        }

        .secundary-menu ul{
          padding: 15px;
          list-style: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 40vh;
          overflow: hidden;
          overflow-y: scroll;
        }
        .secundary-menu h3{
          color: var(--color-texto-blanco);
          font-size: 1.5em;
          font-weight: 500;
          margin-bottom: 20px;
        }
        .secundary-menu ul li{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 15px 10px;
        }
        .secundary-menu ul li a{
          color: var(--color-texto-blanco);
          font-size: 1em;
          font-weight: 400;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: background-color var(--transition-fast);
        }
        .secundary-menu ul li:hover{
          background-color: var(--color-primario);
        }

        .secundary-menu ul::-webkit-scrollbar{
          width: 5px;
          background: transparent;
        }
        .secundary-menu ul::-webkit-scrollbar-track{
          background: transparent;
        }
        .secundary-menu ul::-webkit-scrollbar-thumb{
          background: var(--color-primario);


        }
        .secundary-menu ul:-webkit-scrollbar-thumb:hover{
          background: var(--color-primario);
        }

      
      </style>
 			<nav class="secundary-menu" aria-label="Historial de chats">
				<h3>Chats Recientes</h3>
			</nav>

      `
const nav = this.shadow.querySelector('.secundary-menu')
const data = this.data

const ul = document.createElement('ul')
data.forEach(element => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  
  a.href = element.url
  a.textContent = element.name
  
  nav.appendChild(ul)
  ul.appendChild(li)
  li.appendChild(a)
})



	document.addEventListener('menu-toggle', () => {
		const secundaryMenu = this.shadow.querySelector('.secundary-menu')
		secundaryMenu.classList.add('active')
	})

  document.addEventListener('menu-toggle-remove', () => {
    const secundaryMenu = this.shadow.querySelector('.secundary-menu')
    secundaryMenu.classList.remove('active')
  })
    }

  }

  customElements.define('menu-secundario', MenuSecundario);
})()