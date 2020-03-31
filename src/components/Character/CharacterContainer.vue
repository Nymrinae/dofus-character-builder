<template>
  <v-container class="ma-0 pa-0">
    <ClassChoiceGroup />
    <v-row>
      <v-col cols="8">
        <EquipmentContainer />
      </v-col>
      <v-col cols="4" align="center">
        <SearchItemCardContainer />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchItemCardContainer from '../Items/SearchItemCardContainer'
import ClassChoiceGroup from './ClassChoiceGroup'
import EquipmentContainer from './EquipmentContainer'

export default {
  components: {
    ClassChoiceGroup,
    EquipmentContainer,
    SearchItemCardContainer
  }
}
</script>

<style>
</style>
