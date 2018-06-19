<template>
  <div id="app">
    <b-container>
      <b-card
        bg-variant="dark"
        class="my-4"
      >
        <img 
          src="./assets/img/logo-white.svg" 
          alt="EKM's Confessionnal"
        >
      </b-card>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

