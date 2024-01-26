# Manual de uso

### <span style="color: green;">Requisitos</span>

Certifique-se de que tenha o git e NodeJs instalado no seu sistema para usar os comandos git, caso não tenha, instale a partir do link: https://git-scm.com/downloads

### <span style="color: green;">Instalação</span>

Copie o código a seguir:

    https://github.com/CauaYves/cult-api.git

No seu sistema operacional, abra o explorador de arquivos e entre no terminal a partir dessa pasta, execute o código de clonagem, e após o download ser concluído, o projeto estará na pasta em que você acessou.

### <span style="color: green;">Configuração</span>

Entre no pasta de projeto e execute o comando de instalação de dependências.

    npm install

Para servir o projeto, é necessário adicionar as variáveis de ambiente listadas no arquivo .env.example, são elas:

    PORT=
    DATABASE_URL=
    NODE_ENV=
    JWT_SECRET=

<span style="color: salmon;">PORT</span>: numero da porta que rodará o projeto  
<span style="color: salmon;">DATABASE_URL</span>: url de conexão com o banco de dados PostgreSQL  
<span style="color: salmon;">NODE_ENV</span>: modo de operação da aplicação, "production" | "development"  
<span style="color: salmon;">JWT_SECRET</span>: segredo jwt para codificação dos tokens

### <span style="color: green;">Execução</span>

Com as dependências instaladas, e as variáveis aplicadas, o projeto estará pronto para ser usado, rode o comando de execução em desenvolvimento:

    npm run dev

O servidor exibirá a mensagem: ✅<span style="color: lightgreen;">Server listening on port 4000<span>

### <span style="color: green;">Checagem de saúde</span>

Enquanto a aplicação está sendo executada, cheque o status da aplicação no navegador a partir da URL:

    http://localhost:porta/health

Para conhecer mais sobre as rotas da aplicação e entender o funcionamento e uso, siga para a documentação de uso na rota http://localhost:{porta}/api-docs/ troque a {porta} pela porta em que o servidor está rodando atualmente.

criador: https://github.com/CauaYves
