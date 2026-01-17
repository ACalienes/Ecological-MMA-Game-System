// Pan and Zoom functionality for master flowchart

function initPanZoom() {
  const container = document.getElementById('master-flowchart');
  if (!container) {
    console.log('Pan-zoom: Container not found');
    return false;
  }

  // Check if we already initialized (container has an SVG child)
  if (container.querySelector('svg')) {
    console.log('Pan-zoom: Already initialized');
    return true;
  }

  // Find the master flowchart SVG by looking for all SVGs and finding the big one
  // that contains our unique content
  const allSvgs = document.querySelectorAll('svg');
  let targetSvg = null;

  for (const svg of allSvgs) {
    // Check if this SVG contains text unique to our master flowchart
    const svgText = svg.textContent || svg.innerText || '';
    if (svgText.includes('SKILL ISOLATION') || svgText.includes('OPEN SPACE')) {
      targetSvg = svg;
      console.log('Pan-zoom: Found master flowchart SVG');
      break;
    }
  }

  if (!targetSvg) {
    console.log('Pan-zoom: Master flowchart SVG not found yet');
    return false;
  }

  // Get the parent element to hide it after we move the SVG
  const originalParent = targetSvg.parentElement;

  // Clone the SVG and append to container (moving can cause issues)
  const svgClone = targetSvg.cloneNode(true);
  container.appendChild(svgClone);

  // Hide the original
  if (originalParent) {
    originalParent.style.display = 'none';
  }

  // Set SVG to fill container
  svgClone.style.width = '100%';
  svgClone.style.height = '100%';
  svgClone.style.maxWidth = 'none';
  svgClone.removeAttribute('height');

  // Check if svgPanZoom is available
  if (typeof svgPanZoom === 'undefined') {
    console.log('Pan-zoom: svgPanZoom library not loaded');
    return false;
  }

  // Initialize svg-pan-zoom
  try {
    const panZoomInstance = svgPanZoom(svgClone, {
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

    console.log('Pan-zoom: Initialized successfully');

    // Zoom controls
    const zoomIn = document.getElementById('zoom-in');
    const zoomOut = document.getElementById('zoom-out');
    const zoomReset = document.getElementById('zoom-reset');
    const zoomFit = document.getElementById('zoom-fit');

    if (zoomIn) {
      zoomIn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        panZoomInstance.zoomIn();
      });
    }

    if (zoomOut) {
      zoomOut.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        panZoomInstance.zoomOut();
      });
    }

    if (zoomReset) {
      zoomReset.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        panZoomInstance.resetZoom();
        panZoomInstance.center();
      });
    }

    if (zoomFit) {
      zoomFit.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        panZoomInstance.fit();
        panZoomInstance.center();
      });
    }

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        panZoomInstance.resize();
        panZoomInstance.fit();
        panZoomInstance.center();
      }, 100);
    });

    return true;

  } catch (err) {
    console.error('Pan-zoom: Error initializing', err);
    return false;
  }
}

// Retry initialization until successful
function tryInitPanZoom(attempts, delay) {
  if (attempts <= 0) {
    console.log('Pan-zoom: Max attempts reached');
    return;
  }

  if (!initPanZoom()) {
    setTimeout(function() {
      tryInitPanZoom(attempts - 1, delay);
    }, delay);
  }
}

// Start trying after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('Pan-zoom: DOMContentLoaded fired');
  // Mermaid needs time to render, so we retry multiple times
  tryInitPanZoom(20, 300); // Try up to 20 times, every 300ms (6 seconds total)
});

// Also try on full window load
window.addEventListener('load', function() {
  console.log('Pan-zoom: window load fired');
  setTimeout(function() {
    tryInitPanZoom(10, 500);
  }, 500);
});
