<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'Posts'
}
</script>
