// header
function Header(props) {
  this.props = props
  this.render = function() {
    this.elem = document.getElementById(this.props.id)
    var html = /*html*/ `
      <img class="sfag" src="/assets/sfag.png">
      <h2 class="banner"><i>SFX, Sound Design and More!</i></h2>
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
      <div class="nav-item"><a href="https://app.sfaudioguild.com/login">Portal</a></div>
      <div class="nav-item"><a href="mailto:admin@sfaudioguild.com">Email Us!</a></div>
      <a href="https://www.youtube.com/channel/UC-Dz7rJh7eer2HbHWdFCgHA"><img class="youtubeicon" src="/assets/youtube_PNG21.png"></a>
      <a href="https://www.instagram.com/sfaudioguild"><img class="instaicon" src="/assets/instaiconzen.png"></a>
    `
    this.elem.innerHTML = html
  }

  this.render()
  return this
}
var header = new Navigation({
  id: "nav"
})