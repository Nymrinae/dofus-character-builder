<template>
  <v-container class="pa-0">
    <v-subheader class="caption font-weight-bold my-2">
      {{ title }}
    </v-subheader>
    <v-row
      v-for="(item, i) in data"
      :key="`item-${i}`"
      justify="center"
      class="my-n6 mx-2"
      no-gutters
      align="center"
    >
      <v-col cols="auto">
        <v-list-item-icon>
          <v-img
            :src="require(`@@/assets/icons/${item.icon}.png`)"
            width="20"
            height="20"
          />
        </v-list-item-icon>
      </v-col>
      <v-col cols="4">
        <v-subheader class="font-weight-black" v-text="item.text" />
      </v-col>
      <v-col cols="2" class="ml-6">
        <v-subheader class="font-weight-black" v-text="item.baseValue" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    data: { type: Array, required: true }
  }
}
</script>

<style>

</style>
