<template>
  <section>
    <log-in class="mb-4" />
    <sign-up class="mb-4" />
  </section>
</template>

<script>
import LogIn from '@/components/index/LogIn';
import SignUp from '@/components/index/SignUp';

export default {
  name: 'PageIndex',
  components: {
    LogIn,
    SignUp
  }
}
</script>
