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
        const logo = this.getAttribute('logo') || "./images/tsixcss.png";

        this.innerHTML = `
        <header class="header2">
            <div class="logoheader2">
                <img src="${logo}" alt="Logo" class="logo2">
            </div>
            <div class="titreheader2">
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
    const titre = this.getAttribute('titre') || "Mon Site";



    let navContent = '';
    menus.forEach((menu, index) => {
      const href = links[index] || "#";
      navContent += `<a href="${href}">${menu.trim()}</a>`;
    });

    this.innerHTML = `
      <nav class="navbar">
        <div class="nav-container-mobile">
        <div class="titreheader2mob">
              <h1>${titre}</h1>
            </div>
        <button class="menu-toggle" id="menuToggle">☰</button>
        </div>
        
        <div class="nav-links" id="navLinks">
          ${navContent}
        </div>
      </nav>
    `;

    // Petit script pour ouvrir/fermer le menu sur mobile
    const btn = this.querySelector('#menuToggle');
    const linksBox = this.querySelector('#navLinks');
    btn.addEventListener('click', () => {
      linksBox.classList.toggle('active');
    });
  }
}
customElements.define('tsix-navbar', TsixNavbar);


class TsixFormOne extends HTMLElement {
    connectedCallback() {
        const titre = this.getAttribute('titre') || "Formulaire";
        const bouton = this.getAttribute('bouton') || "Valider";
        
        // On récupère la configuration des champs (format JSON)
        const champsData = this.getAttribute('champs');
        const champs = champsData ? JSON.parse(champsData) : [];

        let formHTML = '';

        champs.forEach(champ => {
            formHTML += `<div class="input-group">`;
            formHTML += `<label class="label1">${champ.label}</label>`;

            if (champ.type === 'select') {
                formHTML += `<select class="select1" id="${champ.id}">`;
                champ.options.forEach(opt => {
                    formHTML += `<option value="${opt.value}">${opt.text}</option>`;
                });
                formHTML += `</select>`;
            } 
            else if (champ.type === 'checkbox') {
                formHTML += `
                    <div class="checkbox-wrapper">
                        <input type="checkbox" id="${champ.id}">
                        <span>${champ.text || ''}</span>
                    </div>`;
            }
            else {
                formHTML += `<input class="input1" type="${champ.type}" id="${champ.id}" placeholder="${champ.placeholder || ''}" ${champ.required ? 'required' : ''}>`;
            }
            formHTML += `</div>`;
        });

        this.innerHTML = `
        <div class="center_formulaire1">
            <section class="glass-card1">
                <h2>${titre}</h2>
                <form id="formOne">
                    ${formHTML}
                    <button type="submit" class="btn-primary1">${bouton}</button>
                </form>
            </section>
        </div>`;
    }
}
customElements.define('tsix-form-one', TsixFormOne);