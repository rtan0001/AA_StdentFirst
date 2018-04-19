package Pages;

import Base.BaseUtil;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class CRMCaseMove_ToAnotherQueuePage extends BaseUtil {

    public CRMCaseMove_ToAnotherQueuePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void Select_First_Enquiry_FromQueue() {
        driver.switchTo().parentFrame();
        driver.switchTo().frame("ext-comp-1005");
        WebElement element = driver.findElement(By.xpath("/html/body/div[1]/div[1]/form/div[3]"));
        WebElement table_row = element.findElement(By.xpath("//*[@class='x-grid3-body']/div[1]/table/tbody/tr"));
        List<WebElement> cell_data = table_row.findElements(By.tagName("td"));
        int Cnt = cell_data.size();
        for (int i = 0; i <= Cnt; i++) {
            if (i == 3) {
                cell_data.get(i).click();
                break;

            }

        }


    }

}
