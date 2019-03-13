// const auth = require('solid-auth-client');
// import upperCase from 'lodash.uppercase';
// var startCase = require('lodash.startcase');
// const auth = require('solid-auth-client');
import auth from './solid-auth-client.bundle.js';

// Check out https://stackoverflow.com/a/46388898
// We want the pageAction to always be shown/active
browser.tabs.onUpdated.addListener(tabId => {
  browser.pageAction.show(tabId);
});

browser.pageAction.onClicked.addListener(tab => {
  browser.notifications.create('bookmarked', {
    type: 'basic',
    iconUrl: browser.extension.getURL('icons/icon.svg'),
    title: 'Bookmarked!',
    // message: `${tab.url} ${upperCase(tab.url)} ${startCase(tab.url)}`
    message: tab.url
  });

  auth.trackSession(session => {
    if (!session) console.log('The user is not logged in');
    else console.log(`The user is ${session.webId}`);
  });
});
