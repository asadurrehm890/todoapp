(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[767],{863:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/complete/[id]",function(){return a(8e3)}])},8e3:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return l}});var n=a(5893),s=a(7294),r=a(1163),l=!0;t.default=function(e){let t=(0,r.useRouter)(),[a,l]=(0,s.useState)(e.tasks.task),[o,u]=(0,s.useState)(e.tasks.timeTaken),[i,c]=(0,s.useState)(0),[m,p]=(0,s.useState)("complete"),f=async n=>{n.preventDefault();try{let n=await fetch("http://localhost:8000/api/tasks/".concat(e.tasks._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({task:a,timeTaken:o,actualTime:i,status:m})});if(!n.ok)throw Error("Something went wrong");t.push("/")}catch(e){alert("Failed to update profile")}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("form",{className:"mx700",onSubmit:f,children:[(0,n.jsxs)("label",{className:"mb-3 form-label w-100",children:["Enter your Task",(0,n.jsx)("input",{value:a,onChange:e=>l(e.target.value),type:"text",className:"form-control"})]}),(0,n.jsxs)("label",{className:"mb-3 form-label w-100",children:["Time taken in minutes",(0,n.jsx)("input",{value:o,onChange:e=>u(parseInt(e.target.value)),type:"number",className:"form-control"})]}),(0,n.jsxs)("label",{className:"mb-3 form-label w-100",children:["Actual Time taken in minutes",(0,n.jsx)("input",{value:i,onChange:e=>c(parseInt(e.target.value)),type:"number",className:"form-control"})]}),(0,n.jsx)("button",{className:"btn btn-dark",type:"submit",children:"Submit"})]})})}},1163:function(e,t,a){e.exports=a(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=863)}),_N_E=e.O()}]);