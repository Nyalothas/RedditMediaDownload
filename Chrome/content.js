if (document.readyState !== 'complete') {
  window.addEventListener('load', GetRedditVideos);
} else {
  GetRedditVideos();
}

function GetRedditVideos() {
  setTimeout(getVideos(document), 3000)
  function getVideos(doc) {
    let videos = [];
    if (doc) {
      for (let video of doc.getElementsByTagName("video")) {
        videos.push(video);
      }
    }
    if (videos.length > 0) {
      try {
        var v = document.querySelector("p.title");
        var a = document.createElement('a');
        //var linkText = document.createTextNode(" Download");
        //a.appendChild(linkText);
        a.title = " Download";
        a.href = videos[1].currentSrc;
        var i = document.createElement('img');
        i.src = chrome.extension.getURL("icon/down.png");
        i.width = "16";
        i.height = "16";
        i.border = "0";
        i.setAttribute("style","image-rendering: -webkit-optimize-contrast;");
        a.appendChild(i);
        v.appendChild(a);
        
      } catch (err) {
        //return err.message;
      }
    }
    else {
      //Console.log("There are no videos");
    }
    //return videos;
  }
}