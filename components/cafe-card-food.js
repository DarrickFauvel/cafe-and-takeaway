class CafeCardFood extends HTMLElement {
  connectedCallback() {
    this.foodImage = './img/cards/' + this.getAttribute('image')
    this.foodTitle = this.getAttribute('title')
    this.artistName = this.getAttribute('artist-name')
    this.artistPage = this.getAttribute('artist-page')
    this.resultPage = this.getAttribute('result-page')

    this.innerHTML = `
      <style>
        .card-food .attribution {
          position: absolute;
          bottom: 30px;
          right: 10px;
          font-size: .7rem;
          text-shadow: 0 0 5px black;
          color: white;
        }
        .card-food .attribution a {
          color: white;
        }
      </style>

      <div class="card card-food text-white mb-5 mb-md-0">
        <img src="${this.foodImage}" class="card-img-top" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title cafe__card-title">${this.foodTitle}</h5>
          <p class="attribution">
            Photo by <a target="blank" href="${this.artistPage}">${this.artistName}</a> on
            <a target="blank" href="${this.resultPage}">Unsplash</a>
          </p>
        </div>
        <a href="#" class="card-footer cafe__bg-gradient--red-to-orange text-light py-2 text-center">Add to Cart</a>
      </div>
    `
  }
}

customElements.define('cafe-card-food', CafeCardFood)
