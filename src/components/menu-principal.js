export default (() => {

  class MenuPrincipal extends HTMLElement {

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
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }



      
      </style>
    
      `
    }

  }

  customElements.define('menu-principal-component',  MenuPrincipal);
})()