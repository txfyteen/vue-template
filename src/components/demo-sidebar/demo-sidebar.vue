<template>
  <aside ref="sidebar" @mouseenter="sidebarMouseenter()" @mouseleave="sidebarMouseleave()">
    <ul class="nav">
      <li v-for = "first in menu" :class="{hover:first.showSecond}" @mouseenter="listMouseenter(first, $event)" @mouseleave.stop="listMouseleave(first, $event)">
        <router-link :to="first.link">{{first.name}}</router-link>
        <ul class="second-wrap" :class = "{active: first.showSecond}" v-show="first.children" @mouseenter="mouseenterSub()" @mouseleave="mouselearveSub()">
          <li v-for = "second in first.children">
            <router-link :to="second.link">{{second.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'demo-sidebar',
  props: {
    menu: {
      type: Array,
      require: true,
      default: function() {
        return [];
      }
    }
  },
  data () {
    return {
      pOne: {x: 0, y: 0}, // 三角形第一个点,子菜单左上角
      pTwo: {x: 0, y: 0}, // 三角形第二个点，子菜单左下角
      pThree: {x: 0, y: 0}, // 鼠标上次坐标，也是三角形的第三个点，跟着鼠标的移动而变化
      timer: '', // 定时器
      mouseInSub: false, // 鼠标是否在子菜单中
      mouseTrack: [], // 鼠标移动时docuemnt上的坐标
      currMousePos: {x: 0, y: 0} // 鼠标当前坐标
    };
  },
  mounted() {
    var sidebarPosition = this.$refs.sidebar.getBoundingClientRect();
    this.pOne = {
      x: sidebarPosition.right,
      y: sidebarPosition.top
    };
    this.pTwo = {
      x: sidebarPosition.right,
      y: sidebarPosition.bottom
    };
  },
  methods: {
    sidebarMouseenter() {
      document.addEventListener('mousemove', this.move, false);
    },
    sidebarMouseleave() {
      this.menu.forEach((v) => {
        v.showSecond = false;
      });
      document.removeEventListener('mousemove', this.move, false);
    },
    listMouseenter(item, $event) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.needDelay()) {
        this.timer = setTimeout(() => {
          if (this.mouseInSub) {
            return;
          }
          this.menu.forEach((v) => {
            v.showSecond = false;
          });
          item.showSecond = true;
          this.timer = null;
        }, 300);
      } else {
        this.menu.forEach((v) => {
          v.showSecond = false;
        });
        item.showSecond = true;
        this.timer = null;
      }
    },
    listMouseleave(item, $event) {

    },
    mouseenterSub() {
      this.mouseInSub = true;
    },
    mouselearveSub() {
      this.mouseInSub = false;
    },
    move(e) {
      this.mouseTrack.push({
        x: e.clientX,
        y: e.clientY
      });
      if (this.mouseTrack.length > 3) {
        this.mouseTrack.shift();
      }
      this.currMousePos = this.mouseTrack[this.mouseTrack.length - 1];
      this.pThree = this.mouseTrack[this.mouseTrack.length - 2];
    },
    vector(a, b) {
      return {
        x: b.x - a.x,
        y: b.y - a.y
      };
    },
    vectorProduct(v1, v2) {
      return v1.x * v2.y - v2.x * v1.y;
    },
    isPointInTrangle(p, a, b, c) {
      let pa = this.vector(p, a);
      let pb = this.vector(p, b);
      let pc = this.vector(p, c);

      let t1 = this.vectorProduct(pa, pb);
      let t2 = this.vectorProduct(pb, pc);
      let t3 = this.vectorProduct(pc, pa);

      return this.sameSign(t1, t2) && this.sameSign(t2, t3);
    },
    sameSign(a, b) {
      return (a ^ b) >= 0;
    },
    needDelay() {
      return this.isPointInTrangle(this.currMousePos, this.pOne, this.pTwo, this.pThree);
    }
  }
};
</script>

<style lang="scss" scoped>
aside{
  position: absolute;
  top: 66px;
  bottom: 0;
  left: 0;
  width: 186px;
  background: #453F3F;
  z-index: 99;
}
.nav{
  >li{
    height: 48px;
    &.hover{
      background: #574E4F;
    }
    >a{
      height: 48px;
      line-height: 48px;
      text-align: center;
      display: inline-block;
      width: 100%;
    }
  }
}
.second-wrap{
  position:absolute;
  left: 186px;
  top: 0;
  bottom: 0;
  width: 180px;
  background: #574E4F;
  display: none;
  &.active{
    display: block;
  }
  li{
    height: 40px;
    a{
      height: 40px;
      line-height: 40px;
      text-align: center;
      display: inline-block;
      width: 100%;
      &:hover{
        color: #FC5E54;
      }
    }
  }
}
</style>
