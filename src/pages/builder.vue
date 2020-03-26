<template>
  <v-container class="container">
    <v-row>
      <v-col cols="2" class="mt-4">
        <StatsCard />
      </v-col>
      <v-col cols="8" class="mt-n8">
        <ClassChoiceGroup />
        <CharacterContainer />
      </v-col>
      <v-col cols="2" class="mt-4">
        <UserCard />
        <ResistancesCard />
        <DefensiveStatsCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  CharacterContainer,
  ClassChoiceGroup,
  DefensiveStatsCard,
  ResistancesCard,
  StatsCard,
  UserCard
} from '../components'

export default {
  middleware: 'auth',
  components: {
    CharacterContainer,
    ClassChoiceGroup,
    DefensiveStatsCard,
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
