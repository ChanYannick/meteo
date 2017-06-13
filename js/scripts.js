 /* Contacter l'API de openweathermap via un appel AJAX
        	- URL: 'http://api.openweathermap.org/data/2.5/weather'
        	- paramètres:
            	> lat: la latitude
                > lon: la longitude
                > units: 'metric'
                > lang: 'fr'
                > APPID: 'd45b8879e356f2828ebd504fe1b17275'
                
            et on examine le retour de données ensemble avant de continuer
 */
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
       
        var latitude		= position.coords.latitude;							
				var longitude		= position.coords.longitude;
        var result	= 'Latitude: ' + latitude + ' / Longitude: ' + longitude;
        
        $.getJSON( 
        			"http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric&lang=fr&APPID=d45b8879e356f2828ebd504fe1b17275"
          )
    .done(function(data){
  	   		var $h2 = $("<h2>à "+data.name+"</h2><p>"+result+"</p>");
          var $temp = $("<p>"+data.main.temp+"</p>");
           var $weather = $("<p>"+data.weather[0].description+"</p>");
          var $hum = $("<p>Taux d'humidité: "+data.main.humidity+" %</p>");
          var $pres = $("<p>Pression atmosphérique: "+data.main.pressure+" hPA</p>");
          $h2.appendTo("#temp");  
          $temp.appendTo(".measure");
          $weather.appendTo("#desc");
          $hum.appendTo("#desc");
          $pres.appendTo("#desc");
          
      
 		 });
  });
}

