var Imported = Imported || {};

Imported.Olivia_SkipCutscene = true;

var Olivia = Olivia || {};
var parameters = $plugins.filter(function(p) { return p.description.contains('<SkipCutscene>') })[0].parameters;

//Modifica il testo qua sotto, le modifiche verranno importate automaticamente.
Olivia.SkipCutscene.message = "PREMI \\DII[escape] PER SALTARE";