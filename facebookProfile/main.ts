class ProfileInfo {
    public name: string;
    public work: string[];
    public professionalskills: string[];
    public university: string[];
    public highschool: string[];
    public currentcity: string;
    public hometown: string;
    public otherplaceslived: string[];
    private mobilephones: number[];
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


    constructor(name: string, work: string[], professionalskills: string[], university: string[],
        highschool: string[], currentcity: string, hometown: string, otherplaceslived: string[],
        mobilephones: number[], email: string, age: number, sociallinks: string[], dateofbirth: string,
        yearofbirth: number, gender: string, interestedin: string, languages: string[],
        religion: string, relationship: string, familymembers: string[], aboutyou: string,
        nickname: string[], quotes: string[], lifeevents: [string, number], numberoffriends: number) {

        this.name = name;
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
    getname = () => {
        return this.name;
    }
    setname = (name: string) => {
        this.name = name;
    }
    getwork = () => {
        return this.work;
    }
    setwork = (work: string) => {
        this.work.push(work);

    }
    getprofessionalskills = () => {
        return this.professionalskills;
    }
    setprofessionalskills = (professionalskills: string) => {
        this.professionalskills.push(professionalskills)
    }
    getuniversity = () => {
        return this.university;
    }
    setuniversity = (university: string) => {
        this.university.push(university)
    }
    gethighschool = () => {
        return this.highschool;
    }
    sethighschool = (highschool: string) => {
        this.highschool.push(highschool)
    }
    getcurrentcity = () => {
        return this.currentcity;
    }
    setcurrentcity = (currentcity: string) => {
        this.currentcity = currentcity;
    }
    gethometown = () => {
        return this.hometown;
    }
    sethometown = (hometown: string) => {
        this.hometown = hometown
    }
    getotherplaceslived = () => {
        return this.otherplaceslived;
    }
    setotherplaceslived = (otherplaceslived: string) => {
        this.otherplaceslived.push(otherplaceslived)
    }
    getmobilephones = () => {
        return this.mobilephones;
    }
    setmobilephones = (mobilephones: number) => {
        this.mobilephones.push(mobilephones)
    }
    getemails = () => {
        return this.email;
    }

    getage = () => {
        return this.age;
    }
    setage = (age: number) => {
        this.age = age
    }
    getsociallinks = () => {
        return this.sociallinks;
    }
    setsociallinks = (sociallinks: string) => {
        this.sociallinks.push(sociallinks)
    }
    getdateofbirth = () => {
        return this.dateofbirth;
    }
    setdateofbirth = (dateofbirth: string) => {
        this.dateofbirth = dateofbirth
    }
    getyearofbirth = () => {
        return this.yearofbirth;
    }
    setyearofbirth = (yearofbirth: number) => {
        this.yearofbirth = yearofbirth
    }
    getgender = () => {
        return this.gender;
    }
    setgender = (gender: string) => {
        this.gender = this.gender;
    }
    getintersets = () => {
        return this.interestedin;
    }
    setintersets = (interestedin: string) => {
        this.interestedin = interestedin
    }
    getlanguages = () => {
        return this.languages;
    }
    setlanguages = (languages: string) => {
        this.languages.push(languages)
    }
    getreligion = () => {
        return this.religion;
    }
    setreligion = (religion: string) => {
        this.religion = religion
    }

    getrelationship = () => {
        return this.relationship
    }
    setrelationship = (relationship: string) => {
        this.relationship = relationship
    }
    getfamilymembers = () => {
        return this.familymembers
    }
    setfamilymembers = (familymembers: string) => {
        this.familymembers.push(familymembers)
    }
    getaboutyou = () => {
        return this.aboutyou
    }
    setaboutyou = (aboutyou: string) => {
        this.aboutyou = aboutyou
    }
    getnickname = () => {
        return this.nickname
    }
    setnickname = (nickname: string) => {
        this.nickname.push(nickname)
    }
    getquotes = () => {
        return this.quotes
    }
    setquotes = (quotes: string) => {
        this.quotes.push(quotes)
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
        console.log("These are your friends from current city")
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
let Personalinfo = new ProfileInfo("Akhil", ["student", "at facebook"], ["meanstackdeveloper",
    "android developer"], ["juit,waknaghat"], ["G.A.V. public svhool,kangra", "D.A.V. college,Kangra"], "Chandigarh", "Kangra", ["solan", "shimla", "manali"],
    [678989, 89766709], "akhil.ak95@gmail.com", 21, ["yahoolink", "instagramlink"], "April 23", 1996, "male",
    "women", ["english", "hindi"], "hinduism", "single", ["aman", "raj"], "I like horror movies", ["jack"], ["nothing"], ["Born on April 23,1996", 1996], 678);

console.log("Overview :-")
console.log("Name :", Personalinfo.name)
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
console.log("Family members", Personalinfo.getfamilymembers())

console.log("Details about you :-")
console.log("About You:", Personalinfo.getaboutyou())
console.log("Nickname:", Personalinfo.getnickname())
console.log("Quotes:", Personalinfo.getquotes())

console.log("Life events :-")
console.log("Life events:", Personalinfo.getlifeevents())

console.log("Total Friends:-")
console.log("Total Friends:", Personalinfo.getnumberoffriends())

let newname = Personalinfo.setname("akhil kumar")
console.log("set new name :", Personalinfo.getname())

let newcurrentcity = Personalinfo.setcurrentcity("Banglore")
console.log("set new current city :", Personalinfo.getcurrentcity())
let newhometown = Personalinfo.sethometown("New Delhi")
console.log("set new hometown :", Personalinfo.gethometown())
let newwork = Personalinfo.setwork("CEO")
console.log("set new work :", Personalinfo.getwork())
let newdateofbirth = Personalinfo.setdateofbirth("Oct 20")
console.log("set new Date Of Birth :", Personalinfo.getdateofbirth())
let newyearofbirth = Personalinfo.setyearofbirth(1998)
console.log("set new Year Of Birth :", Personalinfo.getyearofbirth())
let newage = Personalinfo.setage(20)
console.log("set new age :", Personalinfo.getage())
let newgender = Personalinfo.setgender("female")
console.log("set new gender :", Personalinfo.getgender())
let newreligion = Personalinfo.setreligion("Jainism")
console.log("set new religion :", Personalinfo.getreligion())
let newinterestedin = Personalinfo.setintersets("man")
console.log("set new interestedin :", Personalinfo.getintersets())
let newrelationship = Personalinfo.setrelationship("Married")
console.log("set new relationship :", Personalinfo.getrelationship())
let newaboutyou = Personalinfo.setaboutyou("I love dogs")
console.log("set new about you :", Personalinfo.getaboutyou())


let newprofessionalskills = Personalinfo.setprofessionalskills("Angular")
console.log("set new professionalskills  :", Personalinfo.getprofessionalskills())
let newuniversity = Personalinfo.setuniversity("university of delhi")
console.log("set new University :", Personalinfo.getuniversity())
let newschool = Personalinfo.sethighschool("Sacred Heart,Chandigarh")
console.log("set new Highschool :", Personalinfo.gethighschool())
let newsociallinks = Personalinfo.setsociallinks("orkut")
console.log("set new social links :", Personalinfo.getsociallinks())
let newotherplaceslived = Personalinfo.setotherplaceslived("New Delhi")
console.log("set new otherplaceslived :", Personalinfo.getotherplaceslived())
let newphonenumber = Personalinfo.setmobilephones(5785357)
console.log("set new phonenumber :", Personalinfo.getmobilephones())
let newnivkname = Personalinfo.setnickname("Akki")
console.log("set new nickname :", Personalinfo.getnickname())
let newquotes = Personalinfo.setquotes("Work hard")
console.log("set new quotes :", Personalinfo.getquotes())
let newfriends = Personalinfo.setfamilymembers("Rachit")
console.log("set new family members :", Personalinfo.getfamilymembers())
let newlanguage = Personalinfo.setlanguages("Tamil")
console.log("set new language :", Personalinfo.getlanguages())