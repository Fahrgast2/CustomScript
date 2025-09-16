(function () {
    // create dialog elements

    const isProxy = window.pageHeaderJsonData.userInfo.proxyId;
    if (isProxy) {
        console.log("is proxy")
    }else{
        console.log("NO")
    }
    // set attributes
    // dialog.setAttribute("header-text", "Third Party JavaScript");
    // footer.setAttribute("slot", "footer");
    // // content
    // content.innerHTML = "This dialog was created by third party JS file";
    // content.style.padding = "1rem";
    // // footer btn
    // footerBtn.onclick = () => dialog.close();
    // footerBtn.innerHTML = "Close";
    // // append elements
    // dialog.appendChild(content);
    // dialog.appendChild(footer);
    // footer.appendChild(footerBtn);
    // document.body.appendChild(dialog);
    // // open dialog
    // dialog.show();
})();