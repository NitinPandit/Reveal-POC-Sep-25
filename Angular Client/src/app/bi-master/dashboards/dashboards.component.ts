import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RevealDashboardsService } from 'src/app/services/reveal-dashboards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboards',
  standalone: false,
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  dashboardNames: string[] = [];


  constructor(private revealDashboardsService: RevealDashboardsService, private router: Router) {}


  ngOnInit() {
    this.revealDashboardsService.getDashboards().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.dashboardNames = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
    copyLink(name: string): void {
    // Build the same URL used by the View button
    const tree = this.router.createUrlTree(['/bi-master/view-dashboard', name]);
    const url = window.location.origin + this.router.serializeUrl(tree);

    navigator.clipboard.writeText(url)
      .then(() => alert('Link copied to clipboard!'))
      .catch(() => alert('Failed to copy link. Please try again.'));
  }
}
