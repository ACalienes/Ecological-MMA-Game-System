// Mermaid initialization - only runs if mermaid is loaded dynamically
// (MkDocs Material with superfences renders mermaid at build time, so this may not be needed)
if (typeof mermaid !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    mermaid.initialize({
      startOnLoad: true,
      securityLevel: 'loose',
      theme: 'dark'
    });
  });
}
