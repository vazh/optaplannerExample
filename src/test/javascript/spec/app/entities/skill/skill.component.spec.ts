/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

import { OptaplannerExampleTestModule } from '../../../test.module';
import { SkillComponent } from '../../../../../../main/webapp/app/entities/skill/skill.component';
import { SkillService } from '../../../../../../main/webapp/app/entities/skill/skill.service';
import { Skill } from '../../../../../../main/webapp/app/entities/skill/skill.model';

describe('Component Tests', () => {

    describe('Skill Management Component', () => {
        let comp: SkillComponent;
        let fixture: ComponentFixture<SkillComponent>;
        let service: SkillService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [OptaplannerExampleTestModule],
                declarations: [SkillComponent],
                providers: [
                    SkillService
                ]
            })
            .overrideTemplate(SkillComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SkillComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SkillService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Skill(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.skills[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
