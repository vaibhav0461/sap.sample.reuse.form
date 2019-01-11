function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZEPM_MODEL_ODATA_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}