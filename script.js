function mustae() {
    var msg = new SpeechSynthesisUtterance("must ae");
    speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
}
function mustoe() {
    var msg = new SpeechSynthesisUtterance("must oe");
    speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
}
var secretnum = Math.floor(Math.random() * 101);
function guess() {

    while (true) {
        var question = parseInt(prompt("0 to 100, What is numberæ?"));
        if (question < secretnum) {
            alert('Number is bigger your mustæ!');
        } 
        else if (question > secretnum) {
            alert("Number is smaller your mustœ!");
        }
        else if (question === secretnum) {
            alert("¿You did it? But you must wait us for the Future...");
            setTimeout("window.location.href='Future.html'", 60000);
            break;
        }
        else {
            break;
        }
    }
}
function past() {
    alert("Æ Æ Æ Æ! :) You can't see the past now, just wait later (:")
}