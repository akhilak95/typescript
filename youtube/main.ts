class youtubevideo {
  constructor(public videotitle: string, public videotime: string, public totalviews: number, public channelname: string, private channelsubscriber: string, public likes: number,
    public dislikes: number, public discription: string, private TotalComments: number, public publishedon: string, public catagory: string, public comment: string[], public commentorname: string[],
    public commentorimg: string[], public commentdate: string[], public commentlikes: number[], public commentdislikes: number[], public commentreplies: number[]) {
    this.videotitle = videotitle;
    this.videotime = videotime;
    this.totalviews = totalviews;
    this.channelname = channelname;
    this.channelsubscriber = channelsubscriber
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

  getvideoTitle = () => {
    return this.videotitle;
  }
  getVideoTime = () => {
    return this.videotime
  }
  getTotalViews = () => {
    return this.totalviews
  }
  getChannelName = () => {
    return this.channelname
  }
  getChannelSubscriber = () => {
    return this.channelsubscriber
  }
  getlikes = () => {
    return this.likes
  }
  getDislikes = () => {
    return this.dislikes
  }

  getDiscription = () => {
    return this.discription
  }

  getTotalComments = () => {
    return this.TotalComments
  }
  getPublishedDate = () => {
    return this.publishedon;
  }

  getVideoCatagory = () => {
    return this.catagory
  }
  getcomment = () => {
    return this.comment

  }
  setcomment = (typecomment: string[]) => {
    this.comment = typecomment;

  }
  getNewComment = () => {
    return this.comment
  }
  getcommentorName = () => {
    return this.commentorname
  }
  getCommentorimg = () => {
    return this.commentorimg
  }
  getCommentdate = () => {
    return this.commentdate
  }
  getCommentlikes = () => {
    return this.commentlikes
  }
  getCommentDislikes = () => {
    return this.commentdislikes
  }
  getCommentReplies = () => {
    return this.commentreplies
  }

  getRelatedVideos = () => {
    console.log("these are related video")
  }

  getautoplay = () => {
    console.log("autoplay is on")
  }

  getallreplies = () => {
    console.log("you can view all replies on a respective comment")
  }




}

let video1 = new youtubevideo("video1", "9:00", 23345, "channel1", "2K", 467, 34, "this is a video", 3, "Aug 7,2018",
  "Entertainment", ["Nice Video", "cool", "superb"], ["Akhil", "Rohit", "rajat"], ["htpps://abc.in", "htpps://def.in", "htpps://ghi.in"], ["1 hr ago", "3 hr ago", "4 hr ago"], [45, 34, 65], [12, 2, 3], [12, 3, 24]);

let VideoTitle = video1.getvideoTitle();
let VideoTime = video1.getVideoTime();
let TotalVideoViews = video1.getTotalViews();
let ChannelName = video1.getChannelName();
let TotalChannelSubsc = video1.getChannelSubscriber();
let likes = video1.getlikes();
let dislikes = video1.getDislikes();
let discription = video1.getDiscription();
let TotalComments = video1.getTotalComments();
let PublishedDate = video1.getPublishedDate();
let Catagory = video1.getVideoCatagory();
let comment = video1.getcomment();
video1.setcomment(["awesome"])
let NewcComment = video1.getNewComment();
let CommentorName = video1.getcommentorName();
let Commnetorimg = video1.getCommentorimg();
let CommentDate = video1.getCommentdate();
let commentlikes = video1.getCommentlikes();
let commentDislikes = video1.getCommentDislikes();
let CommentReplies = video1.getCommentReplies();


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
console.log("New comment :", NewcComment);
console.log("Name of Commentor of all comments :", CommentorName);
console.log("Commentor img of all comment:", Commnetorimg);
console.log("Date of Comment of all comment :", CommentDate);
console.log("Total likes on all comment :", commentlikes);
console.log("Total Dislikes on all  comment :", commentDislikes);
console.log("Total Replies on all Comment :", CommentReplies)
video1.getRelatedVideos();
video1.getautoplay();
video1.getallreplies();

