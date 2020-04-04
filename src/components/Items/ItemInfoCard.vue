<template>
  <v-container class="ma-0 pa-0">
    <v-row no-gutters class="align-center">
      <v-img
        :src="getLocalImageLink(item.imgUrl)"
        width="150px"
        height="150px"
        contain
      />
    </v-row>
    <v-row no-gutters>
      <v-card-text
        class="text-justify"
        v-text="item.description"
      />
    </v-row>
    <v-row
      v-for="(stat, s) in parseStat(item.statistics)"
      :key="`stat#${s}`"
    >
      <v-col cols="12">
        {{ stat }}
      </v-col>
    </v-row>
    <v-card-actions class="justify-end">
      <v-btn @click="fetchAPI">
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
/* eslint-disable */
import { getData } from '@/api/api'
import { parseItem } from '@/helpers/parser'
import { cleanItem } from '../../helpers/parser'

export default {
  props: {
    item: { type: Object, required: true }
  },
  methods: {
    getLocalImageLink: url => {
      try {
        return require(`@@/assets/build/${url.split('/').slice(-1)[0]}`)
      } catch (e) {
        return require('@@/assets/logo.png')
      }
    },
    parseStat(stat) {
      const test = parseItem(stat)
      const caca = cleanItem(test)

      return caca
    },
    async fetchAPI() {
      await getData()
    }
  }
}
</script>

<style>

</style>
