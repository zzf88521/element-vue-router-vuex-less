<template>
	<div class="home">
		<top></top>
		<el-row class="main">
			<el-col :span="4" class="navbar-wrap">
				<navbar></navbar>
			</el-col>
			<el-col :span="20" class="content">
				<router-view></router-view>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import top from '../components/top.vue'
import navbar from '../components/navbar.vue'
export default {
	components:{
		top,navbar
	},
	methods: {
	  
	}
}	
</script>
<style lang="less">
@import '../styles/public.less';
.home{
	width: 100%;
	height: 100%;
	.main{
		width: 100%;
		height: 100%;
		.navbar-wrap{
			height: 100%;
			.navbar{
				height: 100%;
				.navbar-ul{
					height: 100%;
				}
			}
		}
		.content{
			height: 100%;
		}
	}
}
</style>