<template>
	<div class="login">
		<div class="login-wrap" v-loading="loading" element-loading-text="正在登录中">
			<div class="title">
				<p>登录</p>
				<small>账号密码不为空即可</small>
			</div>
			<div class="login-box">
				<el-input v-model="username" placeholder="请输入用户名"></el-input>
				<el-input v-model="password" placeholder="请输入密码" type="password" @keyup.native.enter="login"></el-input>
				<el-button @click="login">登录</el-button>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:'login',
	data () {
	    return {
	      username: '',
	      password: '',
	      loading: false
	    }
  	},
  	methods:{
  		login(){
  			if(this.username == '' || this.password == ''){
  				this.$message({
		          message: '对不起，账号或密码有误！',
		          showClose: true,
		          type: 'error',
		          onClose: this.reload
		        })
  			}else{
  				const t = this;
  				t.loading = true;
  				setTimeout(function(){
  					t.$message({
			          message: '恭喜你，登录成功！',
			          showClose: true,
			          type: 'success'
			        })
			        t.$router.push('/home')
  				},2000);
  			}
  			
  		},
  		reload(){
  			window.location.reload();
  		}
  	}
}
</script>
<style lang="less">
@import '../styles/public.less';
.login{
	display: -ms-flexbox;
    display: flex;
	-ms-flex-pack: center;
    justify-content: center;
    ms-flex-align: center;
    align-items: center;
	width: 100%;
	height: 100%;
	background: url(../assets/login-bg.jpg) center;
	.login-wrap{
		width: 496px;
		height: 411px;
		background: url(../assets/login-wrap.png) center no-repeat;
	}
	.title{
		font-size: 22px;
		text-align: center;
		color: @white;
		margin-top: 80px;
		font-weight: 400;
		letter-spacing: 4px;
		small{
			font-size: 9px;
			letter-spacing: 0px;
		}
	}
	.login-box{
		width: 350px;
		margin: 40px auto;
		input{
			height: 48px;
			background-color: transparent;
			border-color: @white;
			color: @white;
			border-radius: 5px;
			margin-bottom: 20px;
			&:hover{
				border:solid 1px @mainColor;
			}
		}
		::-webkit-input-placeholder {
			color: @white;
		}
		button{
			width: 100%;
			height: 48px;
			font-size: 18px;
			background-color: @loginButtonBg;
			color: @white;
			border: none;
			transition: .3s all;
			&:hover{
				background-color: @loginButtonBgHover;
			}
		}
	}
}
</style>