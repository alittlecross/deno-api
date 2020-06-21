import { Dog } from '../interfaces/dog.ts'

import { data } from '../data/dogs.ts'

export const removeDog = ({ params, response }: { params: { name: string }, response: any }) => {
  const lengthBefore = data.dogs.length

  data.dogs = data.dogs.filter((dog: Dog) => dog.name !== params.name)

  if (data.dogs.length === lengthBefore) {
    response.status = 400
    response.body = { msg: `Cannot find dog ${params.name}` }
    return
  }

  response.body = { msg: "OK" }
  response.status = 200
}
