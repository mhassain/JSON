
 $(document).ready(function(){  
      $("button").click(function(){  
           $("table").show();  
           $.getJSON("video.json", function(data){  
                $.each(data, function(key, value){  
                     $("table").append("<tr><td>"+value.video_title+"</td></tr>");  
                });  
           });  
      });  
 });  
 
