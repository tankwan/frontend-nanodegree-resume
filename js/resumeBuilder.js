var bio = {
  "name": "Tony K. Tan",
  "role": "Budding Developer and Aspiring PM",
  "contacts": {
    "mobile": "+(65) 96831445",
    "email": "t@tonyktan.com",
    "github": "tankwan",
    "twitter": "@tonytankwan",
    "location": "Singapore"
  },
  "welcomeMessage": "Welcome to my resume! Feel free to get in touch.",
  "bioPic": "images/tonyktan.jpeg",
  "skills": [
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
  ]
}

var education = {
  "schools": [
    {
      "name": "The Wharton School, University of Pennsylvania",
      "degree": "Bachelor of Science in Economics",
      "concentration": [
        "Real Estate",
        "Entrepreneurship",
        "Finance"
      ],
      "dates": "Class of 2010",
      "location": "Philadelphia, PA, US"
    }
  ],
  "online": [
    {
      "title": "Startup Engineering",
      "school": "Coursera",
      "dates": "2012",
      "URL": "coursera.com/startup"
    },
    {
      "title": "Analysis of Algorithms Part 1",
      "school": "Coursera",
      "dates": "2014",
      "URL": "coursera.com/algo"
    },
    {
      "title": "Machine Learning",
      "school": "Coursera",
      "dates": "2014",
      "URL": "coursera.com/machine"
    },
    {
      "title": "Front-end Nanodegree",
      "school": "Udacity",
      "dates": "January - June 2015",
      "URL": "udacity.com/frontend"
    }
  ]
};

var work = {
  "HDB1": {
    "organization": "Housing and Development Board of Singapore",
    "title": "Senior Estate Manager (Policy Development)",
    "dates": "April 2012 - Present",
    "location": "Singapore",
    "description": "Policy drafting, develops strategic options for Singapore's housing policies in the mid to long-term."
  },
  "HDB2": {
    "organization": "Housing and Development Board of Singapore",
    "title": "Estate Officer (Policy Development)",
    "dates": "July 2010 - April 2012",
    "location": "Singapore",
    "description": "Policy drafting, develops strategic options for Singapore's housing policies in the mid to long-term."
  },
  "pennclub1": {
    "organization": "Penn and Wharton Alumni Club of Singapore",
    "title": "Treasurer",
    "dates": "May 2013 - May 2014",
    "location": "Singapore",
    "description": "Maintained and reports accounts and authorizes expenses."
  },
  "pennclub2": {
    "organization": "Penn and Wharton Alumni Club of Singapore",
    "title": "Executive Committee Member",
    "dates": "May 2012 - Present",
    "location": "Singapore",
    "description": "Maintains and reports accounts and authorizes expenses."
  },
  "pennclub3": {
    "organization": "Penn Alumni Interview Program (Singapore)",
    "title": "Co-Chair",
    "dates": "July 2013 - Present",
    "location": "Singapore",
    "description": "Developed and maintained web application to help organize interviews."
  }
};

var projects = {
  "interviewsystem": {
    "title": "Penn Alumni Interview Program (Singapore) Web Application",
    "dates": "Sep 2013 - Feb 2015",
    "description": "Web application built using Ruby Sinatra web framework to organize interviews",
    "image": "images/paip.jpg",
    "URL": "http://penninterviewsg.herokuapp.com/demo"
  },
  "rudepackets": {
    "title": "rudepackets Project",
    "description": "A series of cheeky red packets to revolutionize wedding gifting in Singapore",
    "role": "Co-founder, Moneybags",
    "details": [
      {
        "description": "Successful Crowdfunding Campaign to Raise SGD 1,000",
        "dates": "November - December 2014",
        "URL": "http://pozible.com/rudepackets"
      },
      {
        "description": "Development of Official Website",
        "dates": "December 2014 - Ongoing",
        "URL": "http://rudepackets.com"
      }
    ]
  }
};

$("#header").append(HTMLheaderName.replace("%data%", bio["name"]));
$("#header").append(HTMLheaderRole.replace("%data%", bio["role"]));

if (bio["contacts"]) {
  var newContact = "";
  console.log("hello");
  for (var contact in bio["contacts"]) {
    newContact = HTMLcontactGeneric.replace("%contact%", contact);
    newContact = newContact.replace("%data%", bio["contacts"][contact]);
    console.log(newContact);
    $("#topContacts").append(newContact);
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

for (job in work) {
  $("#workExperience").append(HTMLworkStart);
  $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work[job]["organization"]) + HTMLworkTitle.replace("%data%", work[job]["title"]));
  $(".work-entry:last").append(HTMLworkDates.replace("%data%", work[job]["dates"]));
  $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work[job]["location"]));
  $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work[job]["description"]));
}

