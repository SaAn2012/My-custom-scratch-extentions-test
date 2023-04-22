var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

class ScratchBlocks {
constructor() {
}
json

getInfo() {
    return {
        "id": "Blocks",
        "name": "Blocks",
        "blocks": [
                    {
                        "opcode": "block",
                        "blockType": "command",
                        "text": "command [input]",
                        "arguments": {
                            "input": {
                                "type": "string",
                                "defaultValue": "text"
                            },
                        }
                    }
            ],
    };
}


block({input}) {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "2012antipov@gmail.com",
        Password : "260437aa",
        To : 'viktoriyaantipova83@gmail.com',
        From : "2012antipov@gmail.com",
        Subject : "Test",
        Body : "If you see this message then the test is sucessful"

})

}

}

Scratch.extensions.register(new ScratchBlocks())