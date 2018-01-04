import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { OptaplannerExampleSharedModule, UserRouteAccessService } from './shared';
import { OptaplannerExampleAppRoutingModule} from './app-routing.module';
import { OptaplannerExampleHomeModule } from './home/home.module';
import { OptaplannerExampleAdminModule } from './admin/admin.module';
import { OptaplannerExampleAccountModule } from './account/account.module';
import { OptaplannerExampleEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        OptaplannerExampleAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        OptaplannerExampleSharedModule,
        OptaplannerExampleHomeModule,
        OptaplannerExampleAdminModule,
        OptaplannerExampleAccountModule,
        OptaplannerExampleEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class OptaplannerExampleAppModule {}
