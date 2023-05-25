const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "Power3.easeout" },
});

tl.fromTo(
  ".img",
  { scale: 1.2, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    delay: 0.3,
    duration: 2.5,
    ease: "elastic.out(1.5, 1)",
  }
);

tl.fromTo(
  ".word-1",
  { x: "100%", opacity: 0 },
  { x: "0%", opacity: 1 },
  "<20%"
);

tl.fromTo(
  ".word-2",
  { y: "100%", opacity: 0 },
  { y: "0%", opacity: 1 },
  "<20%"
);

tl.fromTo(
  ".word-3",
  { x: "-100%", opacity: 0 },
  { x: "0%", opacity: 1 },
  "<20%"
);

tl.fromTo(
  ".text-2",
  { y: "100%", opacity: 0 },
  { y: "0%", opacity: 1 },
  "<20%"
);
// tl.fromTo(".word-4", {}, {});
// tl.fromTo(".word-5", {}, {});
// tl.fromTo(".word-6", {}, {});

// tl.fromTo(
//     ".img",
//     { duration: 0.5, x: "70%", width: "0%" },
//     { x: "0%", width: "100%", delay: 0.3, duration: 1 }
// );
