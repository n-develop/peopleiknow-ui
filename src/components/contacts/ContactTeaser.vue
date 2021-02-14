<template>
  <div class="card" id="contact-teaser-1" data-contact-id="1">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img v-bind:src="require('../../assets/images/1.jpg')" alt="Profile image" />
          </figure>
        </div>
        <div class="media-content">
          <span class="is-pulled-right is-4 title favorite" data-contact-id="1">
            <i class="@favoriteClass"></i>
          </span>
          <p class="title is-4">Max Mustermann</p>
          <p class="subtitle is-6">max.mustermann@muster.de</p>
        </div>
      </div>

      <div class="content">
        <i class="fa fa-map-marked-alt"></i>
        Musterstr. 11, 39292 Musterhausen<br />
        <i class="fa fa-building"></i>
        Mustermann AG<br />
        <i class="fa fa-briefcase"></i>
        Head of Controlling<br />
      </div>
    </div>
  </div>
</template>