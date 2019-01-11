/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"sa/sap/sample/reuse/form/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"sa/sap/sample/reuse/form/test/integration/pages/SalesOrder",
	"sa/sap/sample/reuse/form/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "sa.sap.sample.reuse.form.view.",
		autoWait: true
	});
});