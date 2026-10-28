/* About — Quem Somos */
(function () {
  const { C, esc, t, Icons, photo, eyebrow } = window.UI;

  window.Components.About = () => {
    const q = C.textos.quemSomos;
    const paragrafos = q.paragrafos.map((p) => `<p>${t(p)}</p>`).join("");
    const pilares = C.pilares
      .map(
        (p, i) => `<li class="pillar" data-reveal style="--d:${i * 110}ms">
          <span class="pillar-icon">${Icons[p.icone] || Icons.balanca}</span>
          <h3>${esc(p.titulo)}</h3>
          <p>${esc(p.descricao)}</p>
        </li>`
      )
      .join("");

    return `<section class="section scheme-light about" id="quem-somos" aria-labelledby="about-title">
      <div class="wrap">
        <div class="about-grid">
          <figure class="about-figure" data-reveal="side">
            ${photo(C.imagens.quemSomos)}
          </figure>
          <div class="about-text">
            <div data-reveal>${eyebrow(q.rotulo)}</div>
            <h2 class="h2" id="about-title" data-reveal style="--d:80ms">${esc(q.titulo)}</h2>
            <div class="prose" data-reveal style="--d:160ms">${paragrafos}</div>
          </div>
        </div>
        <ul class="pillars" aria-label="Pilares institucionais">${pilares}</ul>
      </div>
    </section>`;
  };
})();
