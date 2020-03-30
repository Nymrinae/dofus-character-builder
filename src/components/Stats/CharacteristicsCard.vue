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
        v-for="(stat, i) in statistics"
        :key="`stat#${i}`"
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
            @change="test(stat.name)"
          />
        </v-col>
        <v-col cols="auto">
          <v-checkbox :v-model="stat.isChecked" class="pl-8" @change="click(stat.name)" />
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
import { mapActions, mapState } from 'vuex'

export default {
  data: () => ({
    statistics: [
      { name: 'hp', value: 0, isChecked: false },
      { name: 'sagesse', value: 0, isChecked: false },
      { name: 'force', value: 0, isChecked: false },
      { name: 'int', value: 0, isChecked: false },
      { name: 'chance', value: 0, isChecked: false },
      { name: 'agi', value: 0, isChecked: false }
    ]
  }),
  computed: {
    ...mapState('character', ['level']),
    points() {
      const reducer = (a, b) => a + (parseInt(b.value) ? parseInt(b.value) : 0)
      const points = this.maxPoints - this.statistics.reduce(reducer, 0)

      return points > this.maxPoints ? this.maxPoints : points
    },
    maxPoints() {
      return this.level * 5 - 5
    }
  },
  /* created() {
    this.statistics.forEach(e => this.$watch(() => e, this.checkChange, { deep: true }))
  } */
  methods: {
    ...mapActions('character', ['updateStats']),
    click(stat) {
      const currentStat = this.statistics.filter(e => e.name === stat).shift()

      this.updateStats({ [stat]: currentStat.isChecked ? -100 : 100 })
      currentStat.isChecked = !currentStat.isChecked
    },
    test(stat) {
      const currentStat = this.statistics.filter(e => e.name === stat).shift()

      currentStat.lastValue = currentStat.value
      this.updateStats({ [stat]: parseInt(currentStat.value) })
    }
    /* checkChange(newVal, oldVal) {
      console.log(newVal, oldVal)
    } */
  }
}
</script>

<style>
</style>
