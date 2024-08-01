import kyStandard from 'ky'

const { VITE_API_BASE_URL } = import.meta.env

export default kyStandard.create({
  prefixUrl: VITE_API_BASE_URL,
})
