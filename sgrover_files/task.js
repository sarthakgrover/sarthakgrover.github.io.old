
var CensorshipMeter=new Object();CensorshipMeter.baseUrl="//encore.noise.gatech.edu/submit";CensorshipMeter.measurementId=encodeURIComponent("4438bc2d252cfb57");CensorshipMeter.maxMessageLength=64;CensorshipMeter.submitResult=function(state,message){this.submitted=state;var params={"cmh-id":this.measurementId,"cmh-result":state,};if(message!=null){params["cmh-message"]=String(message).substring(0,this.maxMessageLength);}
$.ajax({url:this.baseUrl+"?"+$.param(params),});}
CensorshipMeter.sendSuccess=function(){this.submitResult("success");}
CensorshipMeter.sendFailure=function(){this.submitResult("failure");}
CensorshipMeter.sendException=function(err){this.submitResult("exception",err);}
CensorshipMeter.setupStats=function(){this.logo=$("#encore-stats");if(typeof this.logo=="undefined"){return;}
this.logo.html('Visitors of this page have performed 20 measurements of Web filtering. <a href="//encore.noise.gatech.edu/stats/refer">Learn more</a>.');}
CensorshipMeter.run=function(){this.submitResult("init");$(function(){try{CensorshipMeter.measure();}catch(err){CensorshipMeter.sendException(err);}});$(function(){CensorshipMeter.setupStats();});}
CensorshipMeter.measure=function(){var iframe=$('<iframe />');iframe.attr('width',0);iframe.attr('height',0);iframe.attr('src','http://encore.noise.gatech.edu:8892/page.html');iframe.css('display','none');iframe.on('load',function(){try{var endTime=$.now();CensorshipMeter.submitResult("load-time",endTime-CensorshipMeter.startTime);}catch(err){CensorshipMeter.sendException(err);}});CensorshipMeter.startTime=$.now();iframe.appendTo('html');}
CensorshipMeter.loadJQuery=function(){var headTag=document.getElementsByTagName('head')[0];var jqTag=document.createElement('script');jqTag.type='text/javascript';jqTag.src='//encore.noise.gatech.edu/jquery.js';jqTag.onload=function(){CensorshipMeter.run();}
headTag.appendChild(jqTag);}
if(typeof jQuery=="undefined"){CensorshipMeter.loadJQuery();}else{CensorshipMeter.run();}