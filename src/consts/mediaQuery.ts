const MOBILE_N_TABLET_BREAKPOINT = 480;
const TABLET_N_DESKTOP_BREAKPOINT = 768;
const DESKTOP_N_BIG_DESKTOP_BREAKPOINT = 1194;

const MORE_TABLET_LEFF_DESKTOP_MEDIA_QUERY = `screen and (min-width: ${MOBILE_N_TABLET_BREAKPOINT}px) and (max-width: ${DESKTOP_N_BIG_DESKTOP_BREAKPOINT}px)`;
const MORE_DESKTOP_MEDIA_QUERY = `screen and (min-width: ${TABLET_N_DESKTOP_BREAKPOINT}px)`;
const MORE_DESKTOP_LESS_BIG_DESKTOP_MEDIA_QUERY = `screen and (min-width: ${TABLET_N_DESKTOP_BREAKPOINT}px) and (max-width: ${DESKTOP_N_BIG_DESKTOP_BREAKPOINT}px)`;
const MORE_BIG_DESKTOP_MEDIA_QUERY = `screen and (min-width: ${DESKTOP_N_BIG_DESKTOP_BREAKPOINT}px)`;

export {
  MORE_TABLET_LEFF_DESKTOP_MEDIA_QUERY,
  MORE_DESKTOP_MEDIA_QUERY,
  MORE_DESKTOP_LESS_BIG_DESKTOP_MEDIA_QUERY,
  MORE_BIG_DESKTOP_MEDIA_QUERY,
};
