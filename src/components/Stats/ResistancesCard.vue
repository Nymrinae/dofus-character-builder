<template>
  <v-card class="pa-2 mx-auto mt-6 mb-6" outlined tile>
    <v-list dense disabled flat>
      <ResistancesList
        title="DOMMAGES"
        :data="dommages"
      />
      <ResistancesList
        title="Resistances Variables"
        :data="variableRes"
      />
      <ResistancesList
        title="Resistances Fixes"
        :data="fixedRes"
      />
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import ResistancesList from './ResistancesList'

export default {
  components: {
    ResistancesList
  },
  computed: {
    ...mapState('stats', ['stats']),
    dommages() {
      return [
        { icon: 'neutre', baseValue: this.stats.dmgneutre },
        { icon: 'terre', baseValue: this.stats.dmgterre },
        { icon: 'feu', baseValue: this.stats.dmgfeu },
        { icon: 'eau', baseValue: this.stats.dmgeau },
        { icon: 'air', baseValue: this.stats.dmgair }
      ]
    },
    variableRes() {
      return [
        { icon: 'neutre', baseValue: this.stats.varresneutre },
        { icon: 'terre', baseValue: this.stats.varresterre },
        { icon: 'feu', baseValue: this.stats.varresfeu },
        { icon: 'eau', baseValue: this.stats.varreseau },
        { icon: 'air', baseValue: this.stats.varresair }
      ]
    },
    fixedRes() {
      return [
        { icon: 'neutre', baseValue: this.stats.fixresneutre },
        { icon: 'terre', baseValue: this.stats.fixresterre },
        { icon: 'feu', baseValue: this.stats.fixresfeu },
        { icon: 'eau', baseValue: this.stats.fixreseau },
        { icon: 'air', baseValue: this.stats.fixresair }
      ]
    }
  }
}
</script>

<style>

</style>
