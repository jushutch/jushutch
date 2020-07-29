const instance = new Typewriter('#typewriter', {
    loop: true,
    delay: 50,
    deleteSpeed: 25
});

instance.typeString("Hello World")
    .pauseFor(2000)
    .deleteAll()
    .typeString('My name is Justin')
    .pauseFor(1000)
    .deleteAll()
    .typeString('I am a web developer')
    .pauseFor(1000)
    .deleteChars(13)
    .typeString('student')
    .pauseFor(1000)
    .deleteChars(7)
    .typeString('problem solver')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Check out my work at<br>github.com/jushutch')
    .pauseFor(2000)
    .deleteAll()
    .start();