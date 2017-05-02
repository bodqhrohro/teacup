USER_JS = "teacup.user.js"

all:

	find build/ -mindepth 1 -delete

	cat src/description > build/$(USER_JS)

	echo -n 'var teacup_img = "data:image/png;base64,' >> build/$(USER_JS)
	convert src/teacup.png -resize 64x - | base64 -w 0 >> build/$(USER_JS)
	echo '";' >> build/$(USER_JS)

	echo -n 'var splash_img = "data:image/png;base64,' >> build/$(USER_JS)
	convert src/splash.png -resize 64x - | base64 -w 0 >> build/$(USER_JS)
	echo '";' >> build/$(USER_JS)

	cat src/replaceWith.polyfill.js >> build/$(USER_JS)
	cat src/teacup.js >> build/$(USER_JS)
