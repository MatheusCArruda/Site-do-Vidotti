/* Header — cabeçalho fixo com logomarca, menu e acesso ao WhatsApp */
(function () {
  const { C, esc, Icons, waAttrs, logo } = window.UI;

  window.Components.Header = () => {
    const links = C.menu
      .map((m) => `<li><a href="#${esc(m.id)}" data-nav="${esc(m.id)}">${esc(m.rotulo)}</a></li>`)
      .join("");

    return `<header class="site-header" data-header>
      <div class="wrap header-inner">
        <a class="brand" href="#inicio" aria-label="${esc(C.escritorio.nomeCompleto)} — ir para o início">
          ${logo(C.logo.alturaCabecalho)}
        </a>
        <nav class="nav" aria-label="Navegação principal">
          <ul>${links}</ul>
        </nav>
        <div class="header-actions">
          <a class="header-wa" ${waAttrs()} aria-label="Conversar pelo WhatsApp (abre em nova aba)">
            ${Icons.whatsapp}<span class="header-wa-label">WhatsApp</span>
          </a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="menu-mobile" data-menu-toggle>
            <span class="menu-icon-open">${Icons.menu}</span>
            <span class="menu-icon-close">${Icons.fechar}</span>
            <span class="visually-hidden" data-menu-label>Abrir menu</span>
          </button>
        </div>
      </div>
      <div class="mobile-menu" id="menu-mobile" hidden data-menu>
        <nav class="wrap" aria-label="Navegação principal (celular)">
          <ul>${links}</ul>
          <a class="btn btn-primary btn-block" ${waAttrs()}>${Icons.whatsapp}<span>Conversar pelo WhatsApp</span></a>
        </nav>
      </div>
    </header>`;
  };
})();
