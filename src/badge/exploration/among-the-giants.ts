import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHive} from "../../map/the-hive";
import {Eden} from "../../map/eden";

export const AmongTheGiants: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "among-the-giants",
    setTitleId: 1851,
    names: [{value: "Among the Giants"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHive.key,
    location: [-1183.0, 0.0, -2849.0],
    badgeText: [{
        value: `You've never seen such hulking monstrosities this close up before, and even with the great power you've amassed in your career it is hard not to be a little intimidated.
Their massive size blots out the sun and the roars they emit rattle the teeth and drive one close to madness.`
    }],
    notes: `Located in [map:${TheHive.key}] 868 yards northwest of the [map:${Eden.key}] transfer point, between a cliff and spire beyond the northeast edge of the crater.`,
    links: [
        {title: "Among the Giants Badge", href: "https://homecoming.wiki/wiki/Among_the_Giants_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "6"
};
