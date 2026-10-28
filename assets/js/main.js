/* Montagem da página e comportamentos: cabeçalho, menu, animações de entrada,
   cartões de serviço, formulário, política de privacidade e imagens. */
(function () {
  "use strict";
  const { C, filled } = window.UI;
  const X = window.Components;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Montagem ---------- */
  const app = document.getElementById("app");
  app.innerHTML = [
    X.Header(),
    '<main id="conteudo" tabindex="-1">',
    X.Hero(),
    X.About(),
    X.Services(),
    X.Lawyers(),
    X.Contact(),
    "</main>",
    X.Footer(),
    X.WhatsAppButton(),
    X.PrivacyPolicy(),
  ].join("");

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- Imagens: troca o espaço reservado pela foto real quando ela existir ---------- */
  $$("[data-photo] img").forEach((img) => {
    const box = img.closest("[data-photo]");
    const ok = () => box.classList.add("is-loaded");
    const fail = () => img.remove();
    if (img.complete) (img.naturalWidth ? ok() : fail());
    else {
      img.addEventListener("load", ok, { once: true });
      img.addEventListener("error", fail, { once: true });
    }
  });
  $$("[data-logo] img").forEach((img) => {
    const text = img.parentElement.querySelector("[data-logo-text]");
    const ok = () => { img.hidden = false; text.hidden = true; };
    if (img.complete && img.naturalWidth) ok();
    else img.addEventListener("load", ok, { once: true });
  });

  /* ---------- Cabeçalho: fundo sólido ao rolar ---------- */
  const header = $("[data-header]");
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menu do celular ---------- */
  const toggle = $("[data-menu-toggle]");
  const menu = $("[data-menu]");
  const label = $("[data-menu-label]");
  const setMenu = (open) => {
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    label.textContent = open ? "Fechar menu" : "Abrir menu";
    document.body.classList.toggle("menu-open", open);
  };
  toggle.addEventListener("click", () => setMenu(menu.hidden));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) { setMenu(false); toggle.focus(); }
  });
  window.matchMedia("(min-width: 961px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });

  /* ---------- Link ativo no menu ---------- */
  if ("IntersectionObserver" in window) {
    const navLinks = $$("[data-nav]");
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((a) => {
            if (a.dataset.nav === entry.target.id) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    C.menu.forEach((m) => { const s = document.getElementById(m.id); if (s) spy.observe(s); });
  }

  /* ---------- Animações de entrada (apenas na primeira vez) ----------
     Só ficam ocultos os elementos que ainda estão abaixo da área visível;
     o que já está na tela aparece imediatamente. */
  if (!reduceMotion && "IntersectionObserver" in window) {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.remove("reveal-pending", "thread-pending");
          reveal.unobserve(el);
          setTimeout(() => el.style.removeProperty("--d"), 1400);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );
    const limit = window.innerHeight * 0.94;
    $$("[data-reveal], .section").forEach((el) => {
      if (el.getBoundingClientRect().top < limit) return;
      el.classList.add(el.classList.contains("section") ? "thread-pending" : "reveal-pending");
      reveal.observe(el);
    });
  }

  /* ---------- Cartões de serviço: informações adicionais ---------- */
  $$("[data-service-toggle]").forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    const lbl = $("[data-label]", btn);
    const original = lbl.textContent;
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      panel.hidden = !open;
      lbl.textContent = open ? "Ocultar informações" : original;
    });
  });
  $$("[data-assunto]").forEach((a) =>
    a.addEventListener("click", () => {
      const sel = document.getElementById("f-assunto");
      if (sel) sel.value = a.dataset.assunto;
    })
  );

  /* ---------- Política de privacidade ---------- */
  const dialog = $("[data-privacy]");
  const openPrivacy = () => {
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  };
  const closePrivacy = () => (typeof dialog.close === "function" ? dialog.close() : dialog.removeAttribute("open"));
  $$("[data-open-privacy]").forEach((b) => b.addEventListener("click", openPrivacy));
  $("[data-close-privacy]").addEventListener("click", closePrivacy);
  dialog.addEventListener("click", (e) => { if (e.target === dialog) closePrivacy(); });
  if (location.hash === "#privacidade") openPrivacy();

  /* ---------- Formulário de contato ---------- */
  const form = $("[data-contact-form]");
  const status = $("[data-form-status]");
  const submitBtn = $("[data-submit]");
  const submitLabel = $("[data-submit-label]");
  let tried = false;

  const phone = form.elements.telefone;
  phone.addEventListener("input", () => {
    const d = phone.value.replace(/\D/g, "").slice(0, 11);
    let v = d;
    if (d.length > 2) v = `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length > 6) v = `(${d.slice(0, 2)}) ${d.slice(2, d.length - 4)}-${d.slice(-4)}`;
    phone.value = v;
  });

  const rules = {
    nome: (v) => (v.trim().length < 3 ? "Informe seu nome completo." : ""),
    email: (v) => (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "Informe um e-mail válido, como nome@exemplo.com." : ""),
    telefone: (v) => {
      const n = v.replace(/\D/g, "").length;
      return n < 10 || n > 11 ? "Informe o telefone com DDD, como (65) 99999-0000." : "";
    },
    assunto: (v) => (!v ? "Selecione o assunto do contato." : ""),
    mensagem: (v) => (v.trim().length < 10 ? "Escreva uma mensagem com pelo menos 10 caracteres." : ""),
    consentimento: (_, el) => (!el.checked ? "Para enviar, é necessário concordar com a Política de Privacidade." : ""),
  };

  const check = (name) => {
    const el = form.elements[name];
    const msg = rules[name](el.value, el);
    const err = document.getElementById(`e-${name}`);
    err.textContent = msg;
    err.hidden = !msg;
    if (msg) el.setAttribute("aria-invalid", "true");
    else el.removeAttribute("aria-invalid");
    return !msg;
  };

  Object.keys(rules).forEach((name) => {
    const el = form.elements[name];
    el.addEventListener(el.type === "checkbox" || el.tagName === "SELECT" ? "change" : "blur", () => { if (tried) check(name); });
    el.addEventListener("input", () => { if (tried && el.getAttribute("aria-invalid")) check(name); });
  });

  const showStatus = (type, html) => {
    status.className = `form-status field--full is-${type}`;
    status.innerHTML = html;
    status.hidden = false;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    tried = true;
    const results = Object.keys(rules).map(check);
    if (results.includes(false)) {
      const first = form.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
      showStatus("error", "Revise os campos destacados antes de enviar.");
      return;
    }
    if (form.elements.site.value) return; // proteção contra envios automatizados

    const endpoint = (C.formulario.endpoint || "").trim();
    if (!endpoint) {
      showStatus(
        "warn",
        "O envio pelo formulário ainda não está disponível. Para falar com o escritório agora, utilize o WhatsApp ou o e-mail indicados nesta seção."
      );
      console.warn("[Vidotti & Ferreira] Defina SITE_CONFIG.formulario.endpoint em assets/js/config.js para ativar o envio.");
      return;
    }

    const sel = form.elements.assunto;
    const data = {
      nome: form.elements.nome.value.trim(),
      email: form.elements.email.value.trim(),
      telefone: form.elements.telefone.value.trim(),
      assunto: sel.options[sel.selectedIndex].text,
      mensagem: form.elements.mensagem.value.trim(),
      consentimento_lgpd: true,
      origem: location.href,
      ...C.formulario.camposExtras,
    };

    submitBtn.disabled = true;
    submitBtn.setAttribute("aria-busy", "true");
    submitLabel.textContent = "Enviando…";
    status.hidden = true;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      tried = false;
      showStatus("success", "<strong>Mensagem enviada.</strong> Obrigado pelo contato. O escritório retornará pelos meios informados.");
    } catch (err) {
      console.error(err);
      showStatus(
        "error",
        "Não foi possível enviar a mensagem agora. Verifique sua conexão e tente novamente, ou fale com o escritório pelo WhatsApp."
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.removeAttribute("aria-busy");
      submitLabel.textContent = "Enviar mensagem";
    }
  });

  /* ---------- Ano no rodapé ---------- */
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* ---------- Dados estruturados (somente campos preenchidos) ---------- */
  const k = C.contato;
  const ld = { "@context": "https://schema.org", "@type": "LegalService", name: C.escritorio.nomeCompleto };
  if (filled(k.telefone)) ld.telephone = k.telefone;
  if (filled(k.email)) ld.email = k.email;
  if (filled(k.endereco)) ld.address = k.endereco;
  const sameAs = C.redesSociais.filter((r) => r.url).map((r) => r.url);
  if (sameAs.length) ld.sameAs = sameAs;
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.textContent = JSON.stringify(ld);
  document.head.appendChild(s);

  if (!filled(C.whatsapp.numero)) {
    console.info("[Vidotti & Ferreira] Defina SITE_CONFIG.whatsapp.numero para direcionar os botões ao número oficial.");
  }
})();
