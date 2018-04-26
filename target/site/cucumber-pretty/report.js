$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file10_CRM_Case_To_Email.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Case To Email to check Send Email function works well in CRM and check enquiry status changed from Closed to Open",
  "description": "This feature deals with Case To Email",
  "id": "crm-case-to-email-to-check-send-email-function-works-well-in-crm-and-check-enquiry-status-changed-from-closed-to-open",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search with given keywords into the search field",
  "description": "",
  "id": "crm-case-to-email-to-check-send-email-function-works-well-in-crm-and-check-enquiry-status-changed-from-closed-to-open;search-with-given-keywords-into-the-search-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Send_An_Email_From_CRM_TO_Applicant_Email_Account"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Salesforce URL login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the Salesforce home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I Enter receipt number \u003cNumber\u003e into search field and hit Enter key",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Click on Application Reference Number link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on Details link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I go to Course Preference Grid click on ACPCode Link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on Send Email to communicate with Applicant",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Applicant should receive an email to confirm an enquiry gets created in CRM",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "check the status of the enquiry",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the Enquiry Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I logout from the application",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "crm-case-to-email-to-check-send-email-function-works-well-in-crm-and-check-enquiry-status-changed-from-closed-to-open;search-with-given-keywords-into-the-search-field;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Number"
      ],
      "line": 22,
      "id": "crm-case-to-email-to-check-send-email-function-works-well-in-crm-and-check-enquiry-status-changed-from-closed-to-open;search-with-given-keywords-into-the-search-field;;1"
    },
    {
      "cells": [
        "rupa.tanneero@monash.edu.staging",
        "monash@2017",
        "A-266309"
      ],
      "line": 23,
      "id": "crm-case-to-email-to-check-send-email-function-works-well-in-crm-and-check-enquiry-status-changed-from-closed-to-open;search-with-given-keywords-into-the-search-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Search with given keywords into the search field",
  "description": "",
  "id": "crm-case-to-email-to-check-send-email-function-works-well-in-crm-and-check-enquiry-status-changed-from-closed-to-open;search-with-given-keywords-into-the-search-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Send_An_Email_From_CRM_TO_Applicant_Email_Account"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Salesforce URL login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter rupa.tanneero@monash.edu.staging and monash@2017",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the Salesforce home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I Enter receipt number A-266309 into search field and hit Enter key",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Click on Application Reference Number link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on Details link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I go to Course Preference Grid click on ACPCode Link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on Send Email to communicate with Applicant",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Applicant should receive an email to confirm an enquiry gets created in CRM",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "check the status of the enquiry",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the Enquiry Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I logout from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.iNavigateToTheSalesforceURLLoginPage()"
});
formatter.result({
  "duration": 10743496861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rupa.tanneero@monash.edu.staging",
      "offset": 8
    },
    {
      "val": "monash@2017",
      "offset": 45
    }
  ],
  "location": "CRM_Loginstepdefinition_Step.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 291813503,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.iClickOnLoginButton()"
});
formatter.result({
  "duration": 4631149200,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.iShouldSeeTheSalesforceHomePage()"
});
formatter.result({
  "duration": 11797736410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A-266309",
      "offset": 23
    }
  ],
  "location": "CRM_Loginstepdefinition_Step.iEnterReceiptNumberNumberIntoSearchFieldAndHitEnterKey(String)"
});
formatter.result({
  "duration": 188379295,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.clickOnApplicationReferenceNumberLink()"
});
formatter.result({
  "duration": 7233101006,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.clickOnDetailsLink()"
});
formatter.result({
  "duration": 5384450225,
  "status": "passed"
});
formatter.match({
  "location": "CRM_CaseToEmail_Step.iGoToCoursePreferenceGridClickOnACPCodeLink()"
});
formatter.result({
  "duration": 6766301661,
  "status": "passed"
});
formatter.match({
  "location": "CRM_CaseToEmail_Step.iClickOnSendEmailToCommunicateWithApplicant()"
});
formatter.result({
  "duration": 24136888395,
  "status": "passed"
});
formatter.match({
  "location": "CRM_CaseToEmail_Step.applicantShouldReceiveAnEmailToConfirmAnEnquiryGetsCreatedInCRM()"
});
formatter.result({
  "duration": 6200000141,
  "status": "passed"
});
formatter.match({
  "location": "CRM_CaseToEmail_Step.checkTheStatusOfTheEnquiry()"
});
formatter.result({
  "duration": 4381516803,
  "status": "passed"
});
formatter.match({
  "location": "CRM_CaseToEmail_Step.closeTheEnquiryTab()"
});
formatter.result({
  "duration": 310389014,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.iLogoutFromTheApplication()"
});
formatter.result({
  "duration": 4987532520,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Applicant Reply back to an email enquiry from their email account",
  "description": "",
  "id": "crm-case-to-email-to-check-send-email-function-works-well-in-crm-and-check-enquiry-status-changed-from-closed-to-open;applicant-reply-back-to-an-email-enquiry-from-their-email-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@Reply_ToEmailEnquiry_From_Applicant_Account"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I Reply back to an email enquiry from Gmail Account",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I logout of gmail account",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_CaseToEmail_Step.iReplyBackToAnEmailEnquiryFromGmailAccount()"
});
formatter.result({
  "duration": 31313480055,
  "status": "passed"
});
formatter.match({
  "location": "CRM_CaseToEmail_Step.iLogoutOfGmailAccount()"
});
formatter.result({
  "duration": 7577655083,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Assessors Or Admissions team will check the enquiries which are in open in MU docs queue after the student respond to the reply email",
  "description": "",
  "id": "crm-case-to-email-to-check-send-email-function-works-well-in-crm-and-check-enquiry-status-changed-from-closed-to-open;assessors-or-admissions-team-will-check-the-enquiries-which-are-in-open-in-mu-docs-queue-after-the-student-respond-to-the-reply-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@CRM_TheEnquiry_Gets_Updated_With_The_Latest_Changes_StatusUpdates"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Assessors logon into Salesforce CRM and Navigate to Enquiries",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Assessor Select first enquiry From Enquiries list",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Assessor check the status of the Enquiry should be in Open",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I logout from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_CaseToEmail_Step.assessorsLogonIntoSalesforceCRMAndNavigateToEnquiries()"
});
formatter.result({
  "duration": 17175905820,
  "status": "passed"
});
formatter.match({
  "location": "CRM_CaseToEmail_Step.assessorSelectFirstEnquiryFromEnquiriesList()"
});
formatter.result({
  "duration": 11789443916,
  "status": "passed"
});
formatter.match({
  "location": "CRM_CaseToEmail_Step.assessorCheckTheStatusOfTheEnquiryShouldBeInOpen()"
});
formatter.result({
  "duration": 3281243807,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.iLogoutFromTheApplication()"
});
formatter.result({
  "duration": 4784189922,
  "status": "passed"
});
formatter.uri("file11_CRM_MoveCase_From_OneQueue_To Another.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Move case from one queue to another queue",
  "description": "This feature deals with move cases from one queue to another queue",
  "id": "crm-move-case-from-one-queue-to-another-queue",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Move cases from one queue to another queue",
  "description": "",
  "id": "crm-move-case-from-one-queue-to-another-queue;move-cases-from-one-queue-to-another-queue",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@CRM_Move_Cases_From_One_Queue_To_Others_Queue"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I logon into salesforce CRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I select enquiry from MU Docs queue and change its owner to MC Docs",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I go to MC Docs queue check the enquiry owner changed to MC Docs",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I logout of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "CRMCaseMoveStep.iLogonIntoSalesforceCRM()"
});
formatter.result({
  "duration": 14391472240,
  "status": "passed"
});
formatter.match({
  "location": "CRMCaseMoveStep.iSelectEnquiryFromMUDocsQueueAndChangeItsOwnerToMCDocs()"
});
formatter.result({
  "duration": 14797159882,
  "status": "passed"
});
formatter.match({
  "location": "CRMCaseMoveStep.iGoToMCDocsQueueCheckTheEnquiryOwnerChangedToMCDocs()"
});
formatter.result({
  "duration": 68760,
  "status": "passed"
});
formatter.match({
  "location": "CRMCaseMoveStep.iLogoutOfTheApplication()"
});
formatter.result({
  "duration": 54303,
  "status": "passed"
});
formatter.uri("file9_CRM_Email_To_Case.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Email To Case An Enquiry And Link/unlink ACP to prevent Error Validations",
  "description": "This feature deals with the Email to Case Link/Unlink ACP to an enquiry to prevent Error Validations",
  "id": "crm-email-to-case-an-enquiry-and-link/unlink-acp-to-prevent-error-validations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "User Send an outBound email to Admissions team using their personal account",
  "description": "",
  "id": "crm-email-to-case-an-enquiry-and-link/unlink-acp-to-prevent-error-validations;user-send-an-outbound-email-to-admissions-team-using-their-personal-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@GMAIL_Login_Test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I navigate to the gmail Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I given gmail Account username and password hit login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Send an outbond Email with attachments to the admissions team",
  "keyword": "Then "
});
formatter.match({
  "location": "SendEmail_FromGmailAccountStep.iNavigateToTheGmailLoginPage()"
});
formatter.result({
  "duration": 7633135844,
  "status": "passed"
});
formatter.match({
  "location": "SendEmail_FromGmailAccountStep.iGivenGmailAccountUsernameAndPasswordHitLogin()"
});
formatter.result({
  "duration": 14234638416,
  "status": "passed"
});
formatter.match({
  "location": "SendEmail_FromGmailAccountStep.iSendAnOutbondEmailWithAttachmentsToTheAdmissionsTeam()"
});
formatter.result({
  "duration": 54916372642,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Search with given keywords into the search field",
  "description": "",
  "id": "crm-email-to-case-an-enquiry-and-link/unlink-acp-to-prevent-error-validations;search-with-given-keywords-into-the-search-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@CRM_Email_To_Case_to_Link_TheEnquiry_To_ACP_INCRM"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I navigate to the Salesforce URL login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the Salesforce home page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I Enter receipt number \u003cNumber\u003e into search field and hit Enter key",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Click on Application Reference Number link",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on Details link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I get the ACP code from the application",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "check the enquiry is created in CRM under MUDocs Enquiry queue Flow",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "open the enquiry and link ACP to the enquiry",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click Save to save the page layout",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Unlink ACP from the same enquiry hit save button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "System should show us validation and validate them",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "crm-email-to-case-an-enquiry-and-link/unlink-acp-to-prevent-error-validations;search-with-given-keywords-into-the-search-field;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Number"
      ],
      "line": 31,
      "id": "crm-email-to-case-an-enquiry-and-link/unlink-acp-to-prevent-error-validations;search-with-given-keywords-into-the-search-field;;1"
    },
    {
      "cells": [
        "rupa.tanneero@monash.edu.staging",
        "monash@2017",
        "A-266309"
      ],
      "line": 32,
      "id": "crm-email-to-case-an-enquiry-and-link/unlink-acp-to-prevent-error-validations;search-with-given-keywords-into-the-search-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Search with given keywords into the search field",
  "description": "",
  "id": "crm-email-to-case-an-enquiry-and-link/unlink-acp-to-prevent-error-validations;search-with-given-keywords-into-the-search-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@CRM_Email_To_Case_to_Link_TheEnquiry_To_ACP_INCRM"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I navigate to the Salesforce URL login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter rupa.tanneero@monash.edu.staging and monash@2017",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the Salesforce home page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I Enter receipt number A-266309 into search field and hit Enter key",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Click on Application Reference Number link",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on Details link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I get the ACP code from the application",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "check the enquiry is created in CRM under MUDocs Enquiry queue Flow",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "open the enquiry and link ACP to the enquiry",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click Save to save the page layout",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Unlink ACP from the same enquiry hit save button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "System should show us validation and validate them",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.iNavigateToTheSalesforceURLLoginPage()"
});
formatter.result({
  "duration": 9701283667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rupa.tanneero@monash.edu.staging",
      "offset": 8
    },
    {
      "val": "monash@2017",
      "offset": 45
    }
  ],
  "location": "CRM_Loginstepdefinition_Step.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 307167857,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.iClickOnLoginButton()"
});
formatter.result({
  "duration": 4753466755,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.iShouldSeeTheSalesforceHomePage()"
});
formatter.result({
  "duration": 11955629143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A-266309",
      "offset": 23
    }
  ],
  "location": "CRM_Loginstepdefinition_Step.iEnterReceiptNumberNumberIntoSearchFieldAndHitEnterKey(String)"
});
formatter.result({
  "duration": 199729331,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.clickOnApplicationReferenceNumberLink()"
});
formatter.result({
  "duration": 7252643393,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.clickOnDetailsLink()"
});
formatter.result({
  "duration": 5371210513,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.iGetTheACPCodeFromTheApplication()"
});
formatter.result({
  "duration": 298198339,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.check_the_enquiry_is_created_in_CRM_under_MUDocs_Enquiry_queue_Flow()"
});
formatter.result({
  "duration": 10900688238,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.open_the_enquiry_and_link_ACP_to_the_enquiry()"
});
formatter.result({
  "duration": 6148559313,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.click_Save_to_save_the_page_layout()"
});
formatter.result({
  "duration": 6168812223,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.unlink_ACP_from_the_same_enquiry_hit_save_button()"
});
formatter.result({
  "duration": 5115473963,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.system_should_show_us_validation_and_validate_them()"
});
formatter.result({
  "duration": 4798333743,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Close All the Tabs with in CRM",
  "description": "",
  "id": "crm-email-to-case-an-enquiry-and-link/unlink-acp-to-prevent-error-validations;close-all-the-tabs-with-in-crm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Close_All_The_Tabs_in_CRM"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I Navigate to Close All the Tabs",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I logout from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.iNavigateToCloseAllTheTabs()"
});
formatter.result({
  "duration": 407476468,
  "status": "passed"
});
formatter.match({
  "location": "CRM_Loginstepdefinition_Step.iLogoutFromTheApplication()"
});
formatter.result({
  "duration": 4790899166,
  "status": "passed"
});
});