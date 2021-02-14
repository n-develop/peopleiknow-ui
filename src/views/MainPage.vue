<template>
  <the-navigation></the-navigation>
  <div id="pik-app" class="columns">
    <contact-list></contact-list>
    <contact-editor></contact-editor>
  </div>
</template>

<script>
import ContactList from "../components/contacts/ContactList.vue";
import ContactEditor from "../components/contacts/ContactEditor.vue";
import TheNavigation from "../components/layout/TheNavigation.vue";

export default {
  components: {
    ContactList,
    ContactEditor,
    TheNavigation,
  },
  provide() {
    return {
      contacts: this.contactTeaser
    };
  },
  data() {
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
          imgPath: require('../assets/images/1.jpg')
        },
        {
          id: 2,
          firstname: 'Marianne',
          lastname: 'Mustermann',
          email: 'marianne@mustermann.de',
          imgPath: require('../assets/images/2.jpg')
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
          businessTitle: 'Cool Dude',
          imgPath: require('../assets/images/3.jpg')
        }
      ]
    }
  }
};
</script>

<style scoped>
#pik-app {
  margin-top: 0;
  margin-left: 0;
  margin-bottom: 0;
}
</style>