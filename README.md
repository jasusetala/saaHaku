# saaHaku

Yksinkertainen JavaScript-plugin, jolla saadaan haettua paikallissää Ilmatieteen laitoksen tai Forecan internetsivuilta.

## How to use

```HTML:
<link rel="stylesheet" href="saaHaku.css">
...
<script src="saaHaku.js"></script>
...
<form class="saahaku" name="saahaku">
    <select name="source">
        <option value="ilmatieteenlaitos">Ilmatieteen laitos</option>
        <option value="foreca">Foreca</option>
    </select>
    <input type="text" placeholder="Paikkakunta" name="location"/>
    <input type="submit" value="Hae" onclick="saaHaku()"/>       
</form>```