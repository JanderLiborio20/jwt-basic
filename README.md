<div id='introducao'>
  Esse é um projeto para entender melhor o uso do jwt e como funciona feito apenas com node.js e typescript.
</div>

## Tópicos

- [Introdução](#introducao)
- [Instalar e rodar o projeto localmente](#instalacao)
- [Stack utilizada](#stack_utilizada)

<div id='instalacao'>

## Instalando e rodando o projeto localmente:

Para rodar em sua máquina é bem simples.

Você precisa ter instalado:

- Node.js v18
- Yarn ou NPM para a instalação dos pacotes (projeto desenvolvido com Yarn)

Para a instalação dos pacotes você deve entrar no projeto e rodar o comando `yarn install` ou `npm install`.

```bash
npm install
```

</div>

<div id='stack_utilizada'>
<h2>Stack utilizada</h2>

**Back-end:**

<ul id="backend-stack">
  <li>Node.js</li>
</ul>

</div>

<div id='aprendizados'>
<h2>Aprendizados</h2>

Neste projeto aprendemos a utilizar muito bem o _node_, e principalmente a técnica de _jwt_,
como podemos ver neste trecho de código que exibe a função que gera o jwt:

```typescript
\src\jwt\sign.ts

 import { generateSignature } from "./generateSignature";

interface IVerifyOptions {
  token: string;
  secret: string;
}

export function verify({ secret, token }: IVerifyOptions) {
  const [headerSent, payloadSent, signatureSent] = token.split(".");

  const signarute = generateSignature({
    secret,
    header: headerSent,
    payload: payloadSent,
  });

  if (signarute !== signatureSent) {
    throw new Error("Invalid jwt token");
  }

  const decodedPayload = JSON.parse(
    Buffer.from(payloadSent, "base64url").toString("utf-8")
  );

  if (decodedPayload.exp < Date.now()) {
    throw new Error("Expired Token.");
  }

  return decodedPayload;
}

```

</div>
