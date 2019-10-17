var $ = function(id){
  return document.getElementById(id);
};

window.onload = function(){
  var listNode = $("image_list");
  var captionNode = $("caption");
  var imageNode = $("main_image");

  var imageLinks = listNode.getElementsByTagName("a");

  var i, image, linkNode, link;
  for (i = 0; i < imageLinks.length; i++ ){
    linkNode = imageLinks[i];

    image = new Image();
    image.src = linkNode.getAttribute("href");

    linkNode.onclick = function(evt){
      link = this;
      imageNode.src = link.getAttribute("href");
      captionNode.firstChild.nodeValue = link.getAttribute("title");

      if (!evt){
        evt = window.event;
      }
      else{
        evt.returnFalse = false;
      }
    };
  }
};
