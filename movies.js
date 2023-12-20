<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design</title>
    <link rel="stylesheet" href="Home.css">
    <link rel="icon" href="Aicon.jpg" type="image/x-icon">
    <style>
        *{
            padding: 0;
            margin: 0;
            text-decoration: none;
            list-style: none;
            box-sizing: border-box;
        }
        nav{
            background-color:bisque;
            height: 80px;
            width: 100%;
            font-weight: bold;
            
        }
        label.logo{
            color:crimson;
            font-size: 35px;
            line-height: 80px;
            padding: 0 100px;
        }
        nav ul{
            float:right;
            margin-right: 20px;
        }
        nav ul li{
            display: inline-block;
            line-height: 80px;
            margin: 0 5px;
        }
        nav ul li a{
            color:brown;
            font-size: 17px;
            padding: 7px 13px;
            border-radius: 3px;
            text-transform: uppercase;
        }
        .image img
        {
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width:100%;
                height: 80vh;
                overflow: hidden;
                margin-top: 15px;
                
        }
        .op{
            margin-top: -400px;
        
        }
        .options select
        {
                height: 40px;
                width: 20%;
        }
            
        a.active,a:hover{
            background-color: rgba(151, 244, 12, 0.548);
            transition: .5s;
        }
        .checkbtn{
            color:blue;
            float: right;
            margin-right: 40px;
            cursor: pointer;
            display: none;
        }
        #check{
            display: none;
        }
        .pagination a{
            color: red;
            text-decoration: none;
        }
        .pagination a:hover{
                background-color:darkturquoise;
                color:cornsilk
        }
        .pagination {
            padding-top: 27%;
            font-size: 20px;
        }
        
        @media (max-width:1200px) and (min-width:940px){
            label.logo{
                font-size: 25px;
                padding-left: 30px;
            }
            nav ul li a{
                font-size: 12px;
                color:brown;
            }
            nav
            {
                height: 100px;
                background-color:darkkhaki;
            }
            .pagination
            {
                margin-top: 4%;
                font-size: 20px;
            }
        
        }
        
        @media (max-width:930px) and (min-width:855px){
            label.logo{
                font-size: 20px;
                padding-left: 30px;
            }
            nav ul li a{
                font-size: 10px;
                color:brown;
            }
           nav {
                height: 90px;
                background-color:burlywood;
           }
           .pagination {
            margin-top: 14%;
            font-size: 20px;
        }
        }
        
        
        @media (max-width:850px){
            .checkbtn{
                display: block;
            }
            ul{
                width: 100%;
                position: fixed;
                height: 100vh;
                background-color: rgb(235, 183, 235);
                left: -100%;
                text-align: center;
                transition: all .5s;
            }
            label.logo 
            {
                font-size: 25px;
                font-style: italic;
            }
            
            nav{
                background-color:blanchedalmond;
            }
            nav ul li{
                display: block;
                margin: 50px 0;
                line-height: 30px;
            }
            nav ul li a{
                font-size: 20px;
                color: brown;
            }
            a.active,a:hover{
                background: none;
                color: darkgreen;
            }
            #check:checked ~ ul{
                left: 0;
            }
            .pagination {
                margin-top: 20%;
                font-size: 20px;
            }
        }
        @media (min-width:550px) and (max-width:800px){
            .checkbtn{
                display: block;
            }
            ul{
                width: 100%;
                position: fixed;
                height: 100vh;
                background-color: rgb(235, 183, 235);
                left: -100%;
                text-align: center;
                transition: all .5s;
            }
            label.logo 
            {
                font-size: 25px;
                font-style: italic;
            }
            
            nav{
                background-color:darkkhaki;
            }
            nav ul li{
                display: block;
                margin: 50px 0;
                line-height: 30px;
            }
            nav ul li a{
                font-size: 20px;
                color: brown;
            }
            a.active,a:hover{
                background: none;
                color: darkgreen;
            }
            #check:checked ~ ul{
                left: 0;
            }
            .pagination {
                margin-top: 33%;
                font-size: 20px;
            }
        }
        
    </style>
</head>
<body>
    <nav action="/home1" method="GET">
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <i class="material-icons"
                style="font-size: 30px;
                line-height: 80px;">menu</i>
        </label>
        <label class="logo">Making Memories</label>
        <ul>
            <li><a class="active" href="Home.html">Home</a></li>
            <li><a href="About Us.html">About us</a></li>
            <li><a href="places.html">Places</a></li>
            <li><a href="Accomodation.html">Accomodation</a></li>
            <li><a href="Transportation.html">Transportation</a></li>
        </ul>
    </nav>
    <section class="options">
        <section class="image">
            <img src="https://www.teahub.io/photos/full/46-468459_desktop-wallpaper-india.jpg">
            <div class="op">
                <center>
                    <select>  
                      <option  value="places">Select the Places Where you want to Travel</option>
                      <option value="Himachal Pradesh">Golden Triangle Tour</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Rajastan">Rajastan</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Tamilnadu">Tamilnadu</option>
                
                    </select>
                  </center>
          
            </div>
        </section>
    </section>
    <footer>
    <div class="pagination">
        <a>&laquo;</a>
        <a href="Home.html">Home &nbsp; &nbsp;</a>
        <a href="Aboutus.html"> About Us &nbsp; &nbsp;</a>
        <a href="movies.html">Travelers Guide &nbsp; &nbsp;</a>
        <a href="education.html">GetaWays</a>
        <a>&raquo;</a>
        </div>
    </footer>
    
      
</body>
</html>









<script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"></script>

    <script>
        const startButton = document.getElementById("startButton");
        const submitButton = document.getElementById("submitWord");
        const wordElement = document.getElementById("word");
        const inputElement = document.getElementById("inputWord");
        const resultElement = document.getElementById("result");
        const typedWordsList = document.getElementById("typedWords");

        let wordList = [];
        let currentIndex = 0;
        let startTime, endTime;
        let gameOver = false;

        // Initialize Firebase
        const firebaseConfig = {
            
                apiKey: "AIzaSyAJ78bjuwrL-ktlgA-lYZ6qGYgvxxflOXo",
                authDomain: "typinggames-384b3.firebaseapp.com",
                projectId: "typinggames-384b3",
                storageBucket: "typinggames-384b3.appspot.com",
                  messagingSenderId: "578079521159",
                appId: "1:578079521159:web:fd310e6db23331b27e3b22",
                measurementId: "G-P4LM11ZZHK"
        };






















<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey : "AIzaSyDJ3vYXbJkxG76fxYqjqYJ5HM2ZK7BFrzc",
    authDomain: "uplifted-engine-388107.firebaseapp.com",
    projectId: "uplifted-engine-388107",
    storageBucket: "uplifted-engine-388107.appspot.com",
    messagingSenderId: "738666996243",
    appId: "1:738666996243:web:3f62d6b8afa23e590295e6",
    measurementId: "G-T0PPZWZS9M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>