// src/hooks/useVisitorTracking.ts
import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { type Schema } from '../../amplify/data/resource';

export function useVisitorTracking() {
  const [isTracked, setIsTracked] = useState(false);
  
  useEffect(() => {
    const client = generateClient<Schema>();
    
    const trackVisit = async () => {
      if (isTracked) return; // Only track once per session
      
      try {
        // Get browser and OS info from user agent
        const userAgent = navigator.userAgent;
        const browserInfo = getBrowserInfo(userAgent);
        const osInfo = getOSInfo(userAgent);
        
        // Create a visit record
        await client.models.VisitRecord.create({
          timestamp: new Date().toISOString(),
          referrer: document.referrer || 'direct',
          deviceType: /Mobile|Android|iPhone|iPad|iPod/i.test(userAgent) ? 'mobile' : 'desktop',
          browserName: browserInfo,
          osName: osInfo,
          // Note: country and region would be null here as we can't determine these client-side
          // We'll add a server-side solution for this below
        });
        
        setIsTracked(true);
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };
    
    // Simple browser and OS detection functions
    function getBrowserInfo(ua: string): string {
      if (ua.includes('Chrome')) return 'Chrome';
      if (ua.includes('Firefox')) return 'Firefox';
      if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
      if (ua.includes('Edge')) return 'Edge';
      if (ua.includes('MSIE') || ua.includes('Trident/')) return 'Internet Explorer';
      return 'Other';
    }
    
    function getOSInfo(ua: string): string {
      if (ua.includes('Windows')) return 'Windows';
      if (ua.includes('Mac OS')) return 'MacOS';
      if (ua.includes('Linux')) return 'Linux';
      if (ua.includes('Android')) return 'Android';
      if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
      return 'Other';
    }
    
    // Track after page is fully loaded
    if (document.readyState === 'complete') {
      trackVisit();
    } else {
      window.addEventListener('load', trackVisit);
      return () => window.removeEventListener('load', trackVisit);
    }
  }, [isTracked]);
}