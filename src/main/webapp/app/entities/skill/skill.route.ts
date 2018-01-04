import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { SkillComponent } from './skill.component';
import { SkillDetailComponent } from './skill-detail.component';
import { SkillPopupComponent } from './skill-dialog.component';
import { SkillDeletePopupComponent } from './skill-delete-dialog.component';

@Injectable()
export class SkillResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const skillRoute: Routes = [
    {
        path: 'skill',
        component: SkillComponent,
        resolve: {
            'pagingParams': SkillResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Skills'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'skill/:id',
        component: SkillDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Skills'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const skillPopupRoute: Routes = [
    {
        path: 'skill-new',
        component: SkillPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Skills'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'skill/:id/edit',
        component: SkillPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Skills'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'skill/:id/delete',
        component: SkillDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Skills'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
