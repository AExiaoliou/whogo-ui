<template>
  <header class="Header">
    <div class="Header-item">
      <div class="Header-link">
        <i class="big-alittle clickable" :class="$store.state.app.isSideCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="sideCollapse"></i>
      </div>
    </div>
    <div class="Header-item" style="margin-left:20px">
      <router-link class="Header-link" to="/empty" >主页</router-link>
    </div>
    <div class="Header-item" style="flex:auto; margin-left:20px">
      <el-button>搜索占位</el-button>
    </div>
    <div class="Heder-item" style="margin-right: 20px">
      <el-button>主题占位</el-button>
    </div>
    <div class="Heder-item" style="margin-right: 20px">
      <el-popover class="Header-link"
        placement="bottom"
        :title="$t('nav.switch')"
        trigger="click"
        offset="20">
        <div>
          <div class="dropdown-divider" />
          <span class="dropdown-item" @click="changeLang('zh_cn')">中文</span>
          <div class="dropdown-divider" />
          <span class="dropdown-item" @click="changeLang('en_us')">English</span>
        </div>
        <i slot="reference" class="el-icon-fork-spoon clickable" />
      </el-popover>
    </div>
    <el-popover>
      <div slot="reference" class="Header-item user-pop clickable">
        <img src="@/assets/face.png" alt="" height="20" width="20" class="avatar-user mr10 big-alittle"/>
        <i class="el-icon-caret-bottom Header-link"/>
      </div>
      <div>
        <div class="dropdown-divider" />
        <span class="dropdown-item">登出</span>
      </div>
    </el-popover>
  </header>
</template>

<script>
export default {
  name: 'nav-bar',
  methods: {
    // 更新侧边栏折叠状态
    sideCollapse () {
      this.$store.commit('sideCollapse')
    },
    changeLang (lang) {
      console.log(lang)
      this.$i18n.locale = lang
    }
  },
  data () {
    return {
      // translationVisable: false
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
  padding: 5px 16px;
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
.transltion-pop-item {
  width: 100%;
  padding: 10px;
  text-align: center;
  border-top: solid 1px #e6e6e6;
  transition: background-color .5s;
  pointer-events: all;
  cursor: pointer;
  background-color: white;
}
.transltion-pop-item:hover {
  background-color: aqua;
}
.big-alittle {
  transform: scale(1.3);
}
.user-pop:hover > i {
  color: rgba(255, 255, 255, 0.7);
}
.dropdown-divider {
  border-top: 1px solid #e1e4e8;
  display: block;
  height: 0;
  margin: 8px 0;
}
.dropdown-item {
  color: #24292e;
  display: block;
  overflow: hidden;
  padding: 4px 8px 4px 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color .5s;
}
.dropdown-item:hover {
  background-color: aqua;
}
</style>
