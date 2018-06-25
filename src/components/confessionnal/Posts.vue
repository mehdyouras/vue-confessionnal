<template>
  <b-list-group 
    flush
    class="d-flex flex-column-reverse"
  >
    <b-list-group-item 
      v-for="(post, index) in posts"
      :key="post.id"
    >
      <div class="d-flex align-items-center">
        <p>
          <b-badge 
            class="mr-4"
            variant="primary"
          >
            #{{ index + 1 }}
          </b-badge>
          {{ post.content }}
        </p>
      </div>
      <div>
        <b-img 
          v-for="image in post.files"
          :key="image.id"
          :src="image.url"
          fluid
          alt="SkuSku"
        />
      </div>
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
  },
}
</script>
