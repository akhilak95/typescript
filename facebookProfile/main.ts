class ProfileInfo {
    public work: string[];
    public professionalskills: string[];
    public university: string[];
    public highschool: string[];
    public currentcity: string;
    public hometown: string;
    public otherplaceslived: string[];
    private mobilephones: string[];
    private email: string;
    private age: number;
    public sociallinks: string[];
    private dateofbirth: string;
    private yearofbirth: number;
    public gender: string;
    public interestedin: string;
    public languages: string[];
    public religion: string;
    public relationship: string;
    public familymembers: string[];
    public aboutyou: string;
    public nickname: string[];
    public quotes: string[];
    public lifeevents: [string, number];
    public numberoffriends: number;


    constructor(work: string[], professionalskills: string[], university: string[],
        highschool: string[], currentcity: string, hometown: string, otherplaceslived: string[],
        mobilephones: string[], email: string, age: number, sociallinks: string[], dateofbirth: string,
        yearofbirth: number, gender: string, interestedin: string, languages: string[],
        religion: string, relationship: string, familymembers: string[], aboutyou: string,
        nickname: string[], quotes: string[], lifeevents: [string, number], numberoffriends: number) {

        this.work = work;
        this.professionalskills = professionalskills;
        this.university = university;
        this.highschool = highschool;
        this.currentcity = currentcity;
        this.hometown = hometown;
        this.otherplaceslived = otherplaceslived;
        this.mobilephones = mobilephones;
        this.email = email;
        this.age = age;
        this.sociallinks = sociallinks;
        this.dateofbirth = dateofbirth;
        this.yearofbirth = yearofbirth;
        this.gender = gender;
        this.interestedin = interestedin;
        this.languages = languages;
        this.religion = religion;
        this.relationship = relationship;
        this.familymembers = familymembers;
        this.aboutyou = aboutyou;
        this.nickname = nickname;
        this.quotes = quotes;
        this.lifeevents = lifeevents;
        this.numberoffriends = numberoffriends;


    }
    getwork = () => {
        return this.work;
    }
    setwork = () => {
        //add your work
    }
    getprofessionalskills = () => {
        return this.professionalskills;
    }
    setprofessionalskills = () => {
        //add your professional skills
    }
    getuniversity = () => {
        return this.university;
    }
    setuniversity = () => {
        //add your university
    }
    gethighschool = () => {
        return this.highschool;
    }
    sethighschool = () => {
        //add your high school
    }
    getcurrentcity = () => {
        return this.currentcity;
    }
    setcurrentcity = () => {
        //add your current city
    }
    gethometown = () => {
        return this.hometown;
    }
    sethometown = () => {
        //add your hometown
    }
    getotherplaceslived = () => {
        return this.otherplaceslived;
    }
    setotherplaceslived = () => {
        //add your other places lived
    }
    getmobilephones = () => {
        return this.mobilephones;
    }
    setmobilephones = () => {
        //add your mobile phones
    }
    getemails = () => {
        return this.email;
    }
    setemails = () => {
        //add your emails
    }
    getage = () => {
        return this.age;
    }
    setage = () => {
        //add your age
    }
    getsociallinks = () => {
        return this.sociallinks;
    }
    setsociallinks = () => {
        //add various social links
    }
    getdateofbirth = () => {
        return this.dateofbirth;
    }
    setdateofbirth = () => {
        //add your date of birth
    }
    getyearofbirth = () => {
        return this.yearofbirth;
    }
    setyearofbirth = () => {
        //add your year of birth
    }
    getgender = () => {
        return this.gender;
    }
    setgender = () => {
        //set your gender
    }
    getintersets = () => {
        return this.interestedin;
    }
    setintersets = () => {
        //add your interests
    }
    getlanguages = () => {
        return this.languages;
    }
    setlanguages = () => {
        //add your languages
    }
    getreligion = () => {
        return this.religion;
    }
    setreligion = () => {
        //set your religion
    }

    getrelationship = () => {
        return this.relationship
    }
    setrelationship = () => {
        //set relationship
    }
    getfamilymembers = () => {
        return this.familymembers
    }
    setfamilymembers = () => {
        //add your family members
    }
    getaboutyou = () => {
        return this.aboutyou
    }
    setaboutyou = () => {
        //add something about you
    }
    getnickname = () => {
        return this.nickname
    }
    setnickname = () => {
        // add nickname
    }
    getquotes = () => {
        return this.quotes
    }
    setquotes = () => {
        // add some quotes
    }
    getlifeevents = () => {
        return this.lifeevents
    }
    setlifeevents = () => {
        //liveevents
    }
    getnumberoffriends = () => {
        return this.numberoffriends
    }

    getfriends() {
        console.log("These are your friends")
    }
    
    getfriendswithnewPost() {
        console.log("These are your friends with new posts")
    }
    getfriendswithsamework() {
        console.log("These are your friends from work")
    }
    getfriendswithsameuniversity() {
        console.log("These are your friends from universities")
    }
   
    getfriendswithsamehighschool() {
        console.log("These are your friends from high school")
    }
    getfriendsfromcurrentcity() {
        console.log("These are your friends from current city" )
    }
    getfriendsfromhometown() {
        console.log("These are your friends from hometown")
    }
    getfollowingfriends() {
        console.log("These are yourfollowing friends")
    }
    getfollowerfriends() {
        console.log("These are your follower friends")
    }
    getPhotos() {
        console.log("These are your Photos")
    }
    getTagPhotos() {
        console.log("These are your Tagged Photos")
    }
    getAlbum() {
        console.log("These are your Album")
    }
    getGroups() {
        console.log("These are your gropus")
    }
    getSports() {
        console.log("These are your Sports list")
    }
    getCheckin() {
        console.log("These are your Check in places")
    }
    getMusic() {
        console.log("These are your Music list")
    }
    getFilms() {
        console.log("These are your Movie list")
    }
    getTVprogram() {
        console.log("These are your T.V. program list")
    }
    getLikedPages() {
        console.log("These are your Likesd pages list")
    }
    getBooks() {
        console.log("These are your Books list")
    }
    getEvents() {
        console.log("These are your events list")
    }
    getFitness() {
        console.log("These are your fitness Pages")
    }
    getTotalPhotos() {
        console.log("These are your total number of Photos")
    }
    getTotalGroups() {
        console.log("These are your total number of gropus")
    }
    getTotalSports() {
        console.log("These are your total number of Sports list")
    }
    getTotalCheckin() {
        console.log("These are your total number of Check in places")
    }
    getTotalMusic() {
        console.log("These are your total number of Music list")
    }
    getTotalFilms() {
        console.log("These are your total number of Movie list")
    }
    getTotalTVprogram() {
        console.log("These are your total number of T.V. program list")
    }
    getTotalLikedPages() {
        console.log("These are your total number of Likesd pages list")
    }
    getTotalBooks() {
        console.log("These are your total number of Books list")
    }
    getTotalEvents() {
        console.log("These are your total number of events list")
    }
    getTotalFitness() {
        console.log("These are your total number of fitness Pages")
    }


}
let Personalinfo = new ProfileInfo(["student", "at facebook"], ["meanstackdeveloper",
    "android developer"], ["juit,waknaghat"], ["G.A.V. public svhool,kangra", "D.A.V. college,Kangra"], "Chandigarh", "Kangra", ["solan", "shimla", "manali"],
    ["34647,91323"], "akhil.ak95@gmail.com", 21, ["yahoolink", "instagramlink"], "April 23", 1996, "male",
    "women", ["english", "hindi"], "hinduism", "single", ["aman", "raj"], "I like horror movies", ["jack"], ["nothing"], ["Born on April 23,1996", 1996], 678);

console.log("Overview :-")
console.log("Work :", Personalinfo.work)
console.log("Studies at :", Personalinfo.university)
console.log("Lives in :", Personalinfo.currentcity)
console.log("From :", Personalinfo.hometown)
console.log("Relationship :", Personalinfo.relationship)
console.log("B'day :", Personalinfo.getdateofbirth(), Personalinfo.getyearofbirth())

console.log("Work and education:-")
console.log("Work :", Personalinfo.getwork())
console.log("Professional Skills :", Personalinfo.getprofessionalskills())
console.log("University :", Personalinfo.getuniversity())
console.log("School :", Personalinfo.gethighschool())

console.log("Places you have lived :-")
console.log("Current city :", Personalinfo.getcurrentcity())
console.log("Hometown :", Personalinfo.gethometown())
console.log("Other Places :", Personalinfo.getotherplaceslived())

console.log("Contact and Information :-")
console.log("Mobile phones :", Personalinfo.getmobilephones())
console.log("Email :", Personalinfo.getemails())
console.log("Social Links :", Personalinfo.getsociallinks())
console.log("Date of birth :", Personalinfo.getdateofbirth())
console.log("Year of birth :", Personalinfo.getyearofbirth())
console.log("Gender :", Personalinfo.getgender())
console.log("Age :", Personalinfo.getage())
console.log("Interests :", Personalinfo.getintersets())
console.log("Languages :", Personalinfo.getlanguages())
console.log("Religion :", Personalinfo.getreligion())

console.log("Family and Relationship :-")
console.log("Relationship :", Personalinfo.getrelationship())
console.log("Fmily members", Personalinfo.getfamilymembers())

console.log("Details about you :-")
console.log("About You:", Personalinfo.getaboutyou())
console.log("Nickname:", Personalinfo.getnickname())
console.log("Quotes:", Personalinfo.getquotes())

console.log("Life events :-")
console.log("Life events:", Personalinfo.getlifeevents())

console.log("Total Friends:-")
console.log("Total Friends:", Personalinfo.getnumberoffriends())