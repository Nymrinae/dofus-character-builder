<template>
  <div>
    <v-subheader> {{ title }} </v-subheader>
    <v-list-item-group v-model="item" color="primary">
      <v-list-item
        v-for="(item, i) in data"
        :key="i"
      >
        <v-list-item-icon>
          <v-img :src="require(`@@/assets/icons/stats/${item.icon}.png`)"></v-img>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-title v-text="item.baseValue"></v-list-item-title>
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    data: { type: Object, required: true }
  }
}
</script>

<style>

</style>
