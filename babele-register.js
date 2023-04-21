Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'call-of-cthulhu-7th-babele-ua',
			lang: 'uk',
			dir: 'compendium'
		});
		
		document.getElementById("logo").src="/modules/call-of-cthulhu-7th-babele-ua/img/fvtt-anvil.png";
	}
});
