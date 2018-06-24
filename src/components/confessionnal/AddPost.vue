<template>
  <b-form @submit.prevent="addPost">
    <b-form-group 
      label="Votre confession"
      label-for="conf-content"
    >
      <b-form-textarea
        id="conf-content"
        v-model="content"
        type="text"
        required
      />
    </b-form-group>
    <b-form-group 
      label="Joindre une image"
      label-for="conf-image"
    >
      <b-form-file 
        id="conf-image"
        v-model="file" 
        placeholder="Choisissez une image"
      />
    </b-form-group>
    <b-button 
      class="w-100"
      type="submit" 
      variant="primary" 
      size="lg"
    >
      Se confesser
    </b-button>
  </b-form>  
</template>

<script>
export default {
  name: 'AddPost',
  data() {
    return {
      content: "",
      file: null,
    }
  },
  methods: {
    addPost() {
      console.log('addPost')
    }
  }
}
</script>

<style>
.custom-file-input~.custom-file-label::after {
    content: "Parcourir";
}
</style>

