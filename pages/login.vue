<script>
export default {
  data: () => ({
    visible: false,
  }),
};
</script>

<template>
  <v-container>
    <v-row class="d-flex align-center mt-6">
      <v-col cols="12" md="7" class="bg-teal-accent-3">
        <v-img
          class="mx-auto my-6"
          max-width="90%"
          src="https://png.pngtree.com/png-vector/20221020/ourmid/pngtree-female-smiling-librarian-standing-at-counter-png-image_6329223.png"
        ></v-img>
      </v-col>
      <v-col cols="12" md="5">
        <div>
          <div class="text-subtitle-1 text-medium-emphasis">Account</div>

          <v-text-field
            density="compact"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
          ></v-text-field>

          <div
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
          >
            Password
          </div>

          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>
          <a
            class="text-caption text-decoration-none text-green"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a
          >

          <v-btn class="my-2" color="green" size="large" variant="tonal" block>
            Log In
          </v-btn>

          <v-card-text class="text-center">
            <a
              class="text-green text-decoration-none text-base"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
          </v-card-text>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
