<template>
	<div class="navbar">
	    <el-menu default-active="0" class="navbar-ul" @open="handleOpen" @click.native="" @close="handleClose">
	      <router-link to="/home/dashboard">
	      	<el-menu-item index="0"><i class="el-icon-menu"></i>{{$t('siderbar.dashboard')}}</el-menu-item>
	      </router-link>
	      <el-submenu index="1">
	        <template slot="title"><i class="el-icon-message"></i>{{$t('siderbar.main')}}</template>
	        <el-menu-item-group>
	          <template slot="title">{{$t('siderbar.orderDetails')}}</template>
	          <router-link to="/home/toBeConfirmed">
	          	<el-menu-item index="1-1">{{$t('siderbar.toBeConfirmed')}}</el-menu-item>
	          </router-link>
	          <el-menu-item index="1-2">{{$t('siderbar.confirmed')}}</el-menu-item>
	          <el-menu-item index="1-3">{{$t('siderbar.completed')}}</el-menu-item>
	        </el-menu-item-group>
	        <el-menu-item-group title="售后服务"><!-- 这里直接绑定会报错，暂时没研究 -->
	          <el-menu-item index="1-4">{{$t('siderbar.returning')}}</el-menu-item>
	          <el-menu-item index="1-5">{{$t('siderbar.returned')}}</el-menu-item>
	        </el-menu-item-group>
	        <el-submenu index="1-6">
	          <template slot="title">{{$t('siderbar.returnChange')}}</template>
	          <el-menu-item index="1-6-1">{{$t('siderbar.applyForAReturn')}}</el-menu-item>
	        </el-submenu>
	      </el-submenu>
	      <el-menu-item index="2"><i class="el-icon-time"></i>{{$t('siderbar.purview')}}</el-menu-item>
	      <el-menu-item index="3"><i class="el-icon-setting"></i>{{$t('siderbar.stting')}}</el-menu-item>
	    </el-menu>
	</div>
</template>
<script>
export default {
	name: 'navbar',
	methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      backDashboard(){
      	alert('ok')
      }
    }
}	
</script>
<style lang="less">
@import '../styles/public.less';

</style>