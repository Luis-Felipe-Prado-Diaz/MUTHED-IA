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
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        
        
      </style>
    <header>
    <div class = "menu"> 
    <slot></slot>
    </div>
    </header>
    
      `
    }

  }

  customElements.define('header-component',  Header);
})()