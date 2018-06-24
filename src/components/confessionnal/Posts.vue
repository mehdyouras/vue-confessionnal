<template>
  <b-list-group flush>
    <b-list-group-item 
      v-for="(post, index) in posts"
      :key="post.id"
      class="d-flex align-items-center"
    >
      <p>
        <b-badge 
          class="mr-4"
          variant="primary"
        >
          #{{ index + 1 }}
        </b-badge>
        {{ post.content }}
      </p>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>
