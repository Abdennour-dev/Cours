/*
##########################################################

- #023 - Number
------------------
-double precision :
 exp :
  console.log(1000000)//1000000
   
-syntactic sugar "_": 
 exp : 
  console.log(1_000_000)//1000000

-e: 
 exp :
  console.log(1e6)//1000000

-**: 
 exp : 
  console.log(10**6)//1000000

-with decimal:
 exp :
  console.log(10*10*10*10*10*10)//1000000

-: 
 exp : 
  console.log(1000000.0)//1000000

-number + bigInt: 
    -exp : 
    console.log(number.MAX_SAFE_INTEGERs)//وهذا أأمن رقم باللغة يمكنك استخدامه
    -exp :
    console.log(number.MAX_VALUE)//هذا اعلى رقم باللغة

##########################################################

- #024 - Number Methods_2
---------------------------
-two dos to call a methods , exp : 
console.log(100..toString());//  عندما نكتب نقطتين نحن نقول له بان العدد صحيح تماما وليس عشري وحوله لنا الى نوع سترينق اي كلمة 

-toString(), exp : 
console.log((100).toString());// string لتحويله الى 

-toFixed(), exp : 
console.log((100.5555).toFixed(2));//100.56 يضع عددين بعد الفاصلة مع التدوير 

-parseInt(), exp :
 console.log(parseInt(("100 abdennour"));//100 integer numberيقوم بتحليل الكلمات واستخراج ال

 -parseFloat(), exp :
  console.log(parseFloat(("100.89 abdennour"));//100.89 يقوم بتحليل العبارة واستخراج العدد العشري

  -Number.isInteger(), exp :
   console.log(Number.isInteger("100"));//false تحلل العبارة هل هي عدد صحيح ام لا

   -Number.isInteger(), exp :
    console.log(Number.isInteger(100.66));//false تحلل العبارة هل هي عدد صحيح ام لا

 -Number.isInteger(), exp : 
 console.log(Number.isInteger(100));//true تحلل العبارة هل هي عدد صحيح ام لا

 -Number.isNaN(), exp : 
 console.log(Number.isNaN("HI"));//false تحلل العبارة هل هي عدد صحيح ام لا
 
##########################################################

- #025 - Math Object
---------------------
 -round() exp : console.log(math.round(99.2));//99 قوم بعملية التدوير يعني فوق خمسة او خمسة نصعد مرتبة واذا تحت الخمسة نعود 
 
 -ceil() exp : console.log(math.ceil(99.2));//تدوير للاعلى 100
 
 -floor() exp : console.log(math.floor(99.6));//99 تدوير للاسفل 
 
 -min() exp : console.log(math.min(10,20,100,-100,90));//-100 اقل قيمة
 
 -min() exp : console.log(math.min(10,20,100,-100,90));//100 اعلى قيمة 
 
 -pow() exp : console.log(math.pow(5,2));//25 تعمل عمل الأس
 
 -random() exp : console.log(math.random());// رقم عشوائي
 
 -trunc() exp : console.log(math.trunc(77.6));//77 ينزع العدد الذي بعد الفاصلة
 
##########################################################
##########################################################

- #027 - String Methods Part 1
-----------------------------------
 1-access with index , 
 exp : 
 let nm ="abdennour"; console.log(nm[3]);// e  انتقل عبر الاسم عبد النور واختار الحرف الذي يقع في العدد 3 والحساب يبدا من 0
 
 2-access with chartAt() , 
 exp : 
 let bh ="bouhanna"; console.log(bh.chartAt(3));// h اختيار مكان الاندكس رقم 3 بدا من 0
 
 3-.lenght, 
  exp :
  let vh ="bouhanna"; console.log(vh.lenght);// 8 لمعرفة عدد الاندكس
 
  4-trim(),
 exp :
  let th =" bouhanna "; console.log(th.trim());// bouhanna نزع الفراغات في الاول والاخير 
 
  5-toUpperCase(), 
 exp :
  console.log("abdennour".toUpperCase());// ABDENNOUR جعل الكلمات كبيرة
 
  6-toLowerCase(), 
 exp :
  console.log("ABDENNOUR".toLowerCase());// abdennour جعل الكلمات الصغيرة
 
  -chain methods : استخدام كم عنصر في الكود
  exp : 
  console.log(" my name abdennour ".trim().charAt(3).toUpperCase());// N
 
 7-indexOf() ,
 exp: let a =" elzero web school"
   console.log(a.indexOf("web",0)) // 8 قلت له ابحث عن كلمة ويب بدا من الاندكس 0 حتى تجدها 
 
 8-lastIndexOf() ,
 exp:console.log(a.lastIndexOf("o")) // 15  سوف يبدأ البحث من الاخير ويحسب من اليسار 
 
 9-slice() ,
  exp :console.log(a.slice(2)) // zero web school  تستعمل للقطع من الاندكس 2 ماقبله يقطع 

 10-repeat() ,
  exp : console.log(a.repeat(5)) // ستظهر النتيجة 5 مرات متكررة 

 11-split() ,
  exp : console.log(a.split("",6 هذا عدد حدود التقسيم )) // يقوم بتقسيم العبارة حرفا حرفا على شكل مصفوفة 
 
 12-substring() , 
 exp : console.log(a.substring(2,6)) //elzero  يقوم على تقطيع العبارة 
 
 12-substr() , 
 exp : console.log(a.substr(0,6)) //elzero
 exp : console.log(a.substr(-5,2)) //ch  تعمل على تقطيع العبارة بالطريقة التي نود وتقبل الحساب من الاخير للاول 
 
 13-include() ,
 exp : console.log(a.include("web")) //true نستعملها للبحث عن الكلمة في العبارة وتكون الاجابة بصح او خطأ
 
 14-startsWith() ,
 exp : console.log(a.startswith("z",2)) //true قلت له ابحثلي اذا كان الاندكس 2 يبدا بحرف زاد
 
 15-endsWith() ,
 exp : console.log(a.endsWith("l")) //true سالته هل العبار الخاصة بي تنتهي بالحرف اللي اعطيتك قال لي نعم

 ##########################################################
*/
