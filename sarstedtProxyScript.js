(function () {
    const DOCUMENT_CENTER_URL = 'https://sar-sci-prod-org-sar-cf-prod-space-documentcenter-approuter.cfapps.eu10-004.hana.ondemand.com/comntthrsdocumentcenter/index.html?sap_idp=httpsperformancemanager5.successfact';
    try {
        const isProxyUser = window.pageHeaderJsonData?.userInfo?.proxyId;
        if (isProxyUser) {
            window.alert("You are not allowed to view this App.");
            return; 
        }
        window.open(DOCUMENT_CENTER_URL, '_blank');
    } catch (error) {
        console.error("Error checking user permissions:", error);
        window.alert("An error occurred while trying to load the application.");
    }
})();
