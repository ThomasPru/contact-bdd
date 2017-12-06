//Created by tprunier on 04/12/17.

const {Given, Then, When} = require('cucumber');

Given(/^The contact list is display$/, function(callback) {
    this.browser.visit ("http://127.0.0.1:3000",(err)=>{
        if(err) {
            throw err;
        }
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

When(/^User clicks on remove button of the first contact$/ , function(callback) {
    this.browser.visit ("http://127.0.0.1:3000",(err)=> {
        if (err) {
            throw err;
        }
        var button = this.browser.queryAll ('table tbody td a');
        button[0].click();
        callback();
    });
});

Then(/^The first contact is removed$/ , function(callback) {
    this.browser.visit ("http://127.0.0.1:3000",(err)=> {
        if (err) {
            throw err;
        }
        var contactList = this.browser.tabs.current.Contact.Contacts.instance().iterator().next();

        var contactRemoved = this.browser.queryAll ('table tbody td');
        this.browser.assert.success(contactList.firstName(), "Jacques");
        this.browser.assert.success(contactList.firstName(),contactRemoved[0].innerText);
        callback();
    });
});