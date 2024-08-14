function showContent(sectionId) {
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Initial load: Show home content by default
// showContent('home');