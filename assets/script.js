// html head
function Head(props) {
  this.props = props
  this.render = function() {
    this.elem = document.getElementById(this.props.id)
    var html = /*html*/ `
      <meta charset="utf-8">
      <title>SF Audio Guild</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" href="/assets/sfag.png">
      <link rel="stylesheet" href="/assets/theme.min.css">
      <link rel="stylesheet" href="/assets/mainstyle.css">
    `
    this.elem.innerHTML = html
  }

  this.render()
  return this
}
var head = new Head({
  id: "head"
})

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