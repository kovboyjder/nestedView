sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller, XMLView) {
	"use strict";

	return Controller.extend("NestedViews.controller.View1", {


		onInit : function(){
			var view = this.getCustomersView();
			
			this.getView().byId("__filter1").addContent(view);
		},
		
		getCustomersView : function() {
			var oView = sap.ui.getCore().byId("vwCustomers");
			if (!oView) {
			    oView = sap.ui.view({
				type : sap.ui.core.mvc.ViewType.XML,
				id : "vwCustomers",
				viewName : "NestedViews.view.View2"
			    });
	}
	return oView;
    },
	});

});