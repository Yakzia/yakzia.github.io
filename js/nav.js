window.onload = function () {
    // https://github.com/matthewkastor/html-table-of-contents
    var documentRef = documentRef || document;
    var toc = documentRef.getElementById('toc');

    if (toc){
        var headings = [].slice.call(documentRef.getElementById("postContent").querySelectorAll('h1, h2, h3, h4, h5, h6'));
        
        if (headings){
            headings.forEach(function (heading, index) {
                var anchor = documentRef.createElement('a');
                anchor.setAttribute('name', 'toc' + index);
                anchor.setAttribute('id', 'toc' + index);

                var link = documentRef.createElement('a');
                link.setAttribute('href', '#toc' + index);
                link.textContent = heading.textContent;

                var div = documentRef.createElement('div');
                div.setAttribute('class', heading.tagName.toLowerCase());

                div.appendChild(link);
                toc.appendChild(div);
                heading.parentNode.insertBefore(anchor, heading);
            });
        }
    }
};