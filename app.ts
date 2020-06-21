import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

import { HOST, PORT } from './server/config/index.ts'

import { addDog } from './server/routes/addDog.ts'
import { getDog } from './server/routes/getDog.ts'
import { getDogs } from './server/routes/getDogs.ts'
import { removeDog } from './server/routes/removeDog.ts'
import { updateDog } from './server/routes/updateDog.ts'

const router = new Router()

router
  .get('/dogs', getDogs)
  .get('/dogs/:name', getDog)
  .post('/dogs', addDog)
  .put('/dogs/:name', updateDog)
  .delete('/dogs/:name', removeDog)

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT}...`)

await app.listen(`${HOST}:${PORT}`)
