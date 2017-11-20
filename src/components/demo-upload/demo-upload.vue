<template>
  <div class="home">
    <upload :options = "options"></upload>
  </div>
</template>

<script>
import Upload from 'base/upload/Upload';
export default {
  name: 'home',
  data() {
    return {
      options: {
        a: 1
      }
    };
  },
  components: {
    Upload
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home{
  height: 1000px;
}
</style>
