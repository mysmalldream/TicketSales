webpackJsonp([19],{1054:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-time"}),e._v(" 产品信息管理设置")]),e._v(" "),r("el-breadcrumb-item",[e._v("新增")])],1)],1),e._v(" "),r("div",{staticClass:"form-box"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"产品编号",prop:"id",rules:[{required:!0,message:"产品编号不能为空"}]}},[r("el-input",{attrs:{disabled:!0},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"票名",prop:"name",rules:[{required:!0,message:"票名不能为空"}]}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"所属景区",prop:"viewName",rules:[{required:!0,message:"所属景区不能为空"}]}},[r("el-select",{attrs:{placeholder:"请选择",disabled:!0},on:{change:e.handleChange1},model:{value:e.form.viewName,callback:function(t){e.$set(e.form,"viewName",t)},expression:"form.viewName"}},e._l(e.view,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"供应商",prop:"supplierName",rules:[{required:!0,message:"供应商不能为空"}]}},[r("el-select",{attrs:{placeholder:"请选择",disabled:!0},on:{change:e.handleChange2},model:{value:e.form.supplierName,callback:function(t){e.$set(e.form,"supplierName",t)},expression:"form.supplierName"}},e._l(e.supplier,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"结算价",prop:"endPrice",rules:[{required:!0,message:"结算价不能为空"}]}},[r("el-input",{attrs:{type:"number"},model:{value:e.form.endPrice,callback:function(t){e.$set(e.form,"endPrice",t)},expression:"form.endPrice"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"门市价",prop:"marketPrice",rules:[{required:!0,message:"门市价不能为空"}]}},[r("el-input",{attrs:{type:"number"},model:{value:e.form.marketPrice,callback:function(t){e.$set(e.form,"marketPrice",t)},expression:"form.marketPrice"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"是否销售",prop:"isSale"}},[r("el-switch",{attrs:{"on-text":"是","off-text":"否","on-color":"#13ce66","off-color":"#ff4949","on-value":"是","off-value":"否"},on:{change:e.switch1},model:{value:e.form.isSale,callback:function(t){e.$set(e.form,"isSale",t)},expression:"form.isSale"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"门票类型",prop:"type",rules:[{required:!0,message:"门票类型不能为空"}]}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChange3},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeList,function(e){return r("el-option",{key:e.id,attrs:{label:e,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"门票包含张数",prop:"num",rules:[{required:!0,message:"门票包含张数不能为空"}]}},[r("el-input",{attrs:{type:"number"},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num",t)},expression:"form.num"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"票型",prop:"ticketType",rules:[{required:!0,message:"票型不能为空"}]}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChange4},model:{value:e.form.ticketType,callback:function(t){e.$set(e.form,"ticketType",t)},expression:"form.ticketType"}},e._l(e.ticketType,function(e){return r("el-option",{key:e.name,attrs:{label:e.name,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"开始日期",prop:"startTime",rules:[{required:!0,message:"起止日期不能为空"}]}},[r("el-input",{attrs:{type:"date"},model:{value:e.form.startTime,callback:function(t){e.$set(e.form,"startTime",t)},expression:"form.startTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"结束日期",prop:"endTime",rules:[{required:!0,message:"起止日期不能为空"}]}},[r("el-input",{attrs:{type:"date"},model:{value:e.form.endTime,callback:function(t){e.$set(e.form,"endTime",t)},expression:"form.endTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"当天可售数量",prop:"dailySale",rules:[{required:!0,message:"当天可售数量不能为空"}]}},[r("el-input",{attrs:{type:"number"},model:{value:e.form.dailySale,callback:function(t){e.$set(e.form,"dailySale",t)},expression:"form.dailySale"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"提前购买(小时)",prop:"orderTime",rules:[{required:!0,message:"提前购买小时数不能为空"}]}},[r("el-input",{attrs:{type:"number"},model:{value:e.form.orderTime,callback:function(t){e.$set(e.form,"orderTime",t)},expression:"form.orderTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"入园方式",prop:"method",rules:[{required:!0,message:"入园方式不能为空"}]}},[r("el-input",{model:{value:e.form.method,callback:function(t){e.$set(e.form,"method",t)},expression:"form.method"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"是否可退",prop:"isCancel"}},[r("el-switch",{attrs:{"on-text":"是","off-text":"否","on-color":"#13ce66","off-color":"#ff4949","on-value":"是","off-value":"否"},on:{change:e.switch2},model:{value:e.form.isCancel,callback:function(t){e.$set(e.form,"isCancel",t)},expression:"form.isCancel"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"入园须知",prop:"notice",rules:[{required:!0,message:"入园须知不能为空"}]}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.notice,callback:function(t){e.$set(e.form,"notice",t)},expression:"form.notice"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"费用包含",prop:"costInside",rules:[{required:!0,message:"费用包含不能为空"}]}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.costInside,callback:function(t){e.$set(e.form,"costInside",t)},expression:"form.costInside"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"费用不包含",prop:"costOutside",rules:[{required:!0,message:"费用不包含不能为空"}]}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.costOutside,callback:function(t){e.$set(e.form,"costOutside",t)},expression:"form.costOutside"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"remark",rules:[{required:!0,message:"备注不能为空"}]}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"使用类别开关",prop:"userType"}},[r("el-switch",{attrs:{"on-text":"开启","off-text":"禁用","on-color":"#13ce66","off-color":"#ff4949","on-value":"1","off-value":"0"},on:{change:e.switch3},model:{value:e.form.userType,callback:function(t){e.$set(e.form,"userType",t)},expression:"form.userType"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"优先级类别",prop:"priorityType",rules:[{required:!0,message:"优先级类别不能为空"}]}},[r("el-select",{attrs:{placeholder:"请重新选择"},on:{change:e.handleChange5},model:{value:e.form.priorityType,callback:function(t){e.$set(e.form,"priorityType",t)},expression:"form.priorityType"}},e._l(e.priority,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"分销商列表",prop:"customName",rules:[{required:!0,message:"分销商列表不能为空"}]}},[r("el-select",{attrs:{multiple:"",placeholder:"请重新选择"},on:{change:e.handleChange6},model:{value:e.form.customName,callback:function(t){e.$set(e.form,"customName",t)},expression:"form.customName"}},e._l(e.custom,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"",prop:"viewId"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("提 交")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)])},staticRenderFns:[]}},1084:function(e,t,r){var a=r(742);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(197)("72dc00ce",a,!0)},520:function(e,t,r){r(1084);var a=r(198)(r(615),r(1054),"data-v-6501feaa",null);e.exports=a.exports},532:function(e,t,r){"use strict";t.a={apidomain:"http://192.168.1.109:8080/TicketSales"}},615:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(199),o=r.n(a),i=r(532);t.default={data:function(){return{power:!1,name:"",currentPage:1,form:{id:"",name:"",viewName:"",supplierName:"",endPrice:"",marketPrice:"",isSale:"",type:"",ticketType:"",startTime:"",endTime:"",dailySale:"",num:"",orderTime:"",method:"",isCancel:"",notice:"",costInside:"",costOutside:"",remark:"",userType:"",sort:"",priorityType:"",viewId:"",priorityId:"",supplierId:"",customName:""},view:[],supplier:[],typeList:[],ticketType:[],priority:[],custom:[],ticketId:"",customName:[],customer:"",customId:"",viewId:"",priorityId:"",supplierId:""}},created:function(){this.getEdit(),this.getAddress(),this.getPowerId()},methods:{getPowerId:function(){var e=JSON.parse(window.sessionStorage.getItem("powerId"));0==e?this.power=!0:1==e?this.power=!1:this.$router.push({path:"/login"})},switch1:function(e){},switch2:function(e){},switch3:function(e){},resetForm:function(e){this.$refs[e].resetFields()},getEdit:function(){var e=this;o.a.get(i.a.apidomain+"/product/addUI.action").then(function(t){console.log(t.data),e.view=t.data.data.view,e.supplier=t.data.data.supplier,e.typeList=t.data.data.typeList,e.ticketType=t.data.data.ticketType,e.priority=t.data.data.priority,e.custom=t.data.data.custom})},getAddress:function(){var e=this;o.a.get(i.a.apidomain+"/product/editUI.action?id="+this.$route.query.id).then(function(t){e.viewId=t.data.data.viewId,e.supplierId=t.data.data.supplierId,e.priorityId=t.data.data.priorityId,e.form.id=t.data.data.id,e.form.name=t.data.data.name,e.form.viewName=t.data.data.viewName,e.form.supplierName=t.data.data.supplierName,e.form.endPrice=t.data.data.endPrice,e.form.marketPrice=t.data.data.marketPrice,e.form.isSale=t.data.data.isSale,e.form.type=t.data.data.type,e.form.num=t.data.data.num,e.form.ticketType=t.data.data.ticketType,e.form.orderTime=t.data.data.orderTime,e.form.method=t.data.data.method,e.form.startTime=t.data.data.startTime,e.form.endTime=t.data.data.endTime,e.form.isCancel=t.data.data.isCancel,e.form.notice=t.data.data.notice,e.form.costInside=t.data.data.costInside,e.form.costOutside=t.data.data.costOutside,e.form.remark=t.data.data.remark,e.form.userType=t.data.data.userType,e.form.sort=t.data.data.sort,e.form.dailySale=t.data.data.dailySale})},handleChange1:function(e){console.log(e),this.form.viewId=e},handleChange2:function(e){console.log(e),this.form.supplierId=e},handleChange3:function(e){this.ticketId=e},handleChange4:function(e){},handleChange5:function(e){console.log(e),this.form.priorityId=e},handleChange6:function(e){console.log(e);var t="",r="";e.forEach(function(e,a,o){t+=e.id+",",r+=e.name+","}),console.log(t),this.customId=t,this.customer=r},onSubmit:function(e){var t=this;console.log(this.form),console.log(this.form.viewId),console.log(this.form.supplierId),console.log(this.form.priorityId),console.log("----------"),console.log(this.viewId),console.log(this.supplierId),console.log(this.priorityId),this.$refs[e].validate(function(e){if(!e)return t.$message({message:"参数错误,请检查后重新输入~~",type:"warning"}),!1;o.a.post(i.a.apidomain+"/product/edit.action?name="+t.form.name+"&viewName="+t.form.viewName+"&supplierName="+t.form.supplierName+"&endPrice="+t.form.endPrice+"&marketPrice="+t.form.marketPrice+"&type="+t.form.type+"&ticketType="+t.form.ticketType+"&startTime="+t.form.startTime+"&endTime="+t.form.endTime+"&dailySale="+t.form.dailySale+"&num="+t.form.num+"&orderTime="+t.form.orderTime+"&notice="+t.form.notice+"&costInside="+t.form.costInside+"&costOutside="+t.form.costOutside+"&remark="+t.form.remark+"&userType="+t.form.userType+"&customPro="+t.customer+"&customId="+t.customId+"&isSale="+t.form.isSale+"&isCancel="+t.form.isCancel+"&viewId="+t.viewId+"&supplierId="+t.supplierId+"&priorityId="+t.form.priorityId+"&method="+t.form.method+"&id="+t.form.id).then(function(e){if(t.tableData=e.data.data,t.codesID=e.data.code,0===t.codesID)return void t.$message({message:"参数错误,请重试~",type:"warning"});t.$message({message:"修改成功!,请点击相应页面查看修改数据~~",type:"success"}),t.$router.push({path:"./ProductManage",query:{currentPage:t.currentPage}})})})}}}},742:function(e,t,r){t=e.exports=r(87)(void 0),t.push([e.i,".form-box[data-v-6501feaa]{width:50%}.map[data-v-6501feaa]{width:100%;height:60px;border:1px solid #ccc}.dizhi[data-v-6501feaa]{line-height:100%}.m-part .mapbox[data-v-6501feaa]{border:1px solid #ccc;width:100%;height:300px;margin-bottom:10px;float:left}",""])}});