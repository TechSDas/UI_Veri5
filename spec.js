let pageObjects = {
    ListReport: require("../pages/ListReport.view")
};
describe('test', function () {

    it("Load UI5 dependencies test", function() {
        browser.sleep(10000);
        browser.driver.wait(function(){
            return browser.driver.findElements(by.css('button[id$="-cl"]')).then(function (elements) {
              if(elements.length > 0 && elements[0].click) {
                  elements[0].click();
              }
              return !!elements.length;
            });
          }, browser.getPageTimeout, 'Waiting for page reload to finish');
          browser.loadUI5Dependencies()
    });

    it('Should load the application', function () {
       Given.iStartTheApp();
    });

    it('Click on the go button', function () {
        When.onTheListReportPage.iClickTheGoButton();
    });

    it('List of report table test', function () {
        Then.onTheListReportPage.iShouldSeeTablelisted(6);
    });
});



