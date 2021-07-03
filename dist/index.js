#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var yargs = require("yargs");
var shell = require("shelljs");
var inquirer = require("inquirer");
var template = require("./utils/template");
var chalk = require("chalk");
/**
 * @description holds the project generator
 */
// Questions
var QUESTIONS = [
    {
        name: "name",
        type: "input",
        message: "Project name:",
        when: function () { return !yargs.argv["name"]; },
        validate: function (input) {
            if (/^([A-Za-z\-\_\d])+$/.test(input))
                return true;
            else
                return "Project name may only include letters, numbers, underscores and hashes.";
        }
    }
];
// current directory
var CURR_DIR = process.cwd();
// prompts questions to user
inquirer.prompt(QUESTIONS).then(function (answers) {
    var userAnswers = Object.assign({}, answers, yargs.argv);
    var projectName = userAnswers["name"];
    var templatePath = path.join(__dirname, "../template");
    var targetPath = path.join(CURR_DIR, projectName);
    var templateConfig = getTemplateConfig(templatePath);
    var options = {
        projectName: projectName,
        templatePath: templatePath,
        targetPath: targetPath,
        config: templateConfig
    };
    if (!createProject(targetPath)) {
        return;
    }
    createDirectoryContents(templatePath, projectName, templateConfig);
    if (!postProcess(options)) {
        return;
    }
    showMessage(options);
});
/**
 * shows message to user
 * @param options cli options
 */
var showMessage = function (options) {
    console.log("");
    console.log(chalk.green("Done."));
    console.log(chalk.green("Go into the project: cd " + options.projectName));
    var message = options.config.postMessage;
    if (message) {
        console.log("");
        console.log(chalk.yellow(message));
        console.log("");
    }
};
/**
 * gets template config
 * @param templatePath template path
 * @returns tempate config
 */
var getTemplateConfig = function (templatePath) {
    var configPath = path.join(templatePath, ".template.json");
    if (!fs.existsSync(configPath))
        return {};
    var templateConfigContent = fs.readFileSync(configPath);
    if (templateConfigContent) {
        return JSON.parse(templateConfigContent.toString());
    }
    return {};
};
/**
 * creates project
 * @param projectPath project path
 * @returns true if folder does not already exist
 */
var createProject = function (projectPath) {
    if (fs.existsSync(projectPath)) {
        console.log(chalk.red("Folder " + projectPath + " exists. Delete or use another name."));
        return false;
    }
    fs.mkdirSync(projectPath);
    return true;
};
/**
 * applies post processes for node
 * @param options cli options
 */
var postProcess = function (options) {
    if (isNode(options)) {
        return postProcessNode(options);
    }
    return true;
};
/**
 * checks if package.json exists
 * @param options cli options
 * @returns true if package.json exists
 */
var isNode = function (options) {
    return fs.existsSync(path.join(options.templatePath, "package.json"));
};
/**
 * applies post process for node,
 * npm install etc.
 * @param options cli options
 */
var postProcessNode = function (options) {
    shell.cd(options.targetPath);
    var cmd = "";
    if (shell.which("yarn")) {
        cmd = "yarn";
    }
    else if (shell.which("npm")) {
        cmd = "npm install";
    }
    if (cmd) {
        var result = shell.exec(cmd);
        if (result.code !== 0) {
            return false;
        }
    }
    else {
        console.log(chalk.red("No yarn or npm found. Cannot run installation."));
    }
    return true;
};
// skip files
var SKIP_FILES = ["node_modules", ".template.json"];
var CHANGE_PROJECT_NAME_FILES = ["package.json"];
/**
 * creates project directories with contents
 * @param templatePath template path
 * @param projectName project name
 * @param config template config
 */
var createDirectoryContents = function (templatePath, projectName, config) {
    var filesToCreate = fs.readdirSync(templatePath);
    filesToCreate.forEach(function (file) {
        var origFilePath = path.join(templatePath, file);
        // get stats about the current file
        var stats = fs.statSync(origFilePath);
        if (SKIP_FILES.includes(file))
            return;
        if (stats.isFile()) {
            var contents = fs.readFileSync(origFilePath, "utf8");
            if (CHANGE_PROJECT_NAME_FILES.includes(file)) {
                contents = contents.replace("project_name", projectName);
            }
            contents = template.render(contents, { projectName: projectName });
            var writePath = path.join(CURR_DIR, projectName, file);
            fs.writeFileSync(writePath, contents, "utf8");
        }
        else if (stats.isDirectory()) {
            fs.mkdirSync(path.join(CURR_DIR, projectName, file));
            // recursive call
            createDirectoryContents(path.join(templatePath, file), path.join(projectName, file), config);
        }
    });
};
//# sourceMappingURL=index.js.map