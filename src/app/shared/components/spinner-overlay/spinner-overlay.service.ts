import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { ErrorOverlayComponent } from './error-overlay/error-overlay.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { SuccessOverlayComponent } from './success-overlay/success-overlay.component';

@Injectable({
  providedIn: 'root',
})
export class SpinnerOverlayService {
  private overlayRef?: OverlayRef;

  constructor(private overlay: Overlay) {}

  showLoading(): void {
    // Hack avoiding `ExpressionChangedAfterItHasBeenCheckedError` error
    Promise.resolve(null).then(() => {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically(),
        hasBackdrop: true,
      });
      this.overlayRef.attach(new ComponentPortal(SpinnerOverlayComponent));
    });
  }

  showSuccess(): void {
    this.overlayRef?.detach();
    this.overlayRef?.attach(new ComponentPortal(SuccessOverlayComponent));

    setTimeout(() => {
      this.hide();
    }, 1200);
  }

  showError(): void {
    this.overlayRef?.detach();
    this.overlayRef?.attach(new ComponentPortal(ErrorOverlayComponent));

    setTimeout(() => {
      this.hide();
    }, 1200);
  }

  hide(): void {
    this.overlayRef?.detach();
    this.overlayRef = undefined;
  }
}