var menuHtml = `
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
            <a href="./" class="icon-anchor">
                <img src="img/temp-a.png" alt="" class="link-image menu-link-image github-image">
            </a>
        </div>
        <div class="menu-link-icon">
            <a href="./" class="icon-anchor">
                <img src="img/temp-a.png" alt="" class="link-image menu-link-image linked-in-image">
            </a>
        </div>
        <div class="menu-link-icon">
            <a href="./" class="icon-anchor">
                <img src="img/temp-a.png" alt="" class="link-image menu-link-image kattis-image">
            </a>
        </div>
    </div>
`

document.getElementById("menu-header").innerHTML = menuHtml;
