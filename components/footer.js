class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const currentDate = new Date(); 
    const currentYear = currentDate.getFullYear();
    this.innerHTML = `<footer><p>© Pavel Grabchikov ${currentYear}<p></footer>`;
  }
}

customElements.define("footer-component", Footer);
