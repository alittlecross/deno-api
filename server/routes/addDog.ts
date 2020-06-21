import { data } from '../data/dogs.ts'

export const addDog = async ({ request, response }: { request: any, response: any }) => {
  const body = await request.body()
  const { name, age }: { name: string, age: number } = body.value

  data.dogs.push({
    name: name,
    age: age,
  })

  response.body = { msg: "OK" }
  response.status = 200
}
