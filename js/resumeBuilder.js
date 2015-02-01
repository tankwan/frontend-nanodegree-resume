// $("#main").append(["Tony K. Tan: "]);

// var awesomeThoughts = "I am Tony and I am AWESOME!";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// console.log(funThoughts);

// $("#main").append(funThoughts);

var bio = {
  "name": "Tony K. Tan",
  "role": "Budding Developer and Aspiring PM",
  "contact": "t@tonyktan.com",
  "twitter": "@tonytankwan",
  "github": "tankwan",
  "picture URL": "images/tonyktan.jpeg",
  "welcome message": "Gratefully loving technology and real estate.",
  "skills": "Ruby, Python, Sinatra, haml, JavaScript, HTML, CSS, Tableau, Octave, R"
}

var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
var formattedContact = HTMLcontactGeneric. replace("%contact%", bio["contact"]);
var formattedTwitter = HTMLtwitter.replace("%data%", bio["twitter"]);
var formattedGithub = HTMLgithub.replace("%data%", bio["github"]);
var formattedBioPic = HTMLbioPic.replace("%data", bio["picture URL"]);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);
var formattedSkills = HTMLskills.replace("%data%", bio["skills"]);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);