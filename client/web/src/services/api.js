/* eslint-disable */
import qs from 'qs'
import {
  axiosInstance,
  getDomain,
  setDomain
} from './api-instance'
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axiosInstance[method](queryUrl, body, config)
  } else if (method === 'get' || method === 'delete' || method === 'head' || method === 'option') {
    return axiosInstance[method](queryUrl, config)
  } else {
    return axiosInstance[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    API REST criada com o ASP.NET Core 2.0 para a sistema de chamados
 ==========================================================*/
/**
 * 
 * request: ApiCargosGet
 * url: ApiCargosGetURL
 * method: ApiCargosGet_TYPE
 * raw_url: ApiCargosGet_RAW_URL
 */
export const ApiCargosGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Cargos'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiCargosGet_RAW_URL = function() {
  return '/api/Cargos'
}
export const ApiCargosGet_TYPE = function() {
  return 'get'
}
export const ApiCargosGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Cargos'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiCargosPost
 * url: ApiCargosPostURL
 * method: ApiCargosPost_TYPE
 * raw_url: ApiCargosPost_RAW_URL
 * @param cargo - 
 */
export const ApiCargosPost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Cargos'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['cargo'] !== undefined) {
    body = parameters['cargo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiCargosPost_RAW_URL = function() {
  return '/api/Cargos'
}
export const ApiCargosPost_TYPE = function() {
  return 'post'
}
export const ApiCargosPostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Cargos'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiCargosByIdGet
 * url: ApiCargosByIdGetURL
 * method: ApiCargosByIdGet_TYPE
 * raw_url: ApiCargosByIdGet_RAW_URL
 * @param id - 
 */
export const ApiCargosByIdGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Cargos/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiCargosByIdGet_RAW_URL = function() {
  return '/api/Cargos/{id}'
}
export const ApiCargosByIdGet_TYPE = function() {
  return 'get'
}
export const ApiCargosByIdGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Cargos/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiCargosByIdPut
 * url: ApiCargosByIdPutURL
 * method: ApiCargosByIdPut_TYPE
 * raw_url: ApiCargosByIdPut_RAW_URL
 * @param id - 
 * @param cargo - 
 */
export const ApiCargosByIdPut = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Cargos/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['cargo'] !== undefined) {
    body = parameters['cargo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const ApiCargosByIdPut_RAW_URL = function() {
  return '/api/Cargos/{id}'
}
export const ApiCargosByIdPut_TYPE = function() {
  return 'put'
}
export const ApiCargosByIdPutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Cargos/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiCargosByIdDelete
 * url: ApiCargosByIdDeleteURL
 * method: ApiCargosByIdDelete_TYPE
 * raw_url: ApiCargosByIdDelete_RAW_URL
 * @param id - 
 */
export const ApiCargosByIdDelete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Cargos/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const ApiCargosByIdDelete_RAW_URL = function() {
  return '/api/Cargos/{id}'
}
export const ApiCargosByIdDelete_TYPE = function() {
  return 'delete'
}
export const ApiCargosByIdDeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Cargos/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiChamadosGet
 * url: ApiChamadosGetURL
 * method: ApiChamadosGet_TYPE
 * raw_url: ApiChamadosGet_RAW_URL
 * @param idUsuario - 
 */
export const ApiChamadosGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Chamados'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['idUsuario'] !== undefined) {
    queryParameters['idUsuario'] = parameters['idUsuario']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiChamadosGet_RAW_URL = function() {
  return '/api/Chamados'
}
export const ApiChamadosGet_TYPE = function() {
  return 'get'
}
export const ApiChamadosGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Chamados'
  if (parameters['idUsuario'] !== undefined) {
    queryParameters['idUsuario'] = parameters['idUsuario']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiChamadosPost
 * url: ApiChamadosPostURL
 * method: ApiChamadosPost_TYPE
 * raw_url: ApiChamadosPost_RAW_URL
 * @param chamado - 
 */
export const ApiChamadosPost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Chamados'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['chamado'] !== undefined) {
    body = parameters['chamado']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiChamadosPost_RAW_URL = function() {
  return '/api/Chamados'
}
export const ApiChamadosPost_TYPE = function() {
  return 'post'
}
export const ApiChamadosPostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Chamados'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiChamadosByIdGet
 * url: ApiChamadosByIdGetURL
 * method: ApiChamadosByIdGet_TYPE
 * raw_url: ApiChamadosByIdGet_RAW_URL
 * @param id - 
 */
export const ApiChamadosByIdGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Chamados/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiChamadosByIdGet_RAW_URL = function() {
  return '/api/Chamados/{id}'
}
export const ApiChamadosByIdGet_TYPE = function() {
  return 'get'
}
export const ApiChamadosByIdGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Chamados/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiChamadosByIdPut
 * url: ApiChamadosByIdPutURL
 * method: ApiChamadosByIdPut_TYPE
 * raw_url: ApiChamadosByIdPut_RAW_URL
 * @param id - 
 * @param chamado - 
 */
export const ApiChamadosByIdPut = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Chamados/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['chamado'] !== undefined) {
    body = parameters['chamado']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const ApiChamadosByIdPut_RAW_URL = function() {
  return '/api/Chamados/{id}'
}
export const ApiChamadosByIdPut_TYPE = function() {
  return 'put'
}
export const ApiChamadosByIdPutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Chamados/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiChamadosByIdDelete
 * url: ApiChamadosByIdDeleteURL
 * method: ApiChamadosByIdDelete_TYPE
 * raw_url: ApiChamadosByIdDelete_RAW_URL
 * @param id - 
 */
export const ApiChamadosByIdDelete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Chamados/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const ApiChamadosByIdDelete_RAW_URL = function() {
  return '/api/Chamados/{id}'
}
export const ApiChamadosByIdDelete_TYPE = function() {
  return 'delete'
}
export const ApiChamadosByIdDeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Chamados/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiChamadosActiveByIdPatch
 * url: ApiChamadosActiveByIdPatchURL
 * method: ApiChamadosActiveByIdPatch_TYPE
 * raw_url: ApiChamadosActiveByIdPatch_RAW_URL
 * @param id - 
 */
export const ApiChamadosActiveByIdPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Chamados/active/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const ApiChamadosActiveByIdPatch_RAW_URL = function() {
  return '/api/Chamados/active/{id}'
}
export const ApiChamadosActiveByIdPatch_TYPE = function() {
  return 'patch'
}
export const ApiChamadosActiveByIdPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Chamados/active/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiChamadosDeactiveByIdPatch
 * url: ApiChamadosDeactiveByIdPatchURL
 * method: ApiChamadosDeactiveByIdPatch_TYPE
 * raw_url: ApiChamadosDeactiveByIdPatch_RAW_URL
 * @param id - 
 */
export const ApiChamadosDeactiveByIdPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Chamados/deactive/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const ApiChamadosDeactiveByIdPatch_RAW_URL = function() {
  return '/api/Chamados/deactive/{id}'
}
export const ApiChamadosDeactiveByIdPatch_TYPE = function() {
  return 'patch'
}
export const ApiChamadosDeactiveByIdPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Chamados/deactive/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiChamadosCloseByIdPatch
 * url: ApiChamadosCloseByIdPatchURL
 * method: ApiChamadosCloseByIdPatch_TYPE
 * raw_url: ApiChamadosCloseByIdPatch_RAW_URL
 * @param id - 
 */
export const ApiChamadosCloseByIdPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Chamados/close/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const ApiChamadosCloseByIdPatch_RAW_URL = function() {
  return '/api/Chamados/close/{id}'
}
export const ApiChamadosCloseByIdPatch_TYPE = function() {
  return 'patch'
}
export const ApiChamadosCloseByIdPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Chamados/close/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiChamadosReopenByIdPatch
 * url: ApiChamadosReopenByIdPatchURL
 * method: ApiChamadosReopenByIdPatch_TYPE
 * raw_url: ApiChamadosReopenByIdPatch_RAW_URL
 * @param id - 
 * @param status - 
 */
export const ApiChamadosReopenByIdPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Chamados/reopen/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const ApiChamadosReopenByIdPatch_RAW_URL = function() {
  return '/api/Chamados/reopen/{id}'
}
export const ApiChamadosReopenByIdPatch_TYPE = function() {
  return 'patch'
}
export const ApiChamadosReopenByIdPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Chamados/reopen/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiDepartamentosGet
 * url: ApiDepartamentosGetURL
 * method: ApiDepartamentosGet_TYPE
 * raw_url: ApiDepartamentosGet_RAW_URL
 */
export const ApiDepartamentosGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Departamentos'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiDepartamentosGet_RAW_URL = function() {
  return '/api/Departamentos'
}
export const ApiDepartamentosGet_TYPE = function() {
  return 'get'
}
export const ApiDepartamentosGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Departamentos'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiDepartamentosPost
 * url: ApiDepartamentosPostURL
 * method: ApiDepartamentosPost_TYPE
 * raw_url: ApiDepartamentosPost_RAW_URL
 * @param dep - 
 */
export const ApiDepartamentosPost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Departamentos'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['dep'] !== undefined) {
    body = parameters['dep']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiDepartamentosPost_RAW_URL = function() {
  return '/api/Departamentos'
}
export const ApiDepartamentosPost_TYPE = function() {
  return 'post'
}
export const ApiDepartamentosPostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Departamentos'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiDepartamentosByIdGet
 * url: ApiDepartamentosByIdGetURL
 * method: ApiDepartamentosByIdGet_TYPE
 * raw_url: ApiDepartamentosByIdGet_RAW_URL
 * @param id - 
 */
export const ApiDepartamentosByIdGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Departamentos/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiDepartamentosByIdGet_RAW_URL = function() {
  return '/api/Departamentos/{id}'
}
export const ApiDepartamentosByIdGet_TYPE = function() {
  return 'get'
}
export const ApiDepartamentosByIdGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Departamentos/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiDepartamentosByIdPut
 * url: ApiDepartamentosByIdPutURL
 * method: ApiDepartamentosByIdPut_TYPE
 * raw_url: ApiDepartamentosByIdPut_RAW_URL
 * @param id - 
 * @param dep - 
 */
export const ApiDepartamentosByIdPut = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Departamentos/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['dep'] !== undefined) {
    body = parameters['dep']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const ApiDepartamentosByIdPut_RAW_URL = function() {
  return '/api/Departamentos/{id}'
}
export const ApiDepartamentosByIdPut_TYPE = function() {
  return 'put'
}
export const ApiDepartamentosByIdPutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Departamentos/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiDepartamentosByIdDelete
 * url: ApiDepartamentosByIdDeleteURL
 * method: ApiDepartamentosByIdDelete_TYPE
 * raw_url: ApiDepartamentosByIdDelete_RAW_URL
 * @param id - 
 */
export const ApiDepartamentosByIdDelete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Departamentos/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const ApiDepartamentosByIdDelete_RAW_URL = function() {
  return '/api/Departamentos/{id}'
}
export const ApiDepartamentosByIdDelete_TYPE = function() {
  return 'delete'
}
export const ApiDepartamentosByIdDeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Departamentos/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiUsuariosGet
 * url: ApiUsuariosGetURL
 * method: ApiUsuariosGet_TYPE
 * raw_url: ApiUsuariosGet_RAW_URL
 */
export const ApiUsuariosGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Usuarios'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiUsuariosGet_RAW_URL = function() {
  return '/api/Usuarios'
}
export const ApiUsuariosGet_TYPE = function() {
  return 'get'
}
export const ApiUsuariosGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Usuarios'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiUsuariosPost
 * url: ApiUsuariosPostURL
 * method: ApiUsuariosPost_TYPE
 * raw_url: ApiUsuariosPost_RAW_URL
 * @param user - 
 */
