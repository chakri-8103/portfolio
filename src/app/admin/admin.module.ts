import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { PortfolioAboutComponent } from './screens/dashboard/portfolio/about/about.component';
import { PortfolioAchievementsComponent } from './screens/dashboard/portfolio/achievements/achievements.component';
import { PortfolioCertificationsComponent } from './screens/dashboard/portfolio/certifications/certifications.component';
import { PortfolioContactComponent } from './screens/dashboard/portfolio/contact/contact.component';
import { PortfolioExperienceComponent } from './screens/dashboard/portfolio/experience/experience.component';
import { PortfolioFooterComponent } from './screens/dashboard/portfolio/footer/footer.component';
import { PortfolioHeroComponent } from './screens/dashboard/portfolio/hero/hero.component';
import { PortfolioNavbarComponent } from './screens/dashboard/portfolio/navbar/navbar.component';
import { PortfolioProjectsComponent } from './screens/dashboard/portfolio/projects/projects.component';
import { PortfolioSkillsComponent } from './screens/dashboard/portfolio/skills/skills.component';



@NgModule({
  declarations: [
    DashboardComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PortfolioNavbarComponent,
    PortfolioHeroComponent,
    PortfolioAboutComponent,
    PortfolioSkillsComponent,
    PortfolioProjectsComponent,
    PortfolioExperienceComponent,
    PortfolioCertificationsComponent,
    PortfolioAchievementsComponent,
    PortfolioContactComponent,
    PortfolioFooterComponent
  ]
})
export class AdminModule { }
