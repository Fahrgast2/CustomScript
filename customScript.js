(function () {
 // const DOCUMENT_CENTER_URL = 'https://sar-sci-prod-org-sar-cf-prod-space-documentcenter-approuter.cfapps.eu10-004.hana.ondemand.com/comntthrsdocumentcenter/index.html?sap_idp=httpsperformancemanager5.successfact';
    const DOCUMENT_CENTER_URL = 'https://itgdev-de-an04560-specialrequests-approuter.cfapps.eu10.hana.ondemand.com/comntthrsEmployeeSpecialRequests/index.html?sap_idp=httpssalesdemo.successfactors.eusfid';

    try {
        // Safely access the proxyId using optional chaining (?.)
        const isProxyUser = window.pageHeaderJsonData?.userInfo?.proxyId;

        if (isProxyUser) {
            // Reverted back to the alert box as requested.
            window.alert("You are not allowed to view this App.");
            return; // Exit the function.
        }

        // Open the URL in a new tab.
        window.open(DOCUMENT_CENTER_URL, '_blank');

    } catch (error) {
        // Log any unexpected errors and alert the user.
        console.error("Error checking user permissions:", error);
        window.alert("An error occurred while trying to load the application.");
    }
})();