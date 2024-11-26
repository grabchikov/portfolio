class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `<header><p>Hello, header<p></header>`;
    }
  }
  
  customElements.define("header-component", Header);
  