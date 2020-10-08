<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/login">
        <i class="nc-icon nc-circle-09"></i>
        <p>登入</p>
      </sidebar-link>
      <sidebar-link to="/register">
        <i class="nc-icon nc-badge"></i>
        <p>註冊</p>
      </sidebar-link>
      <sidebar-link to="/about">
        <i class="nc-icon nc-atom"></i>
        <p>關於我們</p>
      </sidebar-link>
      <sidebar-link to="/admin/askQuestionsChooseCompany">
        <i class="nc-icon nc-bulb-63"></i>
        <p>提出查詢</p>
      </sidebar-link>
      <sidebar-link to="/admin/recordsChooseCompany">
        <i class="nc-icon nc-notes"></i>
        <p>歷史詢問</p>
      </sidebar-link>
      
      <sidebar-link to="/overview">
        <i style="vertical-align: none;" class="nc-icon nc-puzzle-10"></i>
        <p>統計資訊</p>
      </sidebar-link>


    </side-bar>
    <div class="main-panel">
      <dashboard-content @click="toggleSidebar"></dashboard-content>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      //TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>

<style>
.nav-link p {
  font-size: 15px;
  vertical-align: middle;
}

.nav-link i {
  vertical-align: none;
}
</style>
