/* Lawyers — perfis gerados a partir de SITE_CONFIG.advogados */
(function () {
  const { C, esc, t, isSlot, Icons, waAttrs, photo, eyebrow } = window.UI;

  const lista = (itens) =>
    itens && itens.length ? `<ul class="fact-list">${itens.map((i) => `<li>${t(i)}</li>`).join("")}</ul>` : "";

  window.Components.Lawyers = () => {
    const a = C.textos.advogados;

    const cards = C.advogados
      .map((adv, i) => {
        const msg = isSlot(adv.nome)
          ? C.whatsapp.mensagemPadrao
          : `Olá! Acessei o site do escritório ${C.escritorio.nomeCompleto} e gostaria de falar com ${adv.nome}.`;
        const fatos = [
          adv.formacao ? `<div><dt>Formação acadêmica</dt><dd>${t(adv.formacao)}</dd></div>` : "",
          adv.especializacoes?.length ? `<div><dt>Especializações</dt><dd>${lista(adv.especializacoes)}</dd></div>` : "",
          adv.areas?.length ? `<div><dt>Áreas de atuação</dt><dd>${lista(adv.areas)}</dd></div>` : "",
        ].join("");

        return `<article class="lawyer" data-reveal="card" style="--d:${i * 120}ms">
          <div class="lawyer-media">
            ${photo({ arquivo: adv.foto, alt: isSlot(adv.nome) ? "Fotografia profissional" : `Fotografia de ${adv.nome}`, especificacao: "Retrato profissional · 3:4 · 900 × 1200 px", icone: "pessoa" })}
          </div>
          <div class="lawyer-body">
            <p class="lawyer-oab">${t(adv.oab)}</p>
            <h3 class="lawyer-name">${t(adv.nome)}</h3>
            <p class="lawyer-bio">${t(adv.apresentacao)}</p>
            <dl class="lawyer-facts">${fatos}</dl>
            ${adv.whatsapp ? `<a class="text-link lawyer-wa" ${waAttrs(msg)}>${Icons.whatsapp}<span>Contato pelo WhatsApp</span></a>` : ""}
          </div>
        </article>`;
      })
      .join("");

    return `<section class="section scheme-white lawyers" id="advogados" aria-labelledby="lawyers-title">
      <div class="wrap">
        <header class="section-head">
          <div data-reveal>${eyebrow(a.rotulo)}</div>
          <h2 class="h2" id="lawyers-title" data-reveal style="--d:80ms">${esc(a.titulo)}</h2>
          <p class="section-desc" data-reveal style="--d:160ms">${esc(a.descricao)}</p>
        </header>
        <div class="lawyer-grid">${cards}</div>
      </div>
    </section>`;
  };
})();
