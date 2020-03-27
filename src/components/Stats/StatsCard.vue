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
import StatsList from './StatsList'

export default {
  components: {
    StatsList
  },
  data: () => ({
    basicStats: [
      { text: 'Vitalité', icon: 'hp', baseValue: '55' },
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
      { text: 'Critique', icon: 'crit', baseValue: '0' },
      { text: 'Soin', icon: 'heal', baseValue: '0' },
      { text: 'Dommages', icon: 'dmg', baseValue: '0' },
      { text: 'Puissance', icon: 'pui', baseValue: '0' },
      { text: 'Renvoi Dmg', icon: 'rdmg', baseValue: '0' },
      { text: 'Piège Dmg', icon: 'piegedmg', baseValue: '0' },
      { text: 'Piège Pui', icon: 'piegepui', baseValue: '0' }
    ],
    defensiveStats: [
      { text: 'Fuite', icon: 'fuite', baseValue: '0' },
      { text: 'Tacle', icon: 'tacle', baseValue: '0' },
      { text: 'Esquive PA', icon: 'esqpa', baseValue: '0' },
      { text: 'Retrait PA', icon: 'retpa', baseValue: '0' },
      { text: 'Esquive PM', icon: 'esqpm', baseValue: '0' },
      { text: 'Retrait PM', icon: 'retpm', baseValue: '0' },
      { text: 'Pods', icon: 'pods', baseValue: '1000' },
      { text: 'Bouclier', icon: 'shield', baseValue: '0' }
    ]
  })
}
</script>
