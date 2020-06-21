import { Dog } from '../interfaces/dog.ts'

import { data } from '../data/dogs.ts'

export const getDog = ({ params, response }: { params: { name: string }, response: any }) => {
  const dog = data.dogs.filter((dog: Dog) => dog.name === params.name)

  if (dog.length) {
    response.status = 200
    response.body = dog[0]

    return
  }

  response.status = 400
  response.body = { msg: `Cannot find dog ${params.name}` }
}
