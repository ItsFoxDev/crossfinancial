function lmsg(m){
  document.getElementById('loadmsg').innerHTML=m;
}
setTimeout(function(){lmsg('Fetching assets...')},3100)
setTimeout(function(){lmsg('Checking balance...')},3200)
setTimeout(function(){lmsg('Loading transactions...')},3300)
setTimeout(function(){lmsg('Checking for updates...')},3400)
setTimeout(function(){lmsg('Checking connection...')},3500)
setTimeout(function(){lmsg('Establishing connection...')},3600)
setTimeout(function(){lmsg('Loading account...')},3700)
setTimeout(function(){lmsg('Welcome back!')},3800)
setTimeout(function(){
  document.getElementById('splash').classList.remove('activescreen');
},4500)