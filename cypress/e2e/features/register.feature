Feature: Cadastro de Usuarios

  Scenario Outline: "<caso_teste>"
    Given que estamos na page de Cadastro
    And inserimos nosso Nome "<name>" e Sobrenome "<lastname>"
    And informamos nossos dados de contato "<address>", "<email>" e "<phone>"
    And nosso genero e hobbies "<hobbies>"
    And nossas skills "<skills>" e nosso pais "<country>"
    When seleciono meu nascimento "<year>", "<month>" e "<day>"
    And inserir senha "<pass>" e "<confirm_pass>"
    And clico no botao entrar
    Then tenho meu cadastro realizado com sucess
    Examples:
      | caso_teste           | name    | lastname | address   | email                       | phone      | hobbies | skills | country    | year | month    | day | pass | confirm_pass |
      | Cadastro com sucesso | Clessio | Silva    | Rua 12345 | clessio.silva1989@gmail.com | 1199999999 | Movies  | Java   | Australia  | 1989 | December |  7 | pass |     1234@123 |
