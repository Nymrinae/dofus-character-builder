/* eslint-disable */
import axios from 'axios'

const API_BASE_URL = 'https://fr.dofus.dofapi.fr'

const getEquipmentByType = async (type) => {
  return makeRequest('/equipments', type)
}

const getDofus = async () => {
  return makeRequest('/equipments', null, ['Dofus', 'Trophée'])
}

const getMounts = async () => {
  return makeRequest('/mounts')
}

const getPets = async () => {
  return makeRequest('/pets')
}

const getWeapons = async () => {
  return makeRequest('/weapons')
}

const makeRequest = async (endpoint, type = null, categories = null) => {
  const res = await axios.get(`${API_BASE_URL}${endpoint}`)

  if (categories)
    return res.data.filter(e => categories.includes(e.type))

  return type
    ? res.data.filter(e => e.type === type)
    : res.data
}

export {
  getDofus,
  getEquipmentByType,
  getMounts,
  getPets,
  getWeapons
}