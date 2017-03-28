"use strict";


var path = require("path");


module.exports = function (grunt) {


  grunt.initConfig({


      pkg: grunt.file.readJSON("package.json"),


      express: {

        dev: {

          options: {
            script: "app.js",
            port: 3000
          }

        }

      },


      copy: {

        govuk: {

          files: [

            {
              expand: true,
              cwd: "node_modules/govuk_template_jinja/assets/javascripts",
              src: "**",
              dest: "public/govuk/javascripts"
            },

            {
              expand: true,
              cwd: "node_modules/govuk_template_jinja/assets/stylesheets",
              src: "**",
              dest: "public/govuk/stylesheets"
            },

            {
              expand: true,
              cwd: "node_modules/govuk_template_jinja/assets/images",
              src: "**",
              dest: "public/govuk/images"
            },

            {
              expand: true,
              cwd: "node_modules/govuk_frontend_toolkit/javascripts",
              src: "**",
              dest: "public/govuk/javascripts"
            },

            {
              expand: true,
              cwd: "node_modules/govuk_frontend_toolkit/images",
              src: "**",
              dest: "public/govuk/images"
            },

            {
              expand: true,
              cwd: "node_modules/govuk_frontend_toolkit/stylesheets",
              src: "**",
              dest: "public/govuk/sass"
            },

            {
              expand: true,
              cwd: "node_modules/govuk-elements-sass/public/sass",
              src: "**",
              dest: "public/govuk/sass"
            }

          ]

        }

      },


      handlebars: {

        files: [ "views/**/*.hbs" ]

      },


      sass: {

        dist: {

          options: {
            noCache: true,
            style: "expanded",
            sourcemap: "none"
          },

          files: {
            "public/styles/main.css"  : "public/sass/main.scss",
            "public/styles/print.css" : "public/sass/print.scss"
          }

        }

      },


      pa11y: {
        options: {
          url: "google.com"
        }
      },


      watch: {

        express: {
          files: ["routes/**/*.js", "models/**/*.js"],
          tasks: ["express:dev"],
          options: {
            livereload: true,
            spawn: false
          }
        },

        handlebars: {

          files: ["views/**/*.hbs"],
          task: ["handlebars"],

          options: {
            livereload: true,
            spawn: false
          }

        },

        sass: {
          files: ["public/sass/**/*.scss"],
          tasks: ["sass"],
          options: {
            livereload: true,
            spawn: false
          }
        }

      }


  });

  [
    "grunt-express-server",
    "grunt-contrib-copy",
    "grunt-contrib-handlebars",
    "grunt-contrib-sass",
    "grunt-contrib-watch"
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask("default", [
    "express:dev",
    "copy:govuk",
    "handlebars",
    "sass",
    "watch",
  ]);


};
