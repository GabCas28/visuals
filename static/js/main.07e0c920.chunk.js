(this.webpackJsonpvisuals=this.webpackJsonpvisuals||[]).push([[0],{33:function(e,t,n){e.exports=n(62)},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(17),c=n.n(i),r=(n(38),n(18)),o=n(19),l=n(23),u=n(21);n(39),n(40);var d=function(e){var t=e.devices,n=e.deselectDevice,a=e.selectDevice,i=t.map((function(e){return s.a.createElement("li",{className:"collection-item row",key:e.id},s.a.createElement("div",{className:"col s3"},"Name: ",e.name),s.a.createElement("div",{className:"col s3"},"Manufacturer: ",e.manufacturer," "),s.a.createElement("div",{className:"col s2"},"Type: ",e.type),s.a.createElement("div",{className:"col s2"},"State: ",e.state,", ",e.action),s.a.createElement("button",{className:"devices btn purple lighten-4",onClick:function(t){!function(e,t){"Mute"===e.target.innerHTML?(e.target.classList.toggle("green"),e.target.innerHTML="Listen",n(t)):"Listen"===e.target.innerHTML&&(e.target.classList.toggle("green"),e.target.innerHTML="Mute",a(t))}(t,e)}},"Mute"))}));return s.a.createElement("ul",{className:"collection"},i)},m=n(22),g=n(20),v=n.n(g),f=(n(61),n(2));function h(e){return parseInt(e[1])}var p=function(e){var t=new v.a.Element("div"),n=Array.from(e.messages),s=20,i=20,c=30,r=40,o=function(){var e=Object(a.useState)(window.innerWidth),t=Object(m.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){var e=function(){return s(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),n}()-50-r-i,l=e.height-s-c,u=f.c().range([0,o]),d=f.c().range([l,0]),g=f.a().scale(u),p=f.b().scale(d).ticks(10),I=f.d(t).append("svg").attr("width",o+r+i).attr("height",l+s+c).append("g").attr("transform","translate(".concat(r,",").concat(s,")"));return u.domain([0,127]),d.domain([0,127]),I.append("g").attr("class","x axis").attr("transform","translate(0,".concat(l,")")).call(g),I.append("g").attr("class","y axis").call(p).append("text").attr("transform","rotate(-90)").attr("y",10).attr("dy",".71em").style("text-anchor","end").text("Frequency"),I.selectAll(".bar").data(n).enter().append("rect").attr("class","bar").attr("x",(function(e){return u(parseInt(e[0]))})).attr("width",o/127).attr("y",(function(e){return d(h(e))})).attr("value",h).attr("height",(function(e){return l-d(h(e))})),t.toReact()},I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).initialTestMessages=function(){var e=Array(128).fill().map((function(e,t){return{data:[0,t,t]}}));a.setState({messages:e})},a.addMidiDevice=function(e){var t=a.state.devices;t.push(e),a.setState({devices:t})},a.deselectDevice=function(e){var t=a.state.selectedDevices;t=t.filter((function(t){return t!==e})),a.state.midi.inputs.forEach((function(t){t===e&&(t.onmidimessage=null,t.action="not listening")})),a.setState({selectedDevices:t})},a.selectDevice=function(e){var t=a.state.selectedDevices;t.push(e),a.state.midi.inputs.forEach((function(t){t===e&&(t.onmidimessage=a.onMIDIMessage,t.action="listening")})),a.setState({selectedDevices:t})},a.onMIDISuccess=function(e){console.log("MIDI ready!"),console.log(e),a.setState({midi:e}),a.listInputsAndOutputs(e),a.startLoggingMIDIInput(e)},a.onMIDIFailure=function(e){console.log("Failed to get MIDI access - "+e)},a.listInputsAndOutputs=function(e){console.log("MIDI INPUTS"),e.inputs.forEach((function(e){a.addMidiDevice(e),a.selectDevice(e)})),console.log("MIDI OUTPUTS"),e.outputs.forEach((function(e){}))},a.onMIDIMessage=function(e){var t=a.state.messages;t.set(e.data[1],e.data[2]),a.setState({messages:t})},a.startLoggingMIDIInput=function(e){e.inputs.forEach((function(e){e.onmidimessage=a.onMIDIMessage}))},a.getWidth=function(){return 600},a.state={devices:[],selectedDevices:[],messages:new Map([])},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){navigator.requestMIDIAccess({sysex:!0}).then(this.onMIDISuccess,this.onMIDIFailure)}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h2",{className:"card-panel white accent-4 lighten-2"},"Midi Visuals"),s.a.createElement(d,{devices:this.state.devices,deselectDevice:this.deselectDevice,selectDevice:this.selectDevice}),s.a.createElement("div",{id:"graph-container",className:"card-panel white s lighten-2"},s.a.createElement(p,{messages:this.state.messages,width:this.getWidth(),height:"300"})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.07e0c920.chunk.js.map