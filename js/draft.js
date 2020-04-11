// AN EXTREMELY ROUGH DRAFT OF WHAT IT MAYBE WILLL LOOK LIKE. KEEP THAT IN MIND AS YOUR EYES BLEED READING IT
function Subject()
{
    this.schedule = daily; //[monday, tuesday, wednesday, thursday, friday]
    //daily, weekdays, weekends, alternating weedaays, alternating, custom

    this.tasks = {
        attendence = new Attendence(this.schedule), //make this occur everyday the user has this subject (schedule)
        homeworks = new Homeworks(null, "4/20");
        classworks = new Classworks(this.schedule, "4/20");
        projects = new Projects(null, "4/20");
        test(s) = new Tests("4/20");
    };
}

function Attendence(schedule, due)
{
    this.schedule = schedule; //this appears every time the schedule occurs
    this.due = due; //some teachers require attendence to be filled by a certain time
}
function Homeworks(schedule, due) //input null for schedule to skip to 'due'
{
    this.schedule = schedule;//schedule -> for homeworks that are due daily, semi-daily, or on a regular basis
    this.due = due;
}
function Classworks(schedule, due)
{
    this.schedule = schedule;
    this.due = due;
}
function Projects(schedule, due)
{
    this.schedule = schedule;
    this.due = due;
    this.tasks = {
        //custom user inputs for mini-tasks or to-dos -> is in an object cos we want it like a checkbox - user should be able to see which they've completed and which they haven't or smthn
    };
}
function Tests(due)
{
    this.notes = [custom note1, custom note2];
    this.due = due;
}
