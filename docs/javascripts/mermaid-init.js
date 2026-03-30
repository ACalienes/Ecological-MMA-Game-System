// Mermaid initialization - respects MkDocs Material light/dark mode toggle
// (MkDocs Material with superfences may render mermaid at build time, making this a fallback)
if (typeof mermaid !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    var scheme = document.body.getAttribute('data-md-color-scheme');
    mermaid.initialize({
      startOnLoad: true,
      securityLevel: 'loose',
      theme: scheme === 'slate' ? 'dark' : 'default'
    });
  });
}
