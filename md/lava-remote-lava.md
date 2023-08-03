# 
from:lava-remote-lava.html

Using Lava Remotely
===================

Many people assume that Lava is limited to being used inside Rock. For the most part that is true, but we have created some neat tools to help you extend the power of Lava to other websites running alternative technologies.

Lava REST Endpoint
------------------

The Lava REST endpoint is a simple endpoint that takes Lava as input and returns the rendered template as output. This endpoint is easily used by any programming language, including JavaScript.

Be very careful when using this endpoint if Javascript as your souce code is visible to all users. Seeing the endpoint and the API key allows them to send any Lava they'd like, which would be run by the user linked to the API key. This is fine if you've carefully locked down the endpoint, but generally you should avoid using Javascript and instead use PHP, Ruby, or some other server-side language. To enforce security this endpoint can only be accessed by HTTPS.

```
<?php
    $lavaTemplate = "{% person id:'3' %}{{ person.FullName }} {% endperson %}";
    $apiKey = "qex8edGLGxy7mcpIIiAyIRJT";                                                                    
                
    
    $ch = curl\_init("http://rock.rocksolidchurchdemo.com/api/Lava/RenderTemplate");                                                                      
    curl\_setopt($ch, CURLOPT\_CUSTOMREQUEST, "POST");                                                                     
    curl\_setopt($ch, CURLOPT\_POSTFIELDS, $lavaTemplate);                                                                  
    //curl\_setopt($ch, CURLOPT\_RETURNTRANSFER, true);                                                                      
    curl\_setopt($ch, CURLOPT\_HTTPHEADER, array(                                                                          
        'Content-Type: Content-type: application/x-www-form-urlencoded; charset=UTF-8',                                                                                
        'Content-Length: ' . strlen($lavaTemplate),
        'Authorization-Token: ' . $apiKey)
    );                                                                                                                   
                                                                                                                         
    $result = curl\_exec($ch);
?>

```
```
<div id="lava-results"></div>

<script>
var lavaTemplate = "{% person id:'3' %}{{ person.FullName }} {% endperson %}";

var apiKey = 'qex8edGLGxy7mcpIIiAyIRJT';

$.ajax({
	url: 'http://localhost:6229/api/Lava/RenderTemplate',
	data : lavaTemplate,
	type: 'POST',
	beforeSend: function (request)
	{
		request.setRequestHeader("Authorization-Token", apiKey);
	},
	success: function(data) {
      $('#lava-results').html(data);
	},
	
});
</script>
```