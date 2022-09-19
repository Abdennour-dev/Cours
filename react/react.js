/*
react:
--------
- Java script library for building UI

-  React is declerative

-  تساعدك على انشاء واجهات المستخدم بشكل اسرع واحسن واحترافي 

- Components تعتمد على ال 

- state شيء اسمه  components  لكل 

- يمكنني استخدام البيانات اكثر من مرة  components  عن طريق ال

- react native  يمكنك انشاء تطبيقات الموبايل عن طريق ال  react  اذا تعلمت ال

- node js  كما يمكنك التعامل مع السرفر بمساعدة ال

-creat new react app  انت يمكنك استخدام  react  اذا كنت تريد ان تاخذ كامل الخبرة من موقع 

-react لكي نستطيع تسطيب  node js  يجب ان تسطب 

- creat new react app الان من الموقع الرسمي ل 

- Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

- node -v  لمعرفة رقم اصدار النود

- npm -v     npm لمعرفة اصدار

- npx create-react-app my-app                                           كود التسطيب
  cd my-app                                                           عند انتهاء التطيب ادخل على ملف التطبيق
  npm start                               react   ويظهر شعار ال localhost:3000     بعدها مباشرة ياخذنا على   npm ونشغل ال

                       هذا دليل على نجاح عملية التسطيب                                                                 


- npm اعرف انه معمول بال package.json لما ترى ملف فيه 

- npm ===> node package manager 

- npm --help : لمعرفة كل شيء عنها 

- dependencies الى قائمة  bootstrap يقوم باضافة  ,  npm install bootstrap هكذا npm مثلا عند تسطيب البوتستراب عن طريق 

- dependencies : هي الامور اللي المشروع يعتمد عليها مثلا كالبوتستراب

- dependencies والنود لوحدها ستفهم وتسطب له كل npm install وهو في حاسوبه يقوم بتطبيق الكود التالي وبس  package.json  في حالة اردت ان تعطي شخص ما مشروعك فانت تعطيه فقط ملف 

- src الكود الخاص بنا يكتب في ال 

- index.js على 

- html شبيهة قليلا بال Jsx اكواد ال 

################################################################

                                         INTRODUCTION :
                                         -------------

app.js code :
--------------
import logo from "./logo.svg";
import "./App.css";

function App() {

  const myname = "abdennor";                               نركز هنا في هذه العبارة
  const element = <h1>Hello, {myname}</h1>;

  return (
    <div className="App">

      <header className="App-header">{element}</header>    هنا ايضا 

    </div>
  );
}

export default App;

-------------------------------------------------------
             functions  التعامل مع ال 

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

------------------------------------------------------
                                if condition التعامل مع ال 
                            
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

--------------------------------------------------------------
                    
                         attributes   الروابط والصور 

const element = <a href="https://www.reactjs.org"> link </a>;

const element = <img src={user.avatarUrl}></img>;

--------------------------------------------------------------------
 
 يجب احترام نظام الاب والابن  Jsx ملاحظة في نظام 
 
 < >
         <=======   او استخدام 
 </>

----------------------------------------------------------------------

Babel compiles JSX down to React.createElement() calls.

These two examples are identical:

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);


const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);


// Note: this structure is simplified

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};


################################################################


*/
