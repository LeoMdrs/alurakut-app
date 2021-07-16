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






# Alurakut

## Criar app Next simplificado
yarn create-next-app --example with-styled-components

## Executar app
yarn dev





## Dicas

### Reset CSS
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

### Reset IMG
img {
  max-width: 100%;
  height: auto;
  display: block;
}




## Sintaxe

### importando lib
import React from 'react';

### importando lib que exporta vários elementos
import { createGlobalStyle, ThemeProvider } from 'styled-components'

### Criando componente com css
const Box = styled.div`
  background: #FFFFF;
`;

### Usando CSS diretamente no componente
<Box style={{ gridArea: 'profileArea' }}>
  Componente box
</Box>

### Classe no componente
<div className="profileArea"></div>

### Usando string no componente
<a href="www.link.com"></a>

### Usando variável no componente
<a href={link}></a>

### Usar classe no componente
<img src={`https://github.com/${githubUser}.png`} /> (nesse exemplo, a sintaxe exclusiva do react é só o {} externo, o `` é Javascript)

### Passar uma propriedade (props) no componente
<ProfileSidebar githubUser={githubUser} />

### Colocar mais de uma tag dentro de um return (os <></> são descartados pelo browser)
return (
  <>
    <div></div>
    <div></div>
  </>
)

### Importante css de libs (bibliotecas)
import { AlurakutStyles } from '../src/lib/AluraCommons'
const GlobalStyle = createGlobalStyle`
  ${AlurakutStyles}
`

### Criando componente que estiliza outro componente criado
export const Componente1 = styled(Componente2)`