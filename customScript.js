(function () {
    // const DOCUMENT_CENTER_URL = 'https://sar-sci-prod-org-sar-cf-prod-space-documentcenter-approuter.cfapps.eu10-004.hana.ondemand.com/comntthrsdocumentcenter/index.html?sap_idp=httpsperformancemanager5.successfact';
    const DOCUMENT_CENTER_URL = 'https://itgdev-de-an04560-specialrequests-approuter.cfapps.eu10.hana.ondemand.com/comntthrsEmployeeSpecialRequests/index.html?sap_idp=httpssalesdemo.successfactors.eusfid';

    /**
     * Displays a full-screen access denied message.
     */
    function displayAccessDeniedMessage() {
        const messageOverlay = document.createElement('div');
        messageOverlay.innerHTML = `
            <div style="text-align: center; font-family: sans-serif;">
                <h2 style="font-size: 24px; color: #DC2626;">Access Denied</h2>
                <p style="font-size: 16px;">You are not allowed to view this application.</p>
            </div>
        `;
        Object.assign(messageOverlay.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            color: '#111827',
            display: 'grid',
            placeContent: 'center',
            zIndex: '9999'
        });
        document.body.appendChild(messageOverlay);
    }

    try {
        const isProxyUser = window.pageHeaderJsonData?.userInfo?.proxyId;

        if (isProxyUser) {
            displayAccessDeniedMessage();
            return;
        }

        // Changed back to window.open() to launch in a new tab.
        window.open(DOCUMENT_CENTER_URL, '_blank');

    } catch (error) {
        console.error("Error checking user permissions:", error);
        displayAccessDeniedMessage();
    }
})();