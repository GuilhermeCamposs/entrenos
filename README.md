# Entre Nós — site estático

Este projeto contém o código-fonte do site em HTML, CSS e JavaScript. Não usa framework, banco de dados, servidor próprio ou processo de compilação.

## Abrir no VS Code

1. Abra a pasta `site-companhia-idosos` no VS Code (`Arquivo > Abrir Pasta...`).
2. Abra `index.html` no navegador. Para atualizar a página automaticamente durante a edição, você pode usar a extensão **Live Server** do VS Code.

## Configurar o WhatsApp

Abra `script.js` e substitua a linha abaixo pelo número oficial, usando apenas dígitos: código do país + DDD + número.

```js
const WHATSAPP_NUMBER = "";
```

Exemplo de formato: `"5547999999999"` (troque pelo contato correto). Com o valor vazio, o WhatsApp abre sem destinatário definido e o visitante escolhe para quem enviar a mensagem.

## Publicar na internet

O site é estático. Envie os três arquivos (`index.html`, `styles.css` e `script.js`) para a raiz de uma hospedagem de sites estáticos, ou publique esta pasta por um repositório conectado a uma hospedagem. O arquivo `index.html` precisa ficar na raiz publicada. Não há etapa de build nem dependências para instalar.

Antes de divulgar, revise o nome provisório “Entre Nós”, o número de WhatsApp, as condições de atendimento e as informações comerciais. Valores e disponibilidade são combinados pelo WhatsApp; não foram inventados no código.
