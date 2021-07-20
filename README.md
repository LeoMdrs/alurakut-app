# Alurakut: Leandro Rangel 

[![Repositório](https://img.shields.io/badge/LeoRangel-AlurakutApp-green)](https://github.com/LeoRangel/alurakut-app)
[![licence mit](https://img.shields.io/github/license/LeoRangel/alurakut-app)](https://github.com/LeoRangel/alurakut-app/blob/main/LICENSE)

> Projeto de App clone da rede social Orkut desenvolvido durante a Imersão React da Alura
> 
> Para ver o projeto em execução acesse a [**demo**](https://alurakut-app-brown.vercel.app/login/)

<p align="center">
  <img alt="Tela de login do projeto" src="./src/assets/images/tela-login.png" />
</p>


## Versioning/Versionamento

Esse projeto não possui um sistema de versionamento.

## History/Histórico
Consulte as [Releases](https://github.com/LeoRangel/alurakut-app/releases) para acompanhar as alterações feitas no projeto.

## License/Licença do Projeto
[MIT License](https://github.com/LeoRangel/alurakut-app/blob/main/LICENSE)




















# Example app with styled-components

This example features how you use a different styling solution than [styled-jsx](https://github.com/vercel/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-styled-components)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-styled-components&project-name=with-styled-components&repository-name=with-styled-components)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Try it on CodeSandbox

[Open this example on CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/with-styled-components)

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>






## Algumas coisas vistas durante a Imersão React



#### Inicio

##### Criar app Next simplificado
```bash
yarn create-next-app --example with-styled-components
```

##### Executar app
```bash
yarn dev
```





#### Dicas

##### Pasta pages
As páginas do site são arquivos dentro da pasta pages. Ex.: index.js, login.js, etc.
Pasta super importante para o Next. Colocar apenas arquivos importantes, de configuração de páginas, roteamento, etc.

##### Pasta pages/api
Colocar as apis dentro desta pasta. Aqui se colocam os BFF's, "mini backends" que são executados pelo NextJs

##### BFF - Backend For Frontend
"mini backend" para executar com o frontend pelo NextJs e acessar api's, por exemplo, sem a necessidade de um backend completo

##### No React tudo que se coloca no template é o que retorna uma expressão
Ex.: O IF normal não funciona no React, o IF Ternário funciona
Ex.: O FOREACH não funciona no React, o MAP funciona

##### Reset CSS
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

##### Reset IMG
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

##### Nomear funções de forma que ajude a desenvolvedores react entender
Ex.: Usar palavra handle para funções de pegar/capturar ação

#### Promise
Um objeto usado para processamento assíncrono. Um Promise ( de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.

#### useEffect()
Hook que gerencia os efeitos colaterais nos componentes funcionais do React

#### Fetch()
A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global fetch() que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede






#### Sintaxe

###### importando lib
```javascript
import React from 'react';
```

###### importando lib que exporta vários elementos
```javascript
import { createGlobalStyle, ThemeProvider } from 'styled-components'
```

###### Criando componente com css
```javascript
const Box = styled.div`
  background: #FFFFF;
`;
```

###### Usando CSS diretamente no componente
```javascript
<Box style={{ gridArea: 'profileArea' }}>
  Componente box
</Box>
```

###### Classe no componente
```javascript
<div className="profileArea"></div>
```

###### Usando string no componente
```javascript
<a href="www.link.com"></a>
```

###### Usando variável no componente
```javascript
<a href={link}></a>
```

###### Inserir variável no meio de string (Ex.:)
```javascript
`https://api.github.com/users/${githubUser}/followers`
```

###### Usar classe no componente
```javascript
<img src={`https://github.com/${githubUser}.png`} />
```
(nesse exemplo, a sintaxe exclusiva do react é só o {} externo, o `` é do Javascript)

###### Passar uma propriedade (props) no componente
```javascript
<ProfileSidebar githubUser={githubUser} />
```

###### Colocar mais de uma tag dentro de um return (os <></> são descartados pelo browser)
```javascript
return (
  <>
    <div></div>
    <div></div>
  </>
)
```

###### Importante css de libs (bibliotecas)
```javascript
import { AlurakutStyles } from '../src/lib/AluraCommons'
const GlobalStyle = createGlobalStyle`
  ${AlurakutStyles}
`
```

###### Criando componente que estiliza outro componente criado
```javascript
export const Componente1 = styled(Componente2)`
```




###### Estado com React.useState()

Importação:
```javascript
import React from 'react'
```
Retorno:
React.useState retorna duas coisas: na primeira posição (índice [0]) um array e na segunda (índice [1]) uma função que altera esse array. As variáveis definidas dentro do [ , ] vão receber esses valores, respectivamente.
const [comunidades, setComunidades] = React.useState(['Alurakut']);

###### Spread (...) no JavaScript
O spread (...) adiciona/espalha um array existente em uma nova estrutura
Ex.:
```javascript
arrayAntigo = ['valor1', 'valor2']
novoArray = [...arrayAntigo, 'valor3']
```
é o mesmo que:
```javascript
novoArray = ['valor1', 'valor2', 'valor3']
```

###### Declarar Objeto
```javascript
const comunidade = {
  title: 'titulo',
  image: 'url',
}
```

###### Declarar Array
```javascript
const comunidade = ['valor1', 'valor2']
```

###### Transformar um componente em outro (as)
```javascript
<Box as="aside"> (transforma o componente Box em um componente aside, que é padrão do HTML5)
```

###### e.preventDefault()
```javascript
<form onSubmit={function handleCriaComunidade(e) {
  // Previne de recarregar a tela ao dar submit no formulário
  e.preventDefault();
}}>
```

###### JSON.stringify()
converte um valor para uma notação JSON que o representa





#### Dato CMS

###### GraphQL
Linguagem usada para acessar api's no Dato CMS

###### Comando sugerir
ctrl + d ou ctrl + espaço

###### Instalar o cliente NodeJS (para criar bff)
```bash
yarn add datocms-client
```

###### API
```javascript
// API GraphQL
fetch('https://graphql.datocms.com/', {
  method: 'POST',
  headers: {
    'Authorization': 'token',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    "query": `query {
    allCommunities {
      id 
      title
      imageUrl
      creatorSlug
    }
  }` })
})
  .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
  .then((respostaCompleta) => {
    const comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
    console.log(comunidadesVindasDoDato)
    setComunidades(comunidadesVindasDoDato)
  })
// .then(function (response) {
//   return response.json()
// })
```




#### Rotas

###### Rotas do NextJS
```javascript
import { useRouter } from 'next/router';
```

###### Pasta pages
O Next vai utilizar essa pasta para descobrir as rotas





#### Nookies (cookies)

###### O que é
Biblioteca de cookies para usar com NextJS que trabalho tanto no client-side como no server-side

###### Instalar Nookies
```bash
yarn add nookies
```

###### Criar/setar cookie com Nookies
```javascript
// Usando cookies para armazenar os dados (do token) na rota/página "/"
// (null, nome do cookie, dado/valor, informações{rota, tempo de vida})
nookies.set(null, 'USER_TOKEN', token, {
    path: '/',
    maxAge: 86400 * 7
})
```




#### JsonWebToken

###### O que é
Biblioteca para decodificar cookies no formato JWT (Json Web Tokens)

###### Instalar Nookies
```bash
yarn add jsonwebtoken
```

