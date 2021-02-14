<template>
  <div
    id="people-feed"
    class="column is-4-desktop is-full-mobile feed hero is-fullheight"
  >
    <contact-teaser v-for="teaser in contactTeaser" :key="teaser.id" v-bind="teaser"></contact-teaser>
  </div>
</template>

<script>
import ContactTeaser from "./ContactTeaser.vue";

export default {
  components: {
    ContactTeaser,
  },
  data(){
    return {
      contactTeaser: [
        {
          id: 1,
          firstname: 'Max',
          lastname: 'Mustermann',
          email: 'max@mustermann.de',
          employer: 'Mustermann AG',
          address: 'Musterstr. 11, 39292 Musterhausen',
          businessTitle: 'Head of Controlling',
          imgPath: require('../../assets/images/1.jpg')
        },
        {
          id: 2,
          firstname: 'Marianne',
          lastname: 'Mustermann',
          email: 'marianne@mustermann.de',
          imgPath: require('../../assets/images/2.jpg')
        },
        {
          id: 3,
          firstname: 'John',
          lastname: 'Smith',
          favorite: true
        },
        {
          id: 4,
          firstname: 'Kurt',
          lastname: 'Meyers',
          email: 'kurt@meyers.com',
          employer: 'self-employed',
          businessTitle: 'Cool Dude'
        }
      ]
    };
  }
};
</script>

<style scoped>
.feed {
  background-color: #2b677e;
  overflow-y: scroll;
}

.feed > .card {
  margin-top: 10px;
  margin-right: 10px;
}
</style>