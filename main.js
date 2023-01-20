const player = new Plyr("#player", {
  title: "Vun-Video",
  autoplay: false,
  seekTime: 10,
  volume: 0.7, muted: false,
  ratio: "3:2",
  resetOnEnd: false,
  disableContextMenu: true,
  loadSprite: true,
  blankVideo: "https://cdn.plyr.io/static/blank.mp4",
  captions: {
    active: true,
    //language: "auto",
  },

  tooltips: { 
    controls: true,
    seek: true
  },

  i18n: {
    restart: "重播", play: "播放", pause: "暫停",
    rewind: "倒退 {seektime} 秒", fastForward: "前進 {seektime} 秒",
    seek: "尋找",
    played: "已播放",
    buffered: "緩衝",
    currentTime: "目前時間", duration: "總共時間",
    volume: "音量", mute: "靜音", unmute: "取消靜音",
    enableCaptions: "開啟字幕", disableCaptions: "關閉字幕",
    enterFullscreen: "進入全螢幕", exitFullscreen: "退出全螢幕",
    frameTitle: "{title} 播放器",
    captions: "影片字幕",
    settings: "設定",
    speed: "播放速率", normal: "正常",
    quality: "影片畫質",
    loop: "循還播放",
    start: "開始", end: "結束",
    all: "全部",
    reset: "重置",
    disabled: "關閉",
    advertisement: "廣告",
    qualityBadge: {
      4320: "８Ｋ",
      2160: "４Ｋ",
      1440: "２Ｋ",
      1080: "ＨＤ",
      720: "ＨＤ",
      576: "ＳＤ",
      480: "ＳＤ",
    },
  },
  
  controls: [
    "play-large",
    // "restart",
    "rewind",
    "play",
    "fast-forward",
    "progress",
    "current-time",
    "duration",
    "mute",
    "volume",
    "captions",
    "settings",
    // "pip",
    // "airplay",
    // "download",
    "fullscreen"
  ],

  settings: [
    "captions", 
    "quality", 
    "speed"
  ],

  keyboard: {
    focused: true,
    global: false
  },

  quality: {
    default: 1080,
    options:[4320, 2160, 1440, 1080, 720, 576, 480],
    forced: false,
    onChange: null
  },

  storage: {
    enabled: true,
    key: "vun-video"
  },

  speed: {
    selected: 1,
    options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4]
  },

  loop: {
    active: false
  },

  ads: {
    enabled: false,
    publisherId: "",
    tagUrl: "" 
  },
});
