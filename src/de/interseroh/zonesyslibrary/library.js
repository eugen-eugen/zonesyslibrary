/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library de.interseroh.zonesyslibrary.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * 
		 *
		 * @namespace
		 * @name de.interseroh.zonesyslibrary
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "de.interseroh.zonesyslibrary",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [
				"de.interseroh.zonesyslibrary.controls.Example"
			],
			elements: []
		});

		/* eslint-disable */
		return de.interseroh.zonesyslibrary;
		/* eslint-enable */

	}, /* bExport= */ false);