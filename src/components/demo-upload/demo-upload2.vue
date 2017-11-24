<template>
  <div class="upload2" v-cloak>
    {{data | currency}}
  </div>
</template>

<script>
export default {
  name: 'component',
  data () {
    return {
      data: 3000
    };
  },
  filters: {
    currency(v) {
      return v.toString().replace(/\d{1,3}(?=(\d{3})+(?:\.\d{1,2})?$)/g, '$&,');
    }
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>

</style>
