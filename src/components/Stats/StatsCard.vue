<template>
  <v-card
    max-width="300"
    tile
  >
    <v-list dense disabled flat>
      <StatsList
        title="BASIC STATS"
        :data="basicStats"
      />
      <StatsList
        title="PRIMARY STATS"
        :data="primaryStats"
      />
      <StatsList
        title="SECONDARY STATS"
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
    sections: ['basicStats', 'primaryStats', 'secondaryStats'],
    basicStats: [
      { text: 'Vitalité', icon: 'hp', baseValue: '400' },
      { text: 'PA', icon: 'pa', baseValue: '7' },
      { text: 'PM', icon: 'pm', baseValue: '3' },
      { text: 'Initiative', icon: 'ini', baseValue: '0' },
      { text: 'Prospection', icon: 'pp', baseValue: '130' },
      { text: 'Portée', icon: 'po', baseValue: '2' },
      { text: 'Invocation', icon: 'invoc', baseValue: '2' }
    ],
    primaryStats: [
      { text: 'Sagesse', icon: 'sagesse', baseValue: '40' },
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
      { text: 'Renvoi de dommage', icon: 'rdmg', baseValue: '0' },
      { text: 'Dommages aux pièges', icon: 'piegedmg', baseValue: '0' },
      { text: 'Puissance aux pièges', icon: 'piegepui', baseValue: '0' }
    ],
    resistances: [
      { text: 'Neutre', icon: 'neutre', baseValue: '0' },
      { text: 'Terre', icon: 'terre', baseValue: '0' },
      { text: 'Feu', icon: 'feu', baseValue: '0' },
      { text: 'Eau', icon: 'eau', baseValue: '0' },
      { text: 'Air', icon: 'air', baseValue: '0' }
    ]
  })
}
</script>
