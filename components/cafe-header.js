class CafeHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
      <div class="container fixed-top">
        <!-- Header messages -->
        <div class="row">
          <div class="col">
            <ul class="nav w-100 d-flex justify-content-end pr-2 cafe__bg-gradient--orange-to-red" id="cafe__main-nav-cart">
              <li class="nav-item">
                <a href="#" class="nav-link text-light d-flex">
                  <div class="mr-1" style="width: 20px">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div class="text-nowrap">cart empty</div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <nav class="navbar navbar-expand-lg navbar-dark cafe__box-shadow--mint-bottom cafe__bg-primary rounded-bottom" id="cafe__main-nav">
              <a class="navbar-brand cafe__font--display" href="index.html">Cafe & Takeaway</a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="menu.html" id="navbarDropdown" role="button" data-nav-link="menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Menu </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="menu.html#breakfast">Breakfast</a>
                      <a class="dropdown-item" href="menu.html#lunch">Lunch</a>
                      <a class="dropdown-item" href="menu.html#dinner">Dinner</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ml-3" href="about.html" data-nav-link="about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ml-3" href="contact.html" data-nav-link="contact">Contact</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ml-3" href="" data-toggle="modal" data-target="#login__modal">Sign In</a>
                  </li>
                  <li class="nav-item">
                    <a class="btn btn-dark ml-3" type="button" id="order__button" data-toggle="modal" data-target="order__modal">ORDER NOW</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    `
    if (this.getAttribute('page')) {
      this.page = this.getAttribute('page')
      document.querySelector(`a[data-nav-link=${this.page}]`).classList.add('active')
    }
  }
}

customElements.define('cafe-header', CafeHeader)
