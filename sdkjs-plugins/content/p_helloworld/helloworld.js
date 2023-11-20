function helloWorldPluginFunction(window, undefined) {
	function myInitFunction() {
		var oDocument = Api.GetDocument();
		var oParagraph = Api.CreateParagraph();
		oParagraph.AddText("Hello world!");
		oDocument.InsertContent([oParagraph]);

	}
	
    window.Asc.plugin.init = function () {
        this.callCommand(myInitFunction, true);
    };

    window.Asc.plugin.button = function (id) {
    };
};

helloWorldPluginFunction(window, undefined);