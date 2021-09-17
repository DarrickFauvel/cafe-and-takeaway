class CafeModalOrder extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="order__modal" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header cafe__bg-secondary">
          <h5 class="modal-title">What kind of order would you like to place?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body bg-success">
          <div class="card mb-3 border-0" style="max-width: 540px">
            <a href="">
              <div class="row no-gutters p-4">
                <div class="col-md-4">
                  <img src="./img/icons/noun_curbside delivery_4051965.svg" class="card-img" alt="curbside delivery" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Curbside Pickup</h5>
                    <p class="card-text">Set a time to pickup fresh cafe food and we will bring it out to your vehicle.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="card mb-3 border-0" style="max-width: 540px">
            <div class="row no-gutters p-4">
              <div class="col-md-4">
                <img src="./img/icons/noun_time machine_3883749.svg" class="card-img" alt="time machine" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Time Machine Delivery</h5>
                  <p class="card-text">Fresh cafe food delivered to you. When you need it yesterday!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
  }
}

customElements.define('cafe-modal-order', CafeModalOrder)
