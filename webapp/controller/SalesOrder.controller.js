sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
	"use strict";
	return Controller.extend("sa.sap.sample.reuse.form.controller.SalesOrder", {
		onInit: function () {
			var oJsonModel = new JSONModel({
				data: {},
				displayMode: "D"
			});
			this.getView().setModel(oJsonModel, "FormDataModel");
			var oDataModel = this.getOwnerComponent().getModel();
			var sPath = "/SoheaderdataSet('500000000')";
			oDataModel.read(sPath, {
				success: this._onSalesOrderReadSuccess.bind(this),
				error: this._onSalesOrderReadFail.bind(this)
			});
		},
		onSalesOrderEdit: function () {
			this.getView().getModel("FormDataModel").setProperty("/displayMode", "E");
			this.getView().byId("idSalesOrderDetails").refresh();
		},
		onSalesOrderDisplay: function () {
			this.getView().getModel("FormDataModel").setProperty("/displayMode", "D");
			this.getView().byId("idSalesOrderDetails").refresh();
		},
		onSalesOrderSave: function(){
			this.byId("idSalesOrderDetails").validate();
		},
		_onSalesOrderReadSuccess: function (oResponse) {
			this.getView().getModel("FormDataModel").setProperty("/data", oResponse);
		},
		_onSalesOrderReadFail: function () {
			MessageToast.show("Error in Reading Sales Order Details");
		}
	});
});
