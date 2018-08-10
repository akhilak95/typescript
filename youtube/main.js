var youtubevideo = /** @class */ (function () {
    function youtubevideo(videotitle, videotime, totalviews, channelname, channelsubscriber, likes, dislikes, discription, TotalComments, publishedon, catagory, comment, commentorname, commentorimg, commentdate, commentlikes, commentdislikes, commentreplies) {
        var _this = this;
        this.videotitle = videotitle;
        this.videotime = videotime;
        this.totalviews = totalviews;
        this.channelname = channelname;
        this.channelsubscriber = channelsubscriber;
        this.likes = likes;
        this.dislikes = dislikes;
        this.discription = discription;
        this.TotalComments = TotalComments;
        this.publishedon = publishedon;
        this.catagory = catagory;
        this.comment = comment;
        this.commentorname = commentorname;
        this.commentorimg = commentorimg;
        this.commentdate = commentdate;
        this.commentlikes = commentlikes;
        this.commentdislikes = commentdislikes;
        this.commentreplies = commentreplies;
        this.getvideoTitle = function () {
            return _this.videotitle;
        };
        this.getVideoTime = function () {
            return _this.videotime;
        };
        this.getTotalViews = function () {
            return _this.totalviews;
        };
        this.getChannelName = function () {
            return _this.channelname;
        };
        this.getChannelSubscriber = function () {
            return _this.channelsubscriber;
        };
        this.getlikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getDiscription = function () {
            return _this.discription;
        };
        this.getTotalComments = function () {
            return _this.TotalComments;
        };
        this.getPublishedDate = function () {
            return _this.publishedon;
        };
        this.getVideoCatagory = function () {
            return _this.catagory;
        };
        this.getcomment = function () {
            return _this.comment;
        };
        this.setcomment = function (typecomment) {
            _this.comment.push(typecomment);
        };
        this.getcommentorName = function () {
            return _this.commentorname;
        };
        this.getCommentorimg = function () {
            return _this.commentorimg;
        };
        this.getCommentdate = function () {
            return _this.commentdate;
        };
        this.getCommentlikes = function () {
            return _this.commentlikes;
        };
        this.getCommentDislikes = function () {
            return _this.commentdislikes;
        };
        this.getCommentReplies = function () {
            return _this.commentreplies;
        };
        this.getRelatedVideos = function () {
            console.log("these are related video");
        };
        this.getautoplay = function () {
            console.log("autoplay is on");
        };
        this.getallreplies = function () {
            console.log("you can view all replies on a respective comment");
        };
        this.videotitle = videotitle;
        this.videotime = videotime;
        this.totalviews = totalviews;
        this.channelname = channelname;
        this.channelsubscriber = channelsubscriber;
        this.likes = likes;
        this.dislikes = dislikes;
        this.discription = discription;
        this.TotalComments = TotalComments;
        this.publishedon = publishedon;
        this.catagory = catagory;
        this.comment = comment;
        this.commentorname = commentorname;
        this.commentorimg = commentorimg;
        this.commentdate = commentdate;
        this.commentlikes = commentlikes;
        this.commentdislikes = commentdislikes;
        this.commentreplies = commentreplies;
    }
    return youtubevideo;
}());
var video1 = new youtubevideo("video1", "9:00", 23345, "channel1", "2K", 467, 34, "this is a video", 3, "Aug 7,2018", "Entertainment", ["Nice Video", "cool", "superb"], ["Akhil", "Rohit", "rajat"], ["htpps://abc.in", "htpps://def.in", "htpps://ghi.in"], ["1 hr ago", "3 hr ago", "4 hr ago"], [45, 34, 65], [12, 2, 3], [12, 3, 24]);
var VideoTitle = video1.getvideoTitle();
var VideoTime = video1.getVideoTime();
var TotalVideoViews = video1.getTotalViews();
var ChannelName = video1.getChannelName();
var TotalChannelSubsc = video1.getChannelSubscriber();
var likes = video1.getlikes();
var dislikes = video1.getDislikes();
var discription = video1.getDiscription();
var TotalComments = video1.getTotalComments();
var PublishedDate = video1.getPublishedDate();
var Catagory = video1.getVideoCatagory();
var comment = video1.getcomment();
var newcomment = video1.setcomment("awesome");
var CommentorName = video1.getcommentorName();
var Commnetorimg = video1.getCommentorimg();
var CommentDate = video1.getCommentdate();
var commentlikes = video1.getCommentlikes();
var commentDislikes = video1.getCommentDislikes();
var CommentReplies = video1.getCommentReplies();
console.log("Title Of Video :", VideoTitle);
console.log("Time :", VideoTime);
console.log("TotalViews :", TotalVideoViews);
console.log("Channel Name :", ChannelName);
console.log("Total Subcriber :", TotalChannelSubsc);
console.log("likes :", likes);
console.log("dislikes :", dislikes);
console.log("Discription :", discription);
console.log("Total Comments :", TotalComments);
console.log("Published on :", PublishedDate);
console.log("Catagory :", Catagory);
console.log("comments :", comment);
console.log("New comment :", newcomment);
console.log("Name of Commentor of all comments :", CommentorName);
console.log("Commentor img of all comment:", Commnetorimg);
console.log("Date of Comment of all comment :", CommentDate);
console.log("Total likes on all comment :", commentlikes);
console.log("Total Dislikes on all  comment :", commentDislikes);
console.log("Total Replies on all Comment :", CommentReplies);
video1.getRelatedVideos();
video1.getautoplay();
video1.getallreplies();
