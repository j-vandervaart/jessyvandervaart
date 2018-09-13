# A MongoDB, Express.js, and Vue.js Portfolio Website

This portfolio project started with the creation of an Express.js app shell and then the installation of a few npm modules including Mongoose and nodemailer (located in app.js).

I then created an api using Express.js' router method. The router watches for URL parameter changes and then, using Mongoose database models, serves up information in the form of JSON from a document database. The primary query looks for dynamic changes in the url (ex. '/api/work/:proj_id') and serves up information related to the dynamic value (':proj_id').

The website's front-end is powered by Vue.js and is found in the project's public folder. The website utilizes Vue.js' built-in router to create a single page website. The router watches for changes in the URL and animates in different Vue components based on the URL paramaters. As the various components are brought in they call on a function which makes an AJAX get request to the Mongo/Express API created in the website's backend. The result is a website that serves up dynamic content without page refreshes.
