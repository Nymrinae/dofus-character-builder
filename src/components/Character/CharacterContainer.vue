<template>
  <v-container class="ma-0 pa-0">
    <ClassChoiceGroup />
    <EquipmentContainer />
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
