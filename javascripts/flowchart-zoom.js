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

  // Find all SVGs and analyze them
  const allSvgs = document.querySelectorAll('svg');
  let targetSvg = null;

  console.log('Pan-zoom: Found ' + allSvgs.length + ' SVGs on page');

  // Debug: log info about each SVG
  allSvgs.forEach(function(svg, index) {
    const width = svg.getAttribute('width') || svg.style.width || 'auto';
    const height = svg.getAttribute('height') || svg.style.height || 'auto';
    const viewBox = svg.getAttribute('viewBox') || 'none';
    const childCount = svg.children.length;
    const htmlSnippet = (svg.innerHTML || '').substring(0, 200);

    console.log('SVG #' + index + ': ' + width + 'x' + height + ', viewBox=' + viewBox + ', children=' + childCount);

    // Look for the largest SVG by viewBox dimensions or child count
    // The master flowchart should be significantly larger than icons
    if (viewBox !== 'none') {
      const parts = viewBox.split(' ');
      if (parts.length === 4) {
        const vbWidth = parseFloat(parts[2]);
        const vbHeight = parseFloat(parts[3]);
        // Master flowchart is very wide (>1000) due to LR layout
        if (vbWidth > 500 && vbHeight > 200) {
          console.log('Pan-zoom: SVG #' + index + ' looks like a large diagram (viewBox: ' + vbWidth + 'x' + vbHeight + ')');
          if (!targetSvg) {
            targetSvg = svg;
          }
        }
      }
    }
  });

  if (!targetSvg) {
    console.log('Pan-zoom: No large SVG found yet');
    return false;
  }

  console.log('Pan-zoom: Selected target SVG');

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
