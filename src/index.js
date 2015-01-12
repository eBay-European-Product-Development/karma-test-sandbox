"use strict";

var $ = require("jquery");

var TestSandbox = function () {
    var $testSandbox;

    function createTestSandbox() {
        $testSandbox = $('<div id="test-sandbox"></div>');
    }

    function setUpWithMustacheFixture(mustacheTemplate){
        createTestSandbox();
        var fixture = mustacheTemplate.render();

        $testSandbox.empty();

        $testSandbox.append(fixture);
        $('body').append($testSandbox);

        return $testSandbox;
    }

    function setUpWithHtmlFixture(htmlFixture){
        createTestSandbox();

        $testSandbox.append(htmlFixture);
        $('body').append($testSandbox);

        return $testSandbox;
    }

    function tearDown() {
        $testSandbox.remove();
    }

    return {
        setUpWithMustacheFixture:setUpWithMustacheFixture,
        setUpWithHtmlFixture:setUpWithHtmlFixture,
        tearDown: tearDown
    };
};

module.exports = new TestSandbox();