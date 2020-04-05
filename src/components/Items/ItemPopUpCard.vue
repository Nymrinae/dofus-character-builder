<template>
  <v-card class="itemInfo" align="center">
    <v-card-title height="100%" v-text="item.name" />
    <v-row no-gutters class="ml-8 mr-n8 mt-n4 py-4">
      <v-col
        v-for="(stat, s) in item.stats"
        :key="`stat#${s}`"
        cols="6"
      >
        <v-row no-gutters align="center" justify="center">
          <v-col cols="2">
            <v-img
              :src="getLocalIconLink(stat.name)"
              width="25"
              height="25"
            />
          </v-col>
          <v-col cols="10">
            <v-subheader class="body-2 font-weight-black" v-text="printStat(stat)" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true }
  },
  methods: {
    getLocalIconLink: (statName) => {
      const elements = ['air', 'feu', 'eau', 'neutre', 'terre']
      const checkElem = elements.map(e => statName.includes(e)).indexOf(true)

      return require(`@@/assets/icons/${checkElem >= 0 ? elements[checkElem] : statName}.png`)
    },
    printStat: stat => `${stat.min}${stat.max ? `-${stat.max}` : ''}`
  }
}
</script>

<style>
.itemInfo {
  z-index: 10;
  top: -150px;
  width: 300px;
  margin-left: 75px;
}
.rowContainer {
  margin-top: -8px;
  padding-bottom: 12px;
}
</style>
