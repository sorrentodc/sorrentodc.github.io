$.bigfoot({
    actionOriginalFN: "ignore",
    numberResetSelector: "article",
    buttonMarkup: (
        "<a href=\"#\" class=\"footnote-button\" " +
            "id=\"{{SUP:data-footnote-backlink-ref}}\" " +
            "data-footnote-identifier=\"{{FOOTNOTEID}}\" " +
            "data-footnote-style=\"default\"" +
            "alt=\"See Footnote {{FOOTNOTEID}}\" " +
            "rel=\"footnote\"" +
            "data-footnote-content=\"{{FOOTNOTECONTENT}}\">" +
                "{{FOOTNOTENUM}}" +
        "</a>"
    )
  });

  
  function changeSourceAll() {
    
    var images = document.getElementById("postMain").querySelectorAll('img[alt*="thumbnail"]')
    var imagesLength = images.length
    for (var i = 0; i < imagesLength; i++) {
        var oldImage = images[i];
        var newAnchor = document.createElement("a");
        newAnchor.href = oldImage.src.replace("/thumbnails", "")
        newAnchor.className = "carousel_item";

        var newImage = document.createElement("img");
        newImage.className = "carousel_image2 profilePic";
        
        // var lastPath = oldImage.src.lastIndexOf("/")
        // newImage.src = oldImage.src.slice(0, lastPath) + "/thumbnails" + oldImage.src.slice(lastPath);
        newImage.src = oldImage.src;

        newAnchor.appendChild(newImage);

        oldImage.parentNode.insertBefore(newAnchor,oldImage)
        oldImage.parentNode.removeChild(oldImage)
    }
}
window.onload = function() {
    changeSourceAll();
    baguetteBox.run('.carousel_item');
};
