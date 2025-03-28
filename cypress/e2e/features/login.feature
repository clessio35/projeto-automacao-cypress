Feature: Login

Scenario Outline: "<cenario>"
Given eu acesso a pagina home da aplicacao
When eu inserir meu email "<email>" e senha "<password>"
And clicar no botao entrar
Then tenho meu acesso "<message>"
Examples:
|cenario          |email              |password|message                |
|Login com sucesso|user@phptravels.com|demouser|com sucesso na aplicação|