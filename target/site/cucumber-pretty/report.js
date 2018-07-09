$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file1_GenerateRegoEmail2.feature");
formatter.feature({
  "line": 1,
  "name": "Applicant Registration Feature",
  "description": "This feature deals with the Registration functionality of the application",
  "id": "applicant-registration-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login with correct username and password using scenario outline",
  "description": "",
  "id": "applicant-registration-feature;login-with-correct-username-and-password-using-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I navigate to the public website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Set a new email",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Go button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see public site inbox",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I navigate to the AA Registration login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Register as a New Applicant link from Registration Page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter \u003cGivenName\u003e and \u003cFamilyName\u003e and Email",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I Click on SignUp button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I navigate to the public website",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I set an email into inbox",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Go button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on welcome message",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Complete Registration button from Email",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "T Set password and Change Password",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Logout \u003cLogout\u003e of the Application",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 23,
      "value": "#    And Close the browser"
    }
  ],
  "line": 27,
  "name": "",
  "description": "",
  "id": "applicant-registration-feature;login-with-correct-username-and-password-using-scenario-outline;",
  "rows": [
    {
      "cells": [
        "GivenName",
        "FamilyName",
        "Logout"
      ],
      "line": 29,
      "id": "applicant-registration-feature;login-with-correct-username-and-password-using-scenario-outline;;1"
    },
    {
      "cells": [
        "rupa",
        "tanneeru",
        "Logout"
      ],
      "line": 30,
      "id": "applicant-registration-feature;login-with-correct-username-and-password-using-scenario-outline;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Login with correct username and password using scenario outline",
  "description": "",
  "id": "applicant-registration-feature;login-with-correct-username-and-password-using-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I navigate to the public website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Set a new email",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Go button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see public site inbox",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I navigate to the AA Registration login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Register as a New Applicant link from Registration Page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter rupa and tanneeru and Email",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I Click on SignUp button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I navigate to the public website",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I set an email into inbox",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Go button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on welcome message",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Complete Registration button from Email",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "T Set password and Change Password",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Logout Logout of the Application",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GenerateRegoEmailStep.i_navigate_to_the_public_website()"
});
formatter.result({
  "duration": 6896582584,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.i_Set_a_new_email()"
});
formatter.result({
  "duration": 58641496,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.i_click_Go_button()"
});
formatter.result({
  "duration": 1952452164,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.i_should_see_public_site_inbox()"
});
formatter.result({
  "duration": 3092721860,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.closeTheBrowser()"
});
formatter.result({
  "duration": 739321016,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.iNavigateToTheAARegistrationLoginPage()"
});
formatter.result({
  "duration": 11724801336,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.iClickOnRegisterAsANewApplicantLinkFromRegistrationPage()"
});
formatter.result({
  "duration": 2100509742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rupa",
      "offset": 8
    },
    {
      "val": "tanneeru",
      "offset": 17
    }
  ],
  "location": "GenerateRegoEmailStep.iEnterGivenNameAndFamilyNameAndEmail(String,String)"
});
formatter.result({
  "duration": 250917860,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.iClickOnSignUpButton()"
});
formatter.result({
  "duration": 61394019,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.closeTheBrowser()"
});
formatter.result({
  "duration": 778135605,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.i_navigate_to_the_public_website()"
});
formatter.result({
  "duration": 6353162827,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.iSetAnEmailIntoInbox()"
});
formatter.result({
  "duration": 89617426,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.i_click_Go_button()"
});
formatter.result({
  "duration": 1545608093,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.iClickOnWelcomeMessage()"
});
formatter.result({
  "duration": 2289619964,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.iClickOnCompleteRegistrationButtonFromEmail()"
});
formatter.result({
  "duration": 3356845904,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.tSetPasswordAndChangePassword()"
});
formatter.result({
  "duration": 16262982273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 7
    }
  ],
  "location": "GenerateRegoEmailStep.logoutLogoutOfTheApplication(String)"
});
formatter.result({
  "duration": 9307260299,
  "status": "passed"
});
formatter.uri("file2_Mydetails.feature");
formatter.feature({
  "line": 1,
  "name": "Personal Details Feature",
  "description": "This page deals with students can provide their personal information",
  "id": "personal-details-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Applicant enter their personal information on mydetails page",
  "description": "",
  "id": "personal-details-feature;applicant-enter-their-personal-information-on-mydetails-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@MyDetails_Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to mailinator window to get email",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I entered username and password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the details \u003cMyDetails\u003e page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select title from page \u003cTitle\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Select gender \u003cGender\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Set dateofbirth \u003cDateOfBirth\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Set mobilenumber \u003cMobileNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Set homephone \u003cHomePhone\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Set workphone \u003cWorkPhone\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Set currentpostal \u003ccurrentPostal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Set streetnumber \u003cStreetNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Set suburb \u003cSuburb\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Set state \u003cState\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Set postalcode \u003cPostalCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Set location \u003cLocation\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Set citizenship \u003cCitizenShipType\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Set aborigional \u003cAboriginalIslander\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Click on Save button to save the details",
  "keyword": "When "
});
formatter.examples({
  "comments": [
    {
      "line": 25,
      "value": "#    Then Logout \u003cLogout\u003e of the Application"
    },
    {
      "line": 26,
      "value": "#    And Close the browser"
    }
  ],
  "line": 29,
  "name": "",
  "description": "",
  "id": "personal-details-feature;applicant-enter-their-personal-information-on-mydetails-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "MyDetails",
        "Title",
        "Gender",
        "DateOfBirth",
        "MobileNumber",
        "HomePhone",
        "WorkPhone",
        "currentPostal",
        "StreetNumber",
        "Suburb",
        "State",
        "PostalCode",
        "Location",
        "CitizenShipType",
        "AboriginalIslander",
        "Logout"
      ],
      "line": 30,
      "id": "personal-details-feature;applicant-enter-their-personal-information-on-mydetails-page;;1"
    },
    {
      "cells": [
        "rupa12.tanneeru12@mailinator.com",
        "monash@2017",
        "MY DETAILS",
        "Mrs",
        "Female",
        "12/01/1985",
        "04375847568",
        "0357845985",
        "04765847896",
        "Yes",
        "738 Blackburn Rd",
        "Clayton",
        "Victoria",
        "3000",
        "Australian campus and any location not listed below",
        "I hold an Australian permanent resident visa",
        "Yes",
        "Logout"
      ],
      "line": 31,
      "id": "personal-details-feature;applicant-enter-their-personal-information-on-mydetails-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Applicant enter their personal information on mydetails page",
  "description": "",
  "id": "personal-details-feature;applicant-enter-their-personal-information-on-mydetails-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@MyDetails_Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to mailinator window to get email",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I entered username and password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the details MY DETAILS page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select title from page Mrs",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Select gender Female",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Set dateofbirth 12/01/1985",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Set mobilenumber 04375847568",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Set homephone 0357845985",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Set workphone 04765847896",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Set currentpostal Yes",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Set streetnumber 738 Blackburn Rd",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Set suburb Clayton",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Set state Victoria",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Set postalcode 3000",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Set location Australian campus and any location not listed below",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Set citizenship I hold an Australian permanent resident visa",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Set aborigional Yes",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Click on Save button to save the details",
  "keyword": "When "
});
formatter.match({
  "location": "MyDetailStep.iNavigateToMailinatorWindowToGetEmail()"
});
formatter.result({
  "duration": 7205816475,
  "status": "passed"
});
formatter.match({
  "location": "MyDetailStep.iEnteredUsernameAndPassword()"
});
formatter.result({
  "duration": 242994220,
  "status": "passed"
});
formatter.match({
  "location": "MyDetailStep.iClickLoginButton()"
});
formatter.result({
  "duration": 2567490754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MY DETAILS",
      "offset": 26
    }
  ],
  "location": "MyDetailStep.iNavigateToTheDetailsMyDetailsPage(String)"
});
formatter.result({
  "duration": 10351697354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 25
    }
  ],
  "location": "MyDetailStep.iSelectTitleFromPageTitle(String)"
});
formatter.result({
  "duration": 2305920004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 16
    }
  ],
  "location": "MyDetailStep.iSelectGenderGender(String)"
});
formatter.result({
  "duration": 1149957475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12/01/1985",
      "offset": 18
    }
  ],
  "location": "MyDetailStep.iSetDateofbirthDateOfBirth(String)"
});
formatter.result({
  "duration": 1286554671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04375847568",
      "offset": 19
    }
  ],
  "location": "MyDetailStep.iSetMobilenumberMobileNumber(String)"
});
formatter.result({
  "duration": 1139670600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0357845985",
      "offset": 16
    }
  ],
  "location": "MyDetailStep.iSetHomephoneHomePhone(String)"
});
formatter.result({
  "duration": 1187375703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04765847896",
      "offset": 16
    }
  ],
  "location": "MyDetailStep.iSetWorkphoneWorkPhone(String)"
});
formatter.result({
  "duration": 1144562798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 20
    }
  ],
  "location": "MyDetailStep.iSetCurrentphoneCurrentPostal(String)"
});
formatter.result({
  "duration": 1152784047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "738 Blackburn Rd",
      "offset": 19
    }
  ],
  "location": "MyDetailStep.iSetStreetnumberStreetNumber(String)"
});
formatter.result({
  "duration": 1210365579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Clayton",
      "offset": 13
    }
  ],
  "location": "MyDetailStep.iSetSuburbSuburb(String)"
});
formatter.result({
  "duration": 1137301018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Victoria",
      "offset": 12
    }
  ],
  "location": "MyDetailStep.iSetStateState(String)"
});
formatter.result({
  "duration": 1270321628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 17
    }
  ],
  "location": "MyDetailStep.iSetPostalcodePostalCode(String)"
});
formatter.result({
  "duration": 1106229531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australian campus and any location not listed below",
      "offset": 15
    }
  ],
  "location": "MyDetailStep.iSetLocationLocation(String)"
});
formatter.result({
  "duration": 1163106535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I hold an Australian permanent resident visa",
      "offset": 18
    }
  ],
  "location": "MyDetailStep.iSetCitizenshipCitizenShipType(String)"
});
formatter.result({
  "duration": 1319913228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 18
    }
  ],
  "location": "MyDetailStep.iSetAborigionalAboriginalIslander(String)"
});
formatter.result({
  "duration": 1164568483,
  "status": "passed"
});
formatter.match({
  "location": "MyDetailStep.iClickOnSaveButtonToSaveTheDetails()"
});
formatter.result({
  "duration": 8557536397,
  "status": "passed"
});
formatter.uri("file3_AddCoursePreference.feature");
formatter.feature({
  "line": 1,
  "name": "Applicant Course Preference Feature",
  "description": "Students can select and add courses to their application",
  "id": "applicant-course-preference-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Applicant Add courses to their application",
  "description": "",
  "id": "applicant-course-preference-feature;applicant-add-courses-to-their-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@CoursePreference_Test"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#    Given I navigate to the AA portal login page"
    },
    {
      "line": 8,
      "value": "#     And I entered \u003cusername\u003e and \u003cpassword\u003e"
    },
    {
      "line": 9,
      "value": "#    And I click login button"
    },
    {
      "line": 10,
      "value": "#    And I navigate to the home \u003chome\u003e page"
    }
  ],
  "line": 11,
  "name": "I click Create New Application button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Enter Course Preference code \u003cCode\u003e into Search Field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click Search button",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#    Then I select attendance Type \u003cAttendance\u003e"
    },
    {
      "line": 15,
      "value": "#    Then I select location \u003cLocation\u003e"
    },
    {
      "line": 16,
      "value": "#    Then I select commencementPeriod \u003cPeriod\u003e"
    },
    {
      "line": 17,
      "value": "#    Then I click on apply filters"
    }
  ],
  "line": 18,
  "name": "I select list of courses and Add them to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click AddCourse",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click CloseSearch",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should see the list of courses added \u003cCoursePre\u003e to the application",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 22,
      "value": "#    Then Logout \u003cLogout\u003e of the Application"
    }
  ],
  "line": 24,
  "name": "",
  "description": "",
  "id": "applicant-course-preference-feature;applicant-add-courses-to-their-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "home",
        "Code",
        "Attendance",
        "Location",
        "Period",
        "CoursePre",
        "Logout"
      ],
      "line": 25,
      "id": "applicant-course-preference-feature;applicant-add-courses-to-their-application;;1"
    },
    {
      "cells": [
        "rupa17@mailinator.com",
        "monash@2017",
        "HOME",
        "master",
        "Full Time",
        "CITY",
        "2021 Summer Semester",
        "1",
        "Logout"
      ],
      "line": 26,
      "id": "applicant-course-preference-feature;applicant-add-courses-to-their-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Applicant Add courses to their application",
  "description": "",
  "id": "applicant-course-preference-feature;applicant-add-courses-to-their-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@CoursePreference_Test"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#    Given I navigate to the AA portal login page"
    },
    {
      "line": 8,
      "value": "#     And I entered \u003cusername\u003e and \u003cpassword\u003e"
    },
    {
      "line": 9,
      "value": "#    And I click login button"
    },
    {
      "line": 10,
      "value": "#    And I navigate to the home \u003chome\u003e page"
    }
  ],
  "line": 11,
  "name": "I click Create New Application button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Enter Course Preference code master into Search Field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click Search button",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#    Then I select attendance Type \u003cAttendance\u003e"
    },
    {
      "line": 15,
      "value": "#    Then I select location \u003cLocation\u003e"
    },
    {
      "line": 16,
      "value": "#    Then I select commencementPeriod \u003cPeriod\u003e"
    },
    {
      "line": 17,
      "value": "#    Then I click on apply filters"
    }
  ],
  "line": 18,
  "name": "I select list of courses and Add them to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click AddCourse",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click CloseSearch",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should see the list of courses added 1 to the application",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CoursePreferenceStep.i_click_Create_New_Application_button()"
});
formatter.result({
  "duration": 4057347747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "master",
      "offset": 31
    }
  ],
  "location": "CoursePreferenceStep.i_Enter_Course_Preference_code_master_into_Search_Field(String)"
});
formatter.result({
  "duration": 1177914655,
  "status": "passed"
});
formatter.match({
  "location": "CoursePreferenceStep.i_click_Search_button()"
});
formatter.result({
  "duration": 3081098922,
  "status": "passed"
});
formatter.match({
  "location": "CoursePreferenceStep.i_select_list_of_courses_and_Add_them_to_the_application()"
});
formatter.result({
  "duration": 3284968250,
  "status": "passed"
});
formatter.match({
  "location": "CoursePreferenceStep.iClickAddCourse()"
});
formatter.result({
  "duration": 5133770977,
  "status": "passed"
});
formatter.match({
  "location": "CoursePreferenceStep.iClickCloseSearch()"
});
formatter.result({
  "duration": 2128093502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "CoursePreferenceStep.iShouldSeeTheListOfCoursesAddedCoursePreToTheApplication(String)"
});
formatter.result({
  "duration": 4417780817,
  "status": "passed"
});
formatter.uri("file4_AddQualification.feature");
formatter.feature({
  "line": 1,
  "name": "Applicant MyQualification Feature",
  "description": "Students can add qualification details to their application",
  "id": "applicant-myqualification-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Applicant Add qualification to their application",
  "description": "",
  "id": "applicant-myqualification-feature;applicant-add-qualification-to-their-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Add_Qual"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#    Given I navigate to the AA portal login page"
    },
    {
      "line": 7,
      "value": "#    And I entered \u003cusername\u003e and \u003cpassword\u003e"
    },
    {
      "line": 8,
      "value": "#    And I click login button"
    },
    {
      "line": 9,
      "value": "#    And I click Create New Application button"
    }
  ],
  "line": 10,
  "name": "I click Add New Qualification button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select QualificationType from qualification \u003cQualType\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select Country \u003cCountry\u003e where i studied",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Firstyear Enrolled \u003cFirstYear\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select Lastyear Enrolled \u003cLastYear\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Qualification \u003cQualification\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select Institution \u003cInstitution\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Level of Completion \u003cCompletion\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select a file to upload filename",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select Document Type \u003cType\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I set Comments into \u003ccomments\u003e box",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click save to save the Qualification",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I verify the Qualification from application Grid",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 23,
      "value": "#    Then Logout \u003cLogout\u003e of the Application"
    }
  ],
  "line": 26,
  "name": "",
  "description": "",
  "id": "applicant-myqualification-feature;applicant-add-qualification-to-their-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "QualType",
        "Country",
        "FirstYear",
        "LastYear",
        "Qualification",
        "Institution",
        "Completion",
        "Type",
        "comments",
        "Logout"
      ],
      "line": 27,
      "id": "applicant-myqualification-feature;applicant-add-qualification-to-their-application;;1"
    },
    {
      "cells": [
        "rupa12.tanneeru12@mailinator.com",
        "monash@2017",
        "Tertiary Education/Post Secondary",
        "Australia",
        "2006",
        "2012",
        "Masters in IT",
        "SWINBURNE TAFE",
        "SUCCESSFULLY COMPLETED AND OBTAINED",
        "Results from tertiary studies",
        "Enter Comments in TextArea",
        "Logout"
      ],
      "line": 28,
      "id": "applicant-myqualification-feature;applicant-add-qualification-to-their-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Applicant Add qualification to their application",
  "description": "",
  "id": "applicant-myqualification-feature;applicant-add-qualification-to-their-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Add_Qual"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#    Given I navigate to the AA portal login page"
    },
    {
      "line": 7,
      "value": "#    And I entered \u003cusername\u003e and \u003cpassword\u003e"
    },
    {
      "line": 8,
      "value": "#    And I click login button"
    },
    {
      "line": 9,
      "value": "#    And I click Create New Application button"
    }
  ],
  "line": 10,
  "name": "I click Add New Qualification button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select QualificationType from qualification Tertiary Education/Post Secondary",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select Country Australia where i studied",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Firstyear Enrolled 2006",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select Lastyear Enrolled 2012",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Qualification Masters in IT",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select Institution SWINBURNE TAFE",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Level of Completion SUCCESSFULLY COMPLETED AND OBTAINED",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select a file to upload filename",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select Document Type Results from tertiary studies",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I set Comments into Enter Comments in TextArea box",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click save to save the Qualification",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I verify the Qualification from application Grid",
  "keyword": "Then "
});
formatter.match({
  "location": "AddQualificationStep.i_click_Add_New_Qualification_button()"
});
formatter.result({
  "duration": 2124614237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tertiary Education/Post Secondary",
      "offset": 46
    }
  ],
  "location": "AddQualificationStep.iSelectQualificationTypeFromQualificationQualType(String)"
});
formatter.result({
  "duration": 2099653943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 17
    }
  ],
  "location": "AddQualificationStep.i_Select_Country_Australia_where_i_studied(String)"
});
formatter.result({
  "duration": 2130903854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2006",
      "offset": 28
    }
  ],
  "location": "AddQualificationStep.i_select_Firstyear_Enrolled(String)"
});
formatter.result({
  "duration": 1365228651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2012",
      "offset": 27
    }
  ],
  "location": "AddQualificationStep.i_select_Lastyear_Enrolled(String)"
});
formatter.result({
  "duration": 1195842372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Masters in IT",
      "offset": 23
    }
  ],
  "location": "AddQualificationStep.i_select_Qualification_Masters_in_IT(String)"
});
formatter.result({
  "duration": 1203044560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SWINBURNE TAFE",
      "offset": 21
    }
  ],
  "location": "AddQualificationStep.i_select_Institution_SWINBURNE_TAFE(String)"
});
formatter.result({
  "duration": 6326852011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SUCCESSFULLY COMPLETED AND OBTAINED",
      "offset": 29
    }
  ],
  "location": "AddQualificationStep.i_select_Level_of_Completion_SUCCESSFULLY_COMPLETED_AND_OBTAINED(String)"
});
formatter.result({
  "duration": 2262508005,
  "status": "passed"
});
formatter.match({
  "location": "AddQualificationStep.i_select_a_file_to_upload_filename()"
});
formatter.result({
  "duration": 1094975783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Results from tertiary studies",
      "offset": 23
    }
  ],
  "location": "AddQualificationStep.i_select_Document_Type_Results_from_tertiary_studies(String)"
});
formatter.result({
  "duration": 1174686806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Comments in TextArea",
      "offset": 20
    }
  ],
  "location": "AddQualificationStep.i_set_Comments_into_Enter_Comments_in_TextArea_box(String)"
});
formatter.result({
  "duration": 1167520585,
  "status": "passed"
});
formatter.match({
  "location": "AddQualificationStep.i_click_save_to_save_the_Qualification()"
});
formatter.result({
  "duration": 5644393190,
  "status": "passed"
});
formatter.match({
  "location": "AddQualificationStep.i_verify_the_Qualification_from_application_Grid()"
});
formatter.result({
  "duration": 1999889984,
  "status": "passed"
});
formatter.uri("file5_AddCreditIntention.feature");
formatter.feature({
  "line": 1,
  "name": "Credit Intention Feature",
  "description": "This feature deals with the Credit functionality of the application",
  "id": "credit-intention-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Applicant Add credit intention to their Application",
  "description": "",
  "id": "credit-intention-feature;applicant-add-credit-intention-to-their-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Add_Credit"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#    Given I navigate to the AA portal login page"
    },
    {
      "line": 6,
      "value": "#    And I entered \u003cusername\u003e and \u003cpassword\u003e"
    },
    {
      "line": 7,
      "value": "#    And I click login button"
    },
    {
      "line": 8,
      "value": "#    And I click Create New Application button"
    }
  ],
  "line": 9,
  "name": "I select credit intention \u003cintention\u003e",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 10,
      "value": "#    Then Logout \u003cLogout\u003e of the Application"
    },
    {
      "line": 11,
      "value": "#    And Close the browser"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "id": "credit-intention-feature;applicant-add-credit-intention-to-their-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "intention",
        "Logout"
      ],
      "line": 15,
      "id": "credit-intention-feature;applicant-add-credit-intention-to-their-application;;1"
    },
    {
      "cells": [
        "rupa12.tanneeru12@mailinator.com",
        "monash@2017",
        "Yes",
        "Logout"
      ],
      "line": 16,
      "id": "credit-intention-feature;applicant-add-credit-intention-to-their-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Applicant Add credit intention to their Application",
  "description": "",
  "id": "credit-intention-feature;applicant-add-credit-intention-to-their-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Add_Credit"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#    Given I navigate to the AA portal login page"
    },
    {
      "line": 6,
      "value": "#    And I entered \u003cusername\u003e and \u003cpassword\u003e"
    },
    {
      "line": 7,
      "value": "#    And I click login button"
    },
    {
      "line": 8,
      "value": "#    And I click Create New Application button"
    }
  ],
  "line": 9,
  "name": "I select credit intention Yes",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 26
    }
  ],
  "location": "AddCreditIntentionStep.i_select_credit_intention_Yes(String)"
});
formatter.result({
  "duration": 2153061556,
  "status": "passed"
});
formatter.uri("file6_AddWorkExperince.feature");
formatter.feature({
  "line": 1,
  "name": "Applicant WorkExperience Feature",
  "description": "Students can add work experience details to their application",
  "id": "applicant-workexperience-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Applicant Add work experience to their application",
  "description": "",
  "id": "applicant-workexperience-feature;applicant-add-work-experience-to-their-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AddWorkExperience"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#    Given I navigate to the AA portal login page"
    },
    {
      "line": 7,
      "value": "#    And I entered \u003cusername\u003e and \u003cpassword\u003e"
    },
    {
      "line": 8,
      "value": "#    And I click login button"
    },
    {
      "line": 9,
      "value": "#    And I click Create New Application button"
    }
  ],
  "line": 10,
  "name": "I click Add work experience button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I set the position \u003cposition\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I set the employer \u003cemployer\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Set Start Date",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Set End Date",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click on Save button From Work Experience",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 16,
      "value": "#    Then Logout \u003cLogout\u003e of the Application"
    }
  ],
  "line": 19,
  "name": "",
  "description": "",
  "id": "applicant-workexperience-feature;applicant-add-work-experience-to-their-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "position",
        "employer",
        "Logout"
      ],
      "line": 20,
      "id": "applicant-workexperience-feature;applicant-add-work-experience-to-their-application;;1"
    },
    {
      "cells": [
        "rupa12.tanneeru12@mailinator.com",
        "monash@2017",
        "Test Manager",
        "Monash University",
        "Logout"
      ],
      "line": 21,
      "id": "applicant-workexperience-feature;applicant-add-work-experience-to-their-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Applicant Add work experience to their application",
  "description": "",
  "id": "applicant-workexperience-feature;applicant-add-work-experience-to-their-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AddWorkExperience"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#    Given I navigate to the AA portal login page"
    },
    {
      "line": 7,
      "value": "#    And I entered \u003cusername\u003e and \u003cpassword\u003e"
    },
    {
      "line": 8,
      "value": "#    And I click login button"
    },
    {
      "line": 9,
      "value": "#    And I click Create New Application button"
    }
  ],
  "line": 10,
  "name": "I click Add work experience button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I set the position Test Manager",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I set the employer Monash University",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Set Start Date",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Set End Date",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click on Save button From Work Experience",
  "keyword": "And "
});
formatter.match({
  "location": "AddWorkExperinceStep.i_click_Add_work_experience_button()"
});
formatter.result({
  "duration": 1160602960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Manager",
      "offset": 19
    }
  ],
  "location": "AddWorkExperinceStep.iSetThePositionPosition(String)"
});
formatter.result({
  "duration": 1123645601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monash University",
      "offset": 19
    }
  ],
  "location": "AddWorkExperinceStep.i_set_the_employer_employer(String)"
});
formatter.result({
  "duration": 719145724,
  "status": "passed"
});
formatter.match({
  "location": "AddWorkExperinceStep.i_Set_Start_Date()"
});
formatter.result({
  "duration": 755774797,
  "status": "passed"
});
formatter.match({
  "location": "AddWorkExperinceStep.i_Set_End_Date()"
});
formatter.result({
  "duration": 2182365026,
  "status": "passed"
});
formatter.match({
  "location": "AddWorkExperinceStep.i_Click_on_Save_button_From_Work_Experience()"
});
formatter.result({
  "duration": 5148645037,
  "status": "passed"
});
formatter.uri("file7_AddAdditionalDocuemnts.feature");
formatter.feature({
  "line": 1,
  "name": "Applicant WorkExperience Feature",
  "description": "Students can add work experience details to their application",
  "id": "applicant-workexperience-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Applicant Add work experience to their application",
  "description": "",
  "id": "applicant-workexperience-feature;applicant-add-work-experience-to-their-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AddAdditionalDocuments"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#    Given I navigate to the AA portal login page"
    },
    {
      "line": 8,
      "value": "#    And I entered \u003cusername\u003e and \u003cpassword\u003e"
    },
    {
      "line": 9,
      "value": "#    And I click login button"
    },
    {
      "line": 10,
      "value": "#    And I click Create New Application button"
    }
  ],
  "line": 11,
  "name": "I click on Add New Document button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select upload button to choose a file  to upload",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select DocumentType \u003cType\u003e From Document attachment Section",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Set the comments in Textbox \u003ccomments\u003e from documents",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Upload button \u003cUpload\u003e from Documents section",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 16,
      "value": "#    Then Logout \u003cLogout\u003e of the Application"
    }
  ],
  "line": 19,
  "name": "",
  "description": "",
  "id": "applicant-workexperience-feature;applicant-add-work-experience-to-their-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Type",
        "comments",
        "Upload",
        "Logout"
      ],
      "line": 20,
      "id": "applicant-workexperience-feature;applicant-add-work-experience-to-their-application;;1"
    },
    {
      "cells": [
        "rupa12.tanneeru12@mailinator.com",
        "monash@2017",
        "Proof of citizenship/residency or identity",
        "Enter Application Document Comments in TextArea",
        "Upload",
        "Logout"
      ],
      "line": 21,
      "id": "applicant-workexperience-feature;applicant-add-work-experience-to-their-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Applicant Add work experience to their application",
  "description": "",
  "id": "applicant-workexperience-feature;applicant-add-work-experience-to-their-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AddAdditionalDocuments"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#    Given I navigate to the AA portal login page"
    },
    {
      "line": 8,
      "value": "#    And I entered \u003cusername\u003e and \u003cpassword\u003e"
    },
    {
      "line": 9,
      "value": "#    And I click login button"
    },
    {
      "line": 10,
      "value": "#    And I click Create New Application button"
    }
  ],
  "line": 11,
  "name": "I click on Add New Document button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select upload button to choose a file  to upload",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select DocumentType Proof of citizenship/residency or identity From Document attachment Section",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Set the comments in Textbox Enter Application Document Comments in TextArea from documents",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Upload button Upload from Documents section",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AddAdditionalDocumentsStep.iClickOnAddNewDocumentButton()"
});
formatter.result({
  "duration": 5126971478,
  "status": "passed"
});
formatter.match({
  "location": "AddAdditionalDocumentsStep.i_Select_upload_button_to_choose_a_file_to_upload()"
});
formatter.result({
  "duration": 1109220422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proof of citizenship/residency or identity",
      "offset": 22
    }
  ],
  "location": "AddAdditionalDocumentsStep.i_select_DocumentType_Proof_of_citizenship_residency_or_identity_From_Document_attachment_Section(String)"
});
formatter.result({
  "duration": 1168679988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Application Document Comments in TextArea",
      "offset": 30
    }
  ],
  "location": "AddAdditionalDocumentsStep.i_Set_the_comments_in_Textbox_Enter_Application_Document_Comments_in_TextArea_from_documents(String)"
});
formatter.result({
  "duration": 1161150926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Upload",
      "offset": 25
    }
  ],
  "location": "AddAdditionalDocumentsStep.i_click_on_Upload_button_Upload_from_Documents_section(String)"
});
formatter.result({
  "duration": 8968840005,
  "status": "passed"
});
formatter.uri("file8_SubmitTheApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Application Submission Feature",
  "description": "This feature deals with the Submit functionality of the application",
  "id": "application-submission-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Applicant submit their application Successfully",
  "description": "",
  "id": "application-submission-feature;applicant-submit-their-application-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SubmitApplication"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#    Given I navigate to the AA portal login page"
    },
    {
      "line": 7,
      "value": "#    And I entered \u003cusername\u003e and \u003cpassword\u003e"
    },
    {
      "line": 8,
      "value": "#    And I click login button"
    },
    {
      "line": 9,
      "value": "#    And I click Create New Application button"
    }
  ],
  "line": 10,
  "name": "I Click on Continue button \u003cbutton1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Continue button \u003cbutton2\u003e  on review page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Click on Accept and Submit button after review",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I capture receipt number ApplicationID after application submission",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Logout \u003cLogout\u003e of the Application",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "application-submission-feature;applicant-submit-their-application-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "button1",
        "button2"
      ],
      "line": 21,
      "id": "application-submission-feature;applicant-submit-their-application-successfully;;1"
    },
    {
      "cells": [
        "rupa12.tanneeru12@mailinator.com",
        "monash@2017",
        "Continue",
        "Continue"
      ],
      "line": 22,
      "id": "application-submission-feature;applicant-submit-their-application-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Applicant submit their application Successfully",
  "description": "",
  "id": "application-submission-feature;applicant-submit-their-application-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SubmitApplication"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#    Given I navigate to the AA portal login page"
    },
    {
      "line": 7,
      "value": "#    And I entered \u003cusername\u003e and \u003cpassword\u003e"
    },
    {
      "line": 8,
      "value": "#    And I click login button"
    },
    {
      "line": 9,
      "value": "#    And I click Create New Application button"
    }
  ],
  "line": 10,
  "name": "I Click on Continue button Continue",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Continue button Continue  on review page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Click on Accept and Submit button after review",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I capture receipt number ApplicationID after application submission",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Logout \u003cLogout\u003e of the Application",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Continue",
      "offset": 27
    }
  ],
  "location": "SubmitTheApplicationStep.i_Click_on_Continue_button_Continue(String)"
});
formatter.result({
  "duration": 5194515830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue",
      "offset": 27
    }
  ],
  "location": "SubmitTheApplicationStep.i_click_on_Continue_button_Continue_on_review_page(String)"
});
formatter.result({
  "duration": 5229997136,
  "status": "passed"
});
formatter.match({
  "location": "SubmitTheApplicationStep.iClickOnAcceptAndSubmitButtonAfterReview()"
});
formatter.result({
  "duration": 4126038102,
  "status": "passed"
});
formatter.match({
  "location": "SubmitTheApplicationStep.iCaptureReceiptNumberApplicationIDAfterApplicationSubmission()"
});
formatter.result({
  "duration": 92991963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLogout\u003e",
      "offset": 7
    }
  ],
  "location": "GenerateRegoEmailStep.logoutLogoutOfTheApplication(String)"
});
formatter.result({
  "duration": 9278781245,
  "status": "passed"
});
formatter.match({
  "location": "GenerateRegoEmailStep.closeTheBrowser()"
});
formatter.result({
  "duration": 821637169,
  "status": "passed"
});
});