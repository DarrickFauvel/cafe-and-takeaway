class CafeFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="container">
      <footer class="mt-5">
        <div class="container">
          <div class="row cafe__bg-gradient--orange-to-red cafe__box-shadow--mint-top pt-2 pb-2 rounded-top">
            <div class="col-md order-2 order-md-1">
              <p class="my-0 py-2">
                &copy; 2021 Cafe & Takeaway. All rights reserved.
                <a href="" class="ml-2">Terms Of Use</a>
                <a href="" class="ml-2">Your Privacy</a>
              </p>
            </div>

            <div class="col-md order-1 order-md-2 d-flex justify-content-end">
              <nav class="nav">
                <a class="nav-link" href="index.html">Home</a>
                <a class="nav-link" href="menu.html">Menu</a>
                <a class="nav-link" href="about.html">About</a>
                <a class="nav-link" href="contact.html">Contact</a>
              </nav>
            </div>
          </div>

        </div>
      </footer>
    </div>
    `
  }
}

customElements.define('cafe-footer', CafeFooter)
