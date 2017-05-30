(function(){
    function TrollKiller(field, restrictedWords) {
        this._field = field;
        this._words = restrictedWords.split(/,\s*/);
        this._regex = new RegExp("(" + this._words.join("|") + ")", "igm");
        this._assignEvents();
    }

    TrollKiller.prototype._assignEvents = function() {
        this._field.addEventListener("keyup", this._filterMessage.bind(this), false);
    };

    TrollKiller.prototype._filterMessage = function() {
        this._field.value = this._field.value.replace(this._regex, function(match) {
            return this._censorWord(match);
        }.bind(this));
    };

    TrollKiller.prototype._censorWord = function(word) {
        var censored = word.slice(0, 3),
            random = 0;
        for(var i = 0; i < word.length - 3; i++) {
            random = Math.round(Math.random() * (this._censorSigns.length - 1 - 0) + 0);
            censored += this._censorSigns[random];
        }
        return censored;

    };

    TrollKiller.prototype._censorSigns = "!#%@$*&".split("");

    var tk = new TrollKiller(
        document.querySelector("[name='message']"),
        "kurwa, chuj, jebany, skurwiel, debil, idiota, skurwysyn, pierdole, pierdoli�, pierdolony, upierdolony, jebaniec, pizda, cipa, spierdalaj, szmata, dziwka, suka, kurewsko, zajebi�cie, popierdolony, g�wno, dupek, kutas, jeba�, dupa, g�wniany, udupiony"
    );
})();