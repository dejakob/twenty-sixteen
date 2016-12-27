class PreloadService {
    static _images = [];
    static _handlers = [];

    static addImage (imageSrc) {
        PreloadService._images.push(imageSrc);
    }

    static async exec () {
        const preload = imgSrc => {
            return new Promise((resolve, reject) => {
                const img = new Image();

                img.src = imgSrc;
                img.onload = () => {
                    resolve(imgSrc);
                };
            });
        };

        for (let imgSrc of PreloadService._images) {
            await preload(imgSrc);
        }

        setTimeout(PreloadService.update, 5000);
    }

    static update () {
        PreloadService._handlers.forEach(handler => handler());
    }

    static onReady (handler) {
        if (typeof handler === 'function') {
            PreloadService._handlers.push(handler);
        }
    }
}

export default PreloadService;
