// data on bio
var bio = { // bio contains:
  "name": "Tony K. Tan", // name : string
  "role": "Problem Solver", // role : string
  "contacts": { // contacts : an object with
    "mobile": "+(65) 96831445", //       mobile: string
    "email": "t@tonyktan.com", //       email: string
    "github": "tankwan", //       github: string
    "twitter": "@tonytankwan", //       twitter: string
    "location": "Singapore" //       location: string
  },
  "welcomeMessage": "Welcome to my resume!", // welcomeMessage: string
  "skills": [ // skills: array of strings
    "Ruby",
    "Python",
    "Sinatra",
    "haml",
    "JavaScript",
    "HTML",
    "CSS",
    "Tableau",
    "Octave",
    "R"
  ],
  "bioPic": "images/tonyktan.jpeg", // biopic: url
  "display": function() {
    var displayHead = function(){
      $("#header").prepend(HTMLheaderRole.replace("%data%", bio["role"]));
      $("#header").prepend(HTMLheaderName.replace("%data%", bio["name"]));

      if (bio["contacts"]) {
        var newContact = "";
        console.log("hello");
        for (var contact in bio["contacts"]) {
          newContact = HTMLcontactGeneric.replace("%contact%", contact);
          newContact = newContact.replace("%data%", bio["contacts"][contact]);
          $("#topContacts").append(newContact);
          $("#footerContacts").append(newContact);
        }
      }

      $("#header").append(HTMLbioPic.replace("%data%", bio["bioPic"]));
      $("#header").append(HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]));

      if (bio["skills"].length > 0) {
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio["skills"].length; i++) {
          $("#skills").append(HTMLskills.replace("%data%", bio["skills"][i]));
        }
      }
    }
    displayHead();
  } // display: function
}

// data on education
var education = { // education contains:
  "schools": [ // schools: array of objects with
    {
      "name": "The Wharton School, University of Pennsylvania", //      name: string
      "location": "Philadelphia, PA, US", //      location: string
      "degree": "Bachelor of Science in Economics, Cum Laude", //      degree: string
      "majors": [ //      majors: array of strings
        "Real Estate",
        "Entrepreneurship",
        "Finance"
      ],
      "dates": 2010, //      dates: integer (graduation date)
      "url": "https://www.wharton.upenn.edu" //      url: string
    }
  ],
  "onlineCourses": [ // onlineCourses: array with
    "Startup Engineering, Analysis of Algorithms (Part 1), Machine Learning", //      title: string
    "Coursera", //      school: string
    2014, //      date: integer (date finished)
    "https://www.coursera.com" //      url: string
  ],
  "display": function() {
    var displayEducation = function() {
      $("#education").append(HTMLcollege);
      for (var i = 0; i < education["schools"].length; i++) {
        var school = education["schools"][i];
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", school["name"]) + HTMLschoolDegree.replace("%data%", school["degree"]));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school["dates"]));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school["location"]));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school["majors"].join(", ")));
      }

      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);
      var online = education["onlineCourses"];
      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", online[0]) + HTMLonlineSchool.replace("%data%", online[1]));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", online[2]));
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%", online[3]));
    }
    displayEducation();
  } // display: function
};

