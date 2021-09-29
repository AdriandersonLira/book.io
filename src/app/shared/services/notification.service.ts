import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  success(message: string): void {
    this.openSnackBar(message, ['success']);
  }

  warn(message: string): void {
    this.openSnackBar(message, ['warn']);
  }

  info(message: string): void {
    this.openSnackBar(message, ['info']);
  }

  error(message: string): void {
    this.openSnackBar(message, ['error']);
  }

  private openSnackBar(message: string, info: string[]): void {
    const snackConfig = new MatSnackBarConfig();
    snackConfig.politeness = 'assertive';
    snackConfig.duration = 5000;
    snackConfig.panelClass = info;

    this.snackBar.open(message, 'X', snackConfig);
  }
}
