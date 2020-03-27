<template>
  <v-container class="mx-auto">
    <v-card style="border: 2px solid black" height="100" width="100" outlined>
      <v-avatar size="75" class="ma-2">
        <v-img :src="require(`@@/assets/classes/avatars/${icon}.png`)" />
      </v-avatar>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    icon: { type: String, default: 'feca' }
  }
}
</script>

<style>

</style>
