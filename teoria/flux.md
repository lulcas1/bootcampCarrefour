O Flux (prefiro chamar assim) é uma arquitetura usada pelo Facebook, que junto com o framework React é usado para construir aplicações web no client-side que trabalhem de forma reativa. Basicamente uma forma de fluxo unidirecional de dados entre eventos e ouvintes.

Flux é um padão de projeto para tráfego de dados de maneira unidirecional

### Arquitetura Flux

Action: como um telégrafo, formata a mensagem a ser enviada
Dispatcher: como um telefonista, ele sabe todos os callbacks para diferentes Stores
Store: é como um gerente super controlador, ele guarda a informação e todas as altereções têm que ser feitas por ele mesmo, mais ninguém. 
View: gerente intermediario (middleware) que recebe as notificações da store e passa os dados para as visões abaido dela 

#### Redux

É um implementação de flux, 3 princípios basicos
    - Single source of truth: Uma única store
    - State é read-only
    - Mudanças são feitas com pure functions 

views, em react adiciona na camada de view 3 novos conceitos para conectar a view à store 
    - Provider
    - connect()
    - selector