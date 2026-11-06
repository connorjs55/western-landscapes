// Header
function headerTemplate() {
    return `
    <a id="logo_link" href="index.html">
                <img class="logo" src="styles/images/Explore-Idaho-crop.png" alt="Explore Idaho Logo">
            </a>
        <nav>
            <a href="index.html"><p>Home</p></a>
            <a href="mountains-and-rivers.html"><p>Mountains and Rivers</p></a>
            <a href="flora.html"><p>Flora</p></a>
            <a href="ecoregions.html"><p>Ecoregions</p></a>
            <a href="otherstates.html"><p>Other States</p></a>
        </nav>
        `
}

const header = document.querySelector('header')
header.innerHTML = headerTemplate()

// Footer
function footerTemplate() {
    return `
    <p>Explore Idaho &copy; 2026 - Connor Searle</p>
            <p><a href="site-plan.html">Site Plan</a></p>
            <p><a href="index.html">Contact Us</a></p>
            <div class="social">
                <a href="https://facebook.com" target="_blank">
                    <img src="styles/images/facebook.png" alt="fb icon">
                </a>
                <a href="https://x.com" target="_blank">
                    <img src="styles/images/x-icon.png" alt="x icon">
                </a>
                <a href="https://instagram.com" target="_blank">
                    <img src="styles/images/instagram.png" alt="instagram icon">
                </a>
            </div>
        `
}

const footer = document.querySelector('footer')
footer.innerHTML = footerTemplate()