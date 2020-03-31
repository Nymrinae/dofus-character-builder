<template>
  <v-card class="mt-6" width="400" height="735" outlined>
    <v-img
      :src="require('@@/assets/logo_title.png')"
      width="150"
      height="100"
      class="mt-6"
    />
    <v-card-text
      class="headline font-weight-black pa-12"
      v-text="welcomeMsg"
    />
    <v-card-actions
      v-for="(msg, i) in messages"
      :key="`message${i}`"
    >
      <v-card-text
        :class="i == 2 ? 'text-justify bottomText' : 'text-justify'"
        v-text="msg"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    githubLink: 'https://github.com/Nymrinae/dofusCharBuilder',
    messages: [
      'Tu as la possibilité d\'ajouter des items à ton personnage en cliquant sur les différents slots d\'items.',
      'Une fois tes changements faits, tu peux sauvegarder l`état de ton personnage pour ne pas perdre tes modifications.',
      'Toutes les images et données utilisées sur ce site sont de la propriété de © ANKAMA.'
    ],
    welcomeMsg: 'Bienvenue sur Dofus Character Builder'
  })
}
</script>

<style>
.bottomText {
  margin-bottom: -350px;
}
</style>
