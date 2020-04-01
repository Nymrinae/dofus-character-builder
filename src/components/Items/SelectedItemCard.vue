<template>
  <v-card class="mt-6" width="400" height="765" outlined>
    <v-container>
      <v-card-text
        class="headline font-weight-black pa-6"
        v-text="type"
      />
      <v-card-text>
        <v-autocomplete
          v-model="item"
          :items="currentItems"
          color="white"
          :placeholder="`Cherche ton ${type} ici !`"
          prepend-icon="mdi-magnify"
          item-text="name"
          clearable
        />
      </v-card-text>
      <ItemTypeList
        v-if="!item"
        :items="currentItems"
      />
      <v-card-text v-else v-text="`there is an item`" />
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import ItemTypeList from './ItemTypeList'

export default {
  components: {
    ItemTypeList
  },
  props: {
    type: { type: String, required: true }
  },
  data: () => ({
    item: null
  }),
  computed: {
    ...mapState('build', ['currentItems'])
  }
}
</script>

<style>

</style>
