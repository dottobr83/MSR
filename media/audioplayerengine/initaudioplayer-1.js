jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingaudioplayer-1").amazingaudioplayer({
        jsfolder:jsFolder,
        skinsfoldername:"",
        tracklistarrowimage:"tracklistarrow-48-16-0.png",
        timeformatlive:"%CURRENT% / LIVE",
        volumeimagewidth:24,
        barbackgroundimage:"",
        showtime:false,
        titleinbarwidth:80,
        showprogress:true,
        random:false,
        titleformat:"%TITLE%",
        prevnextimagewidth:48,
        height:600,
        imageheight:100,
        loadingformat:"Loading...",
        prevnextimage:"prevnext-48-48-1.png",
        showinfo:true,
        tracklistitem:10,
        skin:"DarkBox",
        loopimage:"loop-24-24-0.png",
        loopimagewidth:24,
        showstop:false,
        prevnextimageheight:48,
        infoformat:"%ARTIST% %ALBUM%<br />%INFO%",
        showloading:false,
        volumebarheight:72,
        tracklistarrowimagewidth:48,
        stopimagewidth:24,
        imagefullwidth:false,
        skinsfoldername:"",
        width:300,
        showtitleinbar:false,
        showtracklist:true,
        volumeimage:"volume-24-24-0.png",
        playpauseimagewidth:48,
        loopimageheight:24,
        tracklistitemformat:"%ID%. %TITLE% <span style='position:absolute;top:0;right:0;'>%DURATION%</span>",
        showloop:true,
        titleinbarwidthmode:"fixed",
        playpauseimageheight:48,
        showbackgroundimage:false,
        stopimage:"stop-24-24-0.png",
        showprevnext:true,
        backgroundimage:"",
        autoplay:false,
        volumebarpadding:8,
        progressheight:8,
        showtracklistbackgroundimage:false,
        showtitle:true,
        tracklistarrowimageheight:16,
        heightmode:"auto",
        titleinbarformat:"%TITLE%",
        stopimageheight:24,
        volumeimageheight:24,
        showbarbackgroundimage:false,
        fullwidth:false,
        tracklistbackgroundimage:"",
        showimage:true,
        imagewidth:100,
        timeformat:"%CURRENT% / %DURATION%",
        showvolume:true,
        showvolumebar:true,
        loop:1,
        playpauseimage:"playpause-48-48-1.png"
    });
});