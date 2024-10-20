<template>
  <el-aside width="88px">
    <div class="aside" :class="{ active: isAside }">
      <button class="openbtn" @click="asideopen"></button>
      <h1 class="logo">
        <router-link to="/dashboard">
          <span>HYUNDAI</span>
        </router-link>
      </h1>
      <el-menu
        :default-active="String(activeNav)"
        :class="'gnbact' + activeNav"
        :collapse="isCollapse"
      >
        <el-menu-item index="1">
          <router-link to="/dashboard">
            <router-link
              to="/dashboard"
              :class="{ on: activeNav + activeDepth == 31 }"
            >
              <i class="el-gnb1"></i>
              <span class="gnbtx">대시보드</span>
            </router-link>
          </router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <router-link
              to="/campaign"
              :class="{ on: activeNav + activeDepth == 21 }"
            >
              <i class="el-gnb2"></i>
              <span class="gnbtx">조회</span>
            </router-link>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <router-link
                to="/campaign"
                :class="{ on: activeNav + activeDepth == 21 }"
                >캠페인조회</router-link
              >
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link
                to="/package"
                :class="{ on: activeNav + activeDepth == 22 }"
                >패키지조회</router-link
              >
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <router-link
              to="/company"
              :class="{ on: activeNav + activeDepth == 31 }"
            >
              <i class="el-gnb3"></i>
              <span class="gnbtx">관리</span>
            </router-link>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">
              <router-link
                to="/company"
                :class="{ on: activeNav + activeDepth == 31 }"
                >회사관리</router-link
              >
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link
                to="/superdevice"
                :class="{ on: activeNav + activeDepth == 32 }"
                >디바이스관리</router-link
              >
            </el-menu-item>
            <el-menu-item index="3-3">
              <router-link
                to="/account"
                :class="{ on: activeNav + activeDepth == 33 }"
                >계정관리</router-link
              >
            </el-menu-item>
            <el-menu-item index="3-4">
              <router-link
                to="/group"
                :class="{ on: activeNav + activeDepth == 34 }"
                >그룹관리</router-link
              >
            </el-menu-item>
            <el-menu-item index="3-5">
              <router-link
                to="/device"
                :class="{ on: activeNav + activeDepth == 35 }"
                >디바이스관리</router-link
              >
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <div class="aside_foot">
        <p>(주)현대자동차<br />LMM단말기 모니터링</p>
        <div>고객센터 :<br />(승용) 080-600-6000<br />(상용) 080-200-6000</div>
        <address>
          © Copyright Hyundai<br />Mobility Co., Ltd<br />All Rights Reserved.
        </address>
      </div>
    </div>
  </el-aside>
</template>
<script>
export default {
  name: "Aside",
  data() {
    return {
      isCollapse: true,
      isAside: false
    };
  },
  computed: {
    activeNav() {
      return this.$route.meta.gnb;
    },
    activeDepth() {
      return this.$route.meta.depth;
    }
  },
  mounted: function() {},
  methods: {
    asideopen() {
      this.isAside = !this.isAside;
    }
  }
};
</script>
