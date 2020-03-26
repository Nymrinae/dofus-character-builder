<template>
  <v-row>
    <v-col cols="2" class="mt-4 ml-8">
      <ItemContainer />
      <ItemContainer />
      <ItemContainer />
      <ItemContainer />
      <ItemContainer />
    </v-col>
    <v-col cols="8" class="mx-n4 mt-12">
      <CharacterView
        type="feca"
      />
      <!-- <v-row class="dofusSlots">
        <v-col
          v-for="n in 6"
          :key="n"
          cols="2"
        >
          <ItemContainer />
        </v-col>
      </v-row> -->
    </v-col>
    <v-col cols="2" class="mt-4">
      <ItemContainer />
      <ItemContainer />
      <ItemContainer />
      <ItemContainer />
      <ItemContainer />
    </v-col>
  </v-row>
</template>

<script>
import CharacterView from './CharacterView'
import ItemContainer from './ItemContainer'

export default {
  components: {
    CharacterView,
    ItemContainer
  }
}
</script>

<style>
.dofusSlots {
  margin-top: 64px;
}
</style>
