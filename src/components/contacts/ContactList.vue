<template>
  <div
    id="people-feed"
    class="column is-4-desktop is-full-mobile feed hero is-fullheight"
  >
    <contact-teaser></contact-teaser>
    <contact-teaser></contact-teaser>
    <contact-teaser></contact-teaser>
    <contact-teaser></contact-teaser>
    <contact-teaser></contact-teaser>
    <contact-teaser></contact-teaser>
    <contact-teaser></contact-teaser>
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
          businessTitle: 'Head of Controlling',
          imgPath: '../../assets/images/1.jpg'
        },
        {
          id: 2,
          firstname: 'Marianne',
          lastname: 'Mustermann',
          email: 'marianne@mustermann.de',
          imgPath: '../../assets/images/2.jpg'
        },
        {
          id: 3,
          firstname: 'John',
          lastname: 'Smith'
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