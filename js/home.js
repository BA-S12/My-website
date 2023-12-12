function getGreeting() {
    var currentTime = new Date().getHours();
    var greeting;
    var icon;

    if (currentTime >= 5 && currentTime < 12) {
        greeting = "Good morning";
        icon = "☀️"; // Replace with your morning icon
    } else if (currentTime >= 12 && currentTime < 18) {
        greeting = "Good afternoon";
        icon = "🌤️"; // Replace with your afternoon icon
    } else {
        greeting = "Good evening";
        icon = "🌙"; // Replace with your evening icon
    }

    return { greeting, icon };
}

var greetingInfo = getGreeting();
document.getElementById("greeting").innerHTML = greetingInfo.greeting + ' ' + greetingInfo.icon;








