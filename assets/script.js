// header
function Header(props) {
  this.props = props
  this.render = function() {
    this.elem = document.getElementById(this.props.id)
    var html = /*html*/ `
      <div class="d-flex align-items-center">
        <img class="sfag" src="/assets/sfag.png">
        <h2 class="banner"><i>Social Sound Design!</i></h2>
      </div>
      <a href="https://app.sfaudioguild.com/login"><button class="main-btn btn btn-warning">Log In</button></a>
    `
    this.elem.innerHTML = html
  }

  this.render()
  return this
}
var header = new Header({
  id: "header"
})

// navigation
function Navigation(props) {
  this.props = props
  this.render = function() {
    this.elem = document.getElementById(this.props.id)
    var html = /*html*/ `
      <div class="nav-item"><a href="/index.html">Home</a></div>
      <div class="nav-item"><a href="/downloads.html">Downloads</a></div>
      <div class="nav-item"><a href="https://www.pond5.com/artist/sfaudioguild">Store</a></div>
    `
    this.elem.innerHTML = html
  }

  this.render()
  return this
}
var header = new Navigation({
  id: "nav"
})

// footer
function Footer(props) {
  this.props = props
  this.render = function() {
    this.elem = document.getElementById(this.props.id)
    var html = /*html*/ `
      <p>Contact Us, or find us on social media!</p>
      <a href="mailto:admin@sfaudioguild.com">admin@sfaudioguild.com</a>
      <div class="d-flex align-items-center">
        <a href="https://www.youtube.com/channel/UC-Dz7rJh7eer2HbHWdFCgHA"><img class="youtubeicon" src="/assets/youtube_PNG21.png"></a>
        <a href="https://www.instagram.com/sfaudioguild"><img class="instaicon" src="/assets/instaiconzen.png"></a>
      </div>
      <br>
      <small>©2022 SFAudioGuild</small>
    `
    this.elem.innerHTML = html
  }

  this.render()
  return this
}
var footer = new Footer({
  id: "footer"
})