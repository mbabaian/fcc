$(document).ready(function() {
    var buzzer = $("#buzzer")[0];
    var count = parseInt($("#num").html());
    var breakTime = parseInt($("#breakNum").html());

    // test count
    // console.log(count);
    buzzer.play();

    // hide reset button upon load
    $("#reset").hide();

    $("#start").click(function(){
        // timer in milliseconds
        var counter = setInterval(timer, 1000);
        // multiply by 60 to convert to minutes
        count*=60; 

        function timer(){
            // hide variables when timer starts
            $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").hide();
            $("#timeType").html("Session Time ");
            $("#timeType").show();
           
            count-=1;

            // stop time when clock hits zero
            if (count === 0) {
                buzzer.play();
                clearInterval(counter);

                var startBreak = setInterval(breakTimer, 1000);
                breakTime*=60;
                $("#num").hide();
            }

            if(count % 60 >= 10) {
                $("#num").html(Math.floor(count / 60) + ":" + count % 60);
            }
            else {
                $("#num").html(Math.floor(count / 60) + ":" + "0" + count % 60);
            }
            
           // $("#num").html(count);

            function breakTimer(){
                $("#timeType").html("Break Time ");
                $("#breakNum").show();
                $("#timeType").show();
                breakTime -= 1;
                if (breakTime === 0) {
                    clearInterval(startBreak);
                    buzzer.play();
                    $("#reset").show();
                $("#breakNum, #timeType").hide();
            }   

            if(breakTime % 60 >= 10) {
                $("#breakNum").html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
            }
            else {
                $("#breakNum").html(Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60);
            }
        }
    }

    });

    $("#reset").click(function(){
       count = 25;
       breakTime = 25;
       $("#num").html(count);
       $("#breakNum").html(breakTime);
       $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2").show(); 
       $("#reset, #timeType").hide();
    });

    // manage time clock
    $("#minus5Clock").click(function(){
        if (count > 5) {
            count -= 5;
        $("#num").html(count);
        console.log(count);
        }        
    });

    $("#add5Clock").click(function(){
        // no if statement here because it doesn't matter how long one works
            count += 5;
        $("#num").html(count);
        console.log(count);
    });

    
    // manage break clock
    $("#minus5Break").click(function(){
        if (breakTime > 5) {
            breakTime -= 5;
        $("#breakNum").html(breakTime);
        console.log(count);
        }        
    });

    $("#add5Break").click(function(){
        // no if statement here because it doesn't matter how long one works
            breakTime += 5;
        $("#breakNum").html(breakTime);
        console.log(count);
    });
});