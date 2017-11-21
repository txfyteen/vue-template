<template>
  <div>
    <el-checkbox-group
      v-model="checkedCities1"
      :min="1"
      :max="2">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'component',
  data () {
    return {
      checkedCities1: ['上海', '北京'],
      cities: ['上海', '北京', '广州', '深圳']
    };
  },
  methods: {
    change() {
      console.log(this.checkList);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
