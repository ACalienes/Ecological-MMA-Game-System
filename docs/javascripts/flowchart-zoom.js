// Flowchart zoom - Option B: Simple scrollable container
// No complex pan/zoom, just makes the diagram scrollable

document.addEventListener('DOMContentLoaded', function() {
  // Find the container and the mermaid diagram that follows it
  const container = document.getElementById('master-flowchart');
  if (!container) return;

  // The mermaid diagram should be a sibling after the container
  // Find it and move it inside the container
  let sibling = container.nextElementSibling;
  while (sibling) {
    // Look for pre.mermaid or div with mermaid SVG
    if (sibling.classList.contains('mermaid') ||
        sibling.querySelector('.mermaid') ||
        sibling.querySelector('svg')) {

      // Found the diagram - move it into the container
      const diagram = sibling.classList.contains('mermaid') ? sibling :
                      sibling.querySelector('.mermaid') || sibling;

      container.appendChild(diagram.cloneNode(true));
      sibling.style.display = 'none';
      console.log('Flowchart: Moved diagram into scrollable container');
      break;
    }
    sibling = sibling.nextElementSibling;
  }
});
