/**
	uSpinner
	Version 1.0
	@author: raahul
	Licence: open source.
*/
  
  (function(){
     window.addEventListener('load', function(){
		var uLoadTemplate = '<div class="u-spinnerBox"><div class="u-spinner"></div></div><span class="u-message-box">Please wait...</span>';
	    var uMask = document.createElement('div');
		uMask.setAttribute('class','u-mask');
		var uLoadBox = document.createElement('div');
		uLoadBox.setAttribute('class','u-loadBox');
	    uLoadBox.innerHTML = uLoadTemplate;
		
		document.body.appendChild(uMask);
		document.body.appendChild(uLoadBox);
		
		function hide(api,elem){
			var cls = elem.getAttribute('class');
			if(cls.search(' u-hide')=== -1)
				cls+=" u-hide";
			elem.setAttribute('class',cls);
		}
		function show(api,elem){
		    if(!messageBox.innerHTML){
			   messageBox.innerHTML = api.message;
			}
		    var cls = elem.getAttribute('class');
			cls=cls.replace(' u-hide','');
			elem.setAttribute('class',cls);
		}
		
		var messageBox = uLoadBox.querySelector('span');
		
	    
		window.uSpinner = {
		    message:'',
			messageStyle:'',
			showSpinner: function(){
				show(this,uMask);
				show(this,uLoadBox);
			},
			hideSpinner: function(){
			    hide(this,uMask);
				hide(this,uLoadBox);
			},
			changeMessage: function(newMessage){
			    this.message = newMessage;
				messageBox.innerHTML = this.message;
			},
			setMessageStyle:function(newStyle){
				this.messageStyle = newStyle;
				messageBox.setAttribute('style',this.messageStyle);
			}
		
		}
		
	 },true)
  
  })()