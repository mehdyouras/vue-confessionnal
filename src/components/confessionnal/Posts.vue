<template>
  <b-list-group 
    flush
    class="d-flex flex-column-reverse"
  >
    <b-list-group-item 
      v-for="(post, index) in posts"
      :key="post.id"
    >
      <div>
        <div class="mb-3">
          <b-badge 
            variant="primary"
          >
            #{{ index + 1 }}
          </b-badge>
          <b-badge
            variant="secondary"
          >
            {{ humanDate(post.createdAt) }}
          </b-badge>
        </div>
        <p>
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
  methods: {
    humanDate(timestamp, separator = ':') {
      let time = new Date(timestamp);

      let day = time.getDate();
      let month = time.getMonth() + 1;
      let year = time.getFullYear();

      if(day.toString().length == 1) day = '0' + day;
      if(month.toString().length == 1) month = '0' + month;

      let hours = time.getHours();
      let minutes = time.getMinutes();

      if(hours.toString().length == 1) hours = '0' + hours;
      if(minutes.toString().length == 1) minutes = '0' + minutes;

      
      return `${day}/${month}/${year} ${hours}${separator}${minutes}`;
    }
  }
}
</script>
