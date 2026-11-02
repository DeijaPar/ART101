let environmentTitle = "The Pastel Dream";

let dreamElements = ["glowing flowers", "sparkling stars", "pastel clouds", "a moonlit river"];

let wishCount = 0;

// NEW FOR ENV04: remembers what time it is in the dream
let timeOfDay = "day";

let fairy = {
    name: "Lumi",
    type: "flower fairy",
    wingColor: "shimmering lilac",
    magicPower: "making flowers glow",
    mood: "curious",
    favoriteElement: dreamElements[0]
};

let unicorn = {
    name: "Stardust",
    type: "rainbow unicorn",
    maneColors: ["pink", "lavender", "sky blue"],
    magicPower: "flying between stars",
    mood: "calm",
    favoriteElement: dreamElements[1]
};


// NEW FOR ENV04: function with a parameter
// "time" can be "sunrise", "day" or "night"
function changeTimeOfDay(time) {

    let message = "";

    if (time === "night") {

        $("#sky-tint").css("background-color", "rgba(10, 5, 40, 0.65)");
        $("#stars").fadeIn(1500);
        $("#sky-object").text("🌙");
        $("#welcome").text("The dream falls asleep under a silver moon...");
        $("#welcome").css("color", "#b9a6ff");

        fairy.mood = "sleepy";
        unicorn.mood = "glowing with starlight";
        $("#lofi-image").css("filter", "brightness(0.6)");
        $("#lofi-image-2").css("filter", "drop-shadow(0 0 25px #b9a6ff)");

        message = "<p>Night falls over " + environmentTitle + ".</p>";
        message = message + "<p>" + fairy.name + " yawns and folds her wings. " + unicorn.name + " begins to glow and flies toward the " + dreamElements[1] + ".</p>";

    } else if (time === "sunrise") {

        $("#sky-tint").css("background-color", "rgba(255, 150, 100, 0.35)");
        $("#stars").fadeOut(1500);
        $("#sky-object").text("🌅");
        $("#welcome").text("The dream slowly wakes up in golden light...");
        $("#welcome").css("color", "#ffb36b");

        fairy.mood = "excited";
        unicorn.mood = "peaceful";
        $("#lofi-image").css("filter", "drop-shadow(0 0 20px #ffb36b)");
        $("#lofi-image-2").css("filter", "none");

        message = "<p>The sun rises over the " + dreamElements[2] + ".</p>";
        message = message + "<p>" + fairy.name + " flutters around waking up the " + dreamElements[0] + ".</p>";

    } else {

        $("#sky-tint").css("background-color", "rgba(255, 255, 255, 0)");
        $("#stars").fadeOut(1500);
        $("#sky-object").text("☀️");
        $("#welcome").text("When even your dreams are magical...");
        $("#welcome").css("color", "#fc49ff");

        fairy.mood = "curious";
        unicorn.mood = "calm";
        $("#lofi-image").css("filter", "none");
        $("#lofi-image-2").css("filter", "none");

        message = "<p>It is a bright pastel day in " + environmentTitle + ".</p>";
        message = message + "<p>Everyone is awake and ready for an adventure.</p>";
    }

    timeOfDay = time;
    $("#environment-output").html(message);

    console.log("Time of day is now: " + timeOfDay);
}


// NEW FOR ENV04: buttons that trigger the function
$("#sunrise-button").click(function () {
    changeTimeOfDay("sunrise");
});

$("#day-button").click(function () {
    changeTimeOfDay("day");
});

$("#night-button").click(function () {
    changeTimeOfDay("night");
});


$("#title-button").click(function () {

    let message = "<p>Welcome to " + environmentTitle + ".</p>";

    $("#environment-output").html(message);
});

$("#elements-button").click(function () {

    let message = "<p>In this dream you can find:</p>";
    message = message + "<p>" + dreamElements[0] + ", " + dreamElements[1] + ", " + dreamElements[2] + " and " + dreamElements[3] + ".</p>";

    $("#environment-output").html(message);
});

$("#count-button").click(function () {

    wishCount = wishCount + 1;

    let message = "<p>You have made " + wishCount + " wishes.</p>";

    $("#environment-output").html(message);

    console.log(wishCount);
});

$("#lofi-image").click(function () {

    let message = "<p>Hi, I am " + fairy.name + ", a " + fairy.type + ".</p>";
    message = message + "<p>My wings are " + fairy.wingColor + ".</p>";
    message = message + "<p>My magic power is " + fairy.magicPower + ".</p>";
    message = message + "<p>Right now it is " + timeOfDay + " and I feel " + fairy.mood + ". I love " + fairy.favoriteElement + ".</p>";

    $("#environment-output").html(message);
});

$("#lofi-image-2").click(function () {

    let message = "<p>Hello, I am " + unicorn.name + ", a " + unicorn.type + ".</p>";
    message = message + "<p>My mane is " + unicorn.maneColors[0] + ", " + unicorn.maneColors[1] + " and " + unicorn.maneColors[2] + ".</p>";
    message = message + "<p>My magic power is " + unicorn.magicPower + ".</p>";
    message = message + "<p>Right now it is " + timeOfDay + " and I feel " + unicorn.mood + ". I love " + unicorn.favoriteElement + ".</p>";

    $("#environment-output").html(message);
});