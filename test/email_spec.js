var assert = require('assert');
var findEmails = require('./../index');

describe('Emails', function(){
    describe('Email Helper', function() {
        it('finds single email in sentence', function() {
            var emailSentence = "Sentence with middle@sentence.com in it.";
            assert.deepEqual(findEmails(emailSentence), ["middle@sentence.com"]);
            assert.deepEqual(findEmails(emailSentence).length, 1);
        });

        it('finds multiple emails in sentence', function() {
            var emailSentence = "Sentence with multiple@sentence.com middle@sentence.com in them.";
            assert.deepEqual(findEmails(emailSentence), ["multiple@sentence.com", "middle@sentence.com"]);
            assert.deepEqual(findEmails(emailSentence).length, 2);
        });

        it('finds email at end of sentence: period', function() {
            var emailSentence = "Sentence with end@sentence.com.";
            assert.deepEqual(findEmails(emailSentence), ["end@sentence.com"]);
            assert.deepEqual(findEmails(emailSentence).length, 1);
        });

        it('finds email at end of sentence: question mark', function() {
            var emailSentence = "Sentence with end@sentence.com?";
            assert.deepEqual(findEmails(emailSentence), ["end@sentence.com"]);
            assert.deepEqual(findEmails(emailSentence).length, 1);
        });

        it('finds email at end of sentence: exclamation point', function() {
            var emailSentence = "Sentence with end@sentence.com!";
            assert.deepEqual(findEmails(emailSentence), ["end@sentence.com"]);
            assert.deepEqual(findEmails(emailSentence).length, 1);
        });

        it('finds email extra whitespace', function() {
            var emailSentence = "Sentence with      white@space.com      !";
            assert.deepEqual(findEmails(emailSentence), ["white@space.com"]);
            assert.deepEqual(findEmails(emailSentence).length, 1);
        });

        it('finds examples in README.md', function(){
            var emailSentence = "Sentence with multiple@example.com and another@example.com";
            assert.deepEqual(findEmails(emailSentence), ["multiple@example.com", "another@example.com"]);
            assert.deepEqual(findEmails(emailSentence).length, 2);
        })
    });
});