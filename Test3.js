   var date = new Date();
            var myGreeting = window.document.getElementById("Content").getElementById("Del1Uppgift1").getElementsByTagName("h1");
            //var myGreeting = document.getElementsByTagName("h1");
            myGreeting[0].innerHTML = "LOL";

            var value = myGreeting.value;
            alert(value);
            alert("hej");

            function Greeting()
            {
                if (date.getHours() < 9)
                {
                    myGreeting.innerHTML = "Test";
                }
                else if (date.getHours() >= 9 && date.getHours() <= 17)
                {
                    myGreeting.innerHTML = "Test";        
                }
                else
                {
                    myGreeting.innerHTML = "Test";        
                }
            }