<template>
  <b-card
    title="Rejoindre un confessionnal"
  >
    <b-form>
      <b-form-group 
        label="Nom du confessionnal"
        label-for="conf-name"
      >
        <b-form-input 
          id="conf-name"
          type="text"
          required
        />
      </b-form-group>
      <b-form-group 
        label="Mot de passe"
        label-for="conf-password"
      >
        <b-form-input 
          id="conf-password"
          type="password"
          required
        />
      </b-form-group>
    </b-form>
  </b-card>
</template>

<script>
export default {
  name: 'LogIn',
}
</script>
