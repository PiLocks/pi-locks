/*
  Central media manifest.

  Every image on the site is registered here exactly once. The previous
  approach kept the ids inside individual pages, which is how
  photo-1486406146926 ended up serving as both the hero poster and the
  mid-page band, and how photo-1581092160562 leaked onto two routes.

  Rule: one id per slot, no id reused anywhere on the site. If you add a
  slot, add a new id here — do not borrow an existing one.

  Art direction
  -------------
  The site is positioned against architectural developers (the reference
  brief), not against IT resellers. Every photograph is therefore a piece
  of contemporary West Coast architecture — dusk and golden-hour exteriors,
  glass, concrete, timber and warm interior light — rather than the
  circuit-board / server-rack / ceiling-dome / handshake imagery that made
  an earlier pass read like a cabling supplier's price list.

  Two hosts are used:
    u() — Unsplash, `photo-<id>`
    p() — Pexels,   `<numeric id>`

  Both permit hotlinking at the widths requested here.
*/

/*
  Both hosts are asked for the aspect ratio the slot will actually render,
  not the photograph's native ratio.

  This matters: several of the Pexels sources are portrait (0.56–0.75) and
  the frames here are landscape (1.33–1.78). Letting `object-fit: cover` do
  the work cut up to 216% off the frame — a rooftop or a facade lost its
  subject. Cropping at the CDN instead means the delivered file already has
  the right shape and `cover` has almost nothing left to trim.

  Ratios used on the site:
    16:9 -> 1.78   full-bleed bands, hero poster
     3:2 -> 1.5    capability carousel
     4:3 -> 1.33   "who we work for", services figures
*/
const AR = { wide: 16 / 9, photo: 3 / 2, card: 4 / 3 } as const;

const u = (id: string, w = 1600, ar: number = AR.photo) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&h=${Math.round(w / ar)}&auto=format&fit=crop`;

const p = (id: string, w = 1600, ar: number = AR.photo) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${Math.round(w / ar)}&fit=crop`;

/*
  Hero video.

  Stock: Pexels, "Drone Footage of a Buildings" — a slow aerial pass over
  modern towers. Chosen to replace the previous clip ("Blue Colored
  Cables"), which was technically fine but read as a cabling supplier's
  own advert and undercut the whole positioning.

  The poster below is deliberately a dusk architectural frame, so if the
  video is blocked, throttled or fails to decode, the hero still lands on a
  premium image rather than on nothing. Swap `src` for brand footage of
  your own at any time — it is the only line that needs to change.
*/
export const HERO_VIDEO = {
  src: "https://videos.pexels.com/video-files/6950314/6950314-hd_1920_1080_30fps.mp4",
} as const;

export const img = {
  /* hero poster — sits behind the 16:9 video, so it must stand alone */
  heroPoster: p("4626268", 2400, AR.wide),

  /* full-bleed mid-page band — 16:9 */
  band: p("10344206", 2400, AR.wide),

  /* capability carousel — 3:2 */
  accessRack: p("5098634", 1600, AR.photo),
  patchPanel: p("28481587", 1600, AR.photo),
  cameras: p("37435153", 1600, AR.photo),
  smartLock: p("7598365", 1600, AR.photo),
  technician: p("6794929", 1600, AR.photo),
  av: u("photo-1598488035139-bdbb2231ce04", 1600, AR.photo),

  /* who we work for — 4:3 */
  gc: p("1666667", 1200, AR.card),
  designer: u("photo-1600585154340-be6161a56a0c", 1200, AR.card),
  property: u("photo-1486406146926-c627a92ad1ab", 1200, AR.card),
  strata: u("photo-1545324418-cc1a3fa10c00", 1200, AR.card),
  tenant: u("photo-1441986300917-64674bd600d8", 1200, AR.card),

  /* services route figures — 4:3 */
  structuredCabling: p("38816564", 1400, AR.card),
  accessControl: p("18415802", 1400, AR.card),
  surveillance: p("28532416", 1400, AR.card),
  doorHardware: p("6146552", 1400, AR.card),

  /* about route full-bleed bands — 16:9 */
  office: p("31117874", 2400, AR.wide),
  commercial: p("33857126", 2400, AR.wide),
  history: p("26859301", 2400, AR.wide),
  approach: p("33798955", 2400, AR.wide),
  impact: p("31884675", 2400, AR.wide),
} as const;