/* Hero — apresentação principal */
(function () {
  const { C, esc, Icons, waAttrs, photo } = window.UI;

  window.Components.Hero = () => {
    const h = C.textos.hero;
    const [antes, depois] = h.identificacao.split("|").map((s) => s.trim());

    return `<section class="hero scheme-dark" id="inicio" aria-labelledby="hero-title">
      <div class="wrap hero-grid">
        <div class="hero-text">
          <p class="eyebrow hero-anim a1">${esc(antes)}${depois ? `<span class="sep" aria-hidden="true">|</span>${esc(depois)}` : ""}</p>
          <span class="rule hero-anim a1" aria-hidden="true"></span>
          <h1 class="hero-title hero-anim a2" id="hero-title">${esc(h.titulo)} <em>${esc(h.tituloDestaque)}</em></h1>
          <p class="lede hero-anim a3">${esc(h.descricao)}</p>
          <div class="actions hero-anim a4">
            <a class="btn btn-primary" href="#contato">${esc(h.botaoPrincipal)}</a>
            <a class="btn btn-ghost" href="#quem-somos">${esc(h.botaoSecundario)}</a>
          </div>
          <a class="wa-inline hero-anim a5" ${waAttrs()}>
            ${Icons.whatsapp}<span>${esc(h.linkWhatsApp)}</span>${Icons.seta}
          </a>
        </div>
        <figure class="hero-figure hero-anim-side">
          ${photo({ ...C.imagens.hero, eager: true })}
        </figure>
      </div>
    </section>`;
  };
})();
