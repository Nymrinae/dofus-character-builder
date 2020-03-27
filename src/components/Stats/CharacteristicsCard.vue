<template>
  <v-card class="mt-6" outlined tile>
    <v-container>
      <v-subheader class="subtitle-2 font-weight-bold mb-n2">
        STATISTIQUES
      </v-subheader>
      <v-row no-gutters>
        <v-col cols="4" />
        <v-col cols="4" align="center" class="ml-4">
          <v-subheader class="font-weight-black"> Base </v-subheader>
        </v-col>
        <v-col cols="2" align="center">
          <v-subheader class="font-weight-black"> Parcho </v-subheader>
        </v-col>
      </v-row>
      <v-row
        v-for="stat in statistics"
        :key="stat"
        justify="center"
        class="my-n6"
        no-gutters
      >
        <v-col cols="4">
          <v-list-item-icon>
            <v-img
              :src="require(`@@/assets/icons/${stat.name}.png`)"
              width="33"
              height="33"
            />
          </v-list-item-icon>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="stat.value"
            type="number"
            :min="0"
            hide-details
            width="200px"
          />
        </v-col>
        <v-col cols="auto">
          <v-checkbox class="pl-8" />
        </v-col>
      </v-row>
      <p
        class="subtitle font-weight-medium mt-10 mb-n1"
        align="center"
        :style="{ color: !points || points >= 0 ? 'black' : 'red'}"
      >
        {{ points }} points restants
      </p>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    statistics: [
      { name: 'hp', value: 0 },
      { name: 'sagesse', value: 0 },
      { name: 'force', value: 0 },
      { name: 'int', value: 0 },
      { name: 'chance', value: 0 },
      { name: 'agi', value: 0 }
    ]
  }),
  computed: {
    points() {
      const reducer = (a, b) => a + (parseInt(b.value) ? parseInt(b.value) : 0)
      const points = this.maxPoints - this.statistics.reduce(reducer, 0)

      return points > this.maxPoints ? this.maxPoints : points
    },
    maxPoints() {
      return this.level() * 5 - 5
    }
  },
  methods: {
    ...mapGetters({
      level: 'character/getLevel'
    })
  }
}
</script>

<style>
</style>
