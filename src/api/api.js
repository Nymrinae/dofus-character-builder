/* eslint-disable */
import fs from 'browserify-fs'
import axios from 'axios'

const API_BASE_URL = 'https://fr.dofus.dofapi.fr'

const getWeapons = async () => {
  const res = await axios.get(`${API_BASE_URL}/weapons`)

  console.log(res.data)
}

const getEquipment = async (type) => {
  const res = await axios.get(`${API_BASE_URL}/equipments`)

  console.log(res.data)

  // filter by type
}

const getData = async () => {
  const res = await axios.get(`${API_BASE_URL}/equipments`)

  console.log(res.data.map(e => e.imgUrl).slice(0, 99))
}

export {
  getData,
  getEquipment,
  getWeapons
}