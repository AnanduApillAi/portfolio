'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRestoration() {
  const pathname = usePathname();
  const timeoutIds = useRef<NodeJS.Timeout[]>([]);
  const userHasScrolled = useRef(false);
  const restorationCompleted = useRef(false);

  useEffect(() => {
    // Handle scroll restoration when returning to main page
    if (pathname === '/') {
      const restoreScrollPosition = () => {
        const scrollPosition = sessionStorage.getItem('mainPageScrollPosition') || 
                              localStorage.getItem('mainPageScrollPosition');
        
        if (scrollPosition && !restorationCompleted.current) {
          const targetPosition = parseInt(scrollPosition);
          
          // Validate position
          if (isNaN(targetPosition) || targetPosition < 0) {
            return;
          }

          // Reset user interaction flag
          userHasScrolled.current = false;
          
          // Clear any existing timeouts
          timeoutIds.current.forEach(id => clearTimeout(id));
          timeoutIds.current = [];
          
          // Add scroll listener to detect user interaction
          const handleUserScroll = () => {
            userHasScrolled.current = true;
            // Clear all pending restoration attempts
            timeoutIds.current.forEach(id => clearTimeout(id));
            timeoutIds.current = [];
            // Remove the listener after first user scroll
            window.removeEventListener('scroll', handleUserScroll);
            window.removeEventListener('wheel', handleUserScroll);
            window.removeEventListener('touchmove', handleUserScroll);
          };

          window.addEventListener('scroll', handleUserScroll, { passive: true });
          window.addEventListener('wheel', handleUserScroll, { passive: true });
          window.addEventListener('touchmove', handleUserScroll, { passive: true });
          
          // Multiple restoration attempts with different strategies
          const restoreAttempts = [
            { delay: 0, name: 'immediate' },
            { delay: 50, name: 'short-delay' },
            { delay: 100, name: 'dom-update' },
            { delay: 200, name: 'longer-delay' },
            { delay: 300, name: 'final-attempt' },
          ];
          
          restoreAttempts.forEach(({ delay, name }) => {
            const timeoutId = setTimeout(() => {
              // Only restore if user hasn't scrolled manually
              if (!userHasScrolled.current && !restorationCompleted.current) {
                try {
                  window.scrollTo(0, targetPosition);
                  // Mark as completed after first successful attempt
                  if (window.scrollY === targetPosition || Math.abs(window.scrollY - targetPosition) < 10) {
                    restorationCompleted.current = true;
                    // Clean up listeners
                    window.removeEventListener('scroll', handleUserScroll);
                    window.removeEventListener('wheel', handleUserScroll);
                    window.removeEventListener('touchmove', handleUserScroll);
                  }
                } catch (e) {
                  console.warn(`Scroll restoration attempt ${name} failed:`, e);
                }
              }
            }, delay);
            
            timeoutIds.current.push(timeoutId);
          });

          // Using requestAnimationFrame
          requestAnimationFrame(() => {
            if (!userHasScrolled.current && !restorationCompleted.current) {
              try {
                window.scrollTo(0, targetPosition);
                if (window.scrollY === targetPosition || Math.abs(window.scrollY - targetPosition) < 10) {
                  restorationCompleted.current = true;
                  window.removeEventListener('scroll', handleUserScroll);
                  window.removeEventListener('wheel', handleUserScroll);
                  window.removeEventListener('touchmove', handleUserScroll);
                }
              } catch (e) {
                console.warn('RequestAnimationFrame scroll restoration failed:', e);
              }
            }
          });
          
          // Use Intersection Observer to detect when content is loaded
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !userHasScrolled.current && !restorationCompleted.current) {
                setTimeout(() => {
                  if (!userHasScrolled.current && !restorationCompleted.current) {
                    window.scrollTo(0, targetPosition);
                    if (window.scrollY === targetPosition || Math.abs(window.scrollY - targetPosition) < 10) {
                      restorationCompleted.current = true;
                      window.removeEventListener('scroll', handleUserScroll);
                      window.removeEventListener('wheel', handleUserScroll);
                      window.removeEventListener('touchmove', handleUserScroll);
                    }
                  }
                }, 50);
              }
            });
          });
          
          // Observe the first element in the page
          const firstElement = document.querySelector('main, [data-scroll-target], body > div:first-child');
          if (firstElement) {
            observer.observe(firstElement);
            const observerTimeoutId = setTimeout(() => observer.disconnect(), 2000);
            timeoutIds.current.push(observerTimeoutId);
          }
          
          // Clean up after restoration attempts
          const cleanupTimeoutId = setTimeout(() => {
            sessionStorage.removeItem('mainPageScrollPosition');
            localStorage.removeItem('mainPageScrollPosition');
            sessionStorage.removeItem('scrollPositionTimestamp');
            restorationCompleted.current = false;
            // Clean up listeners
            window.removeEventListener('scroll', handleUserScroll);
            window.removeEventListener('wheel', handleUserScroll);
            window.removeEventListener('touchmove', handleUserScroll);
          }, 2000);
          timeoutIds.current.push(cleanupTimeoutId);
        }
      };

      // Try restoration immediately
      restoreScrollPosition();
      
      // Also try after window load
      const handleLoad = () => restoreScrollPosition();
      
      if (document.readyState === 'loading') {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      } else {
        // Document already loaded, try again
        setTimeout(restoreScrollPosition, 0);
      }
    } else {
      // Reset when leaving the main page
      restorationCompleted.current = false;
      userHasScrolled.current = false;
    }

    // Cleanup function
    return () => {
      timeoutIds.current.forEach(id => clearTimeout(id));
      timeoutIds.current = [];
    };
  }, [pathname]);

  // Also handle the case where user navigates using browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      if (pathname === '/' && !restorationCompleted.current) {
        setTimeout(() => {
          const scrollPosition = sessionStorage.getItem('mainPageScrollPosition') || 
                                localStorage.getItem('mainPageScrollPosition');
          if (scrollPosition) {
            const targetPosition = parseInt(scrollPosition);
            if (!isNaN(targetPosition) && targetPosition >= 0) {
              window.scrollTo(0, targetPosition);
              restorationCompleted.current = true;
            }
          }
        }, 100);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [pathname]);

  // Add a global function for manual scroll restoration
  useEffect(() => {
    (window as any).manualScrollRestore = () => {
      const scrollPosition = sessionStorage.getItem('mainPageScrollPosition') || 
                            localStorage.getItem('mainPageScrollPosition');
      if (scrollPosition) {
        const targetPosition = parseInt(scrollPosition);
        if (!isNaN(targetPosition) && targetPosition >= 0) {
          window.scrollTo(0, targetPosition);
          restorationCompleted.current = true;
          console.log('Manual scroll restoration to:', targetPosition);
        }
      }
    };

    return () => {
      delete (window as any).manualScrollRestore;
    };
  }, []);

  return null;
} 