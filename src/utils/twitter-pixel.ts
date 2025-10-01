/**
 * Twitter Pixel utility functions for tracking events
 * Pixel ID: qa5ef
 */

declare global {
  interface Window {
    twq: any;
  }
}

/**
 * Track a Twitter conversion event
 * @param eventId - Twitter Event ID
 * @param parameters - Optional event parameters
 */
export const trackEvent = (eventId: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.twq) {
    window.twq('event', eventId, parameters || {});
  }
};

/**
 * Track a custom Twitter event
 * @param eventName - Custom event name
 * @param parameters - Optional event parameters
 */
export const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.twq) {
    window.twq('track', eventName, parameters || {});
  }
};

// Twitter event IDs for easy use
export const TwitterEvents = {
  // Main conversion event ID
  CONVERSION: 'tw-qa5ef-qa5ef',

  // You can add more specific event IDs here as needed
  // SIGNUP: 'tw-qa5ef-signup',
  // PURCHASE: 'tw-qa5ef-purchase',
};

// Helper functions for common events

/**
 * Track a lead/conversion event
 * @param value - Optional conversion value
 * @param currency - Currency code (default: USD)
 */
export const trackLead = (value?: number, currency: string = 'USD') => {
  const parameters: Record<string, any> = {};
  if (value !== undefined) {
    parameters.value = value;
    parameters.currency = currency;
  }
  trackEvent(TwitterEvents.CONVERSION, parameters);
};

/**
 * Track a signup/registration event
 * @param email - Optional user email
 */
export const trackSignup = (email?: string) => {
  const parameters: Record<string, any> = {};
  if (email) {
    parameters.email = email;
  }
  trackEvent(TwitterEvents.CONVERSION, parameters);
};

/**
 * Track a custom conversion with specific parameters
 * @param parameters - Event parameters
 */
export const trackConversion = (parameters?: Record<string, any>) => {
  trackEvent(TwitterEvents.CONVERSION, parameters);
};
