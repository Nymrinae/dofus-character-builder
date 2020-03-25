<template>
  <v-container class="container">
    <v-row>
      <v-col cols="2" class="mt-4">
        <StatsCard />
      </v-col>
      <v-col cols="8" class="mt-4">
        <v-card class="pa-2" outlined title>
          test
        </v-card>
      </v-col>
      <v-col cols="2" class="mt-4">
        <UserCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import { StatsCard, UserCard } from '../components'

export default {
  middleware: 'auth',
  components: {
    StatsCard,
    UserCard
  }
}
</script>

<style>
.container {
  margin-left: auto;
  margin-right: auto;
}
</style>
