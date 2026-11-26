(function () {
  /* Theme toggle (default light; choice is remembered) */
  var root = document.documentElement;
  var themeBtn = document.querySelector('.theme-toggle');
  function applyTheme(dark) {
    if (dark) root.setAttribute('data-theme', 'dark'); else root.removeAttribute('data-theme');
    if (themeBtn) themeBtn.textContent = dark ? 'Light mode' : 'Dark mode';
  }
  applyTheme(root.getAttribute('data-theme') === 'dark');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var dark = root.getAttribute('data-theme') !== 'dark';
    applyTheme(dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  });

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (ok, fail) {
      var t = document.createElement('textarea');
      t.value = text; t.style.position = 'fixed'; t.style.opacity = '0';
      document.body.appendChild(t); t.select();
      try { document.execCommand('copy') ? ok() : fail(); } catch (e) { fail(e); }
      document.body.removeChild(t);
    });
  }

  var ICON_COPY = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/></svg>';
  var ICON_DONE = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

  function flash(btn, text, html) {
    var label = btn.innerHTML;
    if (html) btn.innerHTML = html; else btn.textContent = text;
    btn.setAttribute('data-done', '');
    setTimeout(function () { btn.innerHTML = label; btn.removeAttribute('data-done'); }, 2000);
  }

  /* Copy buttons on every code block inside an article */
  document.querySelectorAll('article pre').forEach(function (pre) {
    var wrap = document.createElement('div');
    wrap.className = 'code';
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'btn copy-code';
    btn.innerHTML = ICON_COPY; btn.title = 'Copy code'; btn.setAttribute('aria-label', 'Copy code'); btn.setAttribute('aria-live', 'polite');
    wrap.appendChild(btn);
    btn.addEventListener('click', function () {
      copy(pre.textContent.replace(/\n$/, '')).then(
        function () { flash(btn, 'Copied', ICON_DONE); },
        function () { flash(btn, 'Failed'); }
      );
    });
  });

  /* Share buttons under the post */
  var status = document.querySelector('.share-status');
  function postText() {
    return Array.prototype.filter.call(document.querySelectorAll('article h1,article p,article pre'), function (el) {
      return !el.classList.contains('meta') && !el.classList.contains('back');
    }).map(function (el) { return el.textContent.trim(); }).join('\n\n');
  }
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.dataset.copy === 'link' ? location.href.split('#')[0] : postText();
      copy(text).then(function () {
        flash(btn, 'Copied');
        if (status) { status.textContent = 'Copied to clipboard'; setTimeout(function () { status.textContent = ''; }, 2000); }
      }, function () {
        if (status) status.textContent = 'Copy failed. Select the text and copy it manually.';
      });
    });
  });
})();
