RemoteStorage.config.logging = false;
RemoteStorage.config.changeEvents = {
  local: true,
  window: true,
  remote: true,
  conflict: true
};
remoteStorage.access.claim('articles', 'rw');
