export default (() => {

  class MenuSecundario extends HTMLElement {

    constructor() {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.data = []
      document.addEventListener('menu-toggle', () => {
        const secundaryMenu = this.shadow.querySelector('.secundary-menu')
        secundaryMenu.classList.toggle('active')
      })
    }

    connectedCallback() {
      this.loadData()
      this.render()
    }

    loadData() {
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
          width: var(--sidebar-width);
          padding: 0px 10px 0px 10px;
          display: flex;
          flex-direction: column;
          transition: width var(--transition-base);
        }
        .secundary-menu.active{
          display: none;  
        }

        .secundary-menu ul{
          list-style: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 40vh;
          padding-bottom: 40px;
          padding-left: 5px;
          text-align: left;
          width: 100%;
          overflow-y: auto;
          direction: rtl;
          scrollbar-width: thin; 
          scrollbar-color: #6B8AA7 transparent;

        }
        .secundary-menu h3{
          color: white;
          background: #6B8AA7;
          padding: 5px;
          margin: 5px 0px;
          border-radius: 2px 2px 0 0;
          font-size: 1.5em;
          font-weight: 500;
        }
        .secundary-menu ul li{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 20px 15px;
          transition: all 0.5s ease;
          direction: ltr;
          text-align: left;
          width: 100%;
          
        }

        .secundary-menu ul li a{
          color: white;
          font-size: 1em;
          font-weight: 400;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: background-color var(--transition-fast);
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%; 
        }
        .secundary-menu ul li:hover{
          background-color: #6B8AA7;
          transform: translateX(5px);
          transition: transform 0.5s ease;
        }
        .secundary-menu ul::-webkit-scrollbar{
          width: 10px;
          background: transparent;

        }
        .secundary-menu ul::-webkit-scrollbar-track{
          background: transparent;
        }
        .secundary-menu ul::-webkit-scrollbar-thumb{
          background: #6B8AA7;
          border-radius: 5px;
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



    }

  }

  customElements.define('menu-secundario', MenuSecundario);
})()