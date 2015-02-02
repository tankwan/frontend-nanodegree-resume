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
  "HDB": {
    "organization": "Housing and Development Board of Singapore",
    "role": [
      {
        "title": "Housing and Development Board Overseas Scholarship",
        "dates": "August 2006 - May 2010",
        "location": "Singapore",
        "description": "Received a full scholarship worth SGD400,000"
      },
      {
        "title": "Senior Estate Manager",
        "details": [
          {
            "area": "Policy Development",
            "dates": "July 2010 - Present",
            "description": "Policy drafting, develops strategic options for Singapore's housing policies in the mid to long-term."
          },
          {
            "area": "Policy Analytics",
            "dates": "July 2010 - Present",
            "location": "Singapore",
            "description": "Policy drafting, develops strategic options for Singapore's housing policies in the mid to long-term."
          }
        ]
      }
    ]
  },
  "pennclub": {
    "organization": "Penn and Wharton Alumni Club of Singapore",
    "details": [
      {
        "title": "Treasurer",
        "dates": "FY2013/14",
        "location": "Singapore",
        "description": "Maintains and reports accounts and authorizes expenses."
      },
      {
        "title": "Co-chair of Penn Alumni Interview Program",
        "dates": "FY2013/14",
        "location": "Singapore",
        "description": "Maintains and reports accounts and authorizes expenses."
      },
      {
        "title": "Executive Committee Member",
        "dates": "FY2013/14",
        "location": "Singapore",
        "description": "Maintains and reports accounts and authorizes expenses."
      }
    ]
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

if (bio["skills"].length > 0) {
  $("#header").append(HTMLskillsStart);
  for (i = 0; i < bio["skills"].length; i++) {
    console.log(i);
    $("#skills").append(HTMLskills.replace("%data%", bio["skills"][i]));
  }
}

for (job in work) {
  $("#workExperience").append(HTMLworkStart);
  $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work[job]["organization"]));
  $(".work-entry:last").append("</a>");
}

