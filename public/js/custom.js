(function () {
  var tries = 0;
  var timer = setInterval(function () {
    tries++;
    var footer = document.querySelector('footer');
    if (footer && !document.getElementById('fg-flagcounter')) {
      var box = document.createElement('div');
      box.id = 'fg-flagcounter';
      box.style.textAlign = 'center';
      box.style.padding = '12px 0';
      box.innerHTML = `<a href="https://flagcounter.me/details/kOG"><img src="https://flagcounter.me/kOG" alt="Flag Counter"></a>`;
      footer.appendChild(box);
      clearInterval(timer);
    }
    if (tries > 20) clearInterval(timer);
  }, 500);
})();
