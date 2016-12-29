<template>
	<header>
		<el-row class="header">
			<el-col :span="20" class="logo">{{$t('logo.logo')}}</el-col>
			<el-col :span="4" class="nav">
				<el-menu theme="dark" default-active="1" class="menu" mode="horizontal" @select="changeLanguage">
				  <el-menu-item index="1">{{$t('nav.home')}}</el-menu-item>
				  <el-submenu index="3" >
				    <template slot="title">{{$t('nav.language')}}</template>
				    <el-menu-item index="zh">{{$t('nav.zh')}}</el-menu-item>
				    <el-menu-item index="en">{{$t('nav.en')}}</el-menu-item>
				    <el-menu-item index="fr">{{$t('nav.fr')}}</el-menu-item>
				  </el-submenu>
				</el-menu>
			</el-col>
		</el-row>
	</header>
</template>
<script>
export default {
	name:'top',
	methods: {
  		changeLanguage(key, keyPath) {
  			this.$store.commit('changeLanguage', key);
    		console.log(key);
		}
	}
}
</script>
<style lang="less">
@import '../styles/public.less';
.header{
	height: 60px;
	background-color: @hearderBg;
	.logo{
		color: @white;
		height: 60px;
		line-height: 60px;
	}
	.nav{
		.menu{
			border-radius: 0px;
		}
	}
	
}
</style>