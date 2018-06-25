<template>
  <strong>
    <p>Partagez ce lien avec vos amis !</p>
    <b-link :href="'http://confessionnal.ouras.be/#/confessionnal/' + groupId">
      http://confessionnal.ouras.be/#/confessionnal/{{ groupId }}
    </b-link>
  </strong>
</template>

<script>
export default {
  name: 'Share',
  props: {
    groupId: {
      type: String,
      required: true,
    }
  }
}
</script>
