(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bcbd95a"],{"73cf":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register"},[n("van-nav-bar",{attrs:{title:"注册","left-text":"登录","right-text":"关闭"},on:{"click-left":function(t){return e.goPage("Login")},"click-right":function(t){return e.goPage("Menu")}}}),e._m(0),n("van-form",{on:{submit:e.register}},[n("van-field",{attrs:{type:"text",label:"手机号",placeholder:"输入11位手机号","left-icon":"phone-o",maxlength:"11"},model:{value:e.userInfo.phone,callback:function(t){e.$set(e.userInfo,"phone",t)},expression:"userInfo.phone"}}),n("van-field",{attrs:{type:"text",label:"昵称",placeholder:"字母数字_组合(1-10位)","left-icon":"contact",maxlength:"10"},model:{value:e.userInfo.nickName,callback:function(t){e.$set(e.userInfo,"nickName",t)},expression:"userInfo.nickName"}}),n("van-field",{attrs:{type:e.isEye?"text":"password",label:"密码",placeholder:"字母数字_组合(6-16位)","left-icon":"lock","right-icon":e.isEye?"eye-o":"closed-eye",maxlength:"16"},on:{"click-right-icon":e.viewPassword},model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}}),n("div",{staticClass:"register-btn"},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("立即注册")])],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo"},[a("img",{staticClass:"auto-img",attrs:{src:n("9d64"),alt:""}})])}],r=(n("7d65"),n("e3a8")),o={data:function(){return{userInfo:{phone:"",nickName:"",password:""},isEye:!1}},methods:{goPage:function(e){this.$router.push({name:e})},viewPassword:function(){this.isEye=!this.isEye},register:function(){var e=this;if(r["a"].validUserForm(this.userInfo)){var t=Object.assign({},this.userInfo);t.appkey=this.appkey,this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/register",data:t}).then((function(t){e.$toast.clear(),100==t.data.code?e.$router.push({name:"Login"}):e.$toast(t.data.msg)})).catch((function(t){e.$toast.clear()}))}}}},i=o,c=n("2877"),l=Object(c["a"])(i,a,s,!1,null,null,null);t["default"]=l.exports},"7d65":function(e,t,n){},"9d64":function(e,t,n){e.exports=n.p+"img/logo.a7a1bba7.png"},e3a8:function(e,t,n){"use strict";n("a4f5");var a=n("5fa4");function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var i=function(){function e(){s(this,e),this.validUserFormReg={nickName:{reg:/^[\u4e00-\u9fa5\w]{1,10}$/,msg:"昵称格式不正确"},phone:{reg:/^1[3-9]\d{9}$/,msg:"手机号格式不正确"},password:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"密码格式不正确且以字母开头"},oldPassword:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"旧密码格式不正确且以字母开头"},email:{reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,msg:"邮箱格式不正确"},code:{reg:/^\d{6}$/,msg:"验证格式正确"}}}return o(e,[{key:"validUserForm",value:function(e){for(var t in e)if(!this.validUserFormReg[t].reg.test(e[t]))return Object(a["a"])(this.validUserFormReg[t].msg),!1;return!0}}]),e}();t["a"]=new i}}]);
//# sourceMappingURL=chunk-4bcbd95a.645c3b50.js.map