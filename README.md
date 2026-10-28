# Vidotti & Ferreira — Advogados Associados

Site institucional de página única, em HTML, CSS e JavaScript puros (sem frameworks nem etapa de build). Basta abrir `index.html` ou hospedar a pasta em qualquer servidor estático (Netlify, Vercel, Hostinger, Locaweb etc.).

## Estrutura

```
index.html
assets/
  css/styles.css              Estilos, cores da marca, animações e responsividade
  js/config.js                ← ÚNICO arquivo a editar para atualizar o conteúdo
  js/utils.js                 Ícones, link do WhatsApp e molduras de fotografia
  js/main.js                  Montagem da página e comportamentos
  js/components/
    Header.js  Hero.js  About.js  Services.js  Lawyers.js
    Contact.js  WhatsAppButton.js  Footer.js  PrivacyPolicy.js
  img/                        Logomarca e fotografias (ver lista abaixo)
```

## Como personalizar (tudo em `assets/js/config.js`)

| O quê | Onde |
|---|---|
| Número oficial do WhatsApp | `whatsapp.numero` — apenas dígitos: `55` + DDD + número |
| Mensagem inicial do WhatsApp | `whatsapp.mensagemPadrao` |
| Telefone, e-mail, endereço, horário | `contato` |
| Redes sociais | `redesSociais` (itens sem `url` ficam ocultos) |
| Áreas de atuação | `areas` — adicione ou remova itens; a grade se reorganiza |
| Advogados | `advogados` — copie um bloco `{ ... }` para incluir um novo profissional |
| Textos das seções | `textos` |
| Registro da sociedade na OAB | `escritorio.registroOAB` |

Campos entre colchetes, como `"[inserir telefone]"`, são espaços reservados e aparecem no site com sublinhado tracejado. Ao preencher, remova os colchetes.

## Imagens esperadas em `assets/img/`

| Arquivo | Uso | Recomendação |
|---|---|---|
| `logo-vidotti-ferreira.png` | Cabeçalho e rodapé | PNG ou SVG com fundo transparente, versão para fundo escuro |
| `foto-escritorio.jpg` | Hero | Retrato 4:5, 1200 × 1500 px |
| `foto-ambiente-escritorio.jpg` | Quem Somos | Retrato 4:5, 1200 × 1500 px |
| `advogado-01.jpg`, `advogado-02.jpg`… | Advogados | Retrato 3:4, 900 × 1200 px, mesmo fundo e iluminação |
| `favicon.png` | Aba do navegador | 512 × 512 px |

Enquanto um arquivo não existir, o site mostra uma moldura com o nome esperado. Quando o arquivo é colocado na pasta, a foto substitui a moldura automaticamente. Comprima as fotos antes de publicar (ex.: squoosh.app, qualidade 75–80, até ~300 KB cada).

**Ícone do WhatsApp:** os botões usam um ícone de conversa neutro. Para usar o ícone oficial, baixe-o na central de marca da Meta e substitua o desenho `whatsapp` em `assets/js/utils.js` pelo SVG oficial.

## Formulário de contato

O formulário valida os campos e só exibe a confirmação quando o servidor responde com sucesso. Para ativar o envio, informe um endpoint em `formulario.endpoint`. Os dados são enviados via `POST` em JSON, com os campos `nome`, `email`, `telefone`, `assunto`, `mensagem`, `consentimento_lgpd` e `origem`.

Opções simples:

- **Formspree** — crie um formulário, copie o endereço `https://formspree.io/f/xxxxxxx` e cole em `endpoint`.
- **Web3Forms** — use `https://api.web3forms.com/submit` como `endpoint` e coloque a chave em `camposExtras: { access_key: "SUA_CHAVE" }`.
- **Backend próprio** — qualquer rota que aceite JSON e responda com status 2xx.

Enquanto o endpoint estiver vazio, o visitante é orientado a usar o WhatsApp ou o e-mail.

## Antes de publicar — conformidade

- [ ] Áreas de atuação confirmadas pelos advogados.
- [ ] Nomes, números da OAB, formação e especializações conferidos com os próprios profissionais.
- [ ] Registro da sociedade na OAB preenchido no rodapé.
- [ ] Política de privacidade revisada pelo escritório (o texto incluído é um modelo-base de LGPD).
- [ ] Nenhuma promessa de resultado, depoimento ou estatística incluída nos textos (Código de Ética e Disciplina da OAB e Provimento nº 205/2021).
- [ ] Número do WhatsApp e endpoint do formulário testados em celular e computador.

## Acessibilidade e desempenho

- Navegação por teclado com foco visível, link "Pular para o conteúdo" e menu com `aria-expanded`.
- Animações respeitam a preferência de movimento reduzido do sistema.
- Imagens com carregamento tardio (`loading="lazy"`), exceto a da Hero.
- Sem dependências externas além das fontes do Google Fonts.
