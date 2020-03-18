import { Routes } from '@angular/router';
import { TermsComponent } from '../components/terms/terms.component';
import { PrivacyComponent } from '../components/privacy/privacy.component';
import { CookiesComponent } from '../components/cookies/cookies.component';

export const PAPERS_ROUTES : Routes = [
    {
        path: 'terms-of-service',
        component: TermsComponent
    },
    {
        path: 'privacy-policy',
        component: PrivacyComponent
    },
    {
        path: 'cookies-policy',
        component: CookiesComponent
    }
]