<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/login">
        <i class="nc-icon nc-atom"></i>
        <p>登入</p>
      </sidebar-link>
      <sidebar-link to="/admin/about">
        <i class="nc-icon nc-app"></i>
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
      <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-light-3"></i>
        <p>大家都在問</p>
      </sidebar-link>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-app"></i>
        <p>統計資訊</p>
      </sidebar-link>


    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
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
      TopNavbar,
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
