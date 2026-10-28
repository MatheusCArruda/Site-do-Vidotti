/* WhatsAppButton — botão flutuante no canto inferior direito */
(function () {
  const { Icons, waAttrs } = window.UI;

  window.Components.WhatsAppButton = () => `<a class="wa-float" ${waAttrs()} aria-label="Conversar pelo WhatsApp (abre em nova aba)" data-wa-float>
      ${Icons.whatsapp}
      <span class="wa-float-label" aria-hidden="true">WhatsApp</span>
    </a>`;
})();
