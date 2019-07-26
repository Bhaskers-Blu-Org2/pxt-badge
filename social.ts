namespace badge {
    function socialScene() {
        if (badge.qrimg) {
            sprites.create(badge.qrimg);
            scene.cameraShake()
        }
        else {
            const qr = sprites.create(sprites.duck.duck1)
            control.runInBackground(() => {
                badge.qrimg = qrcode.encodeString("https://linked.in/in/" + badge.linkedin);
                qr.setImage(badge.qrimg);
                qr.x = screen.width >> 1;
                qr.y = screen.height >> 1;
                scene.cameraShake()
            })
        }

        controller.B.onEvent(ControllerButtonEvent.Pressed, () => {
            storyboard.replace("home");
        })

        const strip = light.onboardStrip();
        scene.setBackgroundImage(image.create(screen.width, screen.height));
        scene.backgroundImage().printCenter("Connect on LinkedIn", 4, 1, image.font5);
        if (badge.lightStrip) {
            strip.setAll(0x00ff00);
            strip.startBrightnessTransition(24, 0, 400, 1, false, new light.EasingBrightnessTransition(easing.outQuad, easing.inOutQuad));
        }
    }

    storyboard.registerScene("social", socialScene)
}