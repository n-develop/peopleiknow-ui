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
};
</script>

<style scoped>
#pik-app {
  margin-top: 0;
  margin-left: 0;
  margin-bottom: 0;
}
</style>