# Testing Task API

Stack: Typescript, Vitest, Supertest, Prisma, Postgres+Docker

Um simples código que testa uma unica rota de forma E2E 
utilizando o vitest e supertest para verificar se uma task 
é criada quando todos os campos são enviador de forma correta,
e caso contrario, se as devidas validações estão sendo feitas,
e os erros estão sendo pegos pelo middleware de erros. Os testes
estão sendo feitos em um banco de dados separado apenas para testes

