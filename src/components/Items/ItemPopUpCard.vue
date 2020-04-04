<template>
  <v-card class="itemInfo" align="center">
    <v-card-title v-text="item.name" />
    <v-row no-gutters style="margin-top: -8px; margin-left: 28px;">
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
            <v-subheader class="font-weight-black" v-text="printStat(stat)" />
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
  top: -200px;
  height: 300px;
  width: 250px;
  margin-left: 50px;
  margin-top: -50px;
}
</style>
