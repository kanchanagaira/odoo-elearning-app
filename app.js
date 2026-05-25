window.onload = function(){

    const loggedIn = localStorage.getItem("loggedIn");

    if(loggedIn === "true"){
        showApp();
    }
}

function register(){

    const username =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    if(username === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    let users =
    JSON.parse(localStorage.getItem("users")) || [];

    users.push({
        username,
        password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful");
}

function login(){

    const username =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    let users =
    JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(user =>
        user.username === username &&
        user.password === password
    );

    if(validUser){

        localStorage.setItem("loggedIn","true");

        localStorage.setItem("currentUser",username);

        showApp();

    }else{

        alert("Invalid Credentials");
    }
}

function showApp(){

    document.getElementById("authContainer").style.display="none";

    document.getElementById("sidebar").style.display="block";

    document.getElementById("mainContent").style.display="block";

    document.getElementById("welcomeText").innerText =
    "Welcome, " + localStorage.getItem("currentUser");
}

function logout(){

    localStorage.setItem("loggedIn","false");

    location.reload();
}

function showSection(sectionId){

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId)
    .classList.add("active");
}

function startCourse(course){

    document.getElementById("courseModal").style.display="block";

    document.getElementById("courseTitle").innerText=course;
}

function closeModal(){

    document.getElementById("courseModal").style.display="none";
}

function continueLearning(){

    alert("Course Started Successfully");
}

function generateCertificate(){

    const username =
    localStorage.getItem("currentUser") || "Student";

    const certificateWindow =
    window.open('', '_blank');

    certificateWindow.document.write(`

    <html>

    <head>

        <title>Certificate</title>

        <style>

            body{
                font-family:Georgia;
                background:#f8fafc;
                padding:40px;
            }

            .certificate{
                max-width:1000px;
                margin:auto;
                background:white;
                border:15px solid #0f172a;
                padding:60px;
                text-align:center;
                position:relative;
                box-shadow:0 10px 40px rgba(0,0,0,0.2);
            }

            h1{
                font-size:55px;
                color:#166534;
                margin-bottom:20px;
            }

            h2{
                font-size:45px;
                margin:30px 0;
                color:#0f172a;
            }

            p{
                font-size:22px;
                line-height:1.7;
                color:#334155;
            }

            .course{
                font-size:34px;
                color:#166534;
                font-weight:bold;
                margin:25px 0;
            }

            .footer{
                margin-top:70px;
                display:flex;
                justify-content:center;
                gap:100px;
            }

            .footer-box{
                text-align:center;
            }

            .footer-box p{
                border-top:2px solid black;
                padding-top:10px;
                width:220px;
                margin-top:10px;
            }

            .seal{
                width:130px;
                height:130px;
                border-radius:50%;
                background:#166534;
                color:white;
                display:flex;
                justify-content:center;
                align-items:center;
                font-weight:bold;
                position:absolute;
                bottom:70px;
                right:70px;
                font-size:20px;
            }

            button{
                margin-top:60px;
                padding:15px 28px;
                border:none;
                border-radius:10px;
                background:#38bdf8;
                font-size:18px;
                font-weight:bold;
                cursor:pointer;
            }

        </style>

    </head>

    <body>

        <div class="certificate">

            <h1>CERTIFICATE OF COMPLETION</h1>

            <p>
                This certificate is proudly presented to
            </p>

            <h2>${username}</h2>

            <p>
                For successfully completing
            </p>

            <div class="course">
                Python Fundamentals
            </div>

            <p>
                and demonstrating excellent performance
                in learning, practical implementation,
                and project development.
            </p>

            <div class="footer">

                <div class="footer-box">

                    <p>
                        Instructor Approval
                    </p>

                </div>

                <div class="footer-box">

                    <p>
                        Date:
                        ${new Date().toLocaleDateString()}
                    </p>

                </div>

            </div>

            <div class="seal">
                VERIFIED
            </div>

            <button onclick="window.print()">
                Save as PDF
            </button>

        </div>

    </body>

    </html>

    `);
}