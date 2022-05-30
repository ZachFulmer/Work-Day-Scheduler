var timeBlock = {
    hour: ["9","10","11","12","13","14","15","16","17"],
    description: ["","","","","","","","",""]
};

var updateTime = function()
{
    var time = moment().format("dddd, MMM Do YYYY");

    $("#currentDay").text(time);

    taskStatus();

}

var taskStatus = function()
{
    for(var i = 0; i < timeBlock.hour.length; i++)
    {
        var currHour = parseInt(moment().format("h"));
        var taskHour = parseInt(timeBlock.hour[i]);

        var taskId = "#block-" + timeBlock.hour[i];

        // Task is in the Present
        if(currHour == taskHour)
        {
            $(taskId).addClass("present");
        }
        // Task is in the Past
        else if(currHour > taskHour)
        {
            $(taskId).addClass("past");  
        }
        // Task is in the future
        else
        {
            $(taskId).addClass("future");
        }
    }
}

updateTime();
