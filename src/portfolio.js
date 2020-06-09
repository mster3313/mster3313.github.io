
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi! I'm Mahendra",
  subTitle: emoji("Computer Engineering undergraduate 👨🏻‍🎓 at University of Peradeniya. \
  Splitted personalities - a tech enthusiast 👨🏻‍💻💻📱, a foodie 🍔🌮🌭🍕, a gamer 🎮🕹️, and a music lover 🎻🎧"),
  resumeLink: "https://drive.google.com/file/d/1U2wX2QBglm8MeMl8qrii4EEFih24fwHw/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/mster3313",
  linkedin: "https://www.linkedin.com/in/mahendrabandara",
  gmail: "mahen6513@gmail.com",
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "",
  skills: [
    emoji("⚡ Microcontroller programming and robotics"),
    emoji("⚡ Multiplatform api-backend development"),
    emoji("⚡ C,C++,Python and Java application developments"),
    emoji("⚡ Integration of third party services such as AWS / Heroku")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "microcontroller",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "robot",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "MDRkYTA2MGVkNGRmZDIxMzE4Y2Y5NDQ5NjFlZGIwY2IwYWEyZGUwNQ==",
  githubUserName: "mster3313"
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "STARTUPS THAT I CONTRIBUTED IN",
  projects: [
    { 
      image: "https://drive.google.com/uc?id=1nzaZD3vu1EkQWThoAfgC9dkTxKTHhyfA",
      link: "https://fixy.lk/"
    },
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),

  achivementsCards: [
    {
      title: "Google Cloud Computing",
      subtitle: "Google Cloud Platform Fundamentals: Core Infrastructure",
      image:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/31/8ffb301bf011e79fa2d5b154b6a30b/GCP-Fundamentals-Core-Infra.jpg?auto=format%2Ccompress&dpr=1",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/14-WJhCOE8JyAw2XVYRH2oYPyEK9lxfqY/view?usp=sharing" }
      ]
    },
    {
      title: "Amazon Web Services",
      subtitle: "Completed courses on AWS Fundamentals: Going Cloud-Native and AWS Fundamentals: Addressing Security Risk",
      image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/4b/779690e17211e8a2716dce94c217bd/1200x1200_core.png?auto=format%2Ccompress&dpr=1",
      footerLink: [{ name: "Certification", url: "https://drive.google.com/drive/folders/1s3sl_Aba3OJGtf4O08MUQddCE9aNMu3r?usp=sharing" }]
    },

    {
      title: "Web App Development",
      subtitle: "Completed Certifcation from Coursera for Backend Development with Express and MongoDB",
      image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/c3/2ab0304cf611e7a143498f0a05f3b8/Logo.png?auto=format%2Ccompress&dpr=1",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/drive/folders/1avgId7sQdZuLoDTCa1oVr_YTFwpE3ipL?usp=sharing" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff. i love to write and teach others what i have learned",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT Is The Best?",
      description: "React is a JavaScript library for building the user interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  number: "+94-71 921 2216",
  email_address: "mahen6513@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
