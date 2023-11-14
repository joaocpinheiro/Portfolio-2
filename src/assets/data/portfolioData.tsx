import portfolioImg01 from "../images/Captura de tela 2023-10-22 194832 1dogs.png";
import portfolioImg02 from "../images/fintech.png";
import portfolioImg03 from "../images/animais.png";
import portfolioImg04 from "../images/bikcraft.png";
import portfolioImg05 from "../images/wildbeast.png";
import portfolioImg06 from "../images/dados.png";
import portfolioImg07 from "../images/stories.png";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    title: "Dogs",
    description:
      "Dogs, um projeto que é uma rede social para os apaixonados por cães. Com o Dogs, os usuários podem criar uma conta, fazer login, compartilhar fotos adoráveis de seus cãezinhos, interagir com outros usuários através de comentários e curtidas. Além disso, existe um feed para os usuários acompanharem postagens de outros usuários, também podendo acompanhar os acessos acessos nas fotos postadas.",
    technologies: ["React", "JavaScript", "Css Modules"],
    siteUrl: "https://joaocpinheiro.github.io/Dogs/",
    siteCode: "https://github.com/joaocpinheiro/Dogs",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    title: "Fintech",
    description:
      "Fintech é um dashboard de Vendas: análise de vendas por mês, dia ou data específica. Gráficos dinâmicos mostram transações 'Pago', 'Processando' e 'Falha', além de detalhes de clientes. Uma solução abrangente para o monitoramento eficaz de vendas, dashboard focado principalmente no typescript.",
    technologies: ["React", "TypeScript"],
    siteUrl: "https://joaocpinheiro.github.io/fintech/",
    siteCode: "https://github.com/joaocpinheiro/fintech",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    title: "Animais Fantásticos",
    description:
      "Site desenvolvido com JavaScript vanilla, explorando funcionalidades interessantes, como carrossel, promises, RegExp, API, entre outras.",
    technologies: ["JavaScript", "CSS", "HTML"],
    siteUrl: "https://joaocpinheiro.github.io/animais-fantasticos/",
    siteCode: "https://github.com/joaocpinheiro/animais-fantasticos",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    title: "Bikcraft",
    description:
      "Bikcraft é uma plataforma para entusiastas de bicicletas. Podendo comprar bicicletas exclusivas e personalizadas, além de seguros de proteção.",
    technologies: ["CSS Grid", "HTML"],
    siteUrl: "https://joaocpinheiro.github.io/bikcraft/",
    siteCode: "https://github.com/joaocpinheiro/bikcraft",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    title: "WildBeast",
    description:
      "Site com intuito de treinar posicionamento com grid layout, contendo informações sobre lobos.",
    technologies: ["Flexbox", "HTML"],
    siteUrl: "https://joaocpinheiro.github.io/wildbeast/",
    siteCode: "https://github.com/joaocpinheiro/wildbeast",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    title: "Dados",
    description:
      "Site simples, feito para treinar a utilização de uma API com dados simulando vendas, contendo nela quantas compras tiveram em determinada forma de pagamento, mostrando nome de clientes, E-mail do cliente, valor da compra, forma de pagamento, status e etc.",
    technologies: ["Typescript"],
    siteUrl: "https://joaocpinheiro.github.io/type-dados",
    siteCode: "https://github.com/joaocpinheiro/type-dados",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    title: "Stories",
    description:
      "Site feito no intuito de manipular o DOM com TypeScript para criar um slide do tipo stories",
    technologies: ["Typescript"],
    siteUrl: "https://joaocpinheiro.github.io/slide-stories/",
    siteCode: "https://github.com/joaocpinheiro/slide-stories",
  },
];

export default portfolios;
