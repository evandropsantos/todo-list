TODO List
======
**Sistem de cadatramento de tarefas.**

- Cadastra tarefa
- Edita tarefa
- Exclui tarefa
- Filtra terefas concluídas e pendentes
- Salva tarefas em localstorage (Ao atualizar a tela suas tarefas continuam a ser exibidas)
- Exibe progresso das tarefas
- Responsivo

obs* Não conheço a biblioteca "openui5" por questão de tempo acabei não utilizando, em contrapartida criei o layout utilizando Sass e isolando cada estilo em seu respectivo componente seguindo as boas praticas da metodologia [BEM](http://getbem.com/introduction/).

**Indice**
1. [Setup e Build](#1-setup-e-build)
2. [Estrutura de pastas](#2-estrutura-de-pastas)
3. [Licença](#3-licença)

**Dependências**
- [Node.js](https://nodejs.org)
- [Vue](https://vuejs.org)
- [Vuex](https://vuex.vuejs.org)
- [Mais informações](https://github.com/evandropsantos/todo-list/blob/master/package.json)

**Obs.** Versões listadas podem estar desatualizadas, consulte sempre o link **Mais informações** para saber as versões corretas.

## 1. Setup e Build
Dentro do diretório do projeto execute os comandos
**Obs.** Pode ser utilizado yarn ou npm.

``` bash
# instalar dependências
$ npm install ou yarn install

# servidor com hot reload (desenvolvimento - Será exibido no console o endereço da aplicação)
$ npm run serve ou yarn serve

# compilar e minificar arquivos (produção - Será gerado uma pasta chamada dist com os arquivos na raiz do projeto)
$ npm run build ou yarn build

# Rodar os testes unitários
$ npm run test:unit ou yarn test:unit

# Rodar o lint
$ npm run lint ou yarn lint
```

### Customizações e configuraões
- [Referência de configuração](https://cli.vuejs.org/config/).

## 2. Estrutura de pastas
``` bash
  .
  |--- public
  |   |--- favicon.ico
  |   |___ index.html
  |
  |--- src
  |   |--- assets
  |   |   |--- images
  |   |   |    |--- icon-check.svg
  |   |   |    |--- logotipo.png
  |   |   |    |___ ...
  |   |   |
  |   |   |___ styles
  |   |        |--- _global.scss
  |   |        |___ ...
  |   |
  |   |--- components
  |   |   |--- TDNavigation
  |   |   |    |--- index.vue
  |   |   |    |--- style.scss
  |   |   |    |___ test.spec.js
  |   |   |
  |   |   |--- TDButton
  |   |   |    |--- index.vue
  |   |   |    |--- style.scss
  |   |   |    |___ test.spec.js
  |   |   |
  |   |   |___ ...
  |   |
  |   |--- store
  |   |   |--- index.js
  |   |   |___ ...
  |   |
  |   |--- App.js
  |   |--- main.js
  |   |--- style.scss
  |   |___ ...
  |
  |--- .browserslistrc
  |--- .editorconfig
  |--- .eslintrc
  |--- .gitignore
  |--- .tool-versions
  |--- babel.config.js
  |--- jest.config.js
  |--- LICENSE.md
  |--- package.json
  |--- vue.config.js
  |--- README.md
  |--- yarn.lock
  |--- ...
```

## 3. Licença
Este projeto está licenciado sob a licença MIT - consulte o [LICENSE.md](LICENSE.md) para mais detalhes.