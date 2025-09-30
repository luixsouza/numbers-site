export const editaisData = [
  {
    id: 1,
    status: "finalizado",
    title: "Edital de Chamada Pública - Módulo I (Iniciante)",
    description:
      "Processo seletivo para o Curso de Introdução à Robótica (32h) - FINALIZADO.",
    details: [
      { label: "Inscrição", value: "10 a 23 de Setembro" },
      { label: "Vagas", value: "820" },
      { label: "Resultados", value: "24 de Setembro" },
      { label: "Matrícula", value: "25 a 30 de Setembro" },
      { label: "Início das aulas", value: "01 de Outubro" },
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

  // Adicione novos editais aqui.
];
