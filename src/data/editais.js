export const editaisData = [
  {
    id: 1,
    status: "finalizado",
    title: "Edital de Chamada Pública Nº 02/2025 - Módulo I (Iniciante)",
    description:
      "Processo seletivo para o Curso de Introdução à Robótica (32h) - FINALIZADO.",
    details: [
      { label: "Inscrição", value: "10 a 26 de Setembro" },
      { label: "Vagas", value: "820" },
      { label: "Resultados", value: "29 de Setembro" },
      { label: "Matrícula", value: "30 de Setembro a 3 de Outubro" },
      { label: "Início das aulas", value: "6 de Outubro" },
      { label: "Status", value: "Inscrições Fechadas", isStatus: true },
    ],
    links: [
      {
        href: "/pdf/RESULTADO SELECAO - START Modulo 1 - Ciclo 4.pdf",
        text: "Ver Resultados",
        primary: true,
      },
      {
        href: "https://goias.gov.br/inovacao/wp-content/uploads/sites/26/2025/09/CHAMADA-PUBLICA-No-02_2025_PROEX_IFG-SECTI-PROGRAMA-START-1.pdf",
        text: "Acessar Edital",
        primary: false,
      },
    ],
  },

  {
    id: 2,
    status: "vigente",
    title: "Edital de Chamada Pública Nº 03/2025 - Senador Canedo - Módulo I (Iniciante)",
    description:
      "Inscrições abertas para o Curso de Introdução à Robótica (32h)",
    details: [
      { label: "Inscrição", value: "6 a 15 de Outubro" },
      { label: "Vagas", value: "80" },
      { label: "Resultados", value: "16 de Outubro (1ª chamada)" },
      { label: "Matrícula 1ª chamada", value: "16 a 20 de Outubro" },
      { label: "Matrícula 2ª chamada", value: "21 a 24 de Outubro" },
      { label: "Início das aulas", value: "20 de Outubro" },
      { label: "Status", value: "Inscrições Abertas", isStatus: true },
    ],
    links: [
      {
        href: "https://forms.office.com/r/pNcmL55mh7",
        text: "Fazer Inscrição",
        primary: true,
      },
      {
        href: "/pdf/CHAMADA-PUBLICA-No-02_2025_PROEX_IFG-SECTI-PROGRAMA-START-1.pdf",
        text: "Acessar Edital (PDF)",
        primary: false,
      },
    ],
  },

  //novos editais podem ser adicionados aqui
];
