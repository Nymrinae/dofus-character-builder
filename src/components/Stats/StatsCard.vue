<template>
  <v-card class="pa-2" outlined>
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
    </v-list>
  </v-card>
</template>

<script>
import StatsList from './StatsList'

export default {
  components: {
    StatsList
  },
  data: () => ({
    basicStats: [
      { text: 'Vitalité', icon: 'hp', baseValue: '50' },
      { text: 'PA', icon: 'pa', baseValue: '6' },
      { text: 'PM', icon: 'pm', baseValue: '3' },
      { text: 'Initiative', icon: 'ini', baseValue: '0' },
      { text: 'Prospection', icon: 'pp', baseValue: '100' },
      { text: 'Portée', icon: 'po', baseValue: '0' },
      { text: 'Invocation', icon: 'invoc', baseValue: '0' }
    ],
    primaryStats: [
      { text: 'Sagesse', icon: 'sagesse', baseValue: '0' },
      { text: 'Force', icon: 'force', baseValue: '0' },
      { text: 'Intelligence', icon: 'int', baseValue: '0' },
      { text: 'Chance', icon: 'chance', baseValue: '0' },
      { text: 'Agilité', icon: 'agi', baseValue: '0' }
    ],
    secondaryStats: [
      { text: 'Critique', icon: 'crit', baseValue: '5' },
      { text: 'Soin', icon: 'heal', baseValue: '10' },
      { text: 'Dommages', icon: 'dmg', baseValue: '15' },
      { text: 'Puissance', icon: 'pui', baseValue: '30' },
      { text: 'Renvoi Dommages', icon: 'rdmg', baseValue: '0' },
      { text: 'Dommages Pièges', icon: 'piegedmg', baseValue: '0' },
      { text: 'Puissance Pièges', icon: 'piegepui', baseValue: '0' }
    ]
  })
}
</script>
