<template>
  <section>
    <b-row>
      <b-col 
        cols="12"
        md="6"
      >
        <b-jumbotron
          :header="group.name"
          :lead="group.posts.length + ' confessions'"
        >
          <b-card class="mb-4">
            <share :group-id="group.id" />
          </b-card>
          <b-card header="<h3>Ajouter une confession</h3>">
            <add-post :group-id="group.id" />  
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
          class="mb-4"
        >
          <posts :posts="group.posts" />
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import Posts from '@/components/confessionnal/Posts';
import Share from '@/components/confessionnal/Share';
import AddPost from '@/components/confessionnal/AddPost';

import GROUP from '@/apollo/queries/group.gql';
import SUBSCRIPTION_POSTS from '@/apollo/subscriptions/posts.gql'

export default {
  name: 'PageConfessionnal',
  components: {
    Posts,
    Share,
    AddPost
  },
  data() {
    return {
      group: {
        id: "",
        posts: [],
      },
    }
  },
  computed: {
    groupId() {
      return this.$route.params.id;
    }
  },
  apollo: {
    group: {
      query: GROUP,
      subscribeToMore: {
        document: SUBSCRIPTION_POSTS,
        variables() {
          return {
            groupId: this.groupId,
          }
        },
        updateQuery: (previousResult, { subscriptionData }) => {
          let newResult = JSON.parse(JSON.stringify(previousResult));
          let newPosts = [...previousResult.group.posts, subscriptionData.data.post.node];

          newResult.group.posts = newPosts; 
          
          return newResult;
        },
      },
      variables() {
        return {
          id: this.groupId,
        }
      }
    }
  }
}
</script>
