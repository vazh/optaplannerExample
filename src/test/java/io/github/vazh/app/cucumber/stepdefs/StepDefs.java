package io.github.vazh.app.cucumber.stepdefs;

import io.github.vazh.app.OptaplannerExampleApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = OptaplannerExampleApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
