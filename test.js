!function() {
  'use strict';

  function test() {
    // open db with default adapter
    var db = new PouchDB('test');

    db.info().then(function(i1) {
      console.log('default', i1);

      // force fruitdown
      db = new PouchDB('test', {adapter: 'fruitdown'});
      db.info().then(function(i2) {
        console.log('fruitdown', i2);
      }).catch(console.error.bind(console));
    }).catch(console.error.bind(console));
  }

  // make sure we idb is clear before running the test
  window.indexedDB.webkitGetDatabaseNames().onsuccess = function(sender) {
    for (var db in sender.target.result) {
      indexedDB.deleteDatabase(sender.target.result[db]);
    }

    test();
  }
}();
