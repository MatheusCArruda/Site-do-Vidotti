/* PrivacyPolicy — modelo de política de privacidade (LGPD).
   ATENÇÃO: texto-base para revisão pelo escritório antes da publicação. */
(function () {
  const { C, esc, t, Icons } = window.UI;

  window.Components.PrivacyPolicy = () => {
    const p = C.privacidade;
    const email = p.email || C.contato.email;

    return `<dialog class="privacy" id="privacidade" aria-labelledby="privacy-title" data-privacy>
      <div class="privacy-head">
        <h2 id="privacy-title">Política de Privacidade</h2>
        <button type="button" class="icon-close" data-close-privacy aria-label="Fechar política de privacidade">${Icons.fechar}</button>
      </div>
      <div class="privacy-body">
        <p class="privacy-meta">Última atualização: ${t(p.atualizadaEm)}</p>

        <h3>1. Quem é o responsável pelos dados</h3>
        <p>${esc(C.escritorio.nomeCompleto)} é o controlador dos dados pessoais coletados por este site, nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD).</p>

        <h3>2. Quais dados são coletados</h3>
        <p>Pelo formulário de contato, coletamos nome, e-mail, telefone ou WhatsApp, assunto e o conteúdo da mensagem enviada. Ao utilizar o botão do WhatsApp, a conversa ocorre no aplicativo, sujeita também à política de privacidade do próprio serviço.</p>

        <h3>3. Para que os dados são utilizados</h3>
        <p>Os dados são utilizados exclusivamente para responder ao contato e prestar informações sobre o atendimento solicitado. Não são utilizados para envio de publicidade nem comercializados.</p>

        <h3>4. Base legal</h3>
        <p>O tratamento tem como fundamento o consentimento do titular e a realização de procedimentos preliminares solicitados pelo próprio titular (art. 7º, incisos I e V, da LGPD).</p>

        <h3>5. Compartilhamento e sigilo</h3>
        <p>Os dados podem ser processados por fornecedores de hospedagem e de envio de formulários, apenas na medida necessária ao funcionamento do site. As informações recebidas são tratadas com a discrição e o sigilo profissional que orientam o exercício da advocacia.</p>

        <h3>6. Por quanto tempo os dados são mantidos</h3>
        <p>Os dados são mantidos pelo tempo necessário ao atendimento da solicitação e ao cumprimento de obrigações legais e regulatórias, sendo eliminados após esse período.</p>

        <h3>7. Seus direitos</h3>
        <p>Você pode solicitar a confirmação da existência de tratamento, o acesso, a correção, a anonimização, a portabilidade ou a eliminação dos seus dados, bem como revogar o consentimento, conforme o art. 18 da LGPD.</p>

        <h3>8. Contato sobre privacidade</h3>
        <p>Encarregado pelo tratamento de dados: ${t(p.encarregado)}<br>E-mail: ${t(email)}</p>
      </div>
    </dialog>`;
  };
})();
