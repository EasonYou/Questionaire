<template>
	<div id="edict">
		<div class="title">
			<input type="text" :value="allQue[getIndex()].title" v-model="allQue[getIndex()].title">
		</div>
		<div>
			<div v-for="value in allQue[getIndex()].questions" class="mains">
				<input v-if="value.type!==2" class="subtitle" type="text" :value="value.subtitle" v-model="value.subtitle">
				<ul>
					<li v-for="choose in value.choose">
						<h4 v-if="value.type===2">请在下面输入问题描述</h4>
						<input v-if="value.type===1" class="cb" type="checkbox" disabled="true" :value="choose" v-model="value.result" >
						<input v-if="value.type===0" class="ra" type="radio" disabled="true" :value="choose" v-model="value.result" >
						<textarea v-if="value.type===2" class="iptx" type="text" :value="choose" v-model="choose"></textarea>
						<input v-if="value.type!==2" class="tx" type="text"  :value="choose" v-model="choose">
						<div>
							<a v-if="value.type!==2" @click="delOpt($index,value.choose)" >删除</a>
						</div>
					</li>
				</ul>
			<div class="ope">	
				<a @click="newOpt(value.choose)" v-if="value.type!==2">新增</a>
				<a @click="delQue($index,allQue[getIndex()].questions)">del</a>
				<a @click="copy(value,allQue[getIndex()].questions)">复用</a>
				<a v-if="$index!==0" @click="shiftUp($index,allQue[getIndex()].questions)">上移</a>
				<a v-if="$index!==allQue[getIndex()].questions.length-1" @click="shiftDown($index,allQue[getIndex()].questions)">下移</a>
			</div>
			</div>
		</div>
		<div class="newque">
			<div class="new" @click="isShow()">新增问题</div>
			<div class="quetype">
				<div @click="single(allQue[getIndex()])">单选</div>
				<div @click="mutiple(allQue[getIndex()])">多选</div>
				<div @click="answer(allQue[getIndex()])">简答</div>
			</div>
		</div>
		<div class="selecttime">
			<div>截止时间: <input id="time" type="text" v-model="allQue[getIndex()].chooseTime" :value="allQue[getIndex()].endTime" @click="calendar()"></div>
			<div id="calendar"></div>
		</div>
		<div class="saverelea">
			<button @click="saverelease(false,allQue[getIndex()])" v-link="{path:'home'}">保存问卷</button>
			<button @click="saverelease(true,allQue[getIndex()])"  v-link="{path:'home'}">发布问卷</button>
		</div>
	</div>	

	<div class="shade" @click="hideCal()"></div>
</template>

<script>
	import { shiftUp,shiftDown,hideCal,calendar,isShow,single,mutiple,answer,newOpt,newQue,delOpt,delQue,copy,sortBy,saverelease } from '../vuex/actions';
  	import { show,allQue,Que } from '../vuex/getters';
  	import store from '../vuex/store'
  	import Calendar from '../../static/calendar.js'
	export default{
		store,
		vuex:{
			actions:{
				shiftUp,
				shiftDown,
				hideCal,
				calendar,
				isShow,
				single,
				mutiple,
				answer,
				newOpt,
				delOpt,
				delQue,
				copy,
				saverelease
			},
			getters:{
				show,
				allQue,
				Que
			}
		},
		methods:{
			getIndex(){
				return this.$route.query.que
			},
			calendar(){
				(Calendar.init({
				append:document.querySelector('#calendar'),
				}))();
			}
		}

	}
	
</script>
<style lang="scss" scoped>
	body{
		width: 100%;
		height: 100%;
	}
	input{
		border: 0;
	}
	#edict{
		width: 60%;
		margin: 80px auto;	
		padding: 30px 100px;
		box-shadow:0px 0px 8px 0px #aaaaaa;
		transition:all 0.2s;
		.title{
			width: 100%;
			height: 120px;
			text-align: center;
			margin: 0 auto;
			transition:all 0.2s;
			color: #686868;
			input{
				box-shadow:0px 0px 3px 0px #aaaaaa;
				text-align: center;
				height: 50px;
				width: 60%;
				margin: 35px auto;
				font-size: 35px;
				font-weight: bold;
				color:#686868;
			}
		}
		.title:hover{
			background-color: #f8fbfb;
		}
		.newque{
			border: 1px solid #aeaeae;
			height: 70px;
			overflow: hidden;
			transition:all 0.2s;
			margin-top: 50px;
			.new{
				display: inline-block;
				text-align: center;
				font-size: 30px;
				width: 100%;
				background-color: #ededed;
				color: #686868;
				cursor: pointer;
				height: 70px;
				line-height: 70px;
				transition:all 0.2s;
			}
			.new:hover{
				background-color: #6ca8a8;
				color: #fff;
			}
			.quetype{
				display: inline-block;
				width: 100%;
				text-align: center;
				background-color: #f6f6f6;
				border: 1px solid #d5d5d5;
				padding: 20px 0;
				div{
					transition:all 0.2s;
					border-radius: 3px;
					display: inline-block;
					text-align: center;
					width: 10%;
					height: 30px;
					background-color: #aeaeae;
					line-height: 30px;
					color: #fff;
					margin-left: 1%;
					cursor: pointer;
				}
				div:hover{
					transition:all 0.2s;
					background-color: #6ca8a8;
				}
			}
		}
		
		.selecttime{
			position: relative;
			padding: 20px 0;
			margin: 20px 0;
			border-top: 1px solid #aeaeae;
			font-size: 20px;
			font-weight: bold;
			display: inline-block;
			text-align: center;
			width: 100%;
			color: #686868;
			#calendar{
				position: absolute;
				top: -530px;
				left: 50%;
				transform: translate(-50%);
			}
			input{
				color: #686868;
				width: 150px;
				height: 25px;
				font-size: 20px;
				box-shadow:0px 0px 3px 0px #aaaaaa;
				text-align: center;
			}	
		}
		.saverelea{
			display: inline-block;
			width: 100%;
			text-align: center;
			button{
				background-color: #aeaeae;
				border: 0;
				width: 100px;
				height: 30px;
				color: #fff;
				border-radius: 3px;
				transition:all 0.2s;
				cursor: pointer;
			}
			button:hover{
				background-color: #6ca8a8;
			}
		}
		div{
			.mains{
				position: relative;
				padding: 50px 20px;
				transition:all 0.2s;
				.subtitle{
					font-size: 25px;
					padding-left: 10px;
					margin-left: 28px;
					box-shadow:0px 0px 3px 0px #dfdfdf;
					color: #686868;
				}
				.ope{
					position: absolute;
					right: 22%;
					bottom: 10px;
					a{
						cursor: pointer;
						color: #9e9e9e;
					}
					a:hover{
						color: #6ca8a8;
					}
				}
				ul{
					li{
						div{
							width: 15%;
							display: inline-block;
							a{
								margin-left: 30px;
								color: #aeaeae;
								cursor: pointer;
							}
							a:hover{
								color: #6ca8a8;
							}

						}
						.ra,.cb{
							vertical-align: middle;
						}
						.tx{
							width: 75%;
							height: 25px;
							font-size: 15px;
							line-height: 30px;
							margin-left: 10px;
							margin-top: 15px;
							box-shadow:0px 0px 3px 0px #dfdfdf;
							padding-left: 10px;
							color: #686868;
						}
						h4{
							margin-bottom: 20px;
							font-size: 22px;
							font-weight: normal;
						}
						.iptx{
							font-size: 18px;
							font-family: "微软雅黑";
							width: 100%;
							height: 100px;
						}
					}
				}
			}
			.mains:hover{
				background-color: #f8fbfb;
			}
		}
	}
	.shade{
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #000;
		opacity: 0.1;
		display: none;
	}

</style>