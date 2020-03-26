<template>
  <v-card class="pa-2" outlined>
    <v-list dense disabled flat>
      <StatsList
        title="STATS DEFENSIVES / AUTRES"
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

<style>

</style>
