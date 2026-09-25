export default (() => {

  class Header extends HTMLElement {

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
          header{
            background-color: #384959;
            width: var(--sidebar-width);
            display: flex;
            justify-content:center;
            flex-direction: column;
            gap:40px;
            position: absolute;
            top: 0;
            left: 0;
            max-height: 100vh;
            height: 100vh;
            z-index: 20;
            transition: left var(--transition-base);
          }
          header.active{
            left: -180px;
            justify-content: space-between;
            align-items: flex-end;
            gap: 20px;
          }
          header nav{
           display: flex;
           justify-content: center;
           align-items: center;
           flex-direction: column;
           margin-top: 20px;
           width: var(--sidebar-width);
           padding: 0px 10px;
          }

          header.active nav{
            align-items: flex-end;
            justify-content: flex-end;

          }

          header.active nav ul{
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            transition: flex-direction var(--transition-fast);
            transition-delay: var(--transition-fast);
          }
          header.active nav ul li{
            justify-content: flex-end;
            width: 100%;
          }

          header nav ul{
            display: flex;
            justify-content: space-between;
            padding: 15px 0px;
            border-radius: 10px;
            transition: flex-direction var(--transition-fast);
            transition-delay: var(--transition-fast);
          }

          header nav ul li{
            padding: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          header nav ul li button{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2.8rem;
            height: 2.8rem;
            border-radius: 5px;
            background-color: #6B8AA7;
            border: none;
            cursor: pointer;
          }
          header.active nav ul li button{
            height: 2.8rem;
            width: 2.8rem;
          }
          header nav ul li button svg{
            width: 100%;
            height: 100%;
            fill: white;
            transition: fill 0.3s ease;
          }
          header nav ul li button svg:hover{
            fill: #0C0C2D;
            transition: fill 0.3s ease;
          }
          header nav ul li button:hover{
            fill: #0C0C2D;
            transition: fill 0.3s ease;
            transform: scale(1.1);
            transition: transform 0.3s ease;
          }
          header nav ul li a{
            text-decoration: none;
            color: white;
            font-size: 1em;
            font-weight: 700;
            padding: 10px;
            border-radius: 5px;
            background-color: #6B8AA7;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          header nav ul li a:hover{
            color: #0C0C2D;
            transition: background-color 0.3s ease;
            transform: scale(1.1);
          }
          
          header.active nav ul li a{
            padding: 10px;

           }
          header nav ul li .new-chat{
            color: white;
            font-size: 16px;
            font-weight: 700;
            width: max-content;
            background: #6B8AA7;
            padding: 0px 50px;
            height: 50px;
            gap: 5px;
            cursor: pointer;
          }

          header.active nav ul li .new-chat{
            font-size: 12px;
            width: 2.8rem;
            height: 2.8rem;
            padding: 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          header nav ul li .new-chat svg{
            width: 100%;
            height: 100%;
            fill: white;
          }
      </style>
      <header>
        <nav>
          <ul>
            <li><a href="#">MD</a></li>
            <li>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
              </button>
            </li>
            <li>
              <button id="menu-toggle" aria-label="Abrir o cerrar menú">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <button type="button" class="new-chat">
                Nuevo
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>

        <slot></slot>
      </header>

      `

      const toggleMenu = this.shadow.querySelector("#menu-toggle");
      const menu = this.shadow.querySelector('header')

      toggleMenu.addEventListener("click", () => {

        menu.classList.toggle('active')

        document.dispatchEvent(new Event('menu-toggle', {
          detail: {
            state: menu.classList.contains('active')
          }
        }));
      })
    }

  }

  customElements.define('header-component', Header);
})()