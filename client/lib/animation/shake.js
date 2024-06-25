/* global gsap */

/**
 *
 * @param {HTMLElement | string} t
 */

export function shake(t) {
  const animation = gsap.to(t, {
    duration: 0.1,
    x: -10,
    repeat: 5,
    yoyo: true,
  });

  return animation;
  // animation.restart(); 을 사용하기 위해 animation을 반환함
}
