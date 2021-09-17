class TemplateComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
    `
  }
}

customElements.define('template-component', TemplateComponent)
