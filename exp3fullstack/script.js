// When checkbox is clicked, toggle the 'dark' class on the body
document.getElementById('themeSwitch').addEventListener('change', function () {
  document.body.classList.toggle('dark', this.checked);
});
