// Pan and Zoom functionality for master flowchart

function initPanZoom() {
  const container = document.getElementById('master-flowchart');
  if (!container) {
    return false;
  }

  // Check if we already initialized (container has an SVG child)
  if (container.querySelector('svg')) {
    return true; // Already done
  }

  // Find the mermaid div that follows the container
  // MkDocs renders mermaid blocks as: <pre class="mermaid">...code...</pre>
  // Then mermaid.js converts it to a div with SVG
  let mermaidElement = container.nextElementSibling;

  // Walk forward to find the mermaid element (might be pre or div with .mermaid class)
  while (mermaidElement && !mermaidElement.classList.contains('mermaid')) {
    // Check if it's a pre with mermaid class or contains mermaid
    if (mermaidElement.tagName === 'PRE' && mermaidElement.querySelector('.mermaid')) {
      mermaidElement = mermaidElement.querySelector('.mermaid');
      break;
    }
    mermaidElement = mermaidElement.nextElementSibling;
  }

  if (!mermaidElement) {
    // Try looking for any .mermaid element right after the container's parent section
    const allMermaids = document.querySelectorAll('.mermaid');
    for (const m of allMermaids) {
      // Find the one that's for the master flowchart (the first big one)
      const svg = m.querySelector('svg');
      if (svg && svg.innerHTML.includes('SKILL ISOLATION')) {
        mermaidElement = m;
        break;
      }
    }
  }

  if (!mermaidElement) {
    return false;
  }

  const svg = mermaidElement.querySelector('svg');
  if (!svg) {
    return false;
  }

  // Move the SVG into our container
  container.appendChild(svg);

  // Hide the now-empty mermaid element
  mermaidElement.style.display = 'none';

  // Set SVG to fill container
  svg.style.width = '100%';
  svg.style.height = '100%';
  svg.style.maxWidth = 'none';
  svg.removeAttribute('height');

  // Check if svgPanZoom is available
  if (typeof svgPanZoom === 'undefined') {
    console.warn('Pan-zoom: svgPanZoom library not loaded');
    return false;
  }

  // Initialize svg-pan-zoom
  try {
    const panZoomInstance = svgPanZoom(svg, {
      zoomEnabled: true,
      controlIconsEnabled: false,
      fit: true,
      center: true,
      minZoom: 0.1,
      maxZoom: 20,
      zoomScaleSensitivity: 0.3,
      dblClickZoomEnabled: true,
      mouseWheelZoomEnabled: true,
      panEnabled: true,
      contain: false,
      refreshRate: 'auto'
    });

    // Zoom controls
    const zoomIn = document.getElementById('zoom-in');
    const zoomOut = document.getElementById('zoom-out');
    const zoomReset = document.getElementById('zoom-reset');
    const zoomFit = document.getElementById('zoom-fit');

    if (zoomIn) {
      zoomIn.addEventListener('click', function(e) {
        e.preventDefault();
        panZoomInstance.zoomIn();
      });
    }

    if (zoomOut) {
      zoomOut.addEventListener('click', function(e) {
        e.preventDefault();
        panZoomInstance.zoomOut();
      });
    }

    if (zoomReset) {
      zoomReset.addEventListener('click', function(e) {
        e.preventDefault();
        panZoomInstance.resetZoom();
        panZoomInstance.center();
      });
    }

    if (zoomFit) {
      zoomFit.addEventListener('click', function(e) {
        e.preventDefault();
        panZoomInstance.fit();
        panZoomInstance.center();
      });
    }

    // Handle window resize
    window.addEventListener('resize', function() {
      panZoomInstance.resize();
      panZoomInstance.fit();
      panZoomInstance.center();
    });

    return true;

  } catch (err) {
    console.error('Pan-zoom: Error initializing', err);
    return false;
  }
}

// Retry initialization until successful
function tryInitPanZoom(attempts, delay) {
  if (attempts <= 0) return;

  if (!initPanZoom()) {
    setTimeout(function() {
      tryInitPanZoom(attempts - 1, delay);
    }, delay);
  }
}

// Start trying after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Mermaid needs time to render, so we retry multiple times
  tryInitPanZoom(10, 500); // Try up to 10 times, every 500ms
});

// Also try on full window load
window.addEventListener('load', function() {
  setTimeout(function() {
    tryInitPanZoom(5, 500);
  }, 100);
});
