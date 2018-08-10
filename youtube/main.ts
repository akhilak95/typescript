class Youtubevideo {
  constructor(protected videotitle: string, protected videotime: string, private totalviews: number, protected channelname: string, private channelsubscriber: string, public likes: number,
    public dislikes: number, protected discription: string, private TotalComments: number, public publishedon: string, protected catagory: string, public comment: string[], public commentorname: string[],
    public commentorimg: string[], public commentdate: string[], public commentlikes: number[], public commentdislikes: number[], private commentreplies: number[]) {
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
    return this.comment.length
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
  setcomment = (typecomment: string) => {
    this.comment.push(typecomment)

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

class Music extends Youtubevideo {
  constructor(videotitle: string, videotime: string, totalviews: number, channelname: string, channelsubscriber: string, public likes: number,
    dislikes: number, discription: string, TotalComments: number, public publishedon: string, public catagory: string, public comment: string[], public commentorname: string[],
    public commentorimg: string[], public commentdate: string[], public commentlikes: number[], commentdislikes: number[], commentreplies: number[], public singersname: string[], public numberofsingers: number) {

    super(videotitle, videotime, totalviews, channelname, channelsubscriber, likes, dislikes, discription, TotalComments, publishedon, catagory,
      comment, commentorname, commentorimg, commentdate, commentlikes, commentdislikes, commentreplies)
    this.videotitle = videotitle;
    this.videotime = videotime;
    this.discription = discription;
    this.catagory = catagory;
    this.channelname = channelname;
    this.numberofsingers = numberofsingers;
    this.singersname = singersname

  }
  getsingersname = () => {
    return this.singersname
  }
  getnumberofsingers = () => {
    return this.singersname.length
  }
}


let video1 = new Youtubevideo("video1", "9:00", 23345, "channel1", "2K", 467, 34, "this is a video", 3, "Aug 7,2018",
  "Entertainment", ["Nice Video", "cool", "superb"], ["Akhil", "Rohit", "rajat"], ["htpps://abc.in", "htpps://def.in", "htpps://ghi.in"], ["1 hr ago", "3 hr ago", "4 hr ago"], [45, 34, 65], [12, 2, 3], [12, 3, 24]);

let musicvideo = new Music("Music1", "9:00", 23345, "channel1", "2K", 467, 34, "this is a video", 3, "Aug 7,2018",
  "Entertainment", ["Nice Video", "cool", "superb"], ["Akhil", "Rohit", "rajat"], ["htpps://abc.in", "htpps://def.in", "htpps://ghi.in"], ["1 hr ago", "3 hr ago", "4 hr ago"], [45, 34, 65], [12, 2, 3], [12, 3, 24], ["A R Rehman","Mohit"], 2);

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
let comments = video1.getcomment();
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
console.log("comments :", comments);
video1.setcomment("awesome")
console.log("New comment :", video1.getcomment());
console.log("Name of Commentor of all comments :", CommentorName);
console.log("Commentor img of all comment:", Commnetorimg);
console.log("Date of Comment of all comment :", CommentDate);
console.log("Total likes on all comment :", commentlikes);
console.log("Total Dislikes on all  comment :", commentDislikes);
console.log("Total Replies on all Comment :", CommentReplies)
video1.getRelatedVideos();
video1.getautoplay();
video1.getallreplies();
console.log("Name of singers :", musicvideo.getsingersname());
console.log("Total number of singers:", musicvideo.getnumberofsingers())

