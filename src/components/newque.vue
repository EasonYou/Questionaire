<template>
	<div>
		<input type="text" :value="containts.title" v-model="containts.title">
		<span>Checked names: {{ containts.title | json }}</span>
		<div>
			<div v-for="value in containts.questions" track-by="$index">
				<input type="text" :value="value.subtitle">
				<ul>
					<li v-for="choose in value.choose">
						<h4 v-if="value.type===2">{{ value.subtitle}}</h4>
						<input v-if="value.type===1" type="checkbox" disabled="true" :value="choose" v-model="value.result" >
						<input v-if="value.type===0" type="radio" disabled="true" :value="choose" v-model="value.result" >
						<input v-if="value.type===2" type="text" :value="choose" v-model="choose" v-model="value.result">
						<input v-if="value.type!==2" type="text"  :value="choose" v-model="choose">
						<a v-if="value.type!==2" @click="del($index,value.choose)">删除</a>
					</li>
				</ul> 
				<a @click="delQue($index)">del</a>
				<a @click="copy(value)">复用</a>
			<span>Checked names: {{ value.choose | json }}{{ $index | json }}</span>
			</div>
		</div>
		<div>
			<a @click="show()">新增问题</a>
			<div v-show="ok">
				<a @click="single">单选</a>
				<a @click="mutiple">多选</a>
				<a @click="answer">简答</a>
			</div>
		</div>
		<div>截止时间: <input type="text" :value="containts.endTime"></div>
		<div>
			<a @click="saverelease(false,containts.status)" v-link="'home'">保存问卷</a>
			<a @click="saverelease(true,containts.status)" v-link="'home'" >发布问卷</a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			let containt={
				title:'在这里输入题目',
				questions:[],
				releaseTime:'2016-7-29',
				endTime:'2016-8-29',
				status:-1
			}
			console.log($route)
			return {
				containts:containt,
				ok:false
			}
		},
		methods:{
			single(){
				console.log(this.containts.questions);
				let newQue={
					subtitle:"在这输入题目",
					type:0,
					choose:['选项1'],
					result:[]
				};
				this.containts.questions.push(newQue);
				this.ok=!this.ok;
			},
			mutiple(){
				console.log(this.containts.questions);
				let newQue={
					subtitle:"在这输入题目",
					type:1,
					choose:['选项1'],
					result:[]
				};
				this.containts.questions.push(newQue);
				this.ok=!this.ok;
			},
			answer(){
				console.log(this.containts.questions);
				let newQue={
					subtitle:"请在下面输入问题描述",
					type:2,
					choose:[''],
					result:[]
				};
				this.containts.questions.push(newQue);
				this.ok=!this.ok;
			},
			newOpt(opt){
				console.log(opt);
				let newOpt="选项"+(opt.length+1);
				opt.push(newOpt);
			},
			show(){
				this.ok=!this.ok;
			},
			del(index,choose){
				console.log(index);
				choose.splice(index,1);
			},
			delQue(index){
				console.log(index);
				this.containts.questions.splice(index,1);
			},
			saverelease(flag,status){
				if(flag){
					status=1;
				}else{
					status=0;
				}
				console.log(status);
			},
			copy(question){
				let cloneQue=this.clone(question);
				this.containts.questions.push(cloneQue);
			},
			clone(cloneQue){
				    return (function cloneObject(src) {
				    var result; //返回的复制后的结果。
				    if (typeof (src) === "object") {
				        //对象为日期对象时也直接赋值。
				        if (Object.prototype.toString.call(src) === "[object Date]") {
				            result = src;
				        } else {
				            //判断对象的类型是Array还是Object，结果类型更改。
				            result = (Object.prototype.toString.call(src) === "[object Array]") ? [] : {};
				            for (var i in src) {
				                if (src.hasOwnProperty(i)) { //排除继承属性
				                    if (typeof src[i] === "object") {
				                        result[i] = cloneObject(src[i]); //如果是对象，递归赋值
				                    } else {
				                        result[i] = src[i]; //数组直接赋值
				                    }
				            }
				        }
				    }
				    } else {
				        //对于原始类型直接赋值。
				        result = src;
				    }
				    return result;
				})(cloneQue);

			}
		}
	}
</script>
<style>
	input{
		border: 0;
	}
</style>