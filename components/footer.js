class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<footer><p>Hello, footer<p></footer>`;
  }
}

customElements.define("footer-component", Footer);
