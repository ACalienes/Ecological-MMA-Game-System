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

  // Find the master flowchart SVG - it's the large one with many nodes
  // Search by checking innerHTML for unique identifiers
  const allSvgs = document.querySelectorAll('svg');
  let targetSvg = null;
  let maxNodes = 0;

  console.log('Pan-zoom: Found ' + allSvgs.length + ' SVGs on page');

  for (const svg of allSvgs) {
    // Check innerHTML for our unique subgraph identifiers
    const svgHtml = svg.innerHTML || '';

    // Look for unique identifiers from our master flowchart
    if (svgHtml.includes('SKILL') && svgHtml.includes('STRIKING') && svgHtml.includes('GROUND')) {
      targetSvg = svg;
      console.log('Pan-zoom: Found master flowchart by content markers');
      break;
    }

    // Fallback: find the SVG with the most nodes (largest diagram)
    const nodeCount = svg.querySelectorAll('g.node, g.cluster').length;
    if (nodeCount > maxNodes) {
      maxNodes = nodeCount;
      targetSvg = svg;
    }
  }

  // Use the largest SVG if we found one with significant content
  if (targetSvg && maxNodes > 20) {
    console.log('Pan-zoom: Using largest SVG with ' + maxNodes + ' nodes');
  }

  if (!targetSvg) {
    console.log('Pan-zoom: No suitable SVG found yet');
    return false;
  }

  // Get the parent element to hide it after we clone
  const originalParent = targetSvg.parentElement;

  // Clone the SVG and append to container
  const svgClone = targetSvg.cloneNode(true);
  container.appendChild(svgClone);

  // Hide the original diagram
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
  tryInitPanZoom(20, 300);
});

// Also try on full window load
window.addEventListener('load', function() {
  console.log('Pan-zoom: window load fired');
  setTimeout(function() {
    tryInitPanZoom(10, 500);
  }, 500);
});
