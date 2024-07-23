Para iniciar o typescript, executar: npx tsc --init ou ./node_modules/.bin/tsc.

Para converter de typescript para javascript, executar: npx tsc src/index.ts.

Criar migration no knex: npx knex migrate:make create-documents ou npm run knex -- migrate:make <migrate name> (a partir do script "knex" criado no package.json)

Executar migration no knex: npm run knex -- migrate:latest

Desfazer uma migration já executada: npm run knex -- migrate:rollback