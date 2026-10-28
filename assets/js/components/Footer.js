/* Footer — rodapé institucional */
(function () {
  const { C, esc, t, filled, telHref, waAttrs, logo } = window.UI;

  window.Components.Footer = () => {
    const k = C.contato;
    const nav = C.menu.map((m) => `<li><a href="#${esc(m.id)}">${esc(m.rotulo)}</a></li>`).join("");
    const redes = C.redesSociais.filter((r) => r.url);

    const telefone = filled(k.telefone) ? `<a href="${telHref(k.telefone)}">${esc(k.telefone)}</a>` : t(k.telefone);
    const email = filled(k.email) ? `<a href="mailto:${esc(k.email)}">${esc(k.email)}</a>` : t(k.email);

    return `<footer class="site-footer">
      <div class="wrap">
        <div class="footer-grid">
          <div class="footer-brand">
            ${logo(C.logo.alturaRodape, 'data-size="lg"')}
            <p class="footer-address">${t(k.endereco)}</p>
          </div>

          <nav aria-label="Seções do site">
            <h2 class="footer-title">Navegação</h2>
            <ul class="footer-links">${nav}</ul>
          </nav>

          <div>
            <h2 class="footer-title">Contato</h2>
            <ul class="footer-links">
              <li><span class="f-label">Telefone</span>${telefone}</li>
              <li><span class="f-label">WhatsApp</span><a ${waAttrs()}>${t(C.whatsapp.numeroExibicao)}</a></li>
              <li><span class="f-label">E-mail</span>${email}</li>
            </ul>
          </div>

          <div>
            <h2 class="footer-title">Institucional</h2>
            <ul class="footer-links">
              ${redes.map((r) => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.nome)}</a></li>`).join("")}
              <li><button type="button" class="inline-link" data-open-privacy>Política de privacidade</button></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© <span data-year>2026</span> ${esc(C.escritorio.nomeCompleto)}.${C.escritorio.cnpj ? ` CNPJ ${esc(C.escritorio.cnpj)}.` : ""}</p>
          <p>${t(C.escritorio.registroOAB)}</p>
          <p class="footer-disclaimer">As informações deste site têm caráter exclusivamente informativo e não constituem consulta ou parecer jurídico.</p>
        </div>
      </div>
    </footer>`;
  };
})();
