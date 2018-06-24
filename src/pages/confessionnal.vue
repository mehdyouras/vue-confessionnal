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
            <strong>
              <p>Partagez ce lien avec vos amis !</p>
              <b-link>
                http://confessionnal.be/confessionnal/456
              </b-link>
            </strong>
          </b-card>
          <b-card header="<h3>Ajouter une confession</h3>">
            <b-form>
              <b-form-group 
                label="Votre confession"
                label-for="conf-content"
              >
                <b-form-textarea
                  id="conf-content"
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
          <b-list-group-item 
            v-for="i in 34"
            :key="i"
            class="d-flex align-items-center"
          >
            <p>
              <b-badge 
                class="mr-4"
                variant="primary"
              >
                #{{ i }}
              </b-badge>
              Cras justo odio {{ i }}
            </p>
          </b-list-group-item>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: 'PageConfessionnal'
}
</script>

<style>
.custom-file-input~.custom-file-label::after {
    content: "Parcourir";
}
</style>
