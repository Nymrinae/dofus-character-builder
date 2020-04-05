/* eslint-disable */
import fs from 'browserify-fs'
import axios from 'axios'

const API_BASE_URL = 'https://fr.dofus.dofapi.fr'

const getWeapons = async () => {
  const res = await axios.get(`${API_BASE_URL}/weapons`)
}

const getEquipment = async (type) => {
  const res = await axios.get(`${API_BASE_URL}/equipments`)
}

const getData = async () => {
  const res = await axios.get(`${API_BASE_URL}/equipments`)
}

export {
  getData,
  getEquipment,
  getWeapons
}