// data on work
var work = { // work contains
  "jobs": [ // jobs: array of objects with
    {
      "employer": "Housing and Development Board of Singapore", //      employer: string
      "title": "Senior Estate Manager (Policy Development)", //      title: string
      "location": "Singapore", //      location: string
      "dates": "April 2012 - Present", //      dates: string (works with a hyphen between them)
      "description": "Led a team of 3 data analysts to derive housing-related public policy insights using Tableau, R, Excel, and Microsoft Access, harnessing data of over 800,000 housing units and 2.5 million residents. Implemented data-driven public policy recommendation workflow, positively impacting over 3 million Singapore residents."
    },
    {
      "employer": "Housing and Development Board of Singapore", //      employer: string
      "title": "Estate Officer (Policy Development)", //      title: string
      "location": "Singapore", //      location: string
      "dates": "July 2010 - April 2012", //      dates: string (works with a hyphen between them)
      "description": "Developed housing-related public policy frameworks and strategies, impacting the housing provision of over 3 million residents in Singapore. Conducted data-driven assessment analysis using Excel to evaluate public policy options impacting over the housing eligibility and liquidity of over 3 million Singapore residents." //      description: string
    },
    {
      "employer": "Penn Alumni Interview Program (Singapore)", //      employer: string
      "title": "Co-Chair", //      title: string
      "location": "Singapore", //      location: string
      "dates": "July 2013 - Present", //      dates: string (works with a hyphen between them)
      "description": "Created mobile-responsive scheduling web application using Ruby Sinatra framework to match over 80 alumni interviewers with over 250 undergraduate applicants annually. Refined features of web application to include functionalities like auto-scheduling, self-service booking, and interview assignment listing, doing away with the administrative work of manually scheduling over 250 alumni interviews. Received special mention from University of Pennsylvania Director of Penn Alumni Interview Program Patrick Bredehoft regarding the functionality of the application." //      description: string
    },
    {
      "employer": "Penn and Wharton Alumni Club of Singapore", //      employer: string
      "title": "Treasurer", //      title: string
      "location": "Singapore", //      location: string
      "dates": "May 2013 - May 2014", //      dates: string (works with a hyphen between them)
      "description": "Managed club funds of over US$10,000 for alumni club of over 800 members. Authorized spending for club events including hosting of faculty, business leaders, and distinguished alumni, serving over 300 attending alumni." //      description: string
    },
    {
      "employer": "Penn and Wharton Alumni Club of Singapore", //      employer: string
      "title": "Executive Committee Member", //      title: string
      "location": "Singapore", //      location: string
      "dates": "May 2012 - Present", //      dates: string (works with a hyphen between them)
      "description": "Organized club events including social drinks and faculty speaker talks, attended by over 200 alumni annually, fostering the wider alumni community in Singapore. Implemented an online ticketing solution for club events, expanding reach of events to over 800 alumni in Singapore." //      description: string
    }
  ],
  "display": function() {
    var displayWork = function() {
      for (i = 0; i < work["jobs"].length; i++) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work["jobs"][i]["employer"]) + HTMLworkTitle.replace("%data%", work["jobs"][i]["title"]));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work["jobs"][i]["dates"]));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work["jobs"][i]["location"]));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work["jobs"][i]["description"]));
      }
    }
    displayWork();
  }// display: function
};

// data on projects
var projects = { // projects contains:
  "projects": [ // projects: array of objects with
    {
      "title": "University Interviews Web Application (Web Application Creation)", //       title: string
      "dates": "Sep 2013 - Feb 2015", //       dates: string (works with a hyphen between them)
      "description": "Web application built using Ruby Sinatra web framework to organize university interviews for the University of Pennsylvania. Conceptualized and coded up entire web application from scratch. Created functions for automated data entry, self-update of contact details, interview booking function, one-page information display, interview assignment collation, interview statistics monitoring, and interview assignment function.", //       description: string
      "images": [ //       images: array with string urls
        "images/paip1.png",
        "images/paip2.png",
        "images/paip3.png",
        "images/paip4.png"
      ]//,
    },
    {
      "title": "rudepackets (Product Creation)", //       title: string
      "dates": "November 2014 - Ongoing", //       dates: string (works with a hyphen between them)
      "description": "A series of cheeky red packets to revolutionize wedding gifting in Singapore. Developed product concept with a journalist and graphic designer. Responsibilities included refinement of product-market fit, plan of approach, sourcing of supplier, quality inspections, and delivery. Achieved over US$1,000 in sales and featured by major national newspapers.", //       description: string
      "images": [ //       images: array with string urls
        "images/rudepackets1.png",
        "images/rudepackets2.png",
        "images/rudepackets3.png",
        "images/rudepackets4.png"
      ] //,
    }
  ],
  "display": function() {
    var displayProjects = function() {
      for (project in projects["projects"]) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects["projects"][project]["title"]));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects["projects"][project]["dates"]));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects["projects"][project]["description"]));
        for (i = 0; i < projects["projects"][project]["images"].length; i++) {
          $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects["projects"][project]["images"][i]));
        }
      }
    }
    displayProjects();
  }// display: function
};

bio["display"]();
education["display"]();
work["display"]();
projects["display"]();

var displayMap = function() {
  $("#mapDiv").append(googleMap);
}
displayMap();

$(document).ready(function() {
  // Udacious Requirement: Additional Interactivity
  // Interactive Menu Setup

  showProjects();
  // shows projects when "Projects" header is clicked
  $("#projectsHead").click(function(){
    showProjects();
  });

  // shows education when "Education" header is clicked
  $("#eduHead").click(function(){
    showEdu();
  });

  // shows work when "Work" header is clicked on
  $("#workHead").click(function(){
    showWork();
  });

  // shows maps when "Map" header is clicked on
  $("#mapHead").click(function(){
    showMap();
  });
});