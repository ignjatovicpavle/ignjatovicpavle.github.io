
document.getElementById('allGalleries').querySelectorAll('img').forEach(element => {
    let text = element.outerHTML;
    let src = text;
    src = src.slice(src.indexOf('"') + 1);
    src = src.slice(0, src.indexOf('"'));
    
    var link = document.createElement('a');
    link.innerHTML = text;
    link.href = src;
    link.target = "_blank"
    
    
    element.parentNode.insertBefore(link, element);
    element.remove();
});
