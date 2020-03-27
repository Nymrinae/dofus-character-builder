<template>
  <v-container class="pa-0">
    <v-subheader class="subtitle-2 font-weight-black">
      {{ title }}
    </v-subheader>
    <v-list-item-group>
      <v-list-item
        v-for="(item, i) in data"
        :key="i"
      >
        <v-list-item-icon>
          <v-img :src="require(`@@/assets/icons/${item.icon}.png`)" width="25" height="25" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text" />
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-title v-text="item.baseValue" />
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>
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
