/**
 * Facebook Pixel utility functions for tracking events
 * Pixel ID: 1470753217454028
 */

declare global {
  interface Window {
    fbq: any;
  }
}

/**
 * Track a standard Facebook event
 * @param eventName - Standard Facebook event name
 * @param parameters - Optional event parameters
 */
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

/**
 * Track a custom Facebook event
 * @param eventName - Custom event name
 * @param parameters - Optional event parameters
 */
export const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }
};

// Standard Facebook events for easy use
export const FacebookEvents = {
  // Purchase events
  PURCHASE: 'Purchase',
  ADD_TO_CART: 'AddToCart',
  ADD_TO_WISHLIST: 'AddToWishlist',
  INITIATE_CHECKOUT: 'InitiateCheckout',
  ADD_PAYMENT_INFO: 'AddPaymentInfo',
  
  // Lead events
  LEAD: 'Lead',
  COMPLETE_REGISTRATION: 'CompleteRegistration',
  CONTACT: 'Contact',
  SUBMIT_APPLICATION: 'SubmitApplication',
  
  // Engagement events
  VIEW_CONTENT: 'ViewContent',
  SEARCH: 'Search',
  SUBSCRIBE: 'Subscribe',
  START_TRIAL: 'StartTrial',
} as const;

// Helper functions for common events
export const trackPurchase = (value: number, currency: string = 'USD') => {
  trackEvent(FacebookEvents.PURCHASE, { value, currency });
};

export const trackLead = (value?: number, currency: string = 'USD') => {
  const parameters = value ? { value, currency } : undefined;
  trackEvent(FacebookEvents.LEAD, parameters);
};

export const trackCompleteRegistration = () => {
  trackEvent(FacebookEvents.COMPLETE_REGISTRATION);
};

export const trackViewContent = (contentType?: string, contentId?: string) => {
  const parameters: Record<string, any> = {};
  if (contentType) parameters.content_type = contentType;
  if (contentId) parameters.content_ids = [contentId];
  
  trackEvent(FacebookEvents.VIEW_CONTENT, Object.keys(parameters).length > 0 ? parameters : undefined);
};

export const trackSearch = (searchString: string) => {
  trackEvent(FacebookEvents.SEARCH, { search_string: searchString });
};

export const trackSubscribe = (value?: number, currency: string = 'USD') => {
  const parameters = value ? { value, currency } : undefined;
  trackEvent(FacebookEvents.SUBSCRIBE, parameters);
};
