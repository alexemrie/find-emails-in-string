var assert = require('assert');
var findEmails = require('./../index');

describe('Emails', function(){
    describe('Email Helper', function() {
        it('finds single email in sentence', function() {
            var emailSentence = "Sentence with middle@sentence.com in it.";
            assert.deepEqual(findEmails(emailSentence), ["middle@sentence.com"]);
            assert.deepEqual(findEmails(emailSentence).length, 1);
        });
    });
});