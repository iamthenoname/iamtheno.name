document.addEventListener('DOMContentLoaded', function() {
    const footnoteLinks = document.querySelectorAll('a[href^="#fn:"]');

    if (footnoteLinks.length === 0) {
        return;
    }

    // Store all tooltips for easier access in document click listener
    const allTooltips = [];

    footnoteLinks.forEach((link, index) => {
        const linkId = link.id || `link-${index}`;
        link.dataset.footnoteLinkId = linkId; // Assign an ID to the link for checking later
        const linkSup = link.parentElement;
        const container = document.createElement('span');
        container.className = 'footnote-container';
        container.dataset.footnoteFor = linkId;

        if (linkSup && linkSup.tagName === 'SUP') {
            linkSup.parentNode.insertBefore(container, linkSup);
            container.appendChild(linkSup);
        } else {
            link.parentNode.insertBefore(container, link);
            container.appendChild(link);
        }

        const targetId = link.getAttribute('href').substring(1);
        const footnoteElement = document.getElementById(targetId);

        if (footnoteElement) {
            let content = '';
            const tempClone = footnoteElement.cloneNode(true);
            const backrefLink = tempClone.querySelector('a.footnote-backref[role="doc-backlink"]');
            if (backrefLink) {
                if (backrefLink.previousSibling && backrefLink.previousSibling.nodeType === Node.TEXT_NODE && backrefLink.previousSibling.textContent.endsWith('\u00A0')) {
                    backrefLink.previousSibling.textContent = backrefLink.previousSibling.textContent.slice(0, -1);
                }
                backrefLink.remove();
            }
            const paragraph = tempClone.querySelector('p');
            if (paragraph) {
                content = paragraph.innerHTML.trim();
            } else {
                content = tempClone.innerHTML.trim();
            }

            const tooltip = document.createElement('div');
            tooltip.className = 'footnote-tooltip';
            tooltip.innerHTML = content;
            tooltip.style.display = 'none'; // Initially hidden
            tooltip.dataset.controlsLinkId = linkId; // Link tooltip back to its control link
            container.appendChild(tooltip);
            allTooltips.push(tooltip);

            let hideTimeoutId = null;
            const HIDE_DELAY = 150; // Milliseconds, adjust as needed

            function showTooltipDesktop() {
                if (hideTimeoutId) {
                    clearTimeout(hideTimeoutId);
                    hideTimeoutId = null;
                }
                // Reset inline styles 
                tooltip.style.top = ''; 
                tooltip.style.bottom = '';
                tooltip.style.left = ''; 
                tooltip.style.right = ''; 
                // Don't need to reset CSS vars anymore
                
                tooltip.style.visibility = 'hidden';
                tooltip.style.display = 'block'; 
                tooltip.classList.remove('tooltip-align-right');

                // Check horizontal alignment first
                const tooltipRectInitial = tooltip.getBoundingClientRect();
                const viewportWidth = window.innerWidth;
                const safetyMargin = 10;
                let alignRight = false;
                if (tooltipRectInitial.right > (viewportWidth - safetyMargin)) {
                    tooltip.classList.add('tooltip-align-right');
                    alignRight = true;
                } else {
                    tooltip.classList.remove('tooltip-align-right');
                }
                
                // Re-check for opposite overflow
                const tooltipRectAligned = tooltip.getBoundingClientRect();
                if (alignRight && tooltipRectAligned.left < safetyMargin) {
                     tooltip.classList.remove('tooltip-align-right'); // Revert if right-align caused left overflow
                     alignRight = false;
                }
                
                // REMOVED dynamic pointer position calculation

                tooltip.style.visibility = 'visible';
            }

            // --- Desktop Hide Logic --- 
            function startHideTimerDesktop() {
                if (hideTimeoutId) {
                    clearTimeout(hideTimeoutId);
                }
                hideTimeoutId = setTimeout(() => {
                    tooltip.style.display = 'none'; 
                    tooltip.style.visibility = 'hidden';
                    hideTimeoutId = null;
                }, HIDE_DELAY);
            }

            // --- DESKTOP HOVER --- 
            container.addEventListener('mouseenter', () => {
                if (!isMobile()) {
                    showTooltipDesktop();
                }
            });
            tooltip.addEventListener('mouseenter', () => {
                if (!isMobile()) {
                    showTooltipDesktop();
                }
            });
            container.addEventListener('mouseleave', () => {
                if (!isMobile()) {
                    startHideTimerDesktop();
                }
            });
            tooltip.addEventListener('mouseleave', () => {
                if (!isMobile()) {
                    startHideTimerDesktop();
                }
            });

            // --- DESKTOP RIGHT-CLICK --- 
            container.addEventListener('contextmenu', (event) => {
                if (!isMobile()) { /* No special action needed */ }
            });

            // --- MOBILE TAP (LEFT-CLICK ON LINK - CAPTURE PHASE) ---
            link.addEventListener('click', function(event) {
                if (isMobile()) {
                    event.preventDefault();
                    event.stopImmediatePropagation(); 

                    const currentlyVisible = tooltip.style.display === 'block';

                    // Hide all other tooltips first
                    allTooltips.forEach(otherTooltip => {
                        if (otherTooltip !== tooltip) {
                            otherTooltip.style.display = 'none';
                        }
                    });

                    if (currentlyVisible) {
                        return; 
                    }
                    
                    // --- Mobile Positioning --- 
                    // 1. Prepare measurement
                    tooltip.style.visibility = 'hidden';
                    tooltip.style.display = 'block';
                    tooltip.style.left = ''; // Clear previous JS positioning
                    tooltip.style.right = '';
                    tooltip.style.top = ''; 
                    tooltip.style.bottom = '';
                    tooltip.classList.remove('tooltip-align-right'); 

                    // 2. Calculate Vertical Position (Above/Below Link)
                    const linkRect = link.getBoundingClientRect(); 
                    const tooltipHeight = tooltip.offsetHeight;
                    const viewportHeight = window.innerHeight;
                    const spaceAbove = linkRect.top;
                    const spaceBelow = viewportHeight - linkRect.bottom;
                    const safetyMarginVertical = 10; 
                    const verticalOffset = 5; 

                    if (spaceBelow >= tooltipHeight + safetyMarginVertical) {
                        tooltip.style.top = `${container.offsetHeight + verticalOffset}px`;
                        tooltip.style.bottom = 'auto';
                    } else if (spaceAbove >= tooltipHeight + safetyMarginVertical) {
                        tooltip.style.bottom = `${container.offsetHeight + verticalOffset}px`;
                        tooltip.style.top = 'auto';
                    } else {
                        tooltip.style.top = `${container.offsetHeight + verticalOffset}px`;
                        tooltip.style.bottom = 'auto';
                    }

                    // 3. Calculate Horizontal Position (Centered, Clamped to Viewport)
                    // Note: Tooltip width is fixed via CSS: calc(100vw - 30px)
                    const tooltipWidth = tooltip.offsetWidth; // Get the actual width based on CSS
                    const viewportWidth = window.innerWidth;
                    const safetyMarginHorizontal = 15; // Match the calc() margin (30px / 2)

                    // Ideal center: align tooltip center with container center
                    const containerRect = container.getBoundingClientRect();
                    const containerCenter = containerRect.left + containerRect.width / 2;
                    let idealLeftViewport = containerCenter - tooltipWidth / 2;
                    
                    // Clamp to viewport boundaries
                    let calculatedLeftViewport = Math.max(safetyMarginHorizontal, idealLeftViewport);
                    calculatedLeftViewport = Math.min(calculatedLeftViewport, viewportWidth - tooltipWidth - safetyMarginHorizontal);
                                        
                    // Convert viewport-relative left to style.left relative to container
                    const finalLeftStyle = calculatedLeftViewport - containerRect.left;

                    tooltip.style.left = `${finalLeftStyle}px`;
                    tooltip.style.right = 'auto';

                    // 4. Make visible
                    tooltip.style.visibility = 'visible';
                } 
            }, true);

        } 
    });

    document.addEventListener('click', function(event) {
        if (!isMobile()) return; // Only run this logic on mobile

        // Check if the click was on one of the footnote links that triggered a tooltip
        const clickedLink = event.target.closest('a[href^="#fn:"]');
        const linkIdClicked = clickedLink ? clickedLink.dataset.footnoteLinkId : null;

        // Hide ALL currently visible tooltips UNLESS the click was on the link that controls it.
        allTooltips.forEach(visibleTooltip => {
            if (visibleTooltip.style.display === 'block') {
                 const controlsLinkId = visibleTooltip.dataset.controlsLinkId;
                 // Hide if the click was NOT on the link that controls this tooltip
                 if (!linkIdClicked || linkIdClicked !== controlsLinkId) {
                     visibleTooltip.style.display = 'none';
                 }
                 // If click WAS on the link for this tooltip, do nothing here, let it stay open.
            }
        });
    });

    function isMobile() {
        return window.innerWidth <= 768;
    }
});
