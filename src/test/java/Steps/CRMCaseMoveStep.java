package Steps;

import Base.BaseUtil;
import Pages.CRM_Login_Form_Page;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;




public class CRMCaseMoveStep extends BaseUtil{

    CRM_Login_Form_Page CRM_Login_Page = new  CRM_Login_Form_Page(driver);

    @Then("^I logout of the application$")
    public void iLogoutOfTheApplication() throws Throwable {

    }

    @Given("^I logon into salesforce CRM$")
    public void iLogonIntoSalesforceCRM() throws Throwable {

        initialization();
        driver.get("https://test.salesforce.com/");
        Thread.sleep(2000);
        driver.manage().window().maximize();
        Thread.sleep(2000);
        CRM_Login_Page.Set_username_password("rupa.tanneero@monash.edu.staging" , "monash@2017");
        CRM_Login_Page.click_login_button();


    }

    @And("^I select enquiry from MU Docs queue and change its owner to MC Docs$")
    public void iSelectEnquiryFromMUDocsQueueAndChangeItsOwnerToMCDocs() throws Throwable {

        Thread.sleep(2000);
        CRM_Login_Page.Click_RefreshIcon_Enquiry();
        Thread.sleep(3000);



    }

    @And("^I go to MC Docs queue check the enquiry owner changed to MC Docs$")
    public void iGoToMCDocsQueueCheckTheEnquiryOwnerChangedToMCDocs() throws Throwable {


    }
}
