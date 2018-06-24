<template>
  <section>
    <b-row>
      <b-col 
        cols="12"
        md="6"
      >
        <b-jumbotron
          header="Dehaan"
          lead="34 confessions"
        >
          <b-card class="mb-4">
            <share />
          </b-card>
          <b-card header="<h3>Ajouter une confession</h3>">
            <add-post />  
          </b-card>
        </b-jumbotron>
      </b-col>
      <b-col
        cols="12"
        md="6"
      >
        <b-card 
          no-body 
          header="<strong>Les dernières confessions</strong>"
        >
          <posts />
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import Posts from '@/components/confessionnal/Posts';
import Share from '@/components/confessionnal/Share';
import AddPost from '@/components/confessionnal/AddPost';

export default {
  name: 'PageConfessionnal',
  components: {
    Posts,
    Share,
    AddPost
  }
}
</script>
