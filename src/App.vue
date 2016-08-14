<template>
	<header id="header">
	<ul>
		<li class="main-title">我的问卷</li>
		<li><a v-link="'/home'" class="home">questionaire</a></li>
		<li><a href="#" class="login">login</a></li>
		<li><a href="#" class="sign">sign</a></li>
	</ul>
	</header>
  	<router-view></router-view>
</template>
<script>

</script>
<style lang="scss" scoped>
/*导航栏*/
header{
	min-width:600px;
	height: 50px;
	width: 100%;
	background-color: #6ca8a8;
	position: relative;
	li{
	float: left;
	line-height: 50px;
	color: #fff;
	height: 50px;
	}
	a{
	text-decoration: none;
	color: #fff;
	height: 100%;
	display: block;
	}
	ul{
	height: 50px;
	}
	.main-title,.home,.login,.sign{
	position: absolute;
	}
	.main-title{
	width: 100%;
	text-align: center;
}
.home{
	display: inline-block;
	text-align: center;
	left: 10px;
	width: 120px;
	}
.login,.sign{
	width: 50px;
	text-align: center;	
}
.login{
	right: 10px;
}
.sign{
	right: 80px;
}
.sign:hover,.login:hover,.home:hover{
	color: #aeaeae;
	background-color: #fff;
}
}







</style>