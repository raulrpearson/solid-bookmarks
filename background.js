console.log('This is working MOFO!');

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
    message: tab.url
  });
});
