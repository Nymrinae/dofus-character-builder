<template>
  <v-container class="pa-0 ma-0">
    <v-row>
      <v-col cols="3" align="center">
        <ItemContainer v-for="c in 5" :key="c" />
      </v-col>
      <v-col cols="6">
        <CharacterView />
        <v-row style="margin-top: 86px">
          <v-col
            v-for="i in 2"
            :key="i"
            cols="6"
            align="center"
          >
            <ItemContainer />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3" align="center">
        <ItemContainer v-for="c in 5" :key="c" />
      </v-col>
    </v-row>
    <v-row class="ml-3 mr-n9 mt-n6">
      <v-col
        v-for="i in 4"
        :key="i"
        cols="3"
      >
        <ItemContainer />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ItemContainer from '../Items/ItemContainer'
import CharacterView from './CharacterView'

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
