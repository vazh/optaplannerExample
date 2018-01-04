/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { OptaplannerExampleTestModule } from '../../../test.module';
import { SkillDetailComponent } from '../../../../../../main/webapp/app/entities/skill/skill-detail.component';
import { SkillService } from '../../../../../../main/webapp/app/entities/skill/skill.service';
import { Skill } from '../../../../../../main/webapp/app/entities/skill/skill.model';

describe('Component Tests', () => {

    describe('Skill Management Detail Component', () => {
        let comp: SkillDetailComponent;
        let fixture: ComponentFixture<SkillDetailComponent>;
        let service: SkillService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [OptaplannerExampleTestModule],
                declarations: [SkillDetailComponent],
                providers: [
                    SkillService
                ]
            })
            .overrideTemplate(SkillDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SkillDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SkillService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Skill(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.skill).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
