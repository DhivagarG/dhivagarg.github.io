(function () {
  document.getElementById('hamburger-menu').addEventListener('click', (e) => {
    const item = e.target.dataset.superhero;
    const fileName = `styles/${item.toLowerCase()}.css`;
    const fileRef = document.createElement('link');
    fileRef.setAttribute('rel', 'stylesheet');
    fileRef.setAttribute('type', 'text/css');
    fileRef.setAttribute('href', fileName);
    document.getElementsByTagName('head')[0].appendChild(fileRef);
  });
  document.getElementById('hamburger-icon').addEventListener('click', () => {
    const menu = document.getElementById('hamburger-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
})();
