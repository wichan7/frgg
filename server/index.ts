import { serve } from 'bun'
import { Hono } from 'hono'
import { selectMovies } from './src/db/movie'

const app = new Hono()

app.get('/', (c) => c.text('Hono!'))
app.get('/movies', (c) => {
  const movies = selectMovies()
  return c.json(movies)
})

serve({
  fetch: app.fetch,
  port: 3000,
})

console.log('server runs on port 3000')
