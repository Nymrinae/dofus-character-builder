<template>
  <v-card class="pa-2 mx-auto mt-6" outlined tile>
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
import ResistancesList from './ResistancesList'

export default {
  components: {
    ResistancesList
  },
  data: () => ({
    dommages: [
      { text: 'Dommage Neutre', icon: 'neutre', baseValue: '0' },
      { text: 'Dommage Feu', icon: 'feu', baseValue: '0' },
      { text: 'Dommage Eau', icon: 'eau', baseValue: '0' },
      { text: 'Dommage Air', icon: 'air', baseValue: '0' },
      { text: 'Dommage Terre', icon: 'terre', baseValue: '0' }
    ],
    variableRes: [
      { text: '% Res. Neutre', icon: 'neutre', baseValue: '0' },
      { text: '% Res. Feu', icon: 'feu', baseValue: '0' },
      { text: '% Res. Eau', icon: 'eau', baseValue: '0' },
      { text: '% Res. Air', icon: 'air', baseValue: '0' },
      { text: '% Res. Terre', icon: 'terre', baseValue: '0' }
    ],
    fixedRes: [
      { text: 'Fix Res. Neutre', icon: 'neutre', baseValue: '0' },
      { text: 'Fix Res. Feu', icon: 'feu', baseValue: '0' },
      { text: 'Fix Res. Eau', icon: 'eau', baseValue: '0' },
      { text: 'Fix Res. Air', icon: 'air', baseValue: '0' },
      { text: 'Fix Res. Terre', icon: 'terre', baseValue: '0' }
    ]
  })
}
</script>

<style>

</style>
