
    function shouldShowAnnouncementBar() {
      try {
        if (!window.Static.SQUARESPACE_CONTEXT.showAnnouncementBar) {
          return false;
        }
        var localDataStr = localStorage.getItem('squarespace-announcement-bar');
        if (localDataStr && JSON.parse(localDataStr).closed) {
          return false;
        }
        return true;
      } catch(e) {
        console.error(e);
        return true;
      }
    }
    if (shouldShowAnnouncementBar()) {
      document.body.classList.add('announcement-bar-reserved-space');
    }
    //# sourceURL=reserveSpaceForAnnouncementBar.js
  