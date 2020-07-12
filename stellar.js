/*
Stellar v0.1
blackholesec.blogspot.com
github.com/BlackHoleSecurity/Stellar
(c) 2018 by DedSecTL. All rights reserved.
*/
function Stellar() {
	this.GetProp = function(a=undefined){if(a)return app.SysExec("getprop "+a);else return app.SysExec("getprop");};
	this.GetModules = function(){return app.SysExec("cat /proc/modules");};
	this.GetVMStat = function(){return app.SysExec("cat /proc/vmstat");};
	this.GetPartitions = function(){return app.SysExec("cat /proc/partitions");};
	this.GetDevice = function(){return "Manufacturer : "+app.SysExec("getprop ro.product.manufacturer")+"Brand : "+app.SysExec("getprop ro.product.brand")+"Model : "+app.SysExec("getprop ro.product.model")+"Board : "+app.SysExec("getprop ro.product.board")+"Hardware : "+app.SysExec("getprop ro.hardware")+"Serialno : "+app.SysExec("getprop ro.serialno")+"Hostname : "+app.SysExec("getprop net.hostname")+"Boot loader : "+app.SysExec("getprop ro.bootloader")+"User : "+app.SysExec("getprop ro.build.user")+"Host : "+app.SysExec("getprop ro.build.host");};
	this.GetOS = function(){return "Version : "+app.SysExec("getprop ro.build.version.release")+"API Level : "+app.SysExec("getprop ro.build.version.sdk")+"Build ID : "+app.SysExec("getprop ro.build.id")+"Build Time"+app.SysExec("getprop ro.build.date")+"Fingerprint : "+app.SysExec("getprop ro.build.fingerprint");};
	this.GetUname = function(){return app.SysExec("cat /proc/version");};
	this.GetUptime = function(){return app.SysExec("cat /proc/uptime");};
	this.GetMemInfo = function(){return app.SysExec("cat /proc/meminfo");};
	this.GetDiskFree = function(){return app.SysExec("df");};
	this.GetCrypto = function(){return app.SysExec("cat /proc/crypto").replace(/\n\n/g,"\n===================\n");};
	this.GetCPUInfo = function(){return app.SysExec("cat /proc/cpuinfo").replace(/\n\n/g,"\n===================\n");};
	this.GetDiskStats = function(){return app.SysExec("cat /proc/diskstats");};
	this.GetSimSlotCount = function(){return app.SysExec("getprop ro.multisim.simslotcount");};
	this.WhosIS = function(a){response=HttpGet_("http://api.hackertarget.com/whois/?q="+a);return response;};
	this.DNSLookup = function(a){response=HttpGet_("http://api.hackertarget.com/dnslookup/?q="+a);return response;};
	this.ZoneTransfer = function(a){response=HttpGet_("http://api.hackertarget.com/zonetransfer/?q="+a);return response;};
	this.Traceroute = function(a){response=HttpGet_("https://api.hackertarget.com/mtr/?q="+a);return response;};
	this.Nmap = function(a){response=HttpGet_("http://api.hackertarget.com/nmap/?q="+a);return response;};
	this.URLGrab = function(a){response=HttpGet_("https://api.hackertarget.com/pagelinks/?q="+a);return response;};
	this.GeoIP = function(a){response=HttpGet_("https://tools.keycdn.com/geo.json?host="+a);return response;};
	this.HttpHeader = function(a){response=HttpGet_("http://api.hackertarget.com/httpheaders/?q="+a);return response;};
	this.DetLang = function(a){response=HttpPost_("https://ws.detectlanguage.com/0.2/detect?key=demo&q="+a);return response;};
	this.MyIP = function(){response=HttpGet_("https://api.myip.com");return response;};
	this.GitHubUser = function(a){response=HttpGet_("https://api.github.com/users/"+a);return response;};
	this.GitHubRepos = function(a){response=HttpGet_("https://api.github.com/users/"+a+"/repos");return response;};
	this.GooglePing = function(a){response=HttpGet_("http://www.google.com/ping?sitemap="+a);return response;};
	this.WhatCMS = function(a,b){response=HttpGet_("https://whatcms.org/APIEndpoint/Detect?key="+a+"&url="+b);return response;};
	this.Byksw = function(a){out = a.replace(/e/g, "w");out2 = out.replace(/o/g, "w");out3 = out2.replace(/a/g, "w");out4 = out3.replace(/u/g, "w");out5 = out4.replace(/i/g, "y");out6 = out5.replace(/E/g, "W");out7 = out6.replace(/O/g, "W");out8 = out7.replace(/A/g, "W");out9 = out8.replace(/U/g, "W");out10 = out9.replace(/I/g, "Y");return out10;};
	this.Sleep = function(a){sleep(a);};
	this.HttpGet = function(a){response=HttpGet_(a);return response;};
	this.HttpPost = function(a){response=HttpPost_(a);return response;};
	this.GetDate = function(){return app.SysExec("date");};
	this.Base64e = function(a){return btoa(a);};
	this.Base64d = function(a){return atob(a);};
}
function HttpGet_(url) {
	try {
		xhr = new XMLHttpRequest();
		xhr.open("GET",url,false);
		xhr.send();
		return xhr.response;
	} catch(e) {
		return "Network is unreachable";
	}
}
function HttpPost_(url) {
	try {
		xhr = new XMLHttpRequest();
		xhr.open("POST",url,false);
		xhr.send();
		return xhr.response;
	} catch(e) {
		return "Network is unreachable";
	}
}
function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds) {
			break;
		}
	}
}
stellar = new Stellar();