<template>
  <v-container>
    <v-subheader> {{ title.toUpperCase() }} </v-subheader>
    <v-list-item-group>
      <v-row no-gutters>
        <v-col v-for="item in data" :key="item" cols="2">
          <v-list-item>
            <v-list-item-icon>
              <v-img :src="require(`@@/assets/icons/stats/${item.icon}.png`)"></v-img>
            </v-list-item-icon>
            <v-list-item-action>
              <v-list-item-title
                v-text="item.baseValue"
                class="itemValue"
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
  margin-left: -48px;
}
</style>
