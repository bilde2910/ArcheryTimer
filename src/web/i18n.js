/* 
GUIDE FOR TRANSLATORS:
-----------------------------------
Lines starting with double forward slashes are COMMENTS. These are there to
aid you as a translator, and are not displayed on any part of the timer,
hence they should not be translated.

Each of the lines that are prepared for translation begin with a quoted
string of hexadecimal characters (numbers 0 through 9 and letters A through F),
divided into blocks of 8, 4, 4, 4 and 12, i.e.
XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX. These are unique identifiers used by the
timer software and must not be altered in any way. These strings are followed
by a colon, and then a quoted string, which is the string that should be
translated. E.g. take the following example:

    "78e23400-3a88-4271-9310-e2af36837c8d": "How to use the timer",

In the above case, the text "How to use the timer" is the text that is to be
translated, nothing else.

Some lines contain placeholders. Placeholders take the form of a percent sign
and one or more words (in CamelCase) wrapped in curly brackets. The contents
of these placeholders give you an indication of what they will be replaced
with when displayed in the timer, but they must not be translated themselves.
An example of a placeholder looks like this:

    "The woodcutter's house was made of {%Material}."

In this case, {%Material} is a placeholder that refers to some form of
building material. Translate this as if {%Material} is replaced with
e.g. "wood", "bricks" or "clay".

Should you have any questions, feel free to get in touch at
http://varden.info/contact.php or on the timer's GitHub page.

Finished translations should also be submitted there.
Thank you very much for your contribution!
 */

var i18n = {
    enUS: {
        // These buttons appear on the timer display itself.
        "176cd88e-ad14-4a8b-9633-c8257ad35d92": "Start / continue",
        "2e507705-99cb-4d92-8fa7-436e32b67083": "Emergency stop",
        
        // Instructions for use:
        "78e23400-3a88-4271-9310-e2af36837c8d": "How to use the timer",
        // {%AB} and {%CD} are replaced by "AB" and "CD" respectively by the timer.
        "ec50e48a-2cfd-4b19-bdbc-161aef491f82": "Click on {%AB} or {%CD} to toggle which line of archers shoots first.",
        "17a7b876-4cae-4032-ad70-f1b0331afa8b": "Leave blank if there is just one line of archers.",
        // {%RemainingTime} refers to the number of seconds displayed on the timer. By default, this is "120.0" in red color.
        "64141455-4ad9-4968-ae2a-2cdb1d6f893b": "Click on {%RemainingTime} to change the time limit (10-240 seconds).",
        // {%StartContinue} will be replaced by "Start / continue" from above.
        "b6f9447d-542f-497f-b006-0a09ef6743e0": "Click on {%StartContinue} to start or advance the timer.",
        // The same goes for {%EmergencyStop} and "Emergency stop" here.
        "91eafab3-1e35-488d-a24e-f5c5c9cc96c7": "Click on {%EmergencyStop} to halt the timer immediately.",
        // {%ControlPanel} is replaced by the text on the following line. Translate as if it said "more advanced control panel".
        "b9c6b8b2-41c2-479d-87ee-50ebb1d1ee2f": "You can alternatively control the timer using a {%ControlPanel}. You can keep this on your laptop's screen while keeping the timer itself on a separate display or projector.",
        "101c2c75-00a7-44de-b922-4af7eeec0d24": "more advanced control panel",
        "f1f31ca2-56f0-4a86-a92a-2a1ab120058b": "Continue to the timer »",
        
        // Disclaimers:
        "d3fff53a-9f70-40ea-ae6a-da502f71d8af": "Important - read this",
        "2397d0ed-76f1-4fce-9db5-842367645a43": "In order for this timer to be used in competitions and tournaments, the timer's audial beeping needs to be in sync with the time visible on the display. Unfortunately, this doesn't always work in all web browsers. Make sure to verify that the audial beeping is in sync with the displayed time, and that the beeping does not lag behind the displayed time, before using this timer in a competition or tournament. If the beeping does in fact lag behind the displayed time, the timer may not be used as an official timer in competitions and tournaments. You may try to run this timer in another web browser if that is the case.",
        // Warning: The following line may have some legal significance. Be sure you translate it correctly. As above, {%GetInTouch} is replaced by the text on the following line.
        "d26303e6-24d7-40cb-a8c2-29dce048ecdb": "Disclaimer: Use of this timer is at your own risk. The developer is not to be held responsible for any injuries, damages, malfunctions or errors arising out of the use or misuse of this application. If you do encounter any issues, feel free to {%GetInTouch}, and I will take a look at it.",
        "5ef3857e-333b-4de0-9292-7ef432118520": "get in touch",
        "ac1cb77e-01fd-4432-a185-01053bd5b611": "Accept and continue »",
        
        // {%Seconds} is replaced by the numbers 10, 20, 40, 80, 120, 160, 200 and 240. The string is visible on the control panel for the timer (ctrlpanel.html); buttons with these numbers are used to set the amount of time remaining on the timer. This is short hand. Imagine you would say "the train leaves in 30 seconds". You can shorten it down to "the train leaves in 30s". With a placeholder, it would be "the train leaves in {%Seconds}s". Translate as if this is the case.
        "6e7c53cb-4dd0-4376-92ea-d6392a309be4": "{%Seconds}s",
        // "All" means all archers shoot at the same time, i.e. there is no AB/CD configuration.
        "1caf0e11-f363-4555-9c97-dd0b9877e483": "All",
        // Turns on/off controls on the main timer display (the one that the archers see).
        "2337ff0f-9840-44fd-8ac3-529034132604": "Toggle main display controls",
        // Turns on/off the display of tenths of a second on the display.
        "03baa248-d587-4e20-88dd-93d95172b82a": "Show/hide tenths of seconds"
    },
    nbNO: {
        "176cd88e-ad14-4a8b-9633-c8257ad35d92": "Start / fortsett",
        "2e507705-99cb-4d92-8fa7-436e32b67083": "Nødstopp",
        "78e23400-3a88-4271-9310-e2af36837c8d": "Slik bruker du klokka",
        "ec50e48a-2cfd-4b19-bdbc-161aef491f82": "Klikk på {%AB} eller {%CD} for å velge hvilke skyttere som skyter først.",
        "17a7b876-4cae-4032-ad70-f1b0331afa8b": "La feltet stå tomt dersom det ikke er AB/CD-inndeling.",
        "64141455-4ad9-4968-ae2a-2cdb1d6f893b": "Klikk på {%RemainingTime} for å velge tidsbegrensning (10-240 sekunder).",
        "b6f9447d-542f-497f-b006-0a09ef6743e0": "Klikk på {%StartContinue} for å starte klokka eller fortsette til neste runde.",
        "91eafab3-1e35-488d-a24e-f5c5c9cc96c7": "Klikk på {%EmergencyStop} for å stoppe klokka umiddelbart.",
        "b9c6b8b2-41c2-479d-87ee-50ebb1d1ee2f": "Alternativt kan du styre klokka med et {%ControlPanel}. Du kan ha dette på den bærbare PC-skjermen mens selve klokka vises på en ekstern skjerm eller projektor.",
        "101c2c75-00a7-44de-b922-4af7eeec0d24": "mer avansert kontrollpanel",
        "f1f31ca2-56f0-4a86-a92a-2a1ab120058b": "Fortsett til klokka »",
        
        "d3fff53a-9f70-40ea-ae6a-da502f71d8af": "Viktig - les dette",
        "2397d0ed-76f1-4fce-9db5-842367645a43": "For at denne klokka skal kunne brukes på stevner og konkurranser, er det viktig at klokkas lydsignaler er synkrone med tiden som vises på displayet. Dette virker dessverre ikke alltid i alle nettlesere. Sørg for at du tester at lydsignalene på klokka er synkrone med tiden som vises i displayet, og at det ikke er forsinkelser på lydsignalene, før du bruker denne klokka på et stevne eller en konkurranse. Hvis lydsignalene henger etter tiden som vises på displayet, kan ikke denne klokka brukes som offisiell tidtaker på stevner eller konkurranser. Du kan i så fall prøve å bruke klokka i en annen nettleser.",
        "d26303e6-24d7-40cb-a8c2-29dce048ecdb": "Ansvarsfraskrivelse: Bruk av denne klokka skjer på eget ansvar. Utvikleren skal ikke holdes ansvarlig for eventuelle skader, feil eller mangler som oppstår gjennom bruk eller misbruk av denne programvaren. Dersom det oppstår problemer, {%GetInTouch}, så skal jeg ta en titt på det.",
        "5ef3857e-333b-4de0-9292-7ef432118520": "ta gjerne kontakt",
        "ac1cb77e-01fd-4432-a185-01053bd5b611": "Godta og fortsett »",
        
        "6e7c53cb-4dd0-4376-92ea-d6392a309be4": "{%Seconds}s",
        "1caf0e11-f363-4555-9c97-dd0b9877e483": "Alle",
        "2337ff0f-9840-44fd-8ac3-529034132604": "Hoveddisplaykontroller av/på",
        "03baa248-d587-4e20-88dd-93d95172b82a": "Vis/skjul tidelssekunder"
    }
}
