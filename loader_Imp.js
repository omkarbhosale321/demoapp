$(document).ready(function(){

			/*pre loader js*/			
			var     obj = {},
		    someBlock = $('.someBlock');

		function getValues() {
		obj.textVal = "";
		console.log(obj.textVal );
		obj.percentVal ="";
		console.log(obj.percentVal);

		obj.durationVal ='4000';
		console.log(obj.durationVal);
		}

		function start_loader() {
			var x=document.getElementById("page-top").style.opacity = "0.7";
						
		    someBlock.preloader({
		    text: obj.textVal,
		    percent: obj.percentVal,
		    duration:'50000'		    	
		    	
		});
		$('.diesel_loader').each(function(k,v) {
		    if (v.value.length == 0) $(v).attr('disabled', true);
		});
		
		//alert("loder started");
		}

		function stop_loader() {
		someBlock.preloader('remove');
		$('.diesel_loader').attr('disabled', false);
		document.getElementById("page-top").style.opacity = "1.0";
		//alert("loder stopped");
		}


		$('#apply').on('click', function () {
		getValues();
		someBlock.preloader('update', {
		    text: obj.textVal,
		    percent: obj.percentVal,
		    duration: obj.durationVal
		});
		});
				
			//part 2 code


		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-36251023-1']);
		_gaq.push(['_setDomainName', 'jqueryscript.net']);
		_gaq.push(['_trackPageview']);

		(function() {
		  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
			
			
	//	 	
		/*END  pre loader js*/
});//document End
