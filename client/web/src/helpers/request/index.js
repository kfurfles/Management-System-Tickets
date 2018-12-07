const STATUS = {
  200: true,
  204: true,
  400: false,
  401: false,
  403: false,
  404: false,
  405: false,
  500: false
}

const getStatusCode = (response) => {
  if (isArray(response)) {
    const respLength = response.length
    const allResponse = response.map(r => STATUS[r.status]).filter(a => a).length
    return respLength === allResponse
  } else {
    response = response.status ? response.status : response
    return STATUS[response]
  }
}

const isArray = (response) => response.hasOwnProperty('length')

export default getStatusCode
