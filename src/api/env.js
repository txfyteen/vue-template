export const env = (function(hostname) {
  try {
    if (hostname.includes('dev.') >= 0) {
      return 'dev';
    } else if (hostname.includes('qa.') >= 0) {
      return 'qa';
    } else if (hostname.includes('stage.') >= 0) {
      return 'stage';
    } else if (hostname.includes('my.egtcp.com') >= 0 || hostname.includes('gttowns.com') >= 0 || hostname.includes('gt.egtcp.com') >= 0) {
      return 'dev';
    } else if (hostname.includes('kf.') >= 0) {
      return 'dev';
    } else {
      return 'pe';
    }
  } catch (e) {
    console.log('环境获取失败...');
  }
})(location.hostname);
