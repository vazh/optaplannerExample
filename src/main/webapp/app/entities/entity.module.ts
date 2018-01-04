import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OptaplannerExampleSkillModule } from './skill/skill.module';
import { OptaplannerExampleEmployeeModule } from './employee/employee.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        OptaplannerExampleSkillModule,
        OptaplannerExampleEmployeeModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OptaplannerExampleEntityModule {}
