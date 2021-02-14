<template>
  <div id="people-pane" class="column is-8-desktop is-hidden-mobile pane">
    <div v-if="contact" class="box contact-preview" data-contact-id="188">
      <form id="contact-form" method="post" action="/Dashboard/Details/188">
        <input
          type="hidden"
          data-val="true"
          data-val-required="The Id field is required."
          id="Id"
          name="Id"
          value="188"
        />
        <div class="field">
          <label class="label">Profile Image</label>
          <div class="field">
            <figure class="image is-96x96">
              <img src="../../assets/images/2.jpg" alt="Profile image" />
            </figure>
          </div>
          <div class="control">
            <div class="file has-name is-fullwidth">
              <label class="file-label">
                <input
                  id="image-input"
                  class="file-input"
                  type="file"
                  name="Image"
                />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label"> Browse… </span>
                </span>
                <span id="file-name" class="file-name"> Select a file </span>
              </label>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Firstname</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Firstname"
              id="Firstname"
              name="Firstname"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Middlename</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Middlename"
              id="Middlename"
              name="Middlename"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Lastname</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Lastname"
              id="Lastname"
              name="Lastname"
            />
          </div>
        </div>

        <div class="panel">
          <p class="panel-heading">
            Emails
            <a
              class="button is-pulled-right is-small is-success"
            >
              <i class="fa fa-plus-circle"></i>
            </a>
          </p>

          <div class="panel-block">
            <label class="label">Private</label>
            <div class="field has-addons">
              <p class="control">
                <a class="button is-info">
                  <i class="fa fa-envelope"></i>
                </a>
              </p>
              <div class="control is-expanded">
                <input
                  class="input"
                  type="email"
                  placeholder="email@domoain.com"
                  disabled="disabled"
                />
              </div>
              <p class="control">
                <a class="button is-warning">
                  <i class="fa fa-pencil-alt"></i>
                </a>
              </p>
              <p class="control">
                <a class="button is-danger">
                  <i class="fa fa-minus-circle"></i>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Birthday</label>
          <div class="control has-icons-left">
            <input
              class="input"
              type="date"
              min="1900-01-01"
              id="Birthday"
              name="Birthday"
            />
            <span class="icon is-small is-left">
              <i class="fa fa-birthday-cake"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Address</label>
          <div class="control">
            <textarea class="textarea" id="Address" name="Address"></textarea>
          </div>
        </div>

        <div class="field">
          <label class="label">Employer</label>
          <div class="control has-icons-left">
            <input
              class="input"
              placeholder="Employer"
              type="text"
              id="Employer"
              name="Employer"
            />
            <span class="icon is-small is-left">
              <i class="fa fa-building"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Business Title</label>
          <div class="control has-icons-left">
            <input
              class="input"
              placeholder="Business Title"
              type="text"
              id="BusinessTitle"
              name="BusinessTitle"
            />
            <span class="icon is-small is-left">
              <i class="fa fa-briefcase"></i>
            </span>
          </div>
        </div>

        <div class="panel">
          <p class="panel-heading">
            Telephone
            <a
              class="button is-pulled-right is-small is-success"
            >
              <i class="fa fa-plus-circle"></i>
            </a>
          </p>

          <div class="panel-block">
            <label class="label">Mobile</label>
            <div class="field has-addons">
              <p class="control">
                <a class="button is-info">
                  <i class="fa fa-phone"></i>
                </a>
              </p>
              <div class="control is-expanded">
                <input class="input" type="tel" disabled="disabled" />
              </div>
              <p class="control">
                <a class="button is-warning">
                  <i class="fa fa-pencil-alt"></i>
                </a>
              </p>
              <p class="control">
                <a class="button is-danger">
                  <i class="fa fa-minus-circle"></i>
                </a>
              </p>
            </div>
          </div>
          <div class="panel-block">
            <label class="label">Home</label>
            <div class="field has-addons">
              <p class="control">
                <a class="button is-info">
                  <i class="fa fa-phone"></i>
                </a>
              </p>
              <div class="control is-expanded">
                <input class="input" type="tel" disabled="disabled" />
              </div>
              <p class="control">
                <a class="button is-warning">
                  <i class="fa fa-pencil-alt"></i>
                </a>
              </p>
              <p class="control">
                <a class="button is-danger">
                  <i class="fa fa-minus-circle"></i>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="panel">
          <p class="panel-heading">
            Relationships
            <a
              class="button is-pulled-right is-small is-success"
            >
              <i class="fa fa-plus-circle"></i>
            </a>
          </p>

          <div class="panel-block">
            <label class="label">Husband</label>
            <div class="field has-addons">
              <p class="control">
                <a class="button is-info">
                  <i class="fa fa-search"></i>
                </a>
              </p>
              <div class="control is-expanded has-icons-left">
                <input class="input" disabled="disabled" />
                <span class="icon is-small is-left">
                  <i class="fa fa-user-friends"></i>
                </span>
              </div>
              <p class="control">
                <a class="button is-warning">
                  <i class="fa fa-pencil-alt"></i>
                </a>
              </p>
              <p class="control">
                <a class="button is-danger">
                  <i class="fa fa-minus-circle"></i>
                </a>
              </p>
            </div>
          </div>
          <div class="panel-block">
            <label class="label">Son</label>
            <div class="field has-addons">
              <p class="control">
                <a class="button is-info">
                  <i class="fa fa-search"></i>
                </a>
              </p>
              <div class="control is-expanded has-icons-left">
                <input class="input" disabled="disabled" />
                <span class="icon is-small is-left">
                  <i class="fa fa-user-friends"></i>
                </span>
              </div>
              <p class="control">
                <a class="button is-warning">
                  <i class="fa fa-pencil-alt"></i>
                </a>
              </p>
              <p class="control">
                <a class="button is-danger">
                  <i class="fa fa-minus-circle"></i>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="panel">
          <p class="panel-heading">
            Status Updates
            <a
              class="button is-pulled-right is-small is-success"
            >
              <i class="fa fa-plus-circle"></i>
            </a>
          </p>

          <div class="panel-block">
            <label class="label">01.09.2019</label>
            <div class="field has-addons">
              <div class="control is-expanded">
                <input
                  class="input"
                  value="This is some kind of info"
                  placeholder="Status update"
                  disabled="disabled"
                />
              </div>
              <p class="control">
                <a class="button is-warning">
                  <i class="fa fa-pencil-alt"></i>
                </a>
              </p>
              <p class="control">
                <a class="button is-danger">
                  <i class="fa fa-minus-circle"></i>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Tags</label>
          <div class="control has-icons-left">
            <input
              class="input"
              placeholder="e.g. football,boardgames,family"
              type="text"
              id="Tags"
              name="Tags"
            />
            <span class="icon is-small is-left">
              <i class="fa fa-tag"></i>
            </span>
          </div>
        </div>

        <a class="button is-info is-medium">Save</a>
        <a class="button is-danger is-medium">Delete</a
        >
      </form>
    </div>
    <div v-else class="columns is-desktop is-vcentered" style="height: 100%">
      <div class="column">
        <h2 class="has-text-centered">Choose a Contact from the list!</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: null,
    };
  },
};
</script>

<style scoped>
.pane {
  background-color: #91d2ec;
  overflow-y: scroll;
}

.pane > .box {
  margin: 10px 10px 0 0;
}

.contact-preview > form > .panel > .panel-block {
    display: block !important;
}
</style>