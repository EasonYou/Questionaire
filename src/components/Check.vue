<template>
<div id="containt">
	<div class="title">
		<h3>{{ allQue[getIndex()].title }}</h3>
	</div>
	<div v-for="value in allQue[getIndex()].questions" class="question">
		<div class="subtitle">
			<h4>{{ $index+1 }}.{{ value.subtitle }}</h4>
		</div>
		<div v-if="value.type===0||value.type===1" class='chart'></div>
		<div v-if="value.type===2" class="queTitle"><h4>{{ value.choose[0] }}</h4></div>
		<div v-if="value.type===2" v-for="result in value.saveResult" track-by="$index" class="textCon">
			<p>{{ result }}</p>
		</div>
	</div>
	<div class="time">
		<span>
			截止时间: {{ allQue[getIndex()].endTime }}
		</span>
	</div>
	<div class="back">
		<span>
			<a v-link="{path:'home'}">返回</a>
		</span>
	</div>
</div>
</template>

<script>
	import { form } from '../vuex/actions';
  	import { allQue,Que } from '../vuex/getters';
  	import store from '../vuex/store'
  	import Calendar from '../../static/calendar.js'
	export default{
		store,
		vuex:{
			actions:{
				form
			},
			getters:{
				allQue,
				Que
			}
		},
		onload:{
			wade(){
				console.log('a');
			}
		},
		methods:{
			getIndex(){
				return this.$route.query.check
			}
		}
	}
	var hash=parseInt(window.location.hash.split('=')[1]);
	if(hash){
	store._mutations.FORM(store.state,store.state.allData.allQue[hash]);
	}
</script>

<style lang="scss" scoped>
	#containt{
		box-shadow:0px 0px 8px 0px #aaaaaa;
		min-width: 600px;
		width: 70%;
		margin: 0 auto;
		margin-top: 50px;
		padding-top: 1px;
		margin-bottom: 100px;
		.question{
			width: 80%;
			margin: 0 auto;
			margin-top: 50px;
			padding: 80px;
			transition:all 0.2s;
		.textCon{
			p{
				word-break:break-all;
				color: #686868;
			}
			font-size: 15px;
			margin: 30px 60px;
			padding: 20px;
			box-shadow:0px 0px 3px 0px #aaaaaa;
		}
		.chart{
			width: 500px;
			height: 500px;
			margin: 0 auto
		}
		.subtitle{
			h4{
				color: #686868;
				font-size: 20px;
				margin-left: 80px;
			}
		}
		}
		.question:hover{
			background-color: #f8fbfb;
		}
		.queTitle{
			margin-left: 80px;
			margin-top: 20px;
			h4{
				color: #686868;
			}
		}
		.title{
			color: #686868;
			font-size: 20px;
			width: 90%;
			height: 60px;
			margin: 50px auto;
			transition:all 0.2s;
			h3{
				line-height: 60px;
				text-align: center;
				margin-top: 50px;
			}
		}
		.title:hover{
			background-color: #f8fbfb;
		}
		.time{
			width: 200px;
			margin: 0 auto;
			padding: 50px 0;
			span{
			font-size: 20px;
			font-weight: bold;
			display: inline-block;
			text-align: center;	
			color: #686868;
			}		
		}
		.back{
			padding-bottom: 50px;
			text-align: center;
			span{
				display: inline-block;
				width: 100px;
				height: 30px;
				background-color: #aeaeae;
				border-radius: 3px;
				transition:all 0.2s;
				a{
					color: #fff;
					text-decoration: none;
					text-align: center;
					line-height: 30px;
					width: 100%;
					display: inline-block;
				}
			}
			span:hover{
				background-color:#6ca8a8;
			}
		}
	}
</style>