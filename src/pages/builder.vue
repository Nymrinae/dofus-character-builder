<template>
  <v-container class="container">
    <v-row>
      <v-col cols="2" class="mt-4">
        <StatsCard />
      </v-col>
      <v-col cols="8" class="mt-n8">
        <CharacterContainer />
      </v-col>
      <v-col cols="2" class="mt-4">
        <UserCard />
        <CharacteristicsCard />
        <ResistancesCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import {
  CharacterContainer,
  CharacteristicsCard,
  ClassChoiceGroup,
  ResistancesCard,
  StatsCard,
  UserCard
} from '@/components'

export default {
  middleware: 'auth',
  components: {
    CharacterContainer,
    CharacteristicsCard,
    ClassChoiceGroup,
    ResistancesCard,
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

html {
  overflow: hidden;
}
</style>
