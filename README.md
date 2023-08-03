Blogs-Api 🚀


:dart:Projeto desenvolvido para estudos com o objetivo de criar uma API para gerenciar blogs posts, usuários e categorias. A API foi construída utilizando as tecnologias Node.js, Express.js, Sequelize, MySQL e Docker. Além disso, segue uma arquitetura de software baseada no padrão MSC (Model-Service-Controller).

Diagrama ER
O diagrama Entidade-Relacionamento (ER) do projeto é uma representação visual do banco de dados utilizado pela Blogs API. Ele possui as seguintes entidades: users, categories, blog_posts, e posts_categories. Cada entidade é responsável por armazenar informações específicas do sistema.
Endpoints

Método	Endpoint	                        Descrição
GET	    /api/blogs	                      Obter todos os blogs
GET	    /api/blogs/:id	                  Obter um blog específico
POST	  /api/blogs	                      Criar um novo blog
PUT	    /api/blogs/:id	                  Atualizar um blog
DELETE	/api/blogs/:id	                  Excluir um blog
GET	    /api/blogs/:id/posts	            Obter todos os artigos
GET	    /api/blogs/:id/posts/:post_id   	Obter um artigo específico
POST	  /api/blogs/:id/posts	            Criar um novo artigo
PUT	    /api/blogs/:id/posts/:post_id	    Atualizar um artigo
DELETE	/api/blogs/:id/posts/:post_id	    Excluir um artigo

:rocket: Como Executar o Projeto
Clone este repositório em sua máquina:

git clone https://github.com/seu-usuario/blogs-api.git

Navegue até o diretório do projeto:
cd blogs-api

Instale as dependências:
npm install

Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e preencha as variáveis necessárias conforme o exemplo abaixo:
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=minhaSenha
DB_NAME=blogs_db
JWT_SECRET=minhaChaveSecreta

Inicie o banco de dados com Docker:
docker-compose up -d

Execute as migrações do banco de dados:
npx sequelize-cli db:migrate

Inicie a aplicação:
npm start


:white_check_mark: Testes
Para executar os testes automatizados, utilize o seguinte comando:
npm test

:mailbox: Contato
Se tiver alguma dúvida, sugestão ou feedback, entre em contato:

E-mail: andre.jvb@gmail.com
LinkedIn: (https://www.linkedin.com/in/andre-juan/)
