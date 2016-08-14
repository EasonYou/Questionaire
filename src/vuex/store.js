import Vue from 'vue'
import Vuex from 'Vuex'
import Calendar from '../../static/calendar.js'
Vue.use(Vuex)

const state = {
	isShow:false,
	calendarFlag:true,
	allData:{
		user:'wade',
		password:'123456',
		allQue:[
			{
				QueIndex:-1,
				title:'在这里输入sss题目',
				questions:[
					{
					subtitle:"lastname",
					type:0,
					choose:['选项1','wade','james'],
					result:[],
					saveResult:['项1','wade','james','选项1','wade'],
					present:[]
				}
				],
				chooseTime:'2016-7-29',
				endTime:'2016-8-29',
				status:0
			},
			{
				QueIndex:-1,
				title:'在这里输入题目',
				chooseTime:'2016-7-29',
				endTime:'2016-8-29',
				status:1,
				questions:[
					{
					subtitle:"lastname",
					type:0,
					choose:['选项1','wade','james'],
					result:[],
					saveResult:['项1','wade','james','选项1','wade'],
					present:[]
				},
				{
					subtitle:"team",
					type:1,
					choose:['选项2','heat','bull'],
					result:[],
					saveResult:['选项2','heat','bull','选项2','heat','bull'],
					present:[]
				},
				{
					subtitle:"简答题",
					type:2,
					choose:['aaaaaaab'],
					result:[],
					saveResult:['wade','james'],
					present:[]
				}
				]
				
			}
		]
	}
}

const mutations = {
	IS_SHOW(state){
		state.isShow=!state.isShow;
		if(state.isShow){
			document.getElementsByClassName("newque")[0].style.height=140+'px';
		}else{
			document.getElementsByClassName("newque")[0].style.height=null;
		}
		
	},
	SINGLE(state,Que){
		state.isShow=false;
		document.getElementsByClassName("newque")[0].style.height=null;
		let newQue={
					subtitle:"在这输入题目",
					type:0,
					choose:['选项1'],
					result:[],
					saveResult:[],
					present:[]
				};
		Que.questions.push(newQue);
		state.isShow=false;
	},
	MUTIPLE(state,Que){
		state.isShow=false;
		document.getElementsByClassName("newque")[0].style.height=null;
		let newQue={
					subtitle:"在这输入题目",
					type:1,
					choose:['选项1'],
					result:[],
					saveResult:[],
					present:[]
				};
		Que.questions.push(newQue);
		state.isShow=false;
	},
	ANSWER(state,Que){
		state.isShow=false;
		document.getElementsByClassName("newque")[0].style.height=null;
		let newQue={
					subtitle:"请在下面输入问题描述",
					type:2,
					choose:[''],
					result:[],
					saveResult:[],
					present:[]
				};
		Que.questions.push(newQue);
		state.isShow=false;
	},
	NEW_OPT(state,opt){
		console.log(opt)
		let newOpt="选项"+(opt.length+1);
			opt.push(newOpt);
	},
	DEL_OPT(state,index,opt){
		console.log(opt);
		opt.splice(index,1);
	},
	DEL_QUE(state,index,Que){
		console.log(Que);
		Que.splice(index,1);
	},
	COPY(state,Que,target){
		console.log(target);
		function clone(cloneQue){
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
		let cloneQue=clone(Que);
		target.push(cloneQue);
	},
	SAVE_RELEASE(state,flag,Que){
		if(flag){
					Que.status=1;
					Que.endTime=Que.chooseTime;
				}else{
					Que.status=0;
					Que.endTime=Que.chooseTime;
				}
	},
	INIT(state){
		console.log('a');
		for(let i=0;i<state.allData.allQue.length;i++){
			if(state.allData.allQue[i].status===-1){
				state.allData.allQue.splice(i,1);
			}	
		}
		let newQ={
				QueIndex:-1,
				title:'在这里输入题目',
				questions:[],
				chooseTime:'',
				endTime:'',
				status:-1
			}
		state.allData.allQue.push(newQ);
	},
	SUBMIT(state,Que){
		for(let i=0;i<Que.length;i++){
			if(Que[i].result.length!==0){
				if((typeof Que[i].result)==='object'){
					for(var choose in Que[i].result){
						Que[i].saveResult.push(Que[i].result[choose]);
					}
					Que[i].result=[];
				}else{
			Que[i].saveResult.push(Que[i].result);
			Que[i].result=[];
			}
			}
		}
	},
	CALENDAR(state){
			if(document.querySelector('#calendar').innerHTML!==null){
			Calendar.init({
				append:document.querySelector('#calendar'),
				})
			}
			document.getElementById('calendar').style.display='none';
			document.getElementById('calendar').style.display='block';
			document.getElementById('calendar').style.zIndex=1111;
			document.getElementsByClassName('shade')[0].style.display='block';
	},
	HIDE_CAL(state){
		document.getElementsByClassName('shade')[0].style.display='none';
		document.getElementById('calendar').style.display='none';
	},
	FORM(state,Que){
		var questions=Que.questions;
		var count=0;
		var array=[];
		for(let i=0;i<questions.length;i++){
			if(questions[i].type===0||questions[i].type===1){
				var arr=[];
				for(let j=0;j<questions[i].choose.length;j++){
					var buff={
						value:0,name:questions[i].choose[j]
					}
					for(let k=0;k<questions[i].saveResult.length;k++){
					if(questions[i].choose[j]===questions[i].saveResult[k]){
							buff.value+=1;
						}
					}
					arr.push(buff);
					
				}
				array.push(arr);
			}
		}
		console.log(array);
	setTimeout(function(){
		var dom=document.getElementsByClassName('chart');
		for(let i=0;i<dom.length;i++){
			chart(array[i],dom[i]);
		}
		
	},100);
	
	function chart(data,dom){
	var echarts = require('echarts');
	
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(dom);
	// 绘制图表
	var option = {

    title: {
        text: '数据图表',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#686868'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name:'',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:data.sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: '#00'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#aeaeae'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#df8927',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

myChart.setOption(option);
}

	},
	SHIFT_UP(state,index,allQue){
		function swapItems(arr, index1, index2) {
        arr[index1] = arr.splice(index2, 1, arr[index1])[0];
        return arr;
    }

    function upRecord(arr, $index) {
        if($index == 0) {
            return;
        }
        swapItems(arr, $index, $index - 1);
    }
    upRecord(allQue,index);
	},
	SHIFT_DOWN(state,index,allQue){
	function swapItems(arr, index1, index2) {
        arr[index1] = arr.splice(index2, 1, arr[index1])[0];
        return arr;
    }

    function downRecord(arr, $index) {
        if($index == arr.length -1) {
            return;
        }
        swapItems(arr, $index, $index + 1);
    }
    downRecord(allQue,index);


	}
}

export default new Vuex.Store({
	state,
	mutations
})