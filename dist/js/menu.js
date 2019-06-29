var menuHtml = `
    <div class="settings-tab">
        <p>THEME</p>
        <img src="img/iconmonstr-gear-opaque.png" class="settings-icon">
    </div>

    <div class="settings-menu">
        <ul class="settings-list">
            <li class="settings-item" id="theme--bright">
                BRIGHT
            </li>
            <li class="settings-item" id="theme--calm">
                CALM
            </li>
            <li class="settings-item" id="theme--bold">
                BOLD
            </li>
            <li class="settings-item" id="theme--somber">
                SOMBER
            </li>
            <li class="settings-item" id="theme--dark">
                DARK
            </li>
        </ul>
    </div>

    <div class="menu-tab">
        <div class="menu-button">
            <div class="button-line"></div>
            <div class="button-line"></div>
            <div class="button-line"></div>
        </div>
    </div>

    <nav class="nav-menu">
        <ul class="menu-list">
            <li class="menu-item">
                <a href="./portfolio-main.html" class="menu-link">
                    Home
                </a>
            </li>
            <li class="menu-item">
                <a href="./portfolio-about.html" class="menu-link">
                    About Me
                </a>
            </li>
            <li class="menu-item">
                <a href="./portfolio-projects.html" class="menu-link">
                    My Projects
                </a>
            </li>
            <li class="menu-item">
                <a href="./portfolio-contact.html" class="menu-link">
                    Contact Me
                </a>
            </li>
        </ul>
    </nav>
        
    <div class="menu-icons">
        <div class="menu-link-icon">
            <a href="https://github.com/chadfraser/" class="icon-anchor">
                <img src="img/iconmonstr-github-opaque.png" alt="" class="link-image menu-link-image github-image">
            </a>
        </div>
        <div class="menu-link-icon">
            <a href="https://www.linkedin.com/in/chad-fraser" class="icon-anchor">
                <img src="img/iconmonstr-linkedin-opaque.png" alt="" class="link-image menu-link-image linked-in-image">
            </a>
        </div>
        <div class="menu-link-icon">
            <a href="https://www.facebook.com/1up20x6" class="icon-anchor">
                <img src="img/iconmonstr-facebook-opaque.png" alt="" class="link-image menu-link-image facebook-image">
            </a>
        </div>
    </div>
`

document.getElementById("menu-header").innerHTML = menuHtml;
