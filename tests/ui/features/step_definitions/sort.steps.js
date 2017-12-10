//Created by tprunier on 04/12/17.

const {Given, Then, When} = require('cucumber');

Given(/^The button sort is displayed$/, function(callback) {
    this.browser.visit ("http://127.0.0.1:3000",(err)=>{
        if(err) {
            throw err;
        }

        var contactList = Contact.Contacts.instance();
        var tabName = [];
        var it=contactList.iterator();
        var tableau = this.browser.queryAll('table tbody tr td');
        var iteration = 0;
        while(it.hasNext()) {
            contactList = it.next();
            tabName[iteration] = contactList.lastName();
            iteration += 1;
        }

        callback();
    });
});

When(/^User clicks on sort button below the contact list$/ , function(callback) {
    this.browser.visit ("http://127.0.0.1:3000",(err)=> {
        if (err) {
            throw err;
        }
        var button = this.browser.queryAll('#button_sort');
        button[0].click();

        callback();
    });
});

Then(/^Contact list is sort$/ , function(callback) {
    this.browser.visit ("http://127.0.0.1:3000",(err)=> {
        if (err) {
            throw err;
        }

        tabName.sort();
        var indice=1;
        for(var i=0; i < tabName.length; i++){
            this.browser.assert.success(tabName[i], tableau[indice].innerText);
            indice += 6 ;
        }

        callback();
    });
});