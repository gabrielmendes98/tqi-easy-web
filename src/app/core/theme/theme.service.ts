import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private colorScheme: string = 'light-theme';

  constructor(rendererFactory: RendererFactory2) {
    // Create new renderer from renderFactory, to make it possible to use renderer2 in a service
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  _detectPrefersColorScheme() {
    // Detect if prefers-color-scheme is supported
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      // Set colorScheme to Dark if prefers-color-scheme is dark. Otherwise set to light.
      this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
    } else {
      // If the browser doesn't support prefers-color-scheme, set it as default to dark
      this.colorScheme = 'light-theme';
    }
  }

  _setColorScheme(scheme: string) {
    this.colorScheme = scheme;
    // Save prefers-color-scheme to localStorage
    localStorage.setItem('prefers-color', scheme);
  }

  _getColorScheme() {
    // Check if any prefers-color-scheme is stored in localStorage
    const prefersColor = localStorage.getItem('prefers-color');
    if (prefersColor) {
      // Save prefers-color-scheme from localStorage
      this.colorScheme = prefersColor;
    } else {
      // If no prefers-color-scheme is stored in localStorage, try to detect OS default prefers-color-scheme
      this._detectPrefersColorScheme();
    }
  }

  getCurrentTheme() {
    return localStorage.getItem('prefers-color');
  }

  load() {
    this._getColorScheme();
    this.renderer.addClass(document.body, this.colorScheme);
  }

  update(scheme: string) {
    this._setColorScheme(scheme);
    // Remove the old color-scheme class
    this.renderer.removeClass(document.body, this.colorScheme === 'dark-theme' ? 'light-theme' : 'dark-theme');
    // Add the new / current color-scheme class
    this.renderer.addClass(document.body, scheme);
  }

  currentActive() {
    return this.colorScheme;
  }
}
