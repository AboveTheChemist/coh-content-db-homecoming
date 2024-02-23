import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNeutropolis} from "../../map/underground-neutropolis";

export const KeepingTheLightsOn: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "keeping-the-lights-on",
    setTitleId: 1745,
    names: [{value: "Keeping the Lights On"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNeutropolis.key,
    location: [-2378.0, -1222.0, -1455.0],
    badgeText: [{
        value: "While the Keyes Reactors themselves require little fuel to keep humming, the entire island is devoted to power transmission, safety, and security;" +
            " the latter especially due to near-constant Resistance sabotage attempts. All of these functions require maintenance Clockwork and deliveries which come through this bay."
    }],
    notes: "Located in [map:underground-neutropolis] 256 yards west of City Access A.",
    links: [
        {title: "Keeping the Lights On Badge", href: "https://homecoming.wiki/wiki/Keeping_the_Lights_On_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "5"
};
