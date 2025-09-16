(function () {
    // Store the URL in a constant for easy updates and better readability.
    // const DOCUMENT_CENTER_URL = 'https://sar-sci-prod-org-sar-cf-prod-space-documentcenter-approuter.cfapps.eu10-004.hana.ondemand.com/comntthrsdocumentcenter/index.html?sap_idp=httpsperformancemanager5.successfact';
    const DOCUMENT_CENTER_URL = 'https://itgdev-de-an04560-specialrequests-approuter.cfapps.eu10.hana.ondemand.com/comntthrsEmployeeSpecialRequests/index.html?sap_idp=httpssalesdemo.successfactors.eusfid';

    try {
        // Use optional chaining (?.) to safely access nested properties.
        // This prevents an error if 'pageHeaderJsonData' or 'userInfo' doesn't exist.
        const isProxyUser = window.pageHeaderJsonData?.userInfo?.proxyId;

        // A "guard clause" makes the code's intent clearer.
        if (isProxyUser) {
            // Note: window.alert() is blocking and can be disruptive.
            // For a better user experience, consider showing a message in the page's HTML instead.
            window.alert("You are not allowed to view this App.");
            return; // Exit the function early.
        }

        // If the user is allowed, redirect the current page to the new URL.
        // This avoids popup blockers, which often stop window.open().
        window.location.href = DOCUMENT_CENTER_URL;

    } catch (error) {
        // Log any unexpected errors to the console for easier debugging.
        console.error("Error checking user permissions:", error);
        window.alert("An error occurred while trying to load the application.");
    }
})();