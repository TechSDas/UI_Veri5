let goButton = element(by.control({
    viewName: 'sap.suite.ui.generic.template.ListReport.view.ListReport',
    controlType: 'sap.m.Button',
    id: /btnGo$/,
    properties: {
        text: 'Go'
    }
}));


let ColumnListItem = element.all(by.control({
    controlType: "sap.m.ColumnListItem"
}));

let searchField = element(by.control({
    controlType: "sap.m.SearchField",
    interaction: "focus"
}));


// model: "fi1t3rM0d31 (JSONModel)"
// path: "/_BASIC_SEARCH_FIELD"


let firstRow = ColumnListItem.first();

module.exports = createPageObjects({
    ListReport: {
        arrangements: {
            iStartTheApp: function () {
                // app setup
                expect(browser.getTitle()).toBe('Inspection Method');
            }
        },
        actions: {
            iClickTheGoButton: function () {
                expect(goButton.isPresent()).toBeTruthy();
                goButton.click();
            }
        },
        assertions: {
            iShouldSeeTablelisted: function(iCount) {
                expect(ColumnListItem.count()).toBeGreaterThan(iCount);
            },

            iEnterSearchFieldValue: function(value) {
                searchField.sendKeys(value);
            }
        }
    }
});


// browser.driver.wait(function(){
//     return browser.driver.findElements(by.css('<css selector>')).then(function (elements) {
//       return !!elements.length;
//     });
//   }, browser.getPageTimeout, 'Waiting for page reload to finish');