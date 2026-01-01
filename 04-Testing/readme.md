# Testing Task API

Stack: Typescript, Vitest, Supertest, Prisma, Postgres+Docker

Um código simples que realiza testes E2E de uma única rota, utilizando Vitest e Supertest. O objetivo é verificar se uma task é criada quando todos os campos são enviados corretamente e, caso contrário, se as validações adequadas são aplicadas e os erros são tratados pelo middleware de erros. Os testes são executados em um banco de dados separado, exclusivo para o ambiente de testes.
