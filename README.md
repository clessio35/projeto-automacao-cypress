# 🧪 projeto-automacao-cypress

**projeto-automacao-cypress** é um projeto de automação de testes utilizando **Cypress**, com suporte a **BDD** (Behavior-Driven Development) através do **Cypress Cucumber Preprocessor**. O projeto é estruturado para testes de interfaces web e é baseado em **Node.js 18**. Ele organiza os testes em classes para mapeamento de elementos, páginas, e etapas de testes (steps) com **features** em Cucumber.

## 🔧 Technologies & Tools Used
- **Node.js 18**
- **Cypress 14.2.1** (para automação de testes web)
- **Cypress Cucumber Preprocessor 4.3.1** (para suporte a BDD)
- **JavaScript/TypeScript** (para criação de scripts de teste)
  
## 🚀 Getting Started

### Prerequisites
Antes de rodar o projeto, verifique se você tem as seguintes ferramentas instaladas:

1. **Node.js 18** ou superior.
2. **npm** ou **yarn** (gerenciadores de pacotes para instalar dependências).
3. **IDE** (como **VSCode**) para rodar o projeto localmente.

### Installation
1. Clone o repositório:
    ```bash
    git clone https://github.com/yourusername/projeto-automacao-cypress.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd projeto-automacao-cypress
    ```

3. Instale as dependências utilizando **npm** ou **yarn**:
    - Com npm:
      ```bash
      npm install
      ```
    - Ou com yarn:
      ```bash
      yarn install
      ```

### Running Tests
Para rodar os testes de automação, execute o comando abaixo:

- Para rodar o Cypress em modo interativo (com a interface gráfica):
    ```bash
    npx cypress open
    ```

- Para rodar os testes no modo headless (sem a interface gráfica):
    ```bash
    npx cypress run
    ```

### Estrutura do Projeto
A estrutura do projeto segue uma organização modular para facilitar a manutenção e a leitura dos testes.

