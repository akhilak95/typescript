var ProfileInfo = /** @class */ (function () {
    function ProfileInfo(name, work, professionalskills, university, highschool, currentcity, hometown, otherplaceslived, mobilephones, email, age, sociallinks, dateofbirth, yearofbirth, gender, interestedin, languages, religion, relationship, familymembers, aboutyou, nickname, quotes, lifeevents, numberoffriends) {
        var _this = this;
        this.getname = function () {
            return _this.name;
        };
        this.setname = function (name) {
            _this.name = name;
        };
        this.getwork = function () {
            return _this.work;
        };
        this.setwork = function (work) {
            _this.work.push(work);
        };
        this.getprofessionalskills = function () {
            return _this.professionalskills;
        };
        this.setprofessionalskills = function (professionalskills) {
            _this.professionalskills.push(professionalskills);
        };
        this.getuniversity = function () {
            return _this.university;
        };
        this.setuniversity = function (university) {
            _this.university.push(university);
        };
        this.gethighschool = function () {
            return _this.highschool;
        };
        this.sethighschool = function (highschool) {
            _this.highschool.push(highschool);
        };
        this.getcurrentcity = function () {
            return _this.currentcity;
        };
        this.setcurrentcity = function (currentcity) {
            _this.currentcity = currentcity;
        };
        this.gethometown = function () {
            return _this.hometown;
        };
        this.sethometown = function (hometown) {
            _this.hometown = hometown;
        };
        this.getotherplaceslived = function () {
            return _this.otherplaceslived;
        };
        this.setotherplaceslived = function (otherplaceslived) {
            _this.otherplaceslived.push(otherplaceslived);
        };
        this.getmobilephones = function () {
            return _this.mobilephones;
        };
        this.setmobilephones = function (mobilephones) {
            _this.mobilephones.push(mobilephones);
        };
        this.getemails = function () {
            return _this.email;
        };
        this.getage = function () {
            return _this.age;
        };
        this.setage = function (age) {
            _this.age = age;
        };
        this.getsociallinks = function () {
            return _this.sociallinks;
        };
        this.setsociallinks = function (sociallinks) {
            _this.sociallinks.push(sociallinks);
        };
        this.getdateofbirth = function () {
            return _this.dateofbirth;
        };
        this.setdateofbirth = function (dateofbirth) {
            _this.dateofbirth = dateofbirth;
        };
        this.getyearofbirth = function () {
            return _this.yearofbirth;
        };
        this.setyearofbirth = function (yearofbirth) {
            _this.yearofbirth = yearofbirth;
        };
        this.getgender = function () {
            return _this.gender;
        };
        this.setgender = function (gender) {
            _this.gender = _this.gender;
        };
        this.getintersets = function () {
            return _this.interestedin;
        };
        this.setintersets = function (interestedin) {
            _this.interestedin = interestedin;
        };
        this.getlanguages = function () {
            return _this.languages;
        };
        this.setlanguages = function (languages) {
            _this.languages.push(languages);
        };
        this.getreligion = function () {
            return _this.religion;
        };
        this.setreligion = function (religion) {
            _this.religion = religion;
        };
        this.getrelationship = function () {
            return _this.relationship;
        };
        this.setrelationship = function (relationship) {
            _this.relationship = relationship;
        };
        this.getfamilymembers = function () {
            return _this.familymembers;
        };
        this.setfamilymembers = function (familymembers) {
            _this.familymembers.push(familymembers);
        };
        this.getaboutyou = function () {
            return _this.aboutyou;
        };
        this.setaboutyou = function (aboutyou) {
            _this.aboutyou = aboutyou;
        };
        this.getnickname = function () {
            return _this.nickname;
        };
        this.setnickname = function (nickname) {
            _this.nickname.push(nickname);
        };
        this.getquotes = function () {
            return _this.quotes;
        };
        this.setquotes = function (quotes) {
            _this.quotes.push(quotes);
        };
        this.getlifeevents = function () {
            return _this.lifeevents;
        };
        this.setlifeevents = function () {
            //liveevents
        };
        this.getnumberoffriends = function () {
            return _this.numberoffriends;
        };
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
    ProfileInfo.prototype.getfriends = function () {
        console.log("These are your friends");
    };
    ProfileInfo.prototype.getfriendswithnewPost = function () {
        console.log("These are your friends with new posts");
    };
    ProfileInfo.prototype.getfriendswithsamework = function () {
        console.log("These are your friends from work");
    };
    ProfileInfo.prototype.getfriendswithsameuniversity = function () {
        console.log("These are your friends from universities");
    };
    ProfileInfo.prototype.getfriendswithsamehighschool = function () {
        console.log("These are your friends from high school");
    };
    ProfileInfo.prototype.getfriendsfromcurrentcity = function () {
        console.log("These are your friends from current city");
    };
    ProfileInfo.prototype.getfriendsfromhometown = function () {
        console.log("These are your friends from hometown");
    };
    ProfileInfo.prototype.getfollowingfriends = function () {
        console.log("These are yourfollowing friends");
    };
    ProfileInfo.prototype.getfollowerfriends = function () {
        console.log("These are your follower friends");
    };
    ProfileInfo.prototype.getPhotos = function () {
        console.log("These are your Photos");
    };
    ProfileInfo.prototype.getTagPhotos = function () {
        console.log("These are your Tagged Photos");
    };
    ProfileInfo.prototype.getAlbum = function () {
        console.log("These are your Album");
    };
    ProfileInfo.prototype.getGroups = function () {
        console.log("These are your gropus");
    };
    ProfileInfo.prototype.getSports = function () {
        console.log("These are your Sports list");
    };
    ProfileInfo.prototype.getCheckin = function () {
        console.log("These are your Check in places");
    };
    ProfileInfo.prototype.getMusic = function () {
        console.log("These are your Music list");
    };
    ProfileInfo.prototype.getFilms = function () {
        console.log("These are your Movie list");
    };
    ProfileInfo.prototype.getTVprogram = function () {
        console.log("These are your T.V. program list");
    };
    ProfileInfo.prototype.getLikedPages = function () {
        console.log("These are your Likesd pages list");
    };
    ProfileInfo.prototype.getBooks = function () {
        console.log("These are your Books list");
    };
    ProfileInfo.prototype.getEvents = function () {
        console.log("These are your events list");
    };
    ProfileInfo.prototype.getFitness = function () {
        console.log("These are your fitness Pages");
    };
    ProfileInfo.prototype.getTotalPhotos = function () {
        console.log("These are your total number of Photos");
    };
    ProfileInfo.prototype.getTotalGroups = function () {
        console.log("These are your total number of gropus");
    };
    ProfileInfo.prototype.getTotalSports = function () {
        console.log("These are your total number of Sports list");
    };
    ProfileInfo.prototype.getTotalCheckin = function () {
        console.log("These are your total number of Check in places");
    };
    ProfileInfo.prototype.getTotalMusic = function () {
        console.log("These are your total number of Music list");
    };
    ProfileInfo.prototype.getTotalFilms = function () {
        console.log("These are your total number of Movie list");
    };
    ProfileInfo.prototype.getTotalTVprogram = function () {
        console.log("These are your total number of T.V. program list");
    };
    ProfileInfo.prototype.getTotalLikedPages = function () {
        console.log("These are your total number of Likesd pages list");
    };
    ProfileInfo.prototype.getTotalBooks = function () {
        console.log("These are your total number of Books list");
    };
    ProfileInfo.prototype.getTotalEvents = function () {
        console.log("These are your total number of events list");
    };
    ProfileInfo.prototype.getTotalFitness = function () {
        console.log("These are your total number of fitness Pages");
    };
    return ProfileInfo;
}());
var Personalinfo = new ProfileInfo("Akhil", ["student", "at facebook"], ["meanstackdeveloper",
    "android developer"], ["juit,waknaghat"], ["G.A.V. public svhool,kangra", "D.A.V. college,Kangra"], "Chandigarh", "Kangra", ["solan", "shimla", "manali"], [678989, 89766709], "akhil.ak95@gmail.com", 21, ["yahoolink", "instagramlink"], "April 23", 1996, "male", "women", ["english", "hindi"], "hinduism", "single", ["aman", "raj"], "I like horror movies", ["jack"], ["nothing"], ["Born on April 23,1996", 1996], 678);
console.log("Overview :-");
console.log("Name :", Personalinfo.name);
console.log("Work :", Personalinfo.work);
console.log("Studies at :", Personalinfo.university);
console.log("Lives in :", Personalinfo.currentcity);
console.log("From :", Personalinfo.hometown);
console.log("Relationship :", Personalinfo.relationship);
console.log("B'day :", Personalinfo.getdateofbirth(), Personalinfo.getyearofbirth());
console.log("Work and education:-");
console.log("Work :", Personalinfo.getwork());
console.log("Professional Skills :", Personalinfo.getprofessionalskills());
console.log("University :", Personalinfo.getuniversity());
console.log("School :", Personalinfo.gethighschool());
console.log("Places you have lived :-");
console.log("Current city :", Personalinfo.getcurrentcity());
console.log("Hometown :", Personalinfo.gethometown());
console.log("Other Places :", Personalinfo.getotherplaceslived());
console.log("Contact and Information :-");
console.log("Mobile phones :", Personalinfo.getmobilephones());
console.log("Email :", Personalinfo.getemails());
console.log("Social Links :", Personalinfo.getsociallinks());
console.log("Date of birth :", Personalinfo.getdateofbirth());
console.log("Year of birth :", Personalinfo.getyearofbirth());
console.log("Gender :", Personalinfo.getgender());
console.log("Age :", Personalinfo.getage());
console.log("Interests :", Personalinfo.getintersets());
console.log("Languages :", Personalinfo.getlanguages());
console.log("Religion :", Personalinfo.getreligion());
console.log("Family and Relationship :-");
console.log("Relationship :", Personalinfo.getrelationship());
console.log("Family members", Personalinfo.getfamilymembers());
console.log("Details about you :-");
console.log("About You:", Personalinfo.getaboutyou());
console.log("Nickname:", Personalinfo.getnickname());
console.log("Quotes:", Personalinfo.getquotes());
console.log("Life events :-");
console.log("Life events:", Personalinfo.getlifeevents());
console.log("Total Friends:-");
console.log("Total Friends:", Personalinfo.getnumberoffriends());
var newname = Personalinfo.setname("akhil kumar");
console.log("set new name :", Personalinfo.getname());
var newcurrentcity = Personalinfo.setcurrentcity("Banglore");
console.log("set new current city :", Personalinfo.getcurrentcity());
var newhometown = Personalinfo.sethometown("New Delhi");
console.log("set new hometown :", Personalinfo.gethometown());
var newwork = Personalinfo.setwork("CEO");
console.log("set new work :", Personalinfo.getwork());
var newdateofbirth = Personalinfo.setdateofbirth("Oct 20");
console.log("set new Date Of Birth :", Personalinfo.getdateofbirth());
var newyearofbirth = Personalinfo.setyearofbirth(1998);
console.log("set new Year Of Birth :", Personalinfo.getyearofbirth());
var newage = Personalinfo.setage(20);
console.log("set new age :", Personalinfo.getage());
var newgender = Personalinfo.setgender("female");
console.log("set new gender :", Personalinfo.getgender());
var newreligion = Personalinfo.setreligion("Jainism");
console.log("set new religion :", Personalinfo.getreligion());
var newinterestedin = Personalinfo.setintersets("man");
console.log("set new interestedin :", Personalinfo.getintersets());
var newrelationship = Personalinfo.setrelationship("Married");
console.log("set new relationship :", Personalinfo.getrelationship());
var newaboutyou = Personalinfo.setaboutyou("I love dogs");
console.log("set new about you :", Personalinfo.getaboutyou());
var newprofessionalskills = Personalinfo.setprofessionalskills("Angular");
console.log("set new professionalskills  :", Personalinfo.getprofessionalskills());
var newuniversity = Personalinfo.setuniversity("university of delhi");
console.log("set new University :", Personalinfo.getuniversity());
var newschool = Personalinfo.sethighschool("Sacred Heart,Chandigarh");
console.log("set new Highschool :", Personalinfo.gethighschool());
var newsociallinks = Personalinfo.setsociallinks("orkut");
console.log("set new social links :", Personalinfo.getsociallinks());
var newotherplaceslived = Personalinfo.setotherplaceslived("New Delhi");
console.log("set new otherplaceslived :", Personalinfo.getotherplaceslived());
var newphonenumber = Personalinfo.setmobilephones(5785357);
console.log("set new phonenumber :", Personalinfo.getmobilephones());
var newnivkname = Personalinfo.setnickname("Akki");
console.log("set new nickname :", Personalinfo.getnickname());
var newquotes = Personalinfo.setquotes("Work hard");
console.log("set new quotes :", Personalinfo.getquotes());
var newfriends = Personalinfo.setfamilymembers("Rachit");
console.log("set new family members :", Personalinfo.getfamilymembers());
var newlanguage = Personalinfo.setlanguages("Tamil");
console.log("set new language :", Personalinfo.getlanguages());
