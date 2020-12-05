gsap.registerPlugin(ScrollTrigger);

const snapTo = (i) => {
	gsap.to(window, {
		scrollTo: { y: i * innerHeight, autoKill: false },
		duration: 0.9,
		ease: 'strong.inOut',
	});
};

gsap.utils.toArray('.section').forEach((section, i) => {
	// Scroll Down Snap
	ScrollTrigger.create({
		trigger: section,
		onEnter: () => snapTo(i),
	});

	// Scroll Up Snap
	ScrollTrigger.create({
		trigger: section,
		start: 'bottom bottom',
		onEnterBack: () => snapTo(i),
	});
});
