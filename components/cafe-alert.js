class CafeAlert extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="row bg-info text-light p-1 d-none" id="message-important">
      <div class="col-1"></div>
      <div class="col text-center">
        <a id="message-important__title" data-toggle="collapse" href="#message-important__text" class="text-white"></a>
        <p id="message-important__text" class="collapse"></p>
      </div>
      <div class="col-1 text-right">
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true" data-target-id="message-important">&times;</span>
        </button>
      </div>
    </div>
    `
  }
}

customElements.define('cafe-alert', CafeAlert)
