class ScrollService
{
    static scrollTop = 0;
    static scrollLeft = 0;
    static _handlers = [];

    static on (handler) {
        if (typeof handler === 'function') {
            ScrollService._handlers.push(handler);
        }
    }

    static off (handler) {
        if (typeof handler === 'function') {
            ScrollService.splice(ScrollService._handlers.indexOf(handler), 1);
        }
    }

    static update () {
        ScrollService._handlers.forEach(handler =>
            handler({ top: ScrollService.scrollTop, left: ScrollService.scrollLeft })
        );
    }
}

window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    ScrollService.scrollTop = top;
    ScrollService.scrollLeft = left;
    ScrollService.update();
});

export default ScrollService;
