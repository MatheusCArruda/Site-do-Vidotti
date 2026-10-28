/* ==========================================================================
   VIDOTTI & FERREIRA — ADVOGADOS ASSOCIADOS
   Arquivo único de configuração do site.

   Tudo o que o escritório precisa atualizar está aqui: dados de contato,
   número do WhatsApp, textos, áreas de atuação, advogados e fotografias.

   Campos entre colchetes, como "[inserir telefone]", são espaços reservados.
   Enquanto não forem substituídos, aparecem no site com sublinhado tracejado.
   Ao preencher com o dado real, basta remover os colchetes.
   ========================================================================== */

window.SITE_CONFIG = {
  /* ---------------------------------------------------------------- */
  escritorio: {
    nome: "Vidotti & Ferreira",
    complemento: "Advogados Associados",
    nomeCompleto: "Vidotti & Ferreira — Advogados Associados",
    // Registro da sociedade de advogados (exibido no rodapé).
    registroOAB: "[Sociedade de advogados inscrita na OAB/UF sob o nº 0000]",
    cnpj: "", // opcional — deixe vazio para ocultar
  },

  /* Logomarca original. Coloque o arquivo em assets/img/.
     Enquanto o arquivo não existir, o site exibe o nome em texto. */
  logo: {
    arquivo: "assets/img/logo-vidotti-ferreira.png",
    alt: "Vidotti & Ferreira — Advogados Associados",
    alturaCabecalho: 44, // px
    alturaRodape: 64,    // px
  },

  /* ---------------------------------------------------------------- */
  contato: {
    telefone: "[inserir telefone]",
    email: "[inserir e-mail profissional]",
    endereco: "[inserir endereço completo do escritório]",
    horario: "[inserir horário de atendimento]",
    mapaUrl: "", // opcional: link do Google Maps para o endereço
  },

  /* WhatsApp — número oficial configurado em UM único lugar.
     Use apenas dígitos: 55 (Brasil) + DDD + número. Ex.: "5565999990000". */
  whatsapp: {
    numero: "",
    numeroExibicao: "[inserir número do WhatsApp]",
    mensagemPadrao:
      "Olá! Acessei o site do escritório Vidotti & Ferreira — Advogados Associados e gostaria de obter informações sobre o atendimento.",
  },

  /* Redes sociais oficiais. Itens com url vazia não são exibidos. */
  redesSociais: [
    { nome: "Instagram", url: "" },
    { nome: "LinkedIn", url: "" },
    { nome: "Facebook", url: "" },
  ],

  /* Formulário de contato.
     endpoint: endereço que recebe os dados (ex.: Formspree, Web3Forms ou
     um backend próprio). Os dados são enviados em JSON via POST.
     A confirmação ao visitante só aparece se o servidor responder com sucesso. */
  formulario: {
    endpoint: "",
    camposExtras: {}, // ex.: { access_key: "..." } para serviços que exigem chave
  },

  /* ---------------------------------------------------------------- */
  imagens: {
    hero: {
      arquivo: "assets/img/foto-escritorio.jpg",
      alt: "Escritório Vidotti & Ferreira — Advogados Associados",
      especificacao: "Fotografia institucional · retrato 4:5 · 1200 × 1500 px",
    },
    quemSomos: {
      arquivo: "assets/img/foto-ambiente-escritorio.jpg",
      alt: "Ambiente de atendimento do escritório",
      especificacao: "Ambiente ou equipe · retrato 4:5 · 1200 × 1500 px",
    },
  },

  /* ---------------------------------------------------------------- */
  menu: [
    { id: "inicio", rotulo: "Início" },
    { id: "quem-somos", rotulo: "Quem Somos" },
    { id: "servicos", rotulo: "Serviços" },
    { id: "advogados", rotulo: "Advogados" },
    { id: "contato", rotulo: "Contato" },
  ],

  textos: {
    hero: {
      identificacao: "Vidotti & Ferreira | Advogados Associados",
      titulo: "Compromisso jurídico, atuação estratégica e",
      tituloDestaque: "confiança em cada decisão.",
      descricao:
        "Atuação jurídica pautada pela ética, pela responsabilidade profissional e pela análise cuidadosa de cada demanda, oferecendo orientação jurídica adequada às necessidades de cada cliente.",
      botaoPrincipal: "Entre em contato",
      botaoSecundario: "Conheça o escritório",
      linkWhatsApp: "Atendimento pelo WhatsApp",
    },
    quemSomos: {
      rotulo: "Quem somos",
      titulo: "Uma atuação jurídica construída sobre confiança e responsabilidade.",
      paragrafos: [
        "O escritório Vidotti & Ferreira — Advogados Associados tem como propósito oferecer atendimento jurídico responsável, pautado pela ética profissional, pela transparência e pela análise individualizada de cada demanda.",
        "Acreditamos que uma atuação jurídica consistente começa pela compreensão das necessidades de cada cliente, pela avaliação cuidadosa das circunstâncias e pela apresentação clara das alternativas juridicamente pertinentes.",
        "Nosso compromisso é conduzir cada atendimento com seriedade, discrição e responsabilidade, respeitando as particularidades de cada situação e os princípios que orientam a advocacia.",
      ],
    },
    servicos: {
      rotulo: "Áreas de atuação",
      titulo: "Atuação jurídica orientada às necessidades de cada cliente.",
      descricao:
        "Conheça nossas áreas de atuação e encontre informações sobre os serviços jurídicos prestados pelo escritório.",
      botaoCartao: "Consultar informações",
      chamadaWhatsApp: "Para tratar de uma situação específica, fale diretamente com o escritório.",
    },
    advogados: {
      rotulo: "Advogados",
      titulo: "Profissionais comprometidos com a excelência jurídica.",
      descricao:
        "Conheça os profissionais que integram o escritório Vidotti & Ferreira — Advogados Associados e suas respectivas áreas de atuação.",
    },
    contato: {
      rotulo: "Contato",
      titulo: "Estamos à disposição para ouvir você.",
      descricao:
        "Entre em contato com o escritório para obter informações sobre nossos serviços e as possibilidades de atendimento jurídico.",
    },
  },

  /* Pilares exibidos em "Quem Somos". icone: balanca | pessoa | documento */
  pilares: [
    {
      icone: "balanca",
      titulo: "Ética profissional",
      descricao: "Atuação pautada pelo respeito às normas e aos princípios da advocacia.",
    },
    {
      icone: "pessoa",
      titulo: "Atendimento personalizado",
      descricao: "Atenção às particularidades de cada cliente e de cada demanda jurídica.",
    },
    {
      icone: "documento",
      titulo: "Compromisso e transparência",
      descricao: "Comunicação clara sobre os procedimentos e as etapas dos serviços contratados.",
    },
  ],

  /* Áreas de atuação — preencha SOMENTE com as áreas confirmadas pelos advogados.
     Adicione ou remova itens livremente; a grade se reorganiza sozinha.
     icone: colunas | documento | escudo | pasta | balanca | pessoa */
  areas: [
    {
      id: "area-01",
      icone: "colunas",
      nome: "[Nome da área jurídica]",
      resumo:
        "Atuação jurídica voltada à análise e orientação de demandas relacionadas a esta área, considerando as particularidades de cada situação.",
      detalhes:
        "[Descreva, em poucas linhas, os tipos de demanda atendidos nesta área.] Cada situação é avaliada individualmente antes de qualquer orientação.",
    },
    {
      id: "area-02",
      icone: "documento",
      nome: "[Nome da área jurídica]",
      resumo:
        "Atuação jurídica voltada à análise e orientação de demandas relacionadas a esta área, considerando as particularidades de cada situação.",
      detalhes:
        "[Descreva, em poucas linhas, os tipos de demanda atendidos nesta área.] Cada situação é avaliada individualmente antes de qualquer orientação.",
    },
    {
      id: "area-03",
      icone: "escudo",
      nome: "[Nome da área jurídica]",
      resumo:
        "Atuação jurídica voltada à análise e orientação de demandas relacionadas a esta área, considerando as particularidades de cada situação.",
      detalhes:
        "[Descreva, em poucas linhas, os tipos de demanda atendidos nesta área.] Cada situação é avaliada individualmente antes de qualquer orientação.",
    },
    {
      id: "area-04",
      icone: "pasta",
      nome: "[Nome da área jurídica]",
      resumo:
        "Atuação jurídica voltada à análise e orientação de demandas relacionadas a esta área, considerando as particularidades de cada situação.",
      detalhes:
        "[Descreva, em poucas linhas, os tipos de demanda atendidos nesta área.] Cada situação é avaliada individualmente antes de qualquer orientação.",
    },
  ],

  /* Advogados — preencha SOMENTE com dados reais e confirmados.
     Para incluir um novo profissional, copie um bloco { ... } e ajuste.
     whatsapp: true exibe um link de contato no cartão do profissional. */
  advogados: [
    {
      foto: "assets/img/advogado-01.jpg",
      nome: "[Nome completo do(a) advogado(a)]",
      oab: "[OAB/UF 000.000]",
      formacao: "[Graduação em Direito — instituição]",
      especializacoes: ["[Especialização efetivamente concluída — instituição]"],
      areas: ["[Área de atuação]"],
      apresentacao: "[Breve apresentação profissional, redigida ou revisada pelo(a) próprio(a) advogado(a).]",
      whatsapp: true,
    },
    {
      foto: "assets/img/advogado-02.jpg",
      nome: "[Nome completo do(a) advogado(a)]",
      oab: "[OAB/UF 000.000]",
      formacao: "[Graduação em Direito — instituição]",
      especializacoes: ["[Especialização efetivamente concluída — instituição]"],
      areas: ["[Área de atuação]"],
      apresentacao: "[Breve apresentação profissional, redigida ou revisada pelo(a) próprio(a) advogado(a).]",
      whatsapp: true,
    },
  ],

  /* Política de privacidade (modelo — revisar antes da publicação). */
  privacidade: {
    atualizadaEm: "[dd/mm/aaaa]",
    encarregado: "[inserir nome do encarregado pelo tratamento de dados]",
    email: "", // se vazio, usa contato.email
  },
};