export const ApiUsuariosPost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Usuarios'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['user'] !== undefined) {
    body = parameters['user']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiUsuariosPost_RAW_URL = function() {
  return '/api/Usuarios'
}
export const ApiUsuariosPost_TYPE = function() {
  return 'post'
}
export const ApiUsuariosPostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Usuarios'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiUsuariosByIdGet
 * url: ApiUsuariosByIdGetURL
 * method: ApiUsuariosByIdGet_TYPE
 * raw_url: ApiUsuariosByIdGet_RAW_URL
 * @param id - 
 */
export const ApiUsuariosByIdGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Usuarios/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiUsuariosByIdGet_RAW_URL = function() {
  return '/api/Usuarios/{id}'
}
export const ApiUsuariosByIdGet_TYPE = function() {
  return 'get'
}
export const ApiUsuariosByIdGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Usuarios/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiUsuariosByIdPut
 * url: ApiUsuariosByIdPutURL
 * method: ApiUsuariosByIdPut_TYPE
 * raw_url: ApiUsuariosByIdPut_RAW_URL
 * @param id - 
 * @param user - 
 */
export const ApiUsuariosByIdPut = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Usuarios/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['user'] !== undefined) {
    body = parameters['user']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const ApiUsuariosByIdPut_RAW_URL = function() {
  return '/api/Usuarios/{id}'
}
export const ApiUsuariosByIdPut_TYPE = function() {
  return 'put'
}
export const ApiUsuariosByIdPutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Usuarios/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiUsuariosByIdDelete
 * url: ApiUsuariosByIdDeleteURL
 * method: ApiUsuariosByIdDelete_TYPE
 * raw_url: ApiUsuariosByIdDelete_RAW_URL
 * @param id - 
 */
export const ApiUsuariosByIdDelete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Usuarios/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const ApiUsuariosByIdDelete_RAW_URL = function() {
  return '/api/Usuarios/{id}'
}
export const ApiUsuariosByIdDelete_TYPE = function() {
  return 'delete'
}
export const ApiUsuariosByIdDeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Usuarios/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiUsuariosEmailGet
 * url: ApiUsuariosEmailGetURL
 * method: ApiUsuariosEmailGet_TYPE
 * raw_url: ApiUsuariosEmailGet_RAW_URL
 * @param email - 
 */
export const ApiUsuariosEmailGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/Usuarios/email'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['email'] !== undefined) {
    queryParameters['email'] = parameters['email']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiUsuariosEmailGet_RAW_URL = function() {
  return '/api/Usuarios/email'
}
export const ApiUsuariosEmailGet_TYPE = function() {
  return 'get'
}
export const ApiUsuariosEmailGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/Usuarios/email'
  if (parameters['email'] !== undefined) {
    queryParameters['email'] = parameters['email']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}