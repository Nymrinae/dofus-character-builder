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
import ResistancesList from './ResistancesList'

export default {
  components: {
    ResistancesList
  },
  data: () => ({
    dommages: [
      { icon: 'neutre', baseValue: '1' },
      { icon: 'terre', baseValue: '0' },
      { icon: 'feu', baseValue: '0' },
      { icon: 'eau', baseValue: '0' },
      { icon: 'air', baseValue: '0' }
    ],
    variableRes: [
      { icon: 'neutre', baseValue: '0' },
      { icon: 'terre', baseValue: '0' },
      { icon: 'feu', baseValue: '0' },
      { icon: 'eau', baseValue: '0' },
      { icon: 'air', baseValue: '0' }
    ],
    fixedRes: [
      { icon: 'neutre', baseValue: '0' },
      { icon: 'terre', baseValue: '0' },
      { icon: 'feu', baseValue: '0' },
      { icon: 'eau', baseValue: '0' },
      { icon: 'air', baseValue: '0' }
    ]
  })
}
</script>

<style>

</style>
