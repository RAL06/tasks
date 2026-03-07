import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type HolidayType = "🎄" | "🎆" | "🦃" | "👩‍👧‍👦" | "🌹";
// The holidays are in order: christmas, independence day, 
// Thanksgiving, Mother's day, and Veteran's day.
export function CycleHoliday(): React.JSX.Element {
    const [holiday, switchHoliday] = useState<HolidayType>("🎄");

    function switchAlphabet() {
        if (holiday === "🎄") {
            switchHoliday("🎆");
        }
        else if (holiday === "🎆") {
            switchHoliday("👩‍👧‍👦");
        }
        else if (holiday === "👩‍👧‍👦") {
            switchHoliday("🦃");
        }
        else if (holiday === "🦃") {
            switchHoliday("🌹");
        }
        else {
            switchHoliday("🎄");
        }
    }
    function switchYear() {
        if (holiday === "👩‍👧‍👦") {
            switchHoliday("🎆");
        }
        else if (holiday === "🎆") {
            switchHoliday("🌹");
        }
        else if (holiday === "🌹") {
            switchHoliday("🦃");
        }
        else if (holiday === "🦃") {
            switchHoliday("🎄");
        }
        else {
            switchHoliday("👩‍👧‍👦");
        }
    }
    return (
        <div>
            Holiday: {holiday}
            <Button onClick= {switchAlphabet}>Advance By Alphabet</Button>
            <Button onClick= {switchYear}>Advance By Year</Button>
        </div>
    );
}
