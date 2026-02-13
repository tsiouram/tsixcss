class TsixHeaderOne extends HTMLElement {
  connectedCallback () {
    const titre = this.getAttribute('titre') || 'TsixCss Site'
    const logo = this.getAttribute('logo') || './images/Tsixcss.png'

    this.innerHTML = `
        <header class="header1">
        <img src="${logo}" alt="Logo" class="logo1">
        <h1>${titre}</h1>
    </header>`
  }
}
customElements.define('tsix-head-one', TsixHeaderOne)

class TsixHeaderTwo extends HTMLElement {
    connectedCallback() {
        const titre = this.getAttribute('titre') || "Mon Site";
        const logo = this.getAttribute('logo') || "./images/default-logo.png";

        this.innerHTML = `
        <header class="header2">
            <div class="brand">
                <img src="${logo}" alt="Logo" class="logo2">
                <h1>${titre}</h1>
            </div>
            <div class="user-actions">
                <button class="icon-btn">🔔 <span class="badge">3</span></button>
                <a href="#" class="profile-btn"><img src="https://via.placeholder.com/150"></a>
            </div>
        </header>`;
    }
}
customElements.define('tsix-head-two', TsixHeaderTwo);

class TsixNavbar extends HTMLElement {
  connectedCallback() {
    const menus = (this.getAttribute('menus') || "Accueil,Services,Projets,Blog,Contact").split(',');
    const links = (this.getAttribute('links') || "#,#,#,#,#").split(',');

    let navContent = '';
    menus.forEach((menu, index) => {
      const href = links[index] || "#";
      navContent += `<a href="${href}">${menu.trim()}</a>`;
    });

    this.innerHTML = `<nav class="navbar">${navContent}</nav>`;
  }
}
customElements.define('tsix-navbar', TsixNavbar);