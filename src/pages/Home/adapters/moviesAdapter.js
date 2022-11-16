import { TMDB } from '../../../config/tmdb'

export const adapter = (movies) => {
  return movies.map(movie => {
    return {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      releaseDate: movie.release_date,
      poster: TMDB.images.poster_low + movie.poster_path,
      backdrop: TMDB.images.backdrop_original + movie.backdrop_path,
      rating: movie.vote_agerage
    }
  })
}
