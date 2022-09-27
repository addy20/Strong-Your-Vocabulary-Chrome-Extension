function getRandomNumber(number) {
    var max = (number + 1);
    return Math.floor(Math.random() * Math.floor(max));
}
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.name == "fetchWords") {
        const apiKey = 'olx4xpybjvil6hgubb373brfbgdw9xsay2wbrcyqcolyy5hqh';
        const dateStr = new Date().toISOString().slice(0, 10);
        const apiCall = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?date=' + dateStr + '&api_key=' + apiKey;



        const wordsObj = [
            "palatable",
            "decimate",
            "specious",
            "bastion",
            "reciprocate",
            "ostensible",
            "impetus",
            "milieu",
            "slough",
            "fester",
            "compendious",
            "riddle",
            "besmirch",
            "tempestuous",
            "archetype",
            "uncouth"
        ];


        const wordsDescObj = [
            "Palatable can mean \"agreeable to one's sense of taste or palate\" or \"agreeable or acceptable to the mind.\"",
            "Decimate means \"to reduce drastically especially in number\" or \"to cause great destruction or harm to.\"",
            "Specious means \"having deceptive attraction or allure\" or \"having a false look of truth or genuineness.\"",
            "A bastion is \"a place or system in which something continues to survive.\"",
            "Reciprocate means \"to do something for or to someone who has done something similar for or to you.\"",
            "Ostensible means \"seeming or said to be true or real but very possibly not true or real.\"",
            "An impetus is \"a force that causes or encourages something to be done or to become more active.\"",
            "A milieu is the physical or social setting in which something occurs or develops. The word is synonymous with environment.",
            "Slough means \"to cast something off or to become shed or cast off.\" It is often used in the phrase slough off meaning \"to get rid of something objectionable or disadvantageous.\"",
            "Fester means \"to generate pus\" or \"to become worse as time passes.\"",
            "Compendious means \"concise\" or \"comprehensive.\"",
            "A riddle is a mystifying, misleading, or puzzling question posed as a problem to be solved or guessed. It can also be something or someone difficult to understand.",
            "Besmirch means \"to cause harm or damage to the purity, luster, or beauty of something.\"",
            "Tempestuous means \"of, relating to, or resembling a tempest\" (which is a violent storm). Its synonyms are turbulent or stormy.",
            "An archetype is someone or something that is seen to be a perfect example. It is also a word for the original pattern or model of which all things of the same type are representations or copies.",
            "Uncouth means \"behaving in a rude way\" or \"not polite or socially acceptable.\""
        ];

        var number = getRandomNumber(wordsObj.length - 1)

        response({ word: wordsObj[number], desc: wordsDescObj[number] });
    }
});