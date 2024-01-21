document.addEventListener('DOMContentLoaded', function() {
    // Select all links
    var links = document.querySelectorAll('a');

    // For each link
    links.forEach(function(link) {
        // Fetch the metadata of the linked page
        fetch('https://api.linkpreview.net/?key=2b2ec9629d4292019f83cccc50de6b95&q=' + link.href)
            .then(response => response.json())
            .then(data => {
                // Create a new div to hold the preview
                var preview = document.createElement('div');

                // Add the preview image and title to the div
                preview.innerHTML = '<img src="' + data.image + '"><p>' + data.title + '</p>';

                // Insert the preview div after the link
                link.parentNode.insertBefore(preview, link.nextSibling);
            });
    });
});