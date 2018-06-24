<template>
  <strong>
    <p>Partagez ce lien avec vos amis !</p>
    <b-link>
      http://confessionnal.be/confessionnal/{{ groupId }}
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
