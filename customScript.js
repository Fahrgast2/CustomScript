(function () {
    // create dialog elements

    const isProxy = window.pageHeaderJsonData.userInfo.proxyId;
    if (isProxy) {
        window.alert("You are not allowed to view this App");
    }else{
        window.open("https://itgdev-de-an04560-specialrequests-approuter.cfapps.eu10.hana.ondemand.com/comntthrsEmployeeSpecialRequests/index.html?sap_idp=httpssalesdemo.successfactors.eusfid")    
    }
})();