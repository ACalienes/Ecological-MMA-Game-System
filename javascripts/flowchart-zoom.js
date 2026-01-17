// Pan and Zoom functionality for master flowchart
document.addEventListener('DOMContentLoaded', function() {
  // Wait for Mermaid to render
  setTimeout(function() {
    initPanZoom();
  }, 1000);
});

function initPanZoom() {
  // Find the master flowchart container
  const container = document.getElementById('master-flowchart');
  if (!container) return;

  const svg = container.querySelector('svg');
  if (!svg) return;

  // Set SVG to fill container
  svg.style.width = '100%';
  svg.style.height = '100%';
  svg.style.maxWidth = 'none';

  // Initialize svg-pan-zoom
  const panZoomInstance = svgPanZoom(svg, {
    zoomEnabled: true,
    controlIconsEnabled: false,
    fit: true,
    center: true,
    minZoom: 0.25,
    maxZoom: 10,
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
    zoomIn.addEventListener('click', function() {
      panZoomInstance.zoomIn();
    });
  }

  if (zoomOut) {
    zoomOut.addEventListener('click', function() {
      panZoomInstance.zoomOut();
    });
  }

  if (zoomReset) {
    zoomReset.addEventListener('click', function() {
      panZoomInstance.resetZoom();
      panZoomInstance.center();
    });
  }

  if (zoomFit) {
    zoomFit.addEventListener('click', function() {
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
}
