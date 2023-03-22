<template>
  <div class="dashboard">
    <sidebarAdmin  />
    <div style="padding-left: 300px;">
      <headerDashboard />
    </div>
  </div>
</template>

<script>
import headerDashboard from '@/components/headerDashboard.vue'
import sidebarAdmin from '@/components/sidebarAdmin.vue'

export default {
  name: "DashboardView",
  components: {
    headerDashboard,
    sidebarAdmin
  }
}
</script>

<style>

</style>
