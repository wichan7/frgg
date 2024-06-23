import { db } from '..'
import { type Movie } from '../../../../types/movie'

export const createMoviesTable = () => {
  return db.run(`
    create table movies (
    id long,
    title varchar(50),
    releaseYear long
    )
  `)
}

export const selectMovies = () => {
  const movieList = db.query(`select * from movies`).all() as Movie[]
  return movieList
}

export const insertMovie = ({ id, title, releaseYear }: Movie) => {
  return db
    .query(
      `insert into movies (
      id, title, releaseYear
      ) values (
      ${id}, "${title}", ${releaseYear}
      )`
    )
    .run()
}
