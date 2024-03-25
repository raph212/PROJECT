document.getElementById('textInput').addEventListener('input', function() {
    const text = this.value;
    const charCountWithSpaces = text.length;
    const charCountWithoutSpaces = text.replace(/\s+/g, '').length;
    const wordCount = text.match(/\w+/g) ? text.match(/\w+/g).length : 0;

    document.getElementById('charCountWithSpaces').textContent = charCountWithSpaces;
    document.getElementById('charCountWithoutSpaces').textContent = charCountWithoutSpaces;
    document.getElementById('wordCount').textContent = wordCount;
});
