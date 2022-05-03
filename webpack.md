webpack é um módulo bundler(empacotador de módulos para aplicações js)

O que ele se propõe a fazer de diferente é focar em módulos da sua aplicação. Nem sempre ter todo e qualquer JavaScript/CSS do seu projeto num único arquivo é bom, por isso o webpack tem a ideia de code splitting, onde você modulariza partes reaproveitáveis do seu projeto, facilitando o desenvolvimento independente, por exemplo, ter uma equipe trabalhando em um módulo X e outra num módulo Y, mas ambos de um mesmo projeto.

webpack tem suporte para
  - fontes
  - css
  - imagens
  - html
  - js
  - plugins

entry - Utilizando grafo, o webpack precisa de um ponto de entrada para buscar todos os módulos e dependências.

output - É para determindar quais são os bundlers que o webpack irá emitir.

Loaders - permitir que o webpack gerencie arquivos que não são JavaScript

plugins - plugins podem ser utilizados para otimização de pacotes, minificação, injeção de scripts e muito mais.

mode - Utilizados para abordagem de configuração zero. É possível configurar módulos como production, development ou none.