<template>
  <div class="card" id="contact-teaser-1" data-contact-id="1">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img v-if="imgPath" :src="imgPath" alt="Profile image" />
            <img
              v-else
              :src="require('../../assets/images/unknown.jpg')"
              alt="Profile image"
            />
          </figure>
        </div>
        <div class="media-content">
          <span class="is-pulled-right is-4 title favorite" data-contact-id="1">
            <i class="fa-heart" :class="favorite ? 'fas' : 'far'"></i>
          </span>
          <p class="title is-4">{{ fullname }}</p>
          <p v-if="email" class="subtitle is-6">{{ email }}</p>
        </div>
      </div>

      <div class="content">
        <span v-if="address"
          ><i class="fa fa-map-marked-alt"></i> {{ address }}</span
        ><br />
        <span v-if="employer"
          ><i class="fa fa-building"></i> {{ employer }}</span
        ><br />
        <span v-if="businessTitle"
          ><i class="fa fa-briefcase"></i> {{ businessTitle }}</span
        ><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "firstname",
    "lastname",
    "email",
    "employer",
    "businessTitle",
    "address",
    "imgPath",
    "favorite"
  ],
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
  },
  data() {
    return {};
  },
};
</script>