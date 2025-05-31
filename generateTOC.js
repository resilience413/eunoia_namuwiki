function generateTOC() {
    const tocList = document.querySelector('#toc ul');
    tocList.innerHTML = '';
    const headers = Array.from(document.querySelectorAll('h1, h2, h3')).filter(header => !header.closest('#toc') && header.id !== 'toc-title');
    const numberStack = [0, 0, 0];
    headers.forEach((header, index) => {
        if (!header.id) header.id = `section-${index}`;
        const level = parseInt(header.tagName[1]) - 1;
        numberStack[level]++;
        for(let i = level + 1; i < numberStack.length; i++)
            numberStack[i] = 0;
        const numberStr = numberStack.slice(0, level+1).join('.') + '.';
        const numberOnly = numberStr.slice(0, -1);
        const originalText = header.textContent;
        const headerId = header.id;
        header.innerHTML = `<a href="#${headerId}"class="section-number-link">${numberStr}</a>&nbsp;${originalText}`;
        header.id = headerId;
            
        const li = document.createElement('li');
        li.style.marginLeft = (level * 20) + 'px';
        const a = document.createElement('a');
        a.href = '#' + header.id;
        a.textContent = numberOnly;
        const dot = document.createElement('span');
        dot.textContent = '. ';
        const label = document.createElement('span');
        label.textContent = originalText;
        li.appendChild(a);
        li.appendChild(dot);
        li.appendChild(label);
        tocList.appendChild(li);
    });
}