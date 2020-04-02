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
        class="text-justify mt-n2"
        v-text="`Level ${item.level}`"
      />
    </v-row>
    <v-row no-gutters>
      <v-card-text
        class="text-justify"
        v-text="item.description"
      />
    </v-row>
    <v-row
      v-text="parseStat(item.statistics)"
    />
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
import parseItem from '@/helpers/parser'

export default {
  props: {
    item: { type: Object, required: true }
  },
  methods: {
    getLocalImageLink: url => require(`@@/assets/build/${url.split('/').slice(-1)[0]}`),
    parseStat(stat) {
      console.log(stat)
      const test = parseItem([stat])

      console.log(test)
      return stat
    },
    async fetchAPI() {
      await getData()
    }
  }
}
</script>

<style>

</style>
