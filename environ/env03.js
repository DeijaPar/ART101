let environmentTitle = "The Pastel Dream";

let dreamElements = ["glowing flowers", "sparkling stars", "pastel clouds", "a moonlit river"];

let wishCount = 0;

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


// buttons: revealing the data

// Show the title
$("#title-button").click(function () {

    let message = "<p>Welcome to " + environmentTitle + ".</p>";

    $("#environment-output").html(message);
});

// Show the list of things in the dream
$("#elements-button").click(function () {

    let message = "<p>In this dream you can find:</p>";
    message = message + "<p>" + dreamElements[0] + ", " + dreamElements[1] + ", " + dreamElements[2] + " and " + dreamElements[3] + ".</p>";

    $("#environment-output").html(message);
});

// Count wishes
$("#count-button").click(function () {

    wishCount = wishCount + 1;

    let message = "<p>You have made " + wishCount + " wishes.</p>";

    $("#environment-output").html(message);

    console.log(wishCount);
});

// Click the fairy image
$("#lofi-image").click(function () {

    let message = "<p>Hi, I am " + fairy.name + ", a " + fairy.type + ".</p>";
    message = message + "<p>My wings are " + fairy.wingColor + ".</p>";
    message = message + "<p>My magic power is " + fairy.magicPower + ".</p>";
    message = message + "<p>Today I feel " + fairy.mood + ". I love " + fairy.favoriteElement + ".</p>";

    $("#environment-output").html(message);
});

// Click the unicorn image
$("#lofi-image-2").click(function () {

    let message = "<p>Hello, I am " + unicorn.name + ", a " + unicorn.type + ".</p>";
    message = message + "<p>My mane is " + unicorn.maneColors[0] + ", " + unicorn.maneColors[1] + " and " + unicorn.maneColors[2] + ".</p>";
    message = message + "<p>My magic power is " + unicorn.magicPower + ".</p>";
    message = message + "<p>Today I feel " + unicorn.mood + ". I love " + unicorn.favoriteElement + ".</p>";

    $("#environment-output").html(message);
});