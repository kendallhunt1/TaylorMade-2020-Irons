import React from 'react';
import './DropDownSelectionsGrouping.css';

export const clubSetDropDown = 
<div className="optionWrapper">
    <div className="optionLabel"><label htmlFor="clubSet">Club Set: </label></div>
    <div className="options">
        <select name="clubSet" id="clubSet">
            <option value="3-PW">3-PW</option>
            <option value="3-9i">3-9i</option>
            <option value="4-PW">4-PW</option>
            <option value="4-9I">4-9i</option>
            <option value="5-PW">5-PW</option>
            <option value="5-9i">5-9i</option>
            <option value="6-PW">6-PW</option>
            <option value="6-9i">6-9i</option>
        </select>
    </div>
</div>

export const shaftDropDown =
<div className="optionWrapper">
    <div className="optionLabel"><label htmlFor="clubShaft">Shaft: </label></div>
    <div className="options">
    <select name="clubShaft" id="clubShaft">
        <option value="KBS Tour Lite">KBS Tour Lite</option>
        <option value="KBS Tour">KBS Tour</option>
        <option value="KBS Taper X">KBS Taper X</option>
        <option value="HZDRS Smoke">HZDRS Smoke</option>
        <option value="HZDRS Smoke">HZDRS Smoke</option>
        <option value="Mitsubishi Ultra Steel">Mitsubishi Ultra Steel</option>
        <option value="Mitsubishi Ultra Graphite<">Mitsubishi Ultra Graphite</option>
    </select>
    </div>
</div>

export const gripDropwDown =
<div className="optionWrapper">
    <div className="optionLabel"><label htmlFor="clubGrip">Grip: </label></div>
    <div className="options">
    <select name="clubGrip" id="clubGrip">
        <option value="Tour Velvet">Tour Velvet</option>
        <option value="Tour Velvet +4">Tour Velvet +4</option>
        <option value="Golf Pride CP2 Blue">Golf Pride CP2 Blue</option>
        <option value="Golf Pride CP2 Red">Golf Pride CP2 Red</option>
        <option value="Lamkin Tack Feel">Lamkin Tack Feel</option>
        <option value="Lamkin Tack Feel Midsize">Lamkin Tack Feel Midsize</option>
    </select>
    </div>
</div>

export const lieAngleDropDown =
<div className="optionWrapper">
    <div className="optionLabel"><label htmlFor="clubLieAngle">Lie Angle: </label></div>
    <div className="options">
    <select name="clubLieAngle" id="clubLieAngle">
        <option value="-1">-1</option>
        <option value="-0.5">-0.5</option>
        <option value="Standard">Standard</option>
        <option value="+0.5">+0.5</option>
        <option value="+1">+1</option>
    </select>
    </div>
</div>

function DropDownSelections() {
}

export default DropDownSelections;