# Logs for Human
Coloring for quickly finding information that you need from log.  
Available for browser and for local Notepad++.
  
## Chrome / Opera / Firefox / Safari Browser
![](img/browser_logs_for_human_screen.png)
### Usage
1. Install [Tampermonkey](https://www.tampermonkey.net) extension for your browser 
2. Download `logs-for-human.js`
3. In Tampermonkey click `+` to add new script
4. Copy and paste whole sctipt from `logs-for-human.js` to new created Tampermonkey script
5. Add your URL pattern in `@match` row.
6. Save script.  
  
Highlighting can be checked with [IBM knowledge center sample logs](https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.1.0/com.ibm.zos.v2r1.hald001/exmlogfile.htm).
  
## Notepad++
![](img/npp_logs_for_human_screen.png)
### Usage
1. Download `npp_language_log.xml`
2. In Notepad++ go to `Language` > `User Defined Language` > `Define your language...` > `Import...`
3. Set `log` to `Ext.:` field to assosicate highlight with `.log` files
