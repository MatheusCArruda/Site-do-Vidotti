/* Contact — informações de contato e formulário */
(function () {
  const { C, esc, t, filled, isSlot, telHref, Icons, waAttrs, eyebrow } = window.UI;

  const item = (icone, rotulo, valorHtml) => `<li>
      <span class="c-icon">${Icons[icone]}</span>
      <div><span class="c-label">${esc(rotulo)}</span><span class="c-value">${valorHtml}</span></div>
    </li>`;

  window.Components.Contact = () => {
    const c = C.textos.contato;
    const k = C.contato;

    const telefone = filled(k.telefone) ? `<a href="${telHref(k.telefone)}">${esc(k.telefone)}</a>` : t(k.telefone);
    const whatsapp = `<a ${waAttrs()}>${t(C.whatsapp.numeroExibicao)}</a>`;
    const email = filled(k.email) ? `<a href="mailto:${esc(k.email)}">${esc(k.email)}</a>` : t(k.email);
    const endereco = filled(k.endereco) && k.mapaUrl
      ? `<a href="${esc(k.mapaUrl)}" target="_blank" rel="noopener">${esc(k.endereco)}</a>`
      : t(k.endereco);

    const redes = C.redesSociais.filter((r) => r.url);
    const redesHtml = redes.length
      ? `<ul class="social" aria-label="Redes sociais oficiais">${redes
          .map((r) => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${Icons.link}<span>${esc(r.nome)}</span></a></li>`)
          .join("")}</ul>`
      : "";

    const assuntos = C.areas
      .map((a, i) => `<option value="${esc(a.id)}">${esc(isSlot(a.nome) ? `Área de atuação ${i + 1} (a definir)` : a.nome)}</option>`)
      .join("");

    return `<section class="section scheme-dark contact" id="contato" aria-labelledby="contact-title">
      <div class="wrap">
        <header class="section-head">
          <div data-reveal>${eyebrow(c.rotulo)}</div>
          <h2 class="h2" id="contact-title" data-reveal style="--d:80ms">${esc(c.titulo)}</h2>
          <p class="section-desc" data-reveal style="--d:160ms">${esc(c.descricao)}</p>
        </header>

        <div class="contact-grid">
          <div class="contact-info" data-reveal>
            <ul class="contact-list">
              ${item("telefone", "Telefone", telefone)}
              ${item("whatsapp", "WhatsApp", whatsapp)}
              ${item("email", "E-mail", email)}
              ${item("local", "Endereço", endereco)}
              ${item("relogio", "Horário de atendimento", t(k.horario))}
            </ul>
            <a class="btn btn-primary btn-block-sm contact-wa" ${waAttrs()}>${Icons.whatsapp}<span>Conversar pelo WhatsApp</span></a>
            ${redesHtml}
          </div>

          <form class="contact-form" data-contact-form novalidate data-reveal style="--d:120ms" aria-describedby="form-note">
            <div class="field">
              <label for="f-nome">Nome completo <span class="req" aria-hidden="true">*</span></label>
              <input id="f-nome" name="nome" type="text" autocomplete="name" required minlength="3" aria-describedby="e-nome">
              <p class="field-error" id="e-nome" hidden></p>
            </div>
            <div class="field">
              <label for="f-email">E-mail <span class="req" aria-hidden="true">*</span></label>
              <input id="f-email" name="email" type="email" autocomplete="email" inputmode="email" required aria-describedby="e-email">
              <p class="field-error" id="e-email" hidden></p>
            </div>
            <div class="field">
              <label for="f-telefone">Telefone ou WhatsApp <span class="req" aria-hidden="true">*</span></label>
              <input id="f-telefone" name="telefone" type="tel" autocomplete="tel" inputmode="tel" required placeholder="(00) 00000-0000" aria-describedby="e-telefone">
              <p class="field-error" id="e-telefone" hidden></p>
            </div>
            <div class="field">
              <label for="f-assunto">Assunto do contato <span class="req" aria-hidden="true">*</span></label>
              <select id="f-assunto" name="assunto" required aria-describedby="e-assunto">
                <option value="">Selecione</option>
                <option value="informacoes-gerais">Informações gerais sobre o atendimento</option>
                ${assuntos}
                <option value="outro">Outro assunto</option>
              </select>
              <p class="field-error" id="e-assunto" hidden></p>
            </div>
            <div class="field field--full">
              <label for="f-mensagem">Mensagem <span class="req" aria-hidden="true">*</span></label>
              <textarea id="f-mensagem" name="mensagem" rows="5" required minlength="10" aria-describedby="e-mensagem f-mensagem-dica"></textarea>
              <p class="field-hint" id="f-mensagem-dica">Descreva brevemente o motivo do contato. Evite incluir documentos ou dados sensíveis nesta primeira mensagem.</p>
              <p class="field-error" id="e-mensagem" hidden></p>
            </div>

            <div class="field field--full field--check">
              <input id="f-consentimento" name="consentimento" type="checkbox" required aria-describedby="e-consentimento">
              <label for="f-consentimento">Li e concordo com a <button type="button" class="inline-link" data-open-privacy>Política de Privacidade</button> e autorizo o uso dos meus dados para retorno deste contato.</label>
              <p class="field-error" id="e-consentimento" hidden></p>
            </div>

            <div class="hp" aria-hidden="true">
              <label for="f-site">Não preencha este campo</label>
              <input id="f-site" name="site" type="text" tabindex="-1" autocomplete="off">
            </div>

            <div class="form-footer field--full">
              <button class="btn btn-primary" type="submit" data-submit><span data-submit-label>Enviar mensagem</span></button>
              <p class="form-note" id="form-note"><span aria-hidden="true">*</span> Campos obrigatórios</p>
            </div>
            <div class="form-status field--full" role="status" aria-live="polite" data-form-status hidden></div>
          </form>
        </div>
      </div>
    </section>`;
  };
})();
