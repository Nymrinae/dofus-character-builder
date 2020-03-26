<template>
  <v-container class="ma-0 pa-0">
    <ClassChoiceGroup />
    <v-row>
      <v-col cols="8">
        <EquipmentContainer />
      </v-col>
      <v-col cols="4">
        <v-card outlined width="300" height="300" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ClassChoiceGroup from './ClassChoiceGroup'
import EquipmentContainer from './EquipmentContainer'

export default {
  components: {
    ClassChoiceGroup,
    EquipmentContainer
  }
}
</script>

<style>
</style>
