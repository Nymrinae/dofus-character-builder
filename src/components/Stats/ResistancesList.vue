<template>
  <v-container class="my-n6">
    <v-subheader> {{ title.toUpperCase() }} </v-subheader>
    <v-list-item-group>
      <v-row no-gutters>
        <v-col
          v-for="(item, i) in data"
          :key="`item#${i}`"
          cols="2"
        >
          <v-list-item class="px-6">
            <v-list-item-icon>
              <v-img :src="require(`@@/assets/icons/${item.icon}.png`)" />
            </v-list-item-icon>
            <v-list-item-action>
              <v-list-item-title
                class="itemValue"
                v-text="item.baseValue"
              />
            </v-list-item-action>
          </v-list-item>
        </v-col>
      </v-row>
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
.itemValue {
  font-size: 48px;
  margin-left: -46px;
}
</style>
