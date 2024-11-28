class MainMenu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<div class="topnav" id="myTopnav">
  <a href="/index.html" class="active">Home</a>
  <a href="/zorka.html">Zorka</a>
  <a href="/onde.html">Onde</a>
  <a href="/about_me.html">About Me</a>
  <a href="javascript:void(0);" class="icon" onclick="toggleMenu()">
    <i class="fa fa-bars"></i>
  </a>
</div>`;
  }
}

customElements.define("main-menu", MainMenu);
