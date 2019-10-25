import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {Neutropolis} from "../../map/neutropolis";

export const Airlift: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "airlift",
    setTitleId: 1724,
    names: [{value: "Airlift"}],
    alignment: ALIGNMENT_ANY,
    mapKey: Neutropolis.key,
    location: [7228.0, -71.0, 1280.0],
    badgeText: [{
        value: "Airplanes are the only way to reach some areas with necessary supplies and materiel." +
            " Most jets here are much faster than they look, and must fly far out over the ocean to avoid shattering every window in the Magisterium when they accelerate past mach."
    }],
    notes: "Located in [map:neutropolis] at the end of the runway 677 yards SW of the Lambda Sector marker.",
    links: [
        {title: "Airlift Badge", href: "https://paragonwiki.com/wiki/Airlift_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "1"
};
