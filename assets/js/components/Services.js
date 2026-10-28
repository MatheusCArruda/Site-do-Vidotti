/* Services — Áreas de atuação (cartões gerados a partir de SITE_CONFIG.areas) */
(function () {
  const { C, esc, t, isSlot, Icons, waAttrs, eyebrow } = window.UI;

  window.Components.Services = () => {
    const s = C.textos.servicos;

    const cards = C.areas
      .map((a, i) => {
        const msg = isSlot(a.nome)
          ? C.whatsapp.mensagemPadrao
          : `Olá! Acessei o site do escritório ${C.escritorio.nomeCompleto} e gostaria de obter informações sobre a área de ${a.nome}.`;
        return `<article class="service-card" data-reveal="card" style="--d:${i * 90}ms">
          <span class="service-icon">${Icons[a.icone] || Icons.documento}</span>
          <h3 class="service-name">${t(a.nome)}</h3>
          <p class="service-summary">${t(a.resumo)}</p>
          <div class="service-more" id="info-${esc(a.id)}" hidden>
            <p>${t(a.detalhes)}</p>
            <div class="service-links">
              <a class="text-link" href="#contato" data-assunto="${esc(a.id)}">Solicitar atendimento ${Icons.seta}</a>
              <a class="text-link" ${waAttrs(msg)}>WhatsApp ${Icons.seta}</a>
            </div>
          </div>
          <button class="link-btn" type="button" aria-expanded="false" aria-controls="info-${esc(a.id)}" data-service-toggle>
            <span data-label>${esc(s.botaoCartao)}</span>${Icons.chevron}
          </button>
        </article>`;
      })
      .join("");

    return `<section class="section scheme-dark services" id="servicos" aria-labelledby="services-title">
      <div class="wrap">
        <header class="section-head section-head--split">
          <div>
            <div data-reveal>${eyebrow(s.rotulo)}</div>
            <h2 class="h2" id="services-title" data-reveal style="--d:80ms">${esc(s.titulo)}</h2>
          </div>
          <p class="section-desc" data-reveal style="--d:160ms">${esc(s.descricao)}</p>
        </header>
        <div class="services-grid">${cards}</div>
        <div class="services-aside" data-reveal>
          <p>${esc(s.chamadaWhatsApp)}</p>
          <a class="btn btn-ghost" ${waAttrs()}>${Icons.whatsapp}<span>Falar pelo WhatsApp</span></a>
        </div>
      </div>
    </section>`;
  };
})();
