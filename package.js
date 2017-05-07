Package.describe({
    name: 'mikedarke:meteor-vue-strap',
    version: '0.0.6',
    // Brief, one-line summary of the package.
    summary: 'Provide vue-strap library to the client',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.4.4.1');
    api.use('ecmascript');
    api.use(['akryum:vue', 'akryum:vue-component'], 'client');

    api.addFiles([
        "client/vue-strap.js"
    ], ['client']);
    api.mainModule('client/client.js', 'client');
});
