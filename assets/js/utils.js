/* Utilitários compartilhados pelos componentes: escape de texto,
   campos reservados, link do WhatsApp, ícones e molduras de fotografia. */
(function () {
  "use strict";
  const C = window.SITE_CONFIG;

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* "[texto]" = campo ainda não preenchido. */
  const isSlot = (s) => typeof s === "string" && /^\s*\[.*\]\s*$/.test(s);
  const filled = (s) => typeof s === "string" && s.trim() !== "" && !isSlot(s);

  /* Renderiza texto; trechos entre colchetes viram marcação de campo a preencher. */
  const t = (s) =>
    esc(s).replace(/\[([^\]]+)\]/g, '<span class="slot" title="Campo a preencher em assets/js/config.js">$1</span>');

  const digits = (s) => String(s ?? "").replace(/\D/g, "");
  /* tel: com DDI do Brasil quando o número tiver só DDD + número */
  const telHref = (s) => {
    const d = digits(s);
    return `tel:+${d.length <= 11 ? "55" + d : d}`;
  };

  /* Link do WhatsApp — número definido apenas em SITE_CONFIG.whatsapp.numero */
  const waLink = (mensagem) => {
    const numero = digits(C.whatsapp.numero);
    const texto = encodeURIComponent(mensagem || C.whatsapp.mensagemPadrao);
    return numero ? `https://wa.me/${numero}?text=${texto}` : `https://wa.me/?text=${texto}`;
  };
  const waAttrs = (mensagem) => `href="${esc(waLink(mensagem))}" target="_blank" rel="noopener"`;

  const svg = (paths) =>
    `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;

  const Icons = {
    balanca: svg('<path d="M12 3.5v17"/><path d="M8 20.5h8"/><path d="M4.5 6.5h15"/><path d="M4.5 6.5 2 12.5a2.5 2.5 0 0 0 5 0L4.5 6.5Z"/><path d="M19.5 6.5 17 12.5a2.5 2.5 0 0 0 5 0l-2.5-6Z"/>'),
    pessoa: svg('<circle cx="12" cy="8" r="3.5"/><path d="M5 20.5c.8-3.6 3.6-6 7-6s6.2 2.4 7 6"/>'),
    documento: svg('<path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8l-5-5Z"/><path d="M14 3v5h5"/><path d="M8.5 12.5h7M8.5 16h7"/>'),
    colunas: svg('<path d="M3 20.5h18"/><path d="M4.5 18h15"/><path d="M4 9.5h16"/><path d="M12 3.5 20.5 8h-17L12 3.5Z"/><path d="M6.5 9.5V18M10 9.5V18M14 9.5V18M17.5 9.5V18"/>'),
    escudo: svg('<path d="M12 3.2 19 6v5.2c0 4.6-3 8-7 9.6-4-1.6-7-5-7-9.6V6l7-2.8Z"/><path d="M12 7.5v9"/>'),
    pasta: svg('<rect x="3" y="7" width="18" height="13" rx="1.5"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"/><path d="M3 12.5h18"/>'),
    telefone: svg('<path d="M5 4h3.2l1.6 4-2 1.3a11 11 0 0 0 4.9 4.9l1.3-2 4 1.6V17a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"/>'),
    whatsapp: svg('<path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z"/><path d="M9 10.5h6M9 13.5h4"/>'),
    email: svg('<rect x="3" y="5.5" width="18" height="13" rx="1.5"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>'),
    local: svg('<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.3"/>'),
    relogio: svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
    link: svg('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),
    seta: svg('<path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5"/>'),
    chevron: svg('<path d="m6 9.5 6 6 6-6"/>'),
    menu: svg('<path d="M4 8.5h16M4 15.5h16"/>'),
    fechar: svg('<path d="M6 6l12 12M18 6 6 18"/>'),
    camera: svg('<rect x="3" y="6.5" width="18" height="13" rx="1.5"/><path d="M8.5 6.5 10 4h4l1.5 2.5"/><circle cx="12" cy="13" r="3.5"/>'),
  };

  /* Moldura de fotografia: mostra um espaço reservado com o nome do arquivo
     até a imagem real carregar. Se o arquivo não existir, o espaço permanece. */
  const photo = ({ arquivo, alt, especificacao, icone = "camera", classe = "", eager = false }) => {
    const nome = String(arquivo || "").split("/").pop();
    return `<div class="photo ${classe}" data-photo>
      <div class="photo-ph" aria-hidden="true">
        ${Icons[icone] || Icons.camera}
        <span class="ph-file">${esc(nome)}</span>
        ${especificacao ? `<span class="ph-spec">${esc(especificacao)}</span>` : ""}
      </div>
      <img src="${esc(arquivo)}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
    </div>`;
  };

  /* Logomarca original, com nome em texto enquanto o arquivo não existir. */
  const logo = (altura, extra = "") => `<span class="logo" data-logo ${extra}>
      <img src="${esc(C.logo.arquivo)}" alt="${esc(C.logo.alt)}" height="${Number(altura) || 44}" hidden>
      <span class="logo-text" data-logo-text>
        <span class="logo-name">${esc(C.escritorio.nome)}</span>
        <span class="logo-sub">${esc(C.escritorio.complemento)}</span>
      </span>
    </span>`;

  const eyebrow = (texto) => `<p class="eyebrow"><span class="para" aria-hidden="true">§</span>${esc(texto)}</p>`;

  window.UI = { C, esc, isSlot, filled, t, digits, telHref, waLink, waAttrs, Icons, photo, logo, eyebrow };
  window.Components = window.Components || {};
})();
