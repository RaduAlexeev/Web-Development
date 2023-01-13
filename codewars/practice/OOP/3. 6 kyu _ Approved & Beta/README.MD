In this kata we are going to mimic a software versioning system.

You have to implement a vm function returning an object.

It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: "{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown. If the initial version is not provided or is an empty string, use "0.0.1" by default.

This class should support the following methods, all of which should be chainable (except release):

major() - increase MAJOR by 1, set MINOR and PATCH to 0
minor() - increase MINOR by 1, set PATCH to 0
patch() - increase PATCH by 1
rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to
release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
May the binary force be with you!

describe('VersionManager tests', () => {
    it('Initialization tests', () => {
      Test.assertEquals(vm().release(), '0.0.1', 'Default initial version');
      Test.assertEquals(vm('').release(), '0.0.1', 'Default initial version');
      Test.assertEquals(vm('1.2.3').release(), '1.2.3', 'No version changes');
      Test.assertEquals(vm('1.2.3.4').release(), '1.2.3', 'No version changes');
      Test.assertEquals(vm('1.2.3.d').release(), '1.2.3', 'No version changes');
      Test.assertEquals(vm('1').release(), '1.0.0', 'Default minor version is 0');
      Test.assertEquals(vm('1.1').release(), '1.1.0', 'Default patch is 0');
    });

    it('Major releases tests', () => {
      Test.assertEquals(vm().major().release(), '1.0.0');
      Test.assertEquals(vm('1.2.3').major().release(), '2.0.0');
      Test.assertEquals(vm('1.2.3').major().major().release(), '3.0.0');
    });

    it('Minor releases tests', () => {
      Test.assertEquals(vm().minor().release(), '0.1.0');
      Test.assertEquals(vm('1.2.3').minor().release(), '1.3.0');
      Test.assertEquals(vm('1').minor().release(), '1.1.0');
      Test.assertEquals(vm('4').minor().minor().release(), '4.2.0');
    });

    it('Patch releases tests', () => {
      Test.assertEquals(vm().patch().release(), '0.0.2');
      Test.assertEquals(vm('1.2.3').patch().release(), '1.2.4');
      Test.assertEquals(vm('4').patch().patch().release(), '4.0.2');
    });

    it('Rollbacks tests', () => {
      Test.assertEquals(vm().major().rollback().release(), '0.0.1');
      Test.assertEquals(vm().minor().rollback().release(), '0.0.1');
      Test.assertEquals(vm().patch().rollback().release(), '0.0.1');
      Test.assertEquals(vm().major().patch().rollback().release(), '1.0.0');
      Test.assertEquals(vm().major().patch().rollback().major().rollback().release(), '1.0.0');
    });