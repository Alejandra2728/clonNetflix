import { TMDB } from '../../../config/tmdb'
import { videoAdapter } from '../adapters/videoAdapter'

export const getVideos = async (id) => {
  const resp = await TMDB.api(TMDB.details.movie + id + '/videos')
  return await videoAdapter(resp.data.results)
}
