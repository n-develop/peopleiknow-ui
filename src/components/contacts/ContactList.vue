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