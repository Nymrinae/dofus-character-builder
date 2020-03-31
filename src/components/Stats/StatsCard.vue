<template>
  <v-card class="pa-2 pt-0" outlined>
    <v-list dense disabled flat>
      <StatsList
        title="STATS DE BASE"
        :data="basicStats"
      />
      <StatsList
        title="STATS PRIMAIRES"
        :data="primaryStats"
      />
      <StatsList
        title="STATS SECONDAIRES"
        :data="secondaryStats"
      />
      <StatsList
        title="STATS DEFENSIVES"
        :data="defensiveStats"
      />
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import StatsList from './StatsList'

export default {
  components: {
    StatsList
  },
  computed: {
    ...mapState('stats', ['stats']),
    basicStats() {
      return [
        { text: 'Vitalité', icon: 'hp', baseValue: this.stats.hp },
        { text: 'PA', icon: 'pa', baseValue: this.stats.pa },
        { text: 'PM', icon: 'pm', baseValue: this.stats.pm },
        { text: 'Initiative', icon: 'ini', baseValue: this.stats.ini },
        { text: 'Prospection', icon: 'pp', baseValue: this.stats.pp },
        { text: 'Portée', icon: 'po', baseValue: this.stats.po },
        { text: 'Invocation', icon: 'invoc', baseValue: this.stats.invoc }
      ]
    },
    primaryStats() {
      return [
        { text: 'Sagesse', icon: 'sagesse', baseValue: this.stats.sagesse },
        { text: 'Force', icon: 'force', baseValue: this.stats.force },
        { text: 'Intelligence', icon: 'int', baseValue: this.stats.int },
        { text: 'Chance', icon: 'chance', baseValue: this.stats.chance },
        { text: 'Agilité', icon: 'agi', baseValue: this.stats.agi }
      ]
    },
    secondaryStats() {
      return [
        { text: 'Critique', icon: 'crit', baseValue: this.stats.crit },
        { text: 'Soin', icon: 'heal', baseValue: this.stats.heal },
        { text: 'Dommages', icon: 'dmg', baseValue: this.stats.dmg },
        { text: 'Puissance', icon: 'pui', baseValue: this.stats.pui },
        { text: 'Renvoi Dmg', icon: 'rdmg', baseValue: this.stats.rdmg },
        { text: 'Piège Dmg', icon: 'piegedmg', baseValue: this.stats.trapdmg },
        { text: 'Piège Pui', icon: 'piegepui', baseValue: this.stats.trappui }
      ]
    },
    defensiveStats() {
      return [
        { text: 'Fuite', icon: 'fuite', baseValue: this.stats.fuite },
        { text: 'Tacle', icon: 'tacle', baseValue: this.stats.tacle },
        { text: 'Esquive PA', icon: 'esqpa', baseValue: this.stats.esqpa },
        { text: 'Retrait PA', icon: 'retpa', baseValue: this.stats.retpa },
        { text: 'Esquive PM', icon: 'esqpm', baseValue: this.stats.esqpm },
        { text: 'Retrait PM', icon: 'retpm', baseValue: this.stats.retpm },
        { text: 'Pods', icon: 'pods', baseValue: this.stats.pods },
        { text: 'Bouclier', icon: 'shield', baseValue: this.stats.shield }
      ]
    }
  }
}
</script>
