requirejs.config({
    baseUrl: '',
    paths: {
        app: 'features'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['/src/scripts/angular/angular.js','app/app.module']);