<template>
	<div id="fillin">
		<div class="title">
			<h2> {{ allQue[getIndex()].title }} </h2>
		</div>
		<div class="mains">
			<div v-for="value in allQue[getIndex()].questions" track-by="$index" class="ques">
				<h4>{{ value.subtitle }}</h4>
				<ul>
					<li v-for="choose in value.choose">
						<input class="cb" v-if="value.type===1" type="checkbox" :value="choose" v-model="value.result" >
						<input class="ra" v-if="value.type===0" type="radio" :value="choose" v-model="value.result" >
						<h4 v-if="value.type===2">{{ choose }}</h4>
						<textarea v-if="value.type===2" type="text" :value="value.result" v-model="value.result" v-model="value.result">
						</textarea>
						<span v-if="value.type!==2">{{ choose }}</span>	
					</li>
				</ul>
			</div>
		</div>
		<div class="time">截止时间: {{ allQue[getIndex()].endTime }}</div> 
		<div class="submit">
			<button  v-link="{path:'home'}" @click="submit(allQue[getIndex()].questions)">提交问卷</button>
		</div>
	</div>
</template>

<script>
	import { submit,saverelease } from '../vuex/actions';
  	import { show,allQue,Que } from '../vuex/getters';
  	import store from '../vuex/store'
	export default{
		store,
		vuex:{
			actions:{
				submit,
				saverelease
			},
			getters:{
				show,
				allQue,
				Que
			}
		},
		data(){
			let containt={
				title:'在这里输入题目',
				questions:[],
				releaseTime:'2016-7-29',
				endTime:'2016-8-29',
				status:-1
			}
			return {
				containts:containt,
				ok:false
			}
		},
		methods:{
			getIndex(){
				return this.$route.query.fill
			}
		}
	}


</script>
<style lang="scss" scoped>
	#fillin{
		min-width: 600px;
		width: 60%;
		padding: 30px 100px;
		margin: 80px auto;
		box-shadow:0px 0px 8px 0px #aaaaaa;
		.title{
			width: 100%;
			height: 120px;
			display: inline-block;
			text-align: center;
			margin-bottom: 20px;
			h2{
				line-height: 120px;
				font-size: 35px;
				color: #686868;
			}
		}
		.title:hover{
			background-color: #f8fbfb;
		}
		.mains{
			.ques{
				padding: 20px 60px;
				h4{
					font-size: 24px;
					color: #686868;
					line-height: 40px;
				}
				li{
					margin: 10px 0;
					span{
						font-size: 20px;
						padding-left: 10px;
						margin: 20px 0;
					}
					.cb,.ra{
						width: 20px;
						cursor: pointer;
					}
					textarea{
						width: 100%;
						height: 100px;
					}
				}
			}
			.ques:hover{
				background-color: #f8fbfb;
			}
		}
		
		.time{
			width: 100%;
			display: inline-block;
			text-align: center;
			font-size: 20px;
			font-weight: bold;
			color: #686868;
			margin:30px 0;	
		}
		.submit{
			width: 100%;
			display: inline-block;
			text-align: center;
			
			button{
				border:0;
				width: 100px;
				height: 30px;
				background-color: #aeaeae;
				color: #fff;
				border-radius: 3px;
				cursor: pointer;
				transition:all 0.2s;
			}
			button:hover{
				background-color: #6ca8a8;
			}
		}
	}
</style>