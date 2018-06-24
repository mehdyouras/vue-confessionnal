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
        rows="4"
        required
      />
    </b-form-group>
    <!-- <b-form-group 
      label="Joindre une image"
      label-for="conf-image"
    >
      <b-form-file 
        id="conf-image"
        v-model="file" 
        placeholder="Choisissez une image"
      />
    </b-form-group> -->
    <b-button 
      class="w-100"
      type="submit" 
      variant="primary" 
      size="lg"
    >
      <span v-if="!isLoading">Se confesser</span>
      <div 
        v-else
        class="d-flex justify-content-center"
      >
        <spinner  
          size="26px"
          color="#ffffff"
        />
      </div>
    </b-button>
    <b-alert
      :show="success"
      variant="success"
    >
      Votre confession a été envoyée avec succès
    </b-alert>
  </b-form>  
</template>

<script>
import Spinner from '@/components/misc/Spinner';

import CREATE_POST from '@/apollo/mutations/createPost.gql';

export default {
  name: 'AddPost',
  components: {
    Spinner,
  },
  props: {
    groupId: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      content: "",
      file: null,
      isLoading: false,
      success: false,
    }
  },
  methods: {
    addPost() {
      this.isLoading = true;
      this.$apollo.mutate({
        mutation: CREATE_POST,
        variables: {
          content: this.content,
          groupId: this.groupId,
        },
      }).then( () => {
        this.isLoading = false;
        this.success = true;
        this.content = "";
      })
    }
  }
}
</script>

<style>
.custom-file-input~.custom-file-label::after {
    content: "Parcourir";
}
</style>

