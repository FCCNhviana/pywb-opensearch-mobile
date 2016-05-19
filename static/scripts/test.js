//<script type="text/javascript"> //For mobile versions
document.alert("js.cookie.js");
    function resize() { 
       url = "{{ url }}";
    ts = "{{ wbrequest.wb_url.timestamp }}";
    var w = window.innerWidth;
    var h = window.innerHeight;
   if (w <= 1024) {
        window.location='{{ wbrequest.user_metadata.search_location }}/noFrame/replay/'+ts+'/'+url;
    }
    else
      window.location='{{ wbrequest.user_metadata.search_location }}/wayback/'+ts+'/'+url;
  }

  window.onresize = resize;
//</script>