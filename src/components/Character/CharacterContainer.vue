<template>
  <v-container class="ma-0 pa-0">
    <ClassChoiceGroup />
    <v-row>
      <v-col cols="8">
        <EquipmentContainer />
      </v-col>
      <v-col cols="4" align="center">
        <SearchItemCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchItemCard from '../Items/SearchItemCard'
import ClassChoiceGroup from './ClassChoiceGroup'
import EquipmentContainer from './EquipmentContainer'

export default {
  components: {
    ClassChoiceGroup,
    EquipmentContainer,
    SearchItemCard
  }
}
</script>

<style>
</style>
