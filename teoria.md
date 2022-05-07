### História e conceitos ReactJS
"Uma biblioteca JavaScript para criar interfaces de usuaário" - RactJS

Criado em 2011 - Jordan Walke
Baseado no XHP, um framework para criação de HTML no PHP
Utilizado no feed de notícias do Facebook
React Native - aplicações mobile
React é uma biblioteca(JavaScript) e não um framework
A principal função é a criação da interface para o usuário.

### Estado e ciclo de vida
Inicialização -> Montagem -> Atualização -> Desmontagem 
alterar prop ou estado atualiza o DOM virtual daquele bloco
( DOM ->  é uma convenção multiplataforma e independente de linguagem de programação, fiscalizada pelo entidade World Wide Web Consortium (W3C), para representação e interação com objetos em documentos HTML, XHTML e, XML.)

Nenhum componente pai ou filho deve saber se outro compenente possui estado ou não

O estado é apenas local ao componente e caso seja necessário enviar algum atributo para outro então é feito via probs

### React
Em React, você pode criar componentes distintos quem encapsulam o comportamento que você precisa. Então, você pode renderizar apenas alguns elesmentos, dependendo do estado da sua aplicação.

### Renderização Condicional
    - Variáveis de Elementos
    - If inline com o operador lógico &&
    - I-Else inline com operador condicional
    - Evitando que um componente seja renderizado

### Manipulando eventos
em react é semlhante a manipular eventos no DOM
Eventos em React são nomeados com camelCase ao invés de letra minúsculas
com o JSX passa uma função como manipulador de eventos ao invés de um texto