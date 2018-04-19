Feature: CRM Move case from one queue to another queue
  This feature deals with move cases from one queue to another queue

  @CRM_Move_Cases_From_One_Queue_To_Others_Queue
  Scenario Outline: Move cases from one queue to another queue
    Given I logon into salesforce CRM
    And I select enquiry from MU Docs queue and change its owner to MC Docs
    And I go to MC Docs queue check the enquiry owner changed to MC Docs
    Then I logout of the application

    Examples:
      |           |