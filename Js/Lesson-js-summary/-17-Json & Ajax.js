/*
###################################################################

169 - What Is JSON :
--------------------
- main.js:
-----------
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  ===================================================

 - test.json:                 xml ومقارنة خفيفة بينها وبين  json تعريف خفيف ضريف لل                              
 -------------
 {
  "widget": {
    "debug": "on",
    "window": {
      "title": "Sample Konfabulator Widget",
      "name": "main_window",
      "width": 500,
      "height": 500
    },
    "image": {
      "src": "Images/Sun.png",
      "name": "sun1",
      "hOffset": 250,
      "vOffset": 250,
      "alignment": "center"
    },
    "text": {
      "data": "Click Here",
      "size": 36,
      "style": "bold",
      "name": "text1",
      "hOffset": 250,
      "vOffset": 100,
      "alignment": "center",
      "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
  }
}
- test.xml :
------------
<widget>
  <debug>on</debug>
  <window title="Sample Konfabulator Widget">
    <name>main_window</name>
    <width>500</width>
    <height>500</height>
  </window>
  <image src="Images/Sun.png" name="sun1">
    <hOffset>250</hOffset>
    <vOffset>250</vOffset>
    <alignment>center</alignment>
  </image>
  <text data="Click Here" size="36" style="bold">
    <name>text1</name>
    <hOffset>250</hOffset>
    <vOffset>100</vOffset>
    <alignment>center</alignment>
    <onMouseUp>
      sun1.opacity = (sun1.opacity / 100) * 90;
    </onMouseUp>
  </text>
</widget>


###################################################################

170 - JSON Syntax And Compare With JS Object
-------------------------------------------------
 - main.js :
 ------------

  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes
  - Data Separated By Comma
  - Square Brackets [] For Arrays
  - Curly Braces {} For Objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null

- test.json :
--------------

{
  "string": "Elzero",
  "number": 100,
  "object": { "EG": "Giza", "KSA": "Riyadh" },
  "array": ["HTML", "CSS", "JS"],
  "boolean": true,
  "null": null
}

###################################################################

171 - What Is API
-------------------

  JSON
  - API Overview
  - Tools To Test API
  - Preview Github API

                         : مثال 
 https://api.github.com/users/elzerowebschool

 {
  "login": "ElzeroWebSchool",
  "id": 2456832,
  "node_id": "MDQ6VXNlcjI0NTY4MzI=",
  "avatar_url": "https://avatars.githubusercontent.com/u/2456832?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ElzeroWebSchool",
  "html_url": "https://github.com/ElzeroWebSchool",
  "followers_url": "https://api.github.com/users/ElzeroWebSchool/followers",
  "following_url": "https://api.github.com/users/ElzeroWebSchool/following{/other_user}",
  "gists_url": "https://api.github.com/users/ElzeroWebSchool/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ElzeroWebSchool/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ElzeroWebSchool/subscriptions",
  "organizations_url": "https://api.github.com/users/ElzeroWebSchool/orgs",
  "repos_url": "https://api.github.com/users/ElzeroWebSchool/repos",
  "events_url": "https://api.github.com/users/ElzeroWebSchool/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ElzeroWebSchool/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Elzero Web School",
  "company": null,
  "blog": "https://www.youtube.com/user/OsamaElzero",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Everything you need to learn",
  "twitter_username": null,
  "public_repos": 30,
  "public_gists": 1,
  "followers": 4934,
  "following": 0,
  "created_at": "2012-09-30T11:12:53Z",
  "updated_at": "2022-08-23T11:15:09Z"
}


###################################################################

172 - Parse And Stringify
-------------------------------------------------

  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON


// Get From Server

const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// Convert To JS Object

const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

// Update Data

myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// Send To Server

const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);


###################################################################

173 - Asynchronous vs Synchronous Programming
-------------------------------------------------

  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages


// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
console.log("3");

###################################################################

174 - Call Stack And Web API
-------------------------------------------------

  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser


setTimeout(() => {
  console.log("Web API");
}, 0);

function one() {
  console.log("One");
}
function two() {
  one();
  console.log("Two");
}
function three() {
  two();
  console.log("Three");
}

three();


=================================
console.log("One");
=================================
function one() {
  console.log("One");
}
=================================
function two() {
  one();
  console.log("Two");
}
=================================
function three() {
  two();
  console.log("Three");
}
=================================


console.log("#####");
console.log("One");
console.log("Two");
console.log("Three");

###################################################################

175 - Event Loop And Callback Queue
-------------------------------------------------

  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule


console.log("One");
setTimeout(() => {
  console.log("Three");
}, 0);
setTimeout(() => {
  console.log("Four");
}, 0);
console.log("Two");

setTimeout(() => {
  console.log(myVar);
}, 0);

let myVar = 100;
myVar += 100;

###################################################################

176 - What Is AJAX And Network Informations
-------------------------------------------------

  AJAX
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code


let req = new XMLHttpRequest();
console.log(req);

###################################################################

177 - Request And Response From Real API
-------------------------------------------------

  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found


let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

###################################################################

178 - Loop On Data
-------------------------------------------------

  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication


let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};

###################################################################

-------------------------------------------------

###################################################################

-------------------------------------------------

###################################################################

-------------------------------------------------

###################################################################

*/
