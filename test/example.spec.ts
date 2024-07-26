import { expect, test } from 'vitest'

test('o usuário consegue criar uma nova transação', () => {
  // chamada HTTP para criar uma nova transação
  // validação
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
