export function currentDate() {
    var d = new Date();
    var day = d.getDay();
    var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var time = d.toLocaleTimeString();
    var time24 = d.toLocaleTimeString().substring(0, time.length - 6);
    if (time24.length < 5) {
        time24 = "0" + time24;
    }
    return dayName[day] + ", " + time24;
}
