(this.webpackJsonpvisuals=this.webpackJsonpvisuals||[]).push([[0],{115:function(e,t,n){e.exports=n(143)},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(55),s=n.n(i),c=(n(120),n(56)),o=n(57),u=n(59),l=n(58);n(121),n(122);var d=function(e){var t=e.devices,n=e.deselectDevice,a=e.selectDevice,i=t.map((function(e){return r.a.createElement("li",{className:"collection-item row",key:e.id},r.a.createElement("div",{className:"col s3"},"Name: ",e.name),r.a.createElement("div",{className:"col s3"},"Manufacturer: ",e.manufacturer," "),r.a.createElement("div",{className:"col s2"},"Type: ",e.type),r.a.createElement("div",{className:"col s2"},"State: ",e.state,", ",e.action),r.a.createElement("button",{className:"devices btn purple lighten-4",onClick:function(t){!function(e,t){"Mute"===e.target.innerHTML?(e.target.classList.toggle("green"),e.target.innerHTML="Listen",n(t)):"Listen"===e.target.innerHTML&&(e.target.classList.toggle("green"),e.target.innerHTML="Mute",a(t))}(t,e)}},"Mute"))}));return r.a.createElement("ul",{className:"collection"},i)},f=n(4),m=n(3),g=n.n(m),v=(n(19),n(1));function h(e){return parseInt(e[1])}function p(e){return parseInt(e[0])}var w=function(e){var t=new g.a.Element("div"),n=Array.from(e.messages).filter((function(e){return p(e)<12})),r=v.f(v.g);r.domain(n.map((function(e){return p(e)})));var i=20,s=20,c=30,o=40,u=function(){var e=Object(a.useState)(window.innerWidth),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),n}()-50-o-s,l=e.height-i-c,d=v.e().range([0,u]),m=v.e().range([l,0]),w=v.b().scale(d),I=v.c().scale(m).ticks(10),E=v.h(t).append("svg").attr("width",u+o+s).attr("height",l+i+c).append("g").attr("transform","translate(".concat(o,",").concat(i,")"));return d.domain([0,12]),m.domain([0,127]),E.append("g").attr("class","x axis").attr("transform","translate(0,".concat(l,")")).call(w),E.append("g").attr("class","y axis").call(I).append("text").attr("transform","rotate(-90)").attr("y",10).attr("dy",".71em").style("text-anchor","end").text("Frequency"),E.selectAll(".bar").data(n).enter().append("rect").attr("class","bar").attr("fill",(function(e){return r(p(e))})).attr("x",(function(e){return d(p(e))})).attr("width",u/12).attr("y",(function(e){return m(h(e))})).attr("value",h).attr("height",(function(e){return l-m(h(e))})),t.toReact()};function I(e){return parseInt(e[0])}var E=function(e){var t=new g.a.Element("div"),n=Array.from(e.messages).filter((function(e){return I(e)<12})),r=v.f(v.g);r.domain(n.map((function(e){return I(e)})));var i=20,s=20,c=20,o=20,u=function(){var e=Object(a.useState)(window.innerWidth),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),n}()-50-o-s,l=u-i-c,d={x:u/2+5,y:l/2+5},m=v.e().range([0,u/2]),h=v.e().range([l,0]);m.domain([0,Math.min(d.x,d.y)]),h.domain([0,127]);var p=v.h(t).append("svg").attr("width",u+o+s).attr("height",l+i+c).append("g").attr("transform","translate(".concat(d.x,",").concat(d.y,")")),w=v.d().sort(null).value((function(e){return parseInt(e[1])}));console.log("data",n),console.log("pie",w(n));var E=v.a().innerRadius(0).outerRadius((function(e){return console.log("ro",e),m(e.value)}));return p.selectAll("path").data(w(n)).enter().append("path").attr("class","arc").attr("fill",(function(e){return r(I(e.data))})).attr("d",(function(e){return console.log("d",e),E(e)})).attr("stroke","#fff").attr("stroke-width",3),t.toReact()};function M(e){return parseInt(e[0])}var D=function(e){var t=new g.a.Element("div"),n=Array.from(e.messages).filter((function(e){return M(e)<12})),r=v.f(v.g);r.domain(n.map((function(e){return M(e)})));var i=20,s=20,c=20,o=20,u=function(){var e=Object(a.useState)(window.innerWidth),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),n}()-50-o-s,l=u-i-c,d={x:u/2+5,y:l/2+5},m=v.e().range([0,u/2]),h=v.e().range([l,0]);m.domain([0,Math.min(d.x,d.y)]),h.domain([0,127]);var p=v.h(t).append("svg").attr("width",u+o+s).attr("height",l+i+c).append("g").attr("transform","translate(".concat(d.x,",").concat(d.y,")")),w=v.d().sort(null).value((function(e){return 12}));console.log("data",n),console.log("pie",w(n));var I=v.a().innerRadius(0).outerRadius((function(e){return console.log("ro",e),m((t=e.data,parseInt(t[1])));var t}));return p.selectAll("path").data(w(n)).enter().append("path").attr("class","arc").attr("fill",(function(e){return r(M(e.data))})).attr("d",(function(e){return console.log("d",e),I(e)})).attr("stroke","#fff").attr("stroke-width",3),t.toReact()},y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).initialTestMessages=function(){var e=new Map(Array(128).fill().map((function(e,t){return[t,t]})));a.setState({messages:e})},a.addMidiDevice=function(e){var t=a.state.devices;t.push(e),a.setState({devices:t})},a.deselectDevice=function(e){var t=a.state.selectedDevices;t=t.filter((function(t){return t!==e})),a.state.midi.inputs.forEach((function(t){t===e&&(t.onmidimessage=null,t.action="not listening")})),a.setState({selectedDevices:t})},a.selectDevice=function(e){var t=a.state.selectedDevices;t.push(e),a.state.midi.inputs.forEach((function(t){t===e&&(t.onmidimessage=a.onMIDIMessage,t.action="listening")})),a.setState({selectedDevices:t})},a.onMIDISuccess=function(e){console.log("MIDI ready!"),console.log(e),a.setState({midi:e}),a.listInputsAndOutputs(e),a.startLoggingMIDIInput(e)},a.onMIDIFailure=function(e){console.log("Failed to get MIDI access - "+e)},a.listInputsAndOutputs=function(e){console.log("MIDI INPUTS"),e.inputs.forEach((function(e){a.addMidiDevice(e),a.selectDevice(e)})),console.log("MIDI OUTPUTS"),e.outputs.forEach((function(e){}))},a.onMIDIMessage=function(e){var t=a.state.messages;t.set(e.data[1],e.data[2]),a.setState({messages:t})},a.startLoggingMIDIInput=function(e){e.inputs.forEach((function(e){e.onmidimessage=a.onMIDIMessage}))},a.state={devices:[],selectedDevices:[],messages:new Map([])},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){navigator.requestMIDIAccess({sysex:!0}).then(this.onMIDISuccess,this.onMIDIFailure)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h2",{className:"card-panel white accent-4 lighten-2"},"Midi Visuals"),r.a.createElement(d,{devices:this.state.devices,deselectDevice:this.deselectDevice,selectDevice:this.selectDevice}),r.a.createElement("div",{id:"graph-container",className:"card-panel white s lighten-2"},r.a.createElement(w,{messages:this.state.messages,height:"400"})),r.a.createElement("div",{id:"graph-container",className:"card-panel white s lighten-2 row"},r.a.createElement(E,{messages:this.state.messages,width:"400",height:"400"})),r.a.createElement("div",{id:"graph-container",className:"card-panel white s lighten-2 row"},r.a.createElement(D,{messages:this.state.messages,width:"400",height:"400"})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.524d390c.chunk.js.map