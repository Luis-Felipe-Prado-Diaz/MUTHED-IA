export default (() => {

  class Busqueda extends HTMLElement {

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
        .caja-de-busqueda{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1rem;
        }

        .caja-de-busqueda .label-container h2 {
          font-size: 1.5rem;
          font-weight: 400;
          font-family: 'Poppins', sans-serif;
          width: 100%;
        }

        .caja-de-busqueda .input-container{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          background-color:#BEDDFC;
          border-radius: var(--radius-md);
          width: 60vw;
          box-shadow: -3px 12px 24px 0px #3f4768ff;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }

         .caja-de-busqueda .input-container:hover{
          transform: scale(1.05);
          box-shadow: 0px 12px 35px 0px #232635ff;
         }

        .caja-de-busqueda .input-container svg {
          fill: var(--color-texto-blanco);
          width: 2.75rem;
          height: 2.75rem;
          background-color:#384959;
          padding: 0.6rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          flex-shrink: 0;
          transition: background-color var(--transition-fast), transform var(--transition-fast);
        }

        .caja-de-busqueda .input-container svg:hover {
          background-color: #6B8AA7;
          transform: scale(1.05);
        }

        
        .caja-de-busqueda .input-container textarea {
          font-size: 1.2rem;
          font-weight: 400;
          font-family: 'Poppins', sans-serif;
          color: black;
          background: transparent;
          cursor: text;
          outline: none;
          border: none;
          resize: none;
          padding: 0.5rem;
          width: 100%;
          max-height: 200px;
          field-sizing: content;
        }

        .caja-de-busqueda .input-container textarea::placeholder {
          color: gray;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
        }

      </style>

      <div class="caja-de-busqueda">
        <div class="label-container">
          <h2 id="busquda">Bienvenido, ¿en qué puedo ayudarte?</h2>
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

      `

    }

  }

  customElements.define('busqueda-component', Busqueda);
})()