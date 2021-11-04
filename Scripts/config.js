//
// REQUIREJS - https://requirejs.org/
//
// config.js - configuration for requirejs. Defines "baseUrl" for base path of script retrieval,
//              "paths" for script retrieval by alias, and "shim" to define dependencies of libs
// main.js   - requirejs load called in _layout.cshtml and _OPlayout.cshtml. Imports scripts common
//              across pages.
//                  (Note: jquery-ui, jquery-unobtrusive-ajax, jquery-validation, multiselect,
//                   and select2 are loaded into the jquery library. Their functionality can be accessed
//                   through the imported jquery parameter (e.g. $))
//
// ADDING A JS MODULE
// 1. Copy necessary script into ~/Scripts/
// 2. (Optional) Add an alias to the "paths" section of requirejs.config
// 3. (Optional) Add module path (or alias) : ["ANY DEPENDENCIES"] to the "shim" section of requirejs.config
// 4. (Optional) Add module path (or alias) to main.js to include it in all pages that load _layout.cshtml / _OPlayout.cshtml
//
// DEFINING A CUSTOM MODULE
// 1. Create JS file in ~/Scripts/common (or other appropriate folder)
// 2. Refer to ~/Scripts/common/cmis-utilities.js or ~/Scripts/common/cmis-citizen-search.js
//    for requirejs "define" syntax
// 3. (Optional) Add module to requirejs.config for easier access
//
// LOADING A MODULE
// 1. Create a JS file (suggested name: Controller/{ViewName}/{Action}.js)
// 2. Refer to ~/Controller/ANC/create.js for syntactic example
//      (Note: jquery-ui, jquery-unobtrusive-ajax, jquery-validation, multiselect,
//       and select2 are loaded into the jquery library. Their functionality can be accessed
//       through the imported jquery parameter (e.g. $))
//


// Configure loading modules from the Scripts directory,
(function () {

    let pathEl = document.querySelector('[data-path]');
    if (!(pathEl && pathEl.dataset.path)) {
        alert('Failed to load javascript dependency path');
    }

    requirejs.config({
        baseUrl: `${pathEl.dataset.path}Scripts`,
        paths: {
            'bootbox': 'bootbox.min',
            'bootstrap': 'bootstrap.min',
            'jquery': 'jquery-3.4.1.min',
            'jquery-barcode': 'jquery-barcode.min',
            'jquery-unobtrusive-ajax': 'jquery.unobtrusive-ajax.min',
            'jquery-validation': 'jquery.validate.min',
            'jquery.validate.unobtrusive' : 'jquery.validate.unobtrusive.min',
            'multiselect': 'multiselect.min',
            'respond': 'respond.min',
            'select2': 'select2.min',
            'datatables-bs.net': 'datatables.min',
            'Controller': 'Controller',
            'moment': 'moment.min',
            'bootstrap-datetimepicker': 'bootstrap-datetimepicker.min'
        },
        shim: {
            'common/cmis-citizen-search': ['jquery'],
            'common/cmis-utilities': ['jquery', 'jquery-unobtrusive-ajax'],
            'bootbox': ['jquery', 'bootstrap'],
            'bootstrap': ['jquery'],
            'jquery-barcode': ['jquery'],
            'jquery-unobtrusive-ajax': ['jquery'],
            'jquery-validation': ['jquery'],
            'jquery.validate.unobtrusive': ['jquery-validation'],
            'multiselect': ['jquery'],
            'respond': ['jquery'],
            'select2': ['jquery', 'css!/Content/css/select2.min'],
            'datatables-bs.net': ['jquery', 'bootstrap', 'css!/Content/datatables.min'],
            'bootstrap-datetimepicker': ['jquery', 'bootstrap', 'moment', 'css!/content/bootstrap-datetimepicker']
        },
        map: {
            '*': {
                'css': 'css' // or whatever the path to require-css is
            }
        },
        waitSeconds: 60,
        urlArgs: "v=" + (window.CMIS_IsDebug ? new Date().getTime() : window.CMIS_AppVersion)
    });

    // Load the main app module to start the app
    requirejs(['Controller/main']);
}());