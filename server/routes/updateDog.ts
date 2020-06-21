import { Dog } from '../interfaces/dog.ts'

import { data } from '../data/dogs.ts'

export const updateDog = async ({ params, request, response }: { params: { name: string }, request: any, response: any }) => {
  const temp = data.dogs.filter((existingDog: Dog) => existingDog.name === params.name)
  const body = await request.body()
  const { age }: { age: number } = body.value

  if (temp.length) {
    temp[0].age = age
    response.status = 200
    response.body = { msg: "OK" }
    return
  }

  response.status = 400
  response.body = { msg: `Cannot find dog ${params.name}` }
}
