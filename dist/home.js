const home  = `<header>
<div>
    <img alt="theme-menu" src="assets/superhero-svgrepo-com.svg" id="hamburger-icon" />
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        id="hamburger-icon" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" class="feather feather-align-justify">
        <line x1="21" y1="10" x2="3" y2="10"></line>
        <line x1="21" y1="6" x2="3" y2="6"></line>
        <line x1="21" y1="14" x2="3" y2="14"></line>
        <line x1="21" y1="18" x2="3" y2="18"></line>
    </svg> -->
</div>
<div id="hamburger-menu">
    <div data-superhero="batman" onclick="applyTheme('batman');"></div>
    <div data-superhero="superman" onclick="applyTheme('superman');"></div>
    <div data-superhero="spiderman" onclick="applyTheme('spiderman');"></div>
    <div data-superhero="captainamerica" onclick="applyTheme('captainamerica');"></div>
</div>
</header>
<section>
<img src="./assets/dg.png" alt="profile" />
<div class="content" id="about">
    <h1>
        Hi There, I am
    </h1>
    <div>
        <img src="./assets/dhivagar.gif" class="gif" />
    </div>
    <h3>
        I am a front-end developer having experience with developing responsive web applications using HTML,
        CSS, JavaScript and libaries/frameworks like React.js and Angular.
    </h3>
    <h6>
        Here's how you can reach me
    </h6>
</div>
<div id="contact">
    <div class="icons">
        <a href="mailto:dhivadhinasachin@gmail.com" title="Email: dhivadhinasachin@gmail.com"
            target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-mail">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                </path>
                <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
        </a>
        <a href="https://www.linkedin.com/in/dhivagar-gopu-bab627a3/" target="_blank" rel="noreferrer"
            title="Linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                </path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        </a>
        <a href="https://github.com/DhivagarG" target="_blank" rel="noreferrer" title="Github">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-github">
                <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                </path>
            </svg>
        </a>
    </div>
</div>
<div id="projects">
    <h3>Projects</h3>
    <li> <a href="#" onclick="onNavigate('/bodypix/'); return false;">TensorFlow Body Pix</a></li>
</div>
</section>`;

//(function () {
    //if(document.getElementById('hamburger-menu')){
    //document.getElementById('hamburger-menu').addEventListener('click', (e) => {
    const applyTheme = (item) => {
      //const item = e.target.dataset.superhero;
      if (item) {
        const fileName = `styles/${item?.toLowerCase()}.css`;
        const fileRef = document.createElement('link');
        // Get existing stylesheet
        const hero = document.getElementById('hero');
        fileRef.setAttribute('rel', 'stylesheet');
        fileRef.setAttribute('type', 'text/css');
        fileRef.setAttribute('href', fileName);
        fileRef.setAttribute('id', 'hero');
        if (hero) {
          // Remove unused stylesheet
          hero.remove();
        }
        document.getElementsByTagName('head')[0].appendChild(fileRef);
        for (let superhero of document.querySelectorAll('[data-superhero]')) {
          if (item === superhero.getAttribute('data-superhero')) {
            superhero.classList.add('active-theme');
          } else {
            superhero.classList.remove('active-theme');
          }
        }
      }
    }
    //});
//}
    const toggleHamburgerMenu = (arg) => {
      const menu = document.getElementById('hamburger-menu');
      if (arg) {
        menu.style.display = arg;
      } else {
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
      }
    };
    document.addEventListener('click', (event) => {
      const id = event.target.id;
      const superhero = event.target.getAttribute('data-superhero');
      if (id === 'hamburger-icon') {
        // toggle when clicked on icon
        toggleHamburgerMenu();
      } else if (id === 'hamburger-menu' || superhero) {
        // Restrict close inside menu
        toggleHamburgerMenu('flex');
      } else {
        // close when clicked anywhere else on window
        toggleHamburgerMenu('none');
      }
    });
//})();