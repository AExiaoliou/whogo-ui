<template>
  <header class="Header">
    <div class="Header-item">
      <div class="Header-link">
        <i :class="foldIcon" @click="sideCollapse"></i>
      </div>
    </div>
    <div class="Header-item" style="flex: auto">
      <a class="Header-link" href="/#" style="margin-left:20px">主页</a>
    </div>
    <div class="Heder-item" style="margin-right: 20px">
      <el-button>主题占位</el-button>
    </div>
    <div class="Heder-item" style="margin-right: 20px">
      <el-button>语言占位</el-button>
    </div>
    <div class="Header-item">
      <img src="@/assets/face.png" alt="" height="20" width="20" class="avatar-user"/>
    </div>
  </header>
</template>

<script>
export default {
  name: 'nav-bar',
  methods: {
    sideCollapse () {
      this.$store.commit('sideCollapse')
    }
  },
  computed: {
    foldIcon () {
      return this.$store.state.app.isSideCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    }
  }
}
</script>

<style scoped>
.Header,
.Header-item {
  display: flex;
  align-items: center;
}
.Header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 32;
  padding: 16px;
  height: 64px;
  font-size: 14px;
  line-height: 1.5;
  color: black;
  background-color: black;
  box-sizing: border-box;
}
.Header-item {
  margin-right: 16px;
  align-self: stretch;
}
.Header-link {
  font-weight: 600;
  color: white;
  white-space: nowrap;
}
</style>
