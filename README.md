Para iniciar o typescript, executar: npx tsc --init ou ./node_modules/.bin/tsc.

Para converter de typescript para javascript, executar: npx tsc src/index.ts.

Criar migration no knex: npx knex migrate:make create-documents ou npm run knex -- migrate:make create-documents (a partir do script "knex" criado no package.json)