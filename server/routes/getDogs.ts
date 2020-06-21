import { data } from '../data/dogs.ts'

export const getDogs = ({ response }: { response: any }) => {
  response.body = data.dogs
}