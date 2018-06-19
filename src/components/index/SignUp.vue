<template>
  <b-card
    title="Créer un confessionnal"
  >
    <b-form>
      <b-form-group 
        label="Nom du confessionnal"
        label-for="conf-signup-name"
      >
        <b-form-input 
          id="conf-signup-name"
          type="text"
          required
        />
      </b-form-group>
      <b-form-group 
        label="Mot de passe"
        label-for="conf-signup-password"
      >
        <b-form-input 
          id="conf-signup-password"
          type="password"
          required
        />
      </b-form-group>
      <b-form-group 
        label="Répétez le mot de passe"
        label-for="conf-signup-repeat-password"
      >
        <b-form-input 
          id="conf-signup-repeat-password"
          type="password"
          required
        />
      </b-form-group>
    </b-form>
  </b-card>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>
