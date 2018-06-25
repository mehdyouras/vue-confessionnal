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
    <b-form-group 
      label="Joindre des images"
      label-for="conf-image"
    >
      <b-form-file 
        id="conf-image"
        v-model="files" 
        multiple
        accept="image/*"
        placeholder="Choisissez des images"
      />
    </b-form-group>
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
import axios from 'axios';

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
      files: [],
      isLoading: false,
      success: false,
    }
  },
  methods: {
    addPost() {
      this.isLoading = true;
      
      if(this.files.length) {
        let uploadPromises = this.files.map((file) => {
          return this.uploadFile(file);
        })
  
        Promise.all(uploadPromises).then((data) => {
          console.log(data);
          let files = data.map(img => {
            return { url: img.data.data.link };
          });
          this.$apollo.mutate({
            mutation: CREATE_POST,
            variables: {
              content: this.content,
              groupId: this.groupId,
              files,
            },
          }).then( () => {
            this.isLoading = false;
            this.success = true;
            this.content = "";
            this.files = [];
          })
        })
      } else {
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


    },
    uploadFile(file) {
      let fd = new FormData();
      fd.append('image', file);
      return axios({
        method: 'post',
        url: 'https://api.imgur.com/3/image',
        headers: {'Authorization': 'Client-ID c85df53f63d7525'},
        data: fd,
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

