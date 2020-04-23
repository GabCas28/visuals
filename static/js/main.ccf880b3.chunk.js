(this.webpackJsonpvisuals=this.webpackJsonpvisuals||[]).push([[0],{129:function(e,t,n){e.exports=n(160)},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(71),r=n.n(i),c=(n(134),n(17)),o=n(18),l=n(20),u=n(19);n(73),n(135),n(136),n(137);var d=function(e){var t=e.devices,n=e.deselectDevice,a=e.selectDevice,i=t.map((function(e){return s.a.createElement("li",{className:"collection-item grey-text black row",key:e.id},s.a.createElement("div",{className:"col s2"},"Device Name: ",e.name),s.a.createElement("div",{className:"col s3"},"Manufacturer: ",e.manufacturer," "),s.a.createElement("div",{className:"col s1"},"Type: ",e.type),s.a.createElement("div",{className:"col s3"},"State: ",e.state,", ",e.action),s.a.createElement("button",{className:"col offset-s2 s1 devices btn purple lighten-4",onClick:function(t){!function(e,t){"Mute"===e.target.innerHTML?(e.target.classList.toggle("green"),e.target.innerHTML="Listen",n(t)):"Listen"===e.target.innerHTML&&(e.target.classList.toggle("green"),e.target.innerHTML="Mute",a(t))}(t,e)}},"Mute"))}));return s.a.createElement("ul",{className:"collection"},i)},m=n(10),g=n.n(m),f=(n(31),n(1));function v(e){return parseInt(e[1])}function h(e){return parseInt(e[0])}var p=function(e){var t=new g.a.Element("div"),n=Array.from(e.messages).filter((function(e){return h(e)<12})),a=f.e(f.f);a.domain(n.map((function(e){return h(e)})));var s=20,i=40,r=30,c=40,o=e.width-c-i,l=e.height-s-r,u=f.d().range([0,o]),d=f.d().range([l,0]),m=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],p=f.b().scale(u).tickFormat((function(e){return m[e]})),I=f.g(t).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 "+e.width+" "+e.height).append("g").attr("transform","translate(".concat(c,",").concat(s,")"));return u.domain([0,12]),d.domain([0,127]),I.append("g").attr("class","x axis").attr("transform","translate(".concat(l/20,",").concat(l,")")).call(p).selectAll("text").attr("fill",(function(e){return a(e)})).attr("stroke",(function(e){return a(e)})),I.selectAll(".bar").data(n).enter().append("rect").attr("class","bar").attr("fill",(function(e){return a(h(e))})).attr("x",(function(e){return u(h(e))})).attr("width",o/12).attr("y",(function(e){return d(v(e))})).attr("value",v).attr("height",(function(e){return l-d(v(e))})),t.toReact()};function I(e){return parseInt(e[0])}var M=function(e){var t=new g.a.Element("div"),n=Array.from(e.messages).filter((function(e){return I(e)<12})),a=f.e(f.f);a.domain(n.map((function(e){return I(e)})));var s=20,i=20,r=20,c=20,o=e.width-50-c-i,l=e.height-s-r,u={x:o/2+5,y:l/2+5},d=f.d().range([0,o/2-50]),m=f.d().range([l,0]);d.domain([0,Math.min(u.x,u.y)]),m.domain([0,127]);var v=f.g(t).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 "+o+" "+l).append("g").attr("transform","translate(".concat(u.x,",").concat(u.y,")")),h=f.c().sort(null).value((function(e){return parseInt(e[1])})),p=f.a().innerRadius(50).outerRadius((function(e){return 50+d(e.value)}));return v.selectAll("path").data(h(n)).enter().append("path").attr("class","arc").attr("fill",(function(e){return a(I(e.data))})).attr("d",(function(e){return p(e)})).attr("stroke","black").attr("stroke-width",3),t.toReact()};function D(e){return parseInt(e[0])}var E=function(e){var t=new g.a.Element("div"),n=Array.from(e.messages).filter((function(e){return D(e)<12})),a=f.e(f.f);a.domain(n.map((function(e){return D(e)})));var s=20,i=20,r=20,c=20,o=e.width-50-c-i,l=e.height-s-r,u={x:o/2+5,y:l/2+5},d=f.d().range([0,o/2]),m=f.d().range([l,0]);d.domain([0,Math.min(u.x,u.y)]),m.domain([0,127]);var v=f.g(t).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 "+o+" "+l).append("g").attr("transform","translate(".concat(u.x,",").concat(u.y,")")),h=f.c().sort(null).value((function(e){return 12})),p=f.a().innerRadius(0).outerRadius((function(e){return d((t=e.data,parseInt(t[1])));var t}));return v.selectAll("path").data(h(n)).enter().append("path").attr("class","arc").attr("fill",(function(e){return a(D(e.data))})).attr("d",(function(e){return p(e)})).attr("stroke","black").attr("stroke-width",3),t.toReact()},w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).initialTestMessages=function(){var e=new Map(Array(128).fill().map((function(e,t){return[t,0]})));a.setState({messages:e})},a.addMidiDevice=function(e){var t=a.state.devices;t.push(e),a.setState({devices:t})},a.deselectDevice=function(e){var t=a.state.selectedDevices;t=t.filter((function(t){return t!==e})),a.state.midi.inputs.forEach((function(t){t===e&&(t.onmidimessage=null,t.action="not listening")})),a.setState({selectedDevices:t})},a.selectDevice=function(e){var t=a.state.selectedDevices;t.push(e),a.state.midi.inputs.forEach((function(t){t===e&&(t.onmidimessage=a.onMIDIMessage,t.action="listening")})),a.setState({selectedDevices:t})},a.onMIDISuccess=function(e){console.log("MIDI ready!"),console.log(e),a.setState({midi:e}),a.listInputsAndOutputs(e),a.startLoggingMIDIInput(e)},a.onMIDIFailure=function(e){console.log("Failed to get MIDI access - "+e)},a.listInputsAndOutputs=function(e){console.log("MIDI INPUTS"),e.inputs.forEach((function(e){a.addMidiDevice(e),a.selectDevice(e)})),console.log("MIDI OUTPUTS"),e.outputs.forEach((function(e){}))},a.onMIDIMessage=function(e){var t=a.state.messages;t.set(e.data[1],e.data[2]),a.setState({messages:t})},a.startLoggingMIDIInput=function(e){e.inputs.forEach((function(e){e.onmidimessage=a.onMIDIMessage}))},a.state={devices:[],selectedDevices:[],messages:new Map([])},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.initialTestMessages(),navigator.requestMIDIAccess({sysex:!0}).then(this.onMIDISuccess,this.onMIDIFailure)}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(d,{devices:this.state.devices,deselectDevice:this.deselectDevice,selectDevice:this.selectDevice}),s.a.createElement("div",{id:"graph-container",className:"card-panel black lighten-2 row"},s.a.createElement("div",{className:"col s12 m5"},s.a.createElement(p,{messages:this.state.messages,width:"600",height:"400"})),s.a.createElement("div",{className:"col s12 m7"},s.a.createElement("div",{className:"col s12 m6"},s.a.createElement(M,{messages:this.state.messages,width:"400",height:"370"})),s.a.createElement("div",{className:"col s12 m6"},s.a.createElement(E,{messages:this.state.messages,width:"400",height:"370"})))))}}]),n}(a.Component),b=n(7),y=n(6);var x=Object(y.e)((function(e){return s.a.createElement("nav",{className:"nav-wrapper blue-grey darken-4"},s.a.createElement("div",{className:"container"},s.a.createElement(b.b,{to:"/",className:"left brand-logo"},"Midi Visuals"),s.a.createElement("ul",{className:"right"},s.a.createElement("li",null,s.a.createElement(b.c,{exact:!0,to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(b.c,{to:"/bar"},"Bar Chart")),s.a.createElement("li",null,s.a.createElement(b.c,{to:"/doghnut"},"Dohnut Chart")),s.a.createElement("li",null,s.a.createElement(b.c,{to:"/pie"},"Pie Chart")))))}));var A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).initialTestMessages=function(){var e=new Map(Array(128).fill().map((function(e,t){return[t,0]})));a.setState({messages:e})},a.addMidiDevice=function(e){var t=a.state.devices;t.push(e),a.setState({devices:t})},a.deselectDevice=function(e){var t=a.state.selectedDevices;t=t.filter((function(t){return t!==e})),a.state.midi.inputs.forEach((function(t){t===e&&(t.onmidimessage=null,t.action="not listening")})),a.setState({selectedDevices:t})},a.selectDevice=function(e){var t=a.state.selectedDevices;t.push(e),a.state.midi.inputs.forEach((function(t){t===e&&(t.onmidimessage=a.onMIDIMessage,t.action="listening")})),a.setState({selectedDevices:t})},a.onMIDISuccess=function(e){console.log("MIDI ready!"),console.log(e),a.setState({midi:e}),a.listInputsAndOutputs(e),a.startLoggingMIDIInput(e)},a.onMIDIFailure=function(e){console.log("Failed to get MIDI access - "+e)},a.listInputsAndOutputs=function(e){console.log("MIDI INPUTS"),e.inputs.forEach((function(e){a.addMidiDevice(e),a.selectDevice(e)})),console.log("MIDI OUTPUTS"),e.outputs.forEach((function(e){}))},a.onMIDIMessage=function(e){var t=a.state.messages;t.set(e.data[1],e.data[2]),a.setState({messages:t})},a.startLoggingMIDIInput=function(e){e.inputs.forEach((function(e){e.onmidimessage=a.onMIDIMessage}))},a.routes=[{path:"/",component:"Home"}],a.state={devices:[],selectedDevices:[],messages:new Map([])},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.initialTestMessages(),navigator.requestMIDIAccess({sysex:!0}).then(this.onMIDISuccess,this.onMIDIFailure)}},{key:"render",value:function(){var e=this;return s.a.createElement(b.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(x,null),s.a.createElement(y.a,{exact:!0,path:"/",component:w}),s.a.createElement(y.a,{exact:!0,path:"/doghnut",render:function(t){return s.a.createElement(M,Object.assign({},t,{messages:e.state.messages,width:window.innerWidth,height:window.innerHeight-100}))}}),s.a.createElement(y.a,{exact:!0,path:"/pie",render:function(t){return s.a.createElement(E,Object.assign({},t,{messages:e.state.messages,width:window.innerWidth,height:window.innerHeight-100}))}}),s.a.createElement(y.a,{exact:!0,path:"/bar",render:function(t){return s.a.createElement(p,Object.assign({},t,{messages:e.state.messages,width:window.innerWidth,height:window.innerHeight-100}))}})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,n){}},[[129,1,2]]]);
//# sourceMappingURL=main.ccf880b3.chunk.js.map