import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Employee e2e test', () => {

    let navBarPage: NavBarPage;
    let employeeDialogPage: EmployeeDialogPage;
    let employeeComponentsPage: EmployeeComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Employees', () => {
        navBarPage.goToEntity('employee');
        employeeComponentsPage = new EmployeeComponentsPage();
        expect(employeeComponentsPage.getTitle())
            .toMatch(/Employees/);

    });

    it('should load create Employee dialog', () => {
        employeeComponentsPage.clickOnCreateButton();
        employeeDialogPage = new EmployeeDialogPage();
        expect(employeeDialogPage.getModalTitle())
            .toMatch(/Create or edit a Employee/);
        employeeDialogPage.close();
    });

    it('should create and save Employees', () => {
        employeeComponentsPage.clickOnCreateButton();
        employeeDialogPage.setNameInput('name');
        expect(employeeDialogPage.getNameInput()).toMatch('name');
        employeeDialogPage.save();
        expect(employeeDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class EmployeeComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-employee div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getText();
    }
}

export class EmployeeDialogPage {
    modalTitle = element(by.css('h4#myEmployeeLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    nameInput = element(by.css('input#field_name'));

    getModalTitle() {
        return this.modalTitle.getText();
    }

    setNameInput = function(name) {
        this.nameInput.sendKeys(name);
    }

    getNameInput = function() {
        return this.nameInput.getAttribute('value');
    }

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
