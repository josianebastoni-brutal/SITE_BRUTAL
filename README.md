# Brutal Acabamentos: site institucional

Site estático (HTML, CSS e JavaScript puros, sem build) da Brutal Acabamentos: *O sonho se realiza junto.*

## Estrutura

```
index.html      página principal
css/style.css   estilos (cores da marca em :root)
js/main.js      menu do celular, botões de WhatsApp e cabeçalho
img/            fotos da linha do tempo e dos prêmios
```

## Como visualizar

Abra o `index.html` no navegador. Para publicar no GitHub Pages, envie a pasta para o repositório e ative o Pages na branch principal (pasta raiz).

## O que falta preencher

Procure por `[PREENCHER]` no `index.html` e no `js/main.js`:

- **WhatsApp:** coloque o número em `WHATSAPP_NUMERO`, no topo do `js/main.js` (ex.: `'5519999999999'`). Todos os botões passam a abrir o WhatsApp automaticamente.
- **Logo:** substitua o texto "Brutal" do cabeçalho e do rodapé por `img/logo.svg` (versões colorida e branca).
- **Fotos:** ambiente/showroom (início), 7 categorias de produtos e atendimento a profissionais.
- **Lojas:** endereço, horário e telefone de cada loja e do Centro de Distribuição.
- **Contato:** e-mail, Instagram e LinkedIn.

## Observações

- Os PDFs (brandbook e textos institucionais) e as fotos originais da raiz ficam só na pasta local, fora do repositório (veja o `.gitignore`). O site usa só a pasta `img/`.
- O fechamento `</body>` está livre para incluir o `chat.js` do assistente de vendas.
