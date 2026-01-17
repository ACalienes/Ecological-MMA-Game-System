// CSS Transform-based zoom for flowchart
var currentZoom = 1;

function zoomFlowchart(factor) {
    var content = document.getElementById('master-flowchart');
    if (!content) return;

    if (factor === 1) {
        // Reset
        currentZoom = 1;
    } else {
        // Multiply current zoom
        currentZoom *= factor;
        // Clamp between 0.3 and 3
        currentZoom = Math.max(0.3, Math.min(3, currentZoom));
    }

    content.style.transform = 'scale(' + currentZoom + ')';
}

// Add scroll wheel zoom
document.addEventListener('DOMContentLoaded', function() {
    var viewport = document.querySelector('.flowchart-viewport');
    if (!viewport) return;

    viewport.addEventListener('wheel', function(e) {
        // Only zoom if Ctrl/Cmd is held
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            var factor = e.deltaY > 0 ? 0.9 : 1.1;
            zoomFlowchart(factor);
        }
    }, { passive: false });
});
