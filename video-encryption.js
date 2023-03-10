var video_encryption = {
    mediaSource:new MediaSource(),

    checkSupported: function (cb) {
        if ('MediaSource' in window && MediaSource.isTypeSupported(this.mimeCodec)) {
            
        } else {
            this.video.src  = assetUrl;
            console.error('Unsupported MediaSource or unsupported MIME type or codec: ', this.mimeCodec);
        }
    },

    init: function (selector, assetUrl, mimeCodec) {
        this.video = document.querySelector(selector);
        this.assetUrl = assetUrl;
        this.mimeCodec = mimeCodec;
        this.checkSupported();
        this.start();
    },
    start: function () {
        console.log(this.mediaSource.readyState);
        this.video.src = URL.createObjectURL(this.mediaSource);
        this.mediaSource.addEventListener('sourceopen', this.sourceOpen.bind(this));
    },

    sourceOpen: function (_) {
        var _this = this;
        console.log(this.mediaSource.readyState);
        var sourceBuffer = this.mediaSource.addSourceBuffer(this.mimeCodec);
        this.fetchAB(this.assetUrl, function (buf) {
            sourceBuffer.addEventListener('updateend', function (_) {
                _this.mediaSource.endOfStream();
                console.log(_this.mediaSource.readyState);
            });
            sourceBuffer.appendBuffer(buf);
        });
    },

    fetchAB: function (url, cb) {
        var xhr = new XMLHttpRequest;
        xhr.open('get', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function () {
            cb(xhr.response);
        };
        xhr.send();
    }
};