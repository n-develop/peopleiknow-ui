<template>
  <section id="login-screen" class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form class="box" id="login" @submit.prevent>
              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user-circle"></i>
                  </span>
                  <input
                    class="input"
                    aria-label="Username"
                    autofocus
                    required
                    placeholder="Username"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                  <input
                    class="input"
                    type="password"
                    aria-label="Password"
                    required
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div class="field">
                <button class="button is-info">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#login-screen {
  background-color: #2b677e;
}
</style>