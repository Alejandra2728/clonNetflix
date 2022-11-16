import { TMDB } from '../../../config/tmdb'
import { dataAdapter } from '../../../adapters/dataAdapter'

export const getDetails = async (id) => {
  const resp = await TMDB.api(TMDB.details.movie + id)
  return dataAdapter(resp.data)
}
