$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/feature/SkyBlueElementPage.feature");
formatter.feature({
  "line": 1,
  "name": "Sky Blue Background Functinality",
  "description": "",
  "id": "sky-blue-background-functinality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3984313900,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "1 User should be able to change the background color to skyblue",
  "description": "",
  "id": "sky-blue-background-functinality;1-user-should-be-able-to-change-the-background-color-to-skyblue",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "\"Set Skyblue Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button as \"Set Skyblue Background\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set Skyblue Background",
      "offset": 1
    }
  ],
  "location": "StepDefinition.button_exists(String)"
});
formatter.result({
  "duration": 157353200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set Skyblue Background",
      "offset": 26
    }
  ],
  "location": "StepDefinition.i_click_on_the_button_as(String)"
});
formatter.result({
  "duration": 3086302200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 3039296900,
  "status": "passed"
});
formatter.after({
  "duration": 624710500,
  "status": "passed"
});
formatter.before({
  "duration": 1691963300,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "2 User should be able to change the background color to white",
  "description": "",
  "id": "sky-blue-background-functinality;2-user-should-be-able-to-change-the-background-color-to-white",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "\"Set SkyWhite Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on the button as \"Set White background\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyWhite Background",
      "offset": 1
    }
  ],
  "location": "StepDefinition.button_exists(String)"
});
formatter.result({
  "duration": 40622400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set White background",
      "offset": 26
    }
  ],
  "location": "StepDefinition.i_click_on_the_button_as(String)"
});
formatter.result({
  "duration": 3073462700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 3047576400,
  "status": "passed"
});
formatter.after({
  "duration": 16788404600,
  "status": "passed"
});
});