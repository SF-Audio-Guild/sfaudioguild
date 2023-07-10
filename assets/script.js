// Download Prompt
function downloadPrompt(file) {
  if(window.confirm('By downloading this package you agree to only use these files for personal use, not for resale or any other commercial purposes. Continue with download?')) {
    var a = document.createElement('a')
    a.href = file
    a.click()
  }
}