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

  // Debug: Look for mermaid elements and see what's inside them
  const mermaidElements = document.querySelectorAll('.mermaid, pre.mermaid, div.mermaid, [class*="mermaid"]');
  console.log('Pan-zoom: Found ' + mermaidElements.length + ' mermaid elements');

  mermaidElements.forEach(function(el, index) {
    console.log('Mermaid #' + index + ': tagName=' + el.tagName + ', class=' + el.className);
    const svg = el.querySelector('svg');
    if (svg) {
      const viewBox = svg.getAttribute('viewBox') || 'none';
      console.log('  -> Has SVG inside! viewBox=' + viewBox);
    } else {
      console.log('  -> No SVG inside. innerHTML length=' + (el.innerHTML || '').length);
    }
  });

  // Also check for SVGs that might be siblings of mermaid elements
  const allPreElements = document.querySelectorAll('pre');
  console.log('Pan-zoom: Found ' + allPreElements.length + ' pre elements');

  // Look specifically for the master flowchart - it should be near our container
  // Walk through siblings after the container
  let sibling = container.nextElementSibling;
  let searchCount = 0;
  while (sibling && searchCount < 20) {
    console.log('Sibling #' + searchCount + ': tagName=' + sibling.tagName + ', class=' + sibling.className);

    // Check if this sibling has an SVG
    const svg = sibling.querySelector('svg');
    if (svg) {
      const viewBox = svg.getAttribute('viewBox') || 'none';
      console.log('  -> Found SVG! viewBox=' + viewBox);

      // Check if this is a large diagram (not an icon)
      if (viewBox !== 'none') {
        const parts = viewBox.split(' ');
        if (parts.length === 4) {
          const vbWidth = parseFloat(parts[2]);
          const vbHeight = parseFloat(parts[3]);
          if (vbWidth > 100 || vbHeight > 100) {
            console.log('Pan-zoom: Found flowchart SVG in sibling!');
            return setupPanZoom(container, svg, sibling);
          }
        }
      }
    }

    // Check if the sibling itself is an SVG
    if (sibling.tagName === 'SVG' || sibling.tagName === 'svg') {
      console.log('Pan-zoom: Sibling IS an SVG');
      const viewBox = sibling.getAttribute('viewBox') || 'none';
      if (viewBox !== 'none') {
        const parts = viewBox.split(' ');
        if (parts.length === 4 && parseFloat(parts[2]) > 100) {
          return setupPanZoom(container, sibling, sibling.parentElement);
        }
      }
    }

    sibling = sibling.nextElementSibling;
    searchCount++;
  }

  console.log('Pan-zoom: No flowchart found in siblings');
  return false;
}

function setupPanZoom(container, svg, originalParent) {
  // Clone the SVG and append to container
  const svgClone = svg.cloneNode(true);
  container.appendChild(svgClone);

  // Hide the original diagram
  if (originalParent && originalParent !== container) {
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
    document.getElementById('zoom-in')?.addEventListener('click', function(e) {
      e.preventDefault();
      panZoomInstance.zoomIn();
    });

    document.getElementById('zoom-out')?.addEventListener('click', function(e) {
      e.preventDefault();
      panZoomInstance.zoomOut();
    });

    document.getElementById('zoom-reset')?.addEventListener('click', function(e) {
      e.preventDefault();
      panZoomInstance.resetZoom();
      panZoomInstance.center();
    });

    document.getElementById('zoom-fit')?.addEventListener('click', function(e) {
      e.preventDefault();
      panZoomInstance.fit();
      panZoomInstance.center();
    });

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
  tryInitPanZoom(30, 500); // Try up to 30 times, every 500ms (15 seconds total)
});

// Also try on full window load
window.addEventListener('load', function() {
  console.log('Pan-zoom: window load fired');
  setTimeout(function() {
    tryInitPanZoom(20, 500);
  }, 1000);
});
