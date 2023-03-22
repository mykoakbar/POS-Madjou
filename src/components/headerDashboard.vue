<template>
    <div class="headerDashboard my-3">
        <div class="card-header">
            <div class="body">
              <h3 style="margin: 0;">Hallo, {{username}} 👋</h3>
            </div>
            <div class="body">
              <div class="icon-search">
                <b-icon icon="search"></b-icon>
              </div>
              <div class="search mx-2">
                <b-form-input class="input-search" type="text" placeholder="Search"></b-form-input>
              </div>
              <div class="notif mx-2">
                <img src="assets/icon-notification.svg" alt="">
              </div>
              <div class="mx-2">
                <img class="avatar" src="dummy-pp.png" alt="">
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'headerDashboard',
    data(){
      return{
        username: localStorage.getItem("username")
  }
},
  }
</script>

<style>
.headerDashboard{
  padding: 0 20px 0 20px;
  width: 100%;
}
.card-header{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 74px;
  border-radius: 15px !important;
  --bs-card-border-color: none !important;
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.15);
}
.body{
  display: flex;
  align-self: center;
  padding: 0 30px 0 30px;
}
.input-search{
  background: rgba(124, 124, 124, 0.08) !important;
  border-radius: 6px !important;
  border: none !important;
  padding: 0.375rem 2.75rem !important;
}
.icon-search{
  position: relative;
  top: 7px;
  width: 5%;
  left: 43px;
}
.avatar{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.notif{
  position: relative;
  top: 7px;
  width: 5%;
}
</style>