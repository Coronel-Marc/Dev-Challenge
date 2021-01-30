# Desafio Spedy

O intuito desse README.md é somente dar algumas breves explicações com relação ao projeto pois acredito que além de um bom código, bons comentários também são necessários para posteriores programadores que algum dia irão abrir o código do seu projeto. __Agora sem mais delongas, bora lá!__


## Explicações básicas
O banco de dados utilizado foi o Mongodb, o qual eu tive mais facilidade para trabalhar no desafio.

De modo geral, o arquivo index.js está renderizando o App.js, que por sua vez está renderizando o arquivo de rotas(routes.js) e exibindo todo o contéudo do site no arquivo index.html que se encontra na pasta 'public'

O arquivo routes.js está renderizando os arquivos principais que compõem a página inicial e a página de cadastro de novos artigos.
Dessa forma, foi possível desenvolver a aplicação com mais dinamismo e facilidade.

Há somente um arquivo de estilização que se encontra junto aos arquivos das páginas, que por sua vez estão em 'pages'.
Dentro da pasta pages decidi por criar mais duas páginas, Main e NovoArtigo.

## Iniciando o servidor

Para iniciar o servidor, digite __'node index.js'__ dentro da pasta **_API_**. Caso o banco de dados já esteja configurado, o index.js da pasta API irá automaticamente buscar os registros do banco de dados

## Iniciando a aplicação

Para iniciar a aplicação(estou assumindo que já fez a instalação de todos as dependências necessárias que estão informadas no 'package.json')digite 'npm start' dentro da pasta raiz do projeto. Logo que o mesmo iniciar, se o servidor já tiver sido iniciado, será renderizado a página principal com os dados do banco de dados.

## Agradecimentos

Fico feliz de ter participado da pré-seleção da Spedy e agradeço a oportunidade. Aprendi muito com este pequeno projeto e tive que passar alguns bons dias de cara em blogs e sites estudando para entregar um site no mínimo funcional.

Até a próxima! :D
