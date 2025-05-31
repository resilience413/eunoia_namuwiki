function showFootnote(event, noteId) {
    event.preventDefault();
    document.querySelectorAll('.popup-footnote').forEach(el => el.style.display = 'none');
    const anchor = event.target;
    const popup = anchor.parentElement.nextElementSibling;
    const note = document.querySelector('#' + noteId + ' .footnote-content');
    if (!popup || !note) return;
    popup.innerText = note.innerText;
    const rect = anchor.getBoundingClientRect();
    popup.style.position = 'absolute';
    popup.style.top = (window.scrollY + rect.bottom + 5) + 'px';
    popup.style.left = (window.scrollX + rect.left) + 'px';
    popup.style.display = 'block';

    document.addEventListener('click', function(e) {
        if (!e.target.closest('sup') && !e.target.classList.contains('popup-footnote')) {
            document.querySelectorAll('.popup-footnote').forEach(el => el.style.display = 'none');
        }
    })
}