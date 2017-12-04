//Created by tprunier on 04/12/17.

const {Given, Then, When} = require('cucumber');

Given(/^The contact list is display$/, function(callback){
    this.browser.visit("http://127.0.0.1:3000",(err)=>{
        if(err) throw err;
        var contact = this.browser.tabs.current.Contact.contacts();
        var iterator=contact.iterator();
        var actualContact;
        iteratorlist=0;
        var listeContact = this.browser.queryAll('table tbody tr td');
        while(iterator.hasNext() != "") {
            actualContact = iterator.next();
            this.browser.assert.success(listeContact[iteratorlist].innerText, actualContact.firstName());
            iteratorlist += 1;
            this.browser.assert.success(listeContact[iteratorlist].innerText, actualContact.lastName());
            iteratorlist += 5;
        }
        callback();
    });
});

/*
When(/^ I change the PIN to {int}$/,function(value,callback){...
    callback();
});
Then(/^ the system should remember my PIN is now {int}$/,function(value, callback){
    assert.equal(this.card.pin(), value);
    callback();
});
*/