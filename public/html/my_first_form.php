<?php
  var_dump($_GET);
  var_dump($_POST);
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8"

	<title>My First HTML Form</title>
</head>

<body>
    <h3>User Login</h3>
    <form method="POST" action="/html/my_first_form.php">
            <p>
                <label for="username">Username</label>
                <input id="username" name="username" type="text" placeholder="Enter your username">
            </p>
            <p>
                <label for="password">Password</label>
                <input id="password" name="password" type="M" placeholder="Enter your username">
            </p>
            <p>
                <input type="submit">beer</button>
            </p>
    </form>
    <h3>Compose an Email</h3>
    <form method="POST" action="/html/my_first_form.php">
        <p>
            <label for="To">To</label>
            <input id="To" name="To" type="text" placeholder="Enter your email address">
        </p>
        <p>
            <label for="From">From</label>
            <input id="From" name="From" type="From" placeholder="From">
        </p>
        <p>
            <label for="Subject">Subject</label>
            <input id="Subject" name="Subject" type="Subject" placeholder="Subject">
        </p>
        <p><textarea id="email_body" name="email_body">Content Here</textarea></p>
        <p>
            <button type="login">login</button>
            <input type="checkbox" id="save_a_copy_to_sent_file" name="save_a_copy_to_sent_file" value="yes" checked>
                <label for="save_a_copy_to_sent_file">Do you want to save a copy to your sent folder?
                </label>
        </p>
        </form>
        <!--DIDN'T FINISH THE "ARRAY"-->
    <form method="POST" action="/html/my_first_form.php" id="form">
    <h4>Basic Info</h4>
    <p>What operating system do you use?</p>
        <label>Windows 10
        <input type="checkbox" id="os1" value="window10" name="katesarray[]">
        </label>
        <label> Linux
        <input type="checkbox" id="mailing_list" value="yes">
        <label>Operating System 1</label>
        <input type="checkbox" id="os1" name="os1">
        <label>Operating System 2</label>
        <input type="checkbox" id="os2" name="os2">
        <label>Operating System 3</label>
        <input type="checkbox" id="os3" name="os3">
         
        <!--
        <input type="checkbox" id="mailing_list" value="yes">
        <label>Operating System 1</label>
            <input type="checkbox" id="os1" name="os[]">
        <label>Operating System 2</label>
            <input type="checkbox" id="os2" name="os[]">
         <label>Operating System 3</label>
            <input type="checkbox" id="os3" name="os[]">
        </label> -->
    <p>What is Dylan's Favorites Band?</p>
    { <label>
       <input type="radio" name="band" value="Nickelback">
           Nickelback
       </label>
       <label>
       <input type="radio" name="band" value="Spicegirls">
           Spicegirls
       </label><label>
           <input type="radio" name="band" value="Metallica">
           Metallica
       </label>}

        <button type="submit">Submit!</button>    
        <!--EXAMPLE OF RADIO BUTTONS
        <label>
            <input type="radio" name="q1" value="dallas">
            Dallas
        </label>
        <label>
            <input type="radio" name="q1" value="austin">
            Austin
        </label>
        <label>
            <input type="radio" name="q1" value="san antonio">
            San Antonio
        </label>-->

        <label for="transmission">Transmission</label>
       
        <select id="transmission" name="transmission">
            <option>Automatic</option>
            <option selected>Manual</option>
            <option>CVT</option>
        </select>
        <br/>
        <br/>
        <br/>
        <label for="transmission2">Select your transmission type: </label>
        <select id="transmission2" name="transmission2">
            <option value="1">Automatic</option>
            <option value="2">Manual</option>
        </select>

        <button type="submit">Submit!</button>

        <form method="POST" action="/html/my_first_form.php" id="form">
        <h4>Basic Select Testing</h4>
        <p>Do you know HTML?</p>
        <label>
            <input type="radio" name="q1" value="yes">Yes
            <input type="radio" name="q1" value="no">No
        </label>
        <br>

        <form method="POST" action="/html/my_first_form.php" id="form">
        <h4>Basic Select Testing</h4>
        <p>Do you know HTML?</p>
        <label for="answer to question">Answer:</label>
        <select id="answer" name="answer">
            <option selected>Yes</option>
            <option>No</option>
        </select>
        <button type="submit">Submit!</button>
        <br/>

        <form method="POST" action="/html/my_first_form.php" id="form">
        <h4>Select Testing</h4>
        <p>Do you know HTML?</p>
        <label for="answer to question">Answer:</label>
        <select id="answer" name="answer">
            <option selected value="1">Yes</option>
            <option value="0">No</option>
        </select>

        <button type="submit">Submit!</button>
        <br/>

        <form method="POST" action="/html/my_first_form.php" id="form">
        <h4>Multiple Select Testing</h4>
        <p>Do you know HTML?</p>
        <label for="question">What testing method do you prefer?</label>
        <select id="questions" name="questions[]" multiple>
        <br>
            <option value="multiple choice">multiple choice</option>
            <option value="fill-in the blank">fill-in the blank</option>
            <option value="open book">open book</option>
            <option value="essay">essay</option>
        </select>
        <button type="submit">Submit!</button>
        <br/>







</body>
</html>