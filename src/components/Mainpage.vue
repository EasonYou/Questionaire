<template>
<div id="containt">
	<div class="operate">
	<div>
		<h3>标题</h3>
	</div>
	<div>
		<h3>时间</h3>
	</div>
	<div>
		<h3>状态</h3>
	</div>
	<div>
		<h3>操作</h3>
		<span>
		<a @click="init" v-link="{path:'new',query:{ que:allQue.length-1 }}" >新建</a>
		</span>
	</div>
		
	</div>
	<div class="all" v-if="allQue.length" class="questionaires">
		<div v-for="value in allQue" v-if="value.status!==-1">
			<div>
				<h4>{{ value.title }}</h3>
			</div>
			<div>
				<h4>{{ value.endTime }}</h4>
			</div>
			<div v-if="value.status===0">
				<h4>状态：未发布</h4>
			</div>
			<div  v-if="value.status===1">
				<h4>状态：已发布</h4>
			</div>
			<div>
				<span class="first" v-if="value.status===0">
					<a @click="delQue($index,allQue)">删除问卷</a>
				</span>
				<span  v-if="value.status===0">
					<a v-link="{path:'edict',query:{ que:$index }}" @click="edict($index)">编辑</a>
				</span>
				<span class="first" v-if="value.status===1">
					<a v-link="{path:'fillin',query:{ fill:$index }}">填写问卷</a>
				</span>
				<span v-if="value.status===1">
				<a v-link="{path:'check',query:{ check:$index }}" @click="form(value)">查看数据</a>
				</span>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import { show,allQue,Que } from '../vuex/getters';
	import { init,delQue,form } from '../vuex/actions';
	import store from '../vuex/store'
	export default{
		store,
		vuex:{
			actions:{
				init,
				delQue,
				form
			},
			getters:{
				allQue,
			}
		},
		methods:{
		}
	}
</script>
<style lang="scss" scoped>
	#containt{
		min-width: 1000px;
		width: 60%;
		margin: 0 auto;
		padding: 30px 100px;
		box-shadow:0px 0px 8px 0px #aaaaaa;
		margin-top: 80px;
		.operate{
			width:100%;
			height:50px;
			padding: 15px 0;
			div{
				width:25%;
				float:left;
				position: relative;
				h3{
					line-height: 30px;
					color: #595959;
					text-align: center;
				}
			}
			div:last-child {
					span{
						position: relative;
						top: 0;
						right: -50px;
					}
					h3{
						float: left;
						position: relative;
						top: 0;
						right: -27px;
					}
				}

			span{
				display: inline-block;
				width: 40%;
				height: 30px;
				background-color: #aeaeae;
				margin-left: 15px;
				border-radius: 3px;
				transition:all 0.2s;
				a{
					font-size: 16px;
					font-weight: bold;
					color: #fff;
					width: 100%;
					line-height: 30px;
					display: inline-block;
					text-decoration: none;
					text-align: center;
				}
			}
			span:hover{
				background-color: #6ca8a8;
			}
		}
		.all{
			width:100%;
			div{
				position: relative;
				display: inline-block;
				width:100%;
				height:80px;
				transition:all .3s;
				div{
					width:25%;
					float: left;
					h4{
						text-align:center;
						line-height: 80px;
						color: #686868;
					}
					span{
						width:40%;
						height:30px;
						background-color:#aeaeae;
						float: left;
						margin-left: 2%;
						margin-top: 25px;
						cursor: pointer;
						transition:all 0.2s;
						border-radius: 3px;
						a{
							line-height:30px;
							color:#fff;
							text-align:center;
							text-decoration:none;
							width:100%;
							display:inline-block
						}
					}
					span:hover{
						background-color: #6ca8a8;
					}
				}

			}
			div:hover{
				background-color: #f8fbfb;
			}
		}
	}

</style>