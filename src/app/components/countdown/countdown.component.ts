import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent {
  private targetDate = new Date('2024-09-21T10:30:00');
  months: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.calculateCountdown();
    this.intervalId = setInterval(() => this.calculateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private calculateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance < 0) {
      this.months = this.days = this.hours = this.minutes = this.seconds = 0;
      return;
    }

    const secondsInMinute = 60;
    const secondsInHour = 60 * secondsInMinute;
    const secondsInDay = 24 * secondsInHour;
    const secondsInMonth = 30 * secondsInDay; // approx

    this.months = Math.floor(distance / (secondsInMonth * 1000));
    this.days = Math.floor((distance % (secondsInMonth * 1000)) / (secondsInDay * 1000));
    this.hours = Math.floor((distance % (secondsInDay * 1000)) / (secondsInHour * 1000));
    this.minutes = Math.floor((distance % (secondsInHour * 1000)) / (secondsInMinute * 1000));
    this.seconds = Math.floor((distance % (secondsInMinute * 1000)) / 1000);
  }
}
