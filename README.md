# fxhashfrontparser
User script to hide cards by artist name on the fxhash website.

Very hacky, might break anytime.

# Prerequesites
You'll need a user script extension for your browser, like https://www.tampermonkey.net/.

You also need to have the "Display Infos" toggle enabled in you fxhash website settings.

# Install with Tampermonkey
In Tampermonkey, go to Utilites and choose "Import from file", select "fxhash front parser.user.js" , then click Install. 

Then go to "Installed Userscripts", and click the "Edit" icon.

From there, you can edit the "toHide" array and add/remove case sensitive artists names. Don't forget to save the script after modification and to enable the script itself.
