Part1
1. Project name and tag line
 Rename the document to be the Project’s name.
 At the top of the document restate the project name as a header. Add a tagline below which is exactly one sentence (or phrase)
 that best summarizes your project.
Answer:
 Project Name: My-PT

 Your Personalized Workout Companion

<----------------------------------------------------------------------------------------------------------------------------->

2. Team Members
 In a section named “Team”, answer:
-What are the names of the team members?
-What role will each person play in completing the project?
-Why have those roles been decided?
Answer:

• Team
 Omar Jaber:
 Rebal : 

• Roles:
 Omar Jaber:
 Rebal :

• Reasons for Roles:

<----------------------------------------------------------------------------------------------------------------------------->

3. Technologies
 In a section named “Technologies”:
-List the libraries, languages, platforms, frameworks, hardware, books, resources that will be necessary to complete your
 project.
-For 2 of these technology choices, describe another option and what were the trade-offs between the chosen technology and
 the alternate. Explain what led to the final decision to use a particular technology.
Answer:

• Technologies

-Languages: JavaScript, HTML, CSS
-Frameworks: React for frontend development, Node.js for backend development
-Libraries: Redux for state management, Express.js for server-side routing
-Database: MongoDB for storing exercise data and user information
-Tools: Git for version control, VSCode as the integrated development environment (IDE)
-Platform: Web application deployed on AWS (Amazon Web Services)
 
• Trade-offs and Decisions:

-Frontend Framework: React vs AngularReact was chosen for its simplicity, virtual DOM, and strong community support. It
allows for faster rendering of UI components and is more flexible in terms of integration with other libraries and frameworks.
Angular, on the other hand, is a more opinionated framework with a steeper learning curve. While it provides more built-in
features out of the box, it can be more cumbersome for smaller projects and may introduce unnecessary complexity. The decision
to use React was made based on the team's familiarity with it and its suitability for the project's scale and requirements.
-Database: MongoDB vs PostgreSQLMongoDB was selected for its flexibility and scalability, especially for handling unstructured
data such as exercise information. It offers a JSON-like document model, which aligns well with the data structure of many
fitness-related applications. PostgreSQL, on the other hand, is a relational database management system known for its ACID
compliance and strong consistency. It is well-suited for applications with complex relationships between data entities.
However, for My-PT, the non-relational nature of MongoDB better accommodates the dynamic and evolving nature of exercise data.
Additionally, MongoDB's scalability makes it a more suitable choice for potential future expansion of the application.

<----------------------------------------------------------------------------------------------------------------------------->

4. Challenge statement
 In a section named “Challenge”:
-Describe the problem the Portfolio Project is intended to solve.
-Explain what the Portfolio Project will not solve
-Explain who the Portfolio Project will help and/or who the users will be
-Is this project relevant or dependent on a specific locale?
Answer:
**Challenge**

The Portfolio Project aims to address the challenge of effectively managing personalized workout routines and rehabilitation
programs. It provides a solution for individuals who require structured exercise regimens tailored to their specific needs,
whether for fitness training, physical therapy, or injury rehabilitation.

However, it's important to note what the Portfolio Project will not solve. It will not replace professional medical advice or
guidance from certified fitness trainers or physical therapists. While it can aid in organizing and tracking exercises, it does
not provide personalized exercise recommendations or diagnoses.

The Portfolio Project will primarily help individuals who are seeking a convenient and customizable way to manage their
exercise routines. This includes people undergoing physical therapy, athletes with specific training requirements, individuals
recovering from injuries, or anyone looking to maintain or improve their fitness level.

This project is not dependent on a specific locale. Since it is a web-based application, it can be accessed and used by
individuals worldwide, regardless of their location. However, it may need to comply with relevant regulations and guidelines
regarding user data privacy and healthcare information security in different jurisdictions.

<----------------------------------------------------------------------------------------------------------------------------->

5. Risks
 In a section named “Risks”:
-Describe the technical risks, the potential impact, and what safeguards or alternatives you have in mind
-Describe non-technical risks, the potential impact, and what strategies are in place to prevent these negative outcomes
Answer:

• Technical Risks:

1. Integration Complexity: Integrating multiple technologies such as React, Redux, Node.js, and MongoDB may lead to 
compatibility issues or unexpected behavior.
 -Potential Impact: Delays in development, increased debugging time, and compromised user experience.
 -Safeguards: Thorough testing at each integration point, regular communication among team members to address any issues
 promptly, and following best practices for compatibility testing.

2. Security Vulnerabilities: As a web-based application handling user data, there's a risk of security breaches such as
cross-site scripting (XSS) or SQL injection attacks.
 -Potential Impact: Compromised user data, loss of trust, and legal implications.
 -Safeguards: Implementing security best practices such as input validation, parameterized queries, and encryption of
 sensitive data. Regular security audits and penetration testing can also help identify and address vulnerabilities proactively.

• Non-Technical Risks:

1. User Adoption: If the application's user interface is not intuitive or user-friendly, there's a risk of low user adoption
rates.
 -Potential Impact: Reduced engagement, negative user feedback, and failure to meet project objectives.
 -Prevention Strategy: Conducting user testing and incorporating user feedback during the design and development process.
 Iteratively refining the user interface based on usability studies and feedback to ensure it meets the needs and expectations
 of the target users.

2. Compliance and Legal Risks: Failure to comply with data protection regulations such as GDPR or HIPAA can result in legal
consequences and reputational damage.
 -Potential Impact: Fines, legal action, damage to the project's reputation, and loss of user trust.
 -Prevention Strategy: Conducting thorough research to understand and comply with relevant regulations. Implementing data
 protection measures such as encryption, access controls, and data anonymization. Regularly reviewing and updating privacy
 policies and terms of service to ensure compliance with evolving regulations. Consulting legal experts if needed to ensure
 full compliance.

<----------------------------------------------------------------------------------------------------------------------------->

6. Infrastructure
 In a section called “Infrastructure”:
-Describe your process for branching and merging in your team’s repository (e.g. GitHub flow, Picking the right branch-merge
 strategy)
-Describe your strategy for deployment
-Describe how you will populate your app with data
-Describe what tools, automation or process you will use for testing
Answer:

• Branching and Merging:
Our team will follow the GitHub flow branching model for version control. In this model, we will have a main branch, typically
named `master` or `main`, which represents the stable version of the application. When working on new features or fixes, team
members will create feature branches off the main branch. Once a feature is complete, it will undergo code review before being
merged back into the main branch through a pull request. This approach allows for a clean and organized codebase, with each
feature developed in isolation and thoroughly reviewed before integration.

• Deployment Strategy:
For deployment, we will utilize a continuous integration and continuous deployment (CI/CD) pipeline. Whenever changes are
pushed to the main branch, automated tests will be triggered to ensure the stability and functionality of the application.
Upon successful testing, the changes will be automatically deployed to the production environment. This automated deployment
process reduces the risk of human error and ensures a seamless and efficient deployment workflow.

• Data Population:
Initially, our app will be populated with sample exercise data to demonstrate its functionality. Users will also have the
option to manually input their own exercise routines and data. Additionally, we may integrate APIs or databases containing
exercise information and recommendations to provide users with a wider range of options for their workouts.

• Testing Tools and Processes:
We will employ a combination of manual testing and automated testing to ensure the reliability and quality of our application.
For automated testing, we will use tools such as Jest and React Testing Library for unit and integration testing of frontend
components, and tools like Mocha and Chai for backend testing. We will also utilize end-to-end testing frameworks like Cypress
to simulate user interactions and ensure the smooth functioning of the entire application. Continuous integration tools like
Jenkins or GitHub Actions will be used to automate the testing process and provide immediate feedback on code changes.
Additionally, we will conduct manual testing to evaluate the user experience and identify any usability issues that automated
tests may overlook.

<----------------------------------------------------------------------------------------------------------------------------->

7. Existing Solutions
 In a section called “Existing Solutions”:
-List any similar products or solutions that currently exist.
-For each item in the list, explain similarities and differences
-If you intend to reimplement a proven solution, then describe the various proven solutions and why you chose to reimplement
 based on a particular specification.
 As an example, lets say you will develop an image compression algorithm, and decide to go with Transform coding. Utilize this
 section to describe the different classes of image compression, and the various types of compression algorithms and the unique
 aspects of Transform coding.
Answer:

• MyFitnessPal
-Similarities: MyFitnessPal is a popular fitness app that allows users to track their exercise routines and nutritional intake.
 Like My-PT, it provides users with the ability to log workouts and monitor progress over time.
-Differences: MyFitnessPal focuses more on nutrition tracking and calorie counting, whereas My-PT is specifically tailored for
 managing exercise routines and rehabilitation programs. My-PT offers more detailed timing cues, exercise scheduling, and
 feedback to physical therapists, which are not prominent features of MyFitnessPal.
• Physiotec
-Similarities: Physiotec is an exercise prescription software used by physiotherapists to create personalized exercise programs
 for patients. Like My-PT, it allows users to access exercise instructions and track their progress.
-Differences: Physiotec is primarily used by healthcare professionals to prescribe exercises to patients, whereas My-PT is
 designed for individual users to manage their own exercise routines. Physiotec may offer more advanced features for healthcare
 professionals, such as patient management and progress tracking, which may not be relevant for individual users.

• Choice of Implementation:
 While there are existing solutions like MyFitnessPal and Physiotec that offer some similar features to My-PT, we chose to
 reimplement a personalized workout companion based on specific user needs and requirements. My-PT focuses on providing detailed
 timing cues, customizable exercise scheduling, and seamless integration with physical therapy feedback, catering to individuals
 who require a more tailored approach to managing their exercise routines. By building a new solution from scratch, we have the
 flexibility to incorporate innovative features and design choices that directly address the needs of our target users, ensuring
 a more personalized and effective user experience.


<----------------------------------------------------------------------------------------------------------------------------->
<----------------------------------------------------------------------------------------------------------------------------->

Part2
1. Rename the document
 Rename the document to be the Project’s name and append “ MVP specification”
Answer:

My-PT MVP Specification

<----------------------------------------------------------------------------------------------------------------------------->

2. Architecture
 In a section named “Architecture”:
-Include an illustration or diagram of the Portfolio Project’s MVP. This should include an end-to-end map for the data
 flowing through your system. Each part of the diagram should be clearly labeled.
 Here are some resources to learn more:
-Web Architecture 101
-List of tools to create architecture diagrams
-Web Application Architecture
Answer:
**Architecture**

[Diagram]

[The diagram illustrates the end-to-end flow of data in the My-PT MVP system.]

1. Client Interface (Web Browser):
 -This is the user interface where clients interact with the application. It includes features such as exercise scheduling,
 timing cues, and feedback submission.
   
2. Frontend Framework (React):
 -The frontend framework handles the presentation layer of the application. It consists of React components responsible for
 rendering the user interface and handling user interactions.
   
3. Redux Store:
 -Redux is used for state management, storing data such as user preferences, exercise routines, and scheduling information.
 It ensures a single source of truth for the application's state.
   
4. API Requests:
 -The frontend communicates with the backend server through API requests. These requests include fetching exercise data,
 submitting user feedback, and retrieving scheduled workouts.
   
5. Backend Server (Node.js):
 -The backend server handles business logic, database interactions, and serves as a bridge between the frontend and the database. It is implemented using Node.js and Express.js.
   
6. Database (MongoDB):
 -MongoDB is used as the database to store exercise data, user profiles, scheduling information, and feedback submissions.
 It offers flexibility in storing unstructured data and scales well with the application's growth.

[End of Diagram]

This architecture ensures a smooth flow of data from the client interface through the frontend, backend, and database layers,
providing users with a seamless experience while interacting with the My-PT application.

<----------------------------------------------------------------------------------------------------------------------------->

3. APIs
 In a section called “APIs and Methods”:
-List and describe the API routes that you will be creating for your web client to communicate with your web server
-List and describe any API endpoints or function/methods that you will be creating to allow any other clients to use
-List and describe any 3rd party APIs that you will be using
Answer:

1. API Routes for Web Client (Web Server Communication):

• GET /exercises:
 -Description: Retrieves a list of available exercises from the server.
 -Parameters: None
 -Response: JSON array of exercise objects containing details such as exercise name, description, and instructions.
• POST /schedule:
 -Description: Submits a user's scheduled workout routine to the server.
 -Parameters: JSON object containing user ID and scheduled exercises.
 -Response: Success message or error status.
• POST /feedback:
 -Description: Allows users to submit feedback to the server, such as exercise difficulty or questions for the therapist.
 -Parameters: JSON object containing user ID, feedback type, and comments.
 -Response: Success message or error status.

2. API Endpoints for Other Clients:

• GET /api/v1/user/:id/exercises:
 -Description: Retrieves a specific user's exercise history and progress.
 -Parameters: User ID
 -Response: JSON array of exercise objects associated with the user.
• POST /api/v1/exercises/new:
 -Description: Allows authenticated users to add new exercises to the database.
 -Parameters: Exercise details such as name, description, and instructions.
 -Response: Success message or error status.

3. 3rd Party APIs:

• Google Maps API:
-Description: Used for geolocation services, if needed for scheduling outdoor workouts or physical therapy locations.
-Usage: Integrates map features within the application to provide location-based services.
• OpenWeatherMap API:
-Description: Provides weather data for outdoor workout planning.
-Usage: Retrieves current weather conditions and forecasts to help users plan their workouts accordingly.
 Using these APIs, My-PT can enhance the user experience by providing additional features such as geolocation-based services,
 weather forecasts, and the ability for users to add their own exercises to the database.

<----------------------------------------------------------------------------------------------------------------------------->

4. Data Modelling
 In a section named “Data Model”:
-Create a data model diagram to clarify how data will be stored
Answer:
[Diagram]

[The diagram illustrates the data model for the My-PT application.]

1. User
• Attributes:
 -UserID (Primary Key)
 -Username
 -Email
 -Password
 -Profile Picture
• Relationships:
 -One-to-Many relationship with ScheduledWorkout
 -One-to-Many relationship with Feedback

2. Exercise
• Attributes:
 -ExerciseID (Primary Key)
 -Name
 -Description
 -Instructions
• Relationships:
 -One-to-Many relationship with ScheduledWorkout

3. ScheduledWorkout
• Attributes:
 -ScheduledWorkoutID (Primary Key)
 -UserID (Foreign Key)
 -Date
 -Time
 -Duration
 -Exercises (Array of ExerciseIDs)
• Relationships:
 -Many-to-One relationship with User
 -Many-to-Many relationship with Exercise

4.Feedback
• Attributes:
 -FeedbackID (Primary Key)
 -UserID (Foreign Key)
 -Type (e.g., Difficulty, Question)
 -Comments
• Relationships:
 -Many-to-One relationship with User
[End of Diagram]

This data model represents the core entities and relationships within the My-PT application. Users can schedule workouts,
which consist of multiple exercises. They can also provide feedback on their workouts or ask questions to their therapists.
The data model ensures efficient storage and retrieval of user information, exercise details, scheduled workouts, and feedback
submissions.

<----------------------------------------------------------------------------------------------------------------------------->

5. User Stories
 First, research what user stories are, and how to write them. Also note some pitfalls of creating user stories that are too
 general.
 In the “User Stories” section:
-Define 3-5 detailed user stories that will be satisfied when your MVP is complete.
Answer:

User stories are concise descriptions of a feature from the perspective of an end user, typically written in a format such
as: "As a [type of user], I want [some goal] so that [some reason]." They help to articulate the needs and expectations of
users and guide the development process.

• • Pitfalls of General User Stories:

• Lack of specificity: General user stories may not provide enough detail about the user's goals or the context in which the
 feature will be used.
• Ambiguity: Vague user stories can lead to misunderstandings or misinterpretations by the development team, resulting in
 incorrect implementations.
• Lack of prioritization: Without clear details about user needs, it can be difficult to prioritize features effectively,
 leading to delays or inefficiencies in the development process.

• • Detailed User Stories for My-PT MVP:

1. As a user recovering from a knee injury, I want to schedule my physical therapy exercises for specific dates and times so
that I can track my progress and adhere to my rehabilitation program effectively.
• Acceptance Criteria:
 -Ability to select exercises from a list and schedule them for future dates.
 -Option to specify the date, time, and duration for each scheduled workout.
 -Ability to view and edit scheduled workouts in a calendar or list view.

2. As a fitness enthusiast, I want to explore a variety of exercises categorized by muscle group or type so that I candiversify
my workout routine and target specific areas of my body.
• Acceptance Criteria:
 -Browse exercises organized by muscle group, equipment needed, or exercise type (e.g., strength training, cardio).
 -View detailed descriptions and instructions for each exercise, including proper form and technique.
 -Filter and search functionality to easily find exercises based on specific criteria.

3. As a physical therapist, I want to review feedback from my patients regarding the difficulty of their exercises and any
questions or concerns they may have, so that I can provide appropriate guidance and adjustments to their rehabilitation program.
• Acceptance Criteria:
 -Receive notifications for new feedback submissions from patients.
 -View a summary of patient feedback, categorized by exercise difficulty and type of question or concern.
 -Ability to respond to patient questions and provide additional instructions or modifications to their exercises.

These detailed user stories provide clear goals, contexts, and acceptance criteria for the development team, ensuring that the
MVP addresses the specific needs and expectations of the target users.

<----------------------------------------------------------------------------------------------------------------------------->

6. Mockups
 If there is any visual interface to your Portfolio Project, this section is required. If your project lives on the commandline,
 or in script, then do not include this section. Use a prototyping tool, like Balsamiq, to draft your user-facing visual
 interfaces.
 In a section called “Mockups”:
-Include a mockup of each view that will need to be created for your MVP
Answer:

• Mockup 1: Exercise Selection and Scheduling

[The mockup illustrates the Exercise Selection and Scheduling view of the My-PT application.]

-The user can browse exercises categorized by muscle group or type.
-They can select exercises by clicking on them and add them to their scheduled workout.
-The user can specify the date, time, and duration for each exercise in the scheduled workout.
-Once scheduled, the exercises are displayed in a calendar format for easy visualization.

• Mockup 2: Exercise Details

[The mockup illustrates the Exercise Details view of the My-PT application.]

-When the user clicks on an exercise, they are taken to the Exercise Details page.
-Here, they can view detailed information about the selected exercise, including name, description, and instructions.
-The user can also see related exercises or navigate back to the exercise selection screen.

• Mockup 3: Feedback Submission

[The mockup illustrates the Feedback Submission view of the My-PT application.]

-Users can submit feedback about their exercises, including difficulty levels and questions for their therapist.
-They can choose the type of feedback they want to provide from a dropdown menu.
-Users can add comments or additional information in the text field.
-After submitting feedback, users receive a confirmation message.

These mockups provide a visual representation of the key views and interactions within the My-PT application, helping to guide
the design and development process for the MVP.

<----------------------------------------------------------------------------------------------------------------------------->
<----------------------------------------------------------------------------------------------------------------------------->

Part3
1. Column Headers
 Set up your Trello board with the following columns:
-Proposed
-Approved
-In Progress
-Dev Complete
-Tested
-Deployed
Answer:

-Proposed: This column is where new tasks or user stories are initially added for consideration.
-Approved: Once a task or user story is reviewed and approved for development, it moves to this column.
-In Progress: Tasks that are actively being worked on by the development team are moved to this column.
-Dev Complete: After development is finished, tasks are moved here to indicate that coding is complete.
-Tested: In this column, tasks are placed for testing and quality assurance before deployment.
-Deployed: Finally, once a task has passed testing and is ready to be released, it is moved to this column to indicate
 deployment.

These columns provide a clear workflow for managing the progress of tasks and user stories from proposal to deployment.

<----------------------------------------------------------------------------------------------------------------------------->

2. Create Cards
 In the “proposed” column, create cards to fully represent the engineering tasks necessary to implement to satisfy the User
 Stories defined for your MVP. For each card, attach detailed descriptions, mockups, diagrams or technical specifications
 relevant to the engineering task.
Answer:

Here are the cards created for the proposed column, each representing an engineering task necessary to implement the User
Stories for the MVP of the My-PT application:

• Task: Implement Exercise Selection and Scheduling View
Description: Develop the frontend view allowing users to browse exercises, select them, and schedule workout sessions.
Attachments: Mockup 1 (Exercise Selection and Scheduling view), Data Model Diagram (relevant schema for scheduling).
• Task: Develop Exercise Details Page
 -Description: Create the frontend view displaying detailed information about selected exercises, including descriptions and
 instructions.
 -Attachments: Mockup 2 (Exercise Details view).
• Task: Enable Feedback Submission Feature
 -Description: Implement the frontend and backend functionality for users to submit feedback about their exercises.
 -Attachments: Mockup 3 (Feedback Submission view), API documentation for feedback submission endpoint.
• Task: Backend API for Exercise Retrieval
 -Description: Develop backend API endpoints to retrieve exercises from the database and serve them to the frontend.
 -Attachments: API documentation detailing the routes and methods for exercise retrieval.
• Task: User Authentication and Authorization
 -Description: Implement user authentication and authorization features to ensure secure access to user-specific data and
 functionalities.
 -Attachments: Technical specifications for user authentication process, diagrams illustrating authentication flow.

These cards outline the specific engineering tasks required to fulfill the User Stories defined for the MVP of the My-PT
application. Each card includes detailed descriptions and relevant attachments, such as mockups, diagrams, or technical
specifications, to provide clear guidance for the development team.

<----------------------------------------------------------------------------------------------------------------------------->

3. Assign cards
 For each card, assign ownership to a team member. This should make sense given the roles specified in the project proposal.
Answer:

• Task: Implement Exercise Selection and Scheduling View
 -Assigned to: 
• Task: Develop Exercise Details Page
 -Assigned to: ?
• Task: Enable Feedback Submission Feature
 -Assigned to: ?
• Task: Backend API for Exercise Retrieval
 -Assigned to: ?
• Task: User Authentication and Authorization
 -Assigned to: ?

Why did you ensure to assigning tasks this way?

<----------------------------------------------------------------------------------------------------------------------------->

4. Invite collaborators
 Invite the technical staff to be a collaborator on the Trello board so that each proposed task can be commented upon and
 moved into the approved column. 
Answer:

<----------------------------------------------------------------------------------------------------------------------------->

5. Set Due Dates
 For each task, based on priority and dependencies, assign a due date within the 2 week development window.
Answer:
• Task: Implement Exercise Selection and Scheduling View
 -Due Date:
• Task: Develop Exercise Details Page
 -Due Date:
• Task: Enable Feedback Submission Feature
 -Due Date:
• Task: Backend API for Exercise Retrieval
 -Due Date:
• Task: User Authentication and Authorization
 -Due Date:

<----------------------------------------------------------------------------------------------------------------------------->

6. Add a few mandatory tasks
 Include the following tasks to the “Approved” column:
-Create presentation
-Create project landing page
-Write comprehensive README.md
-Make demo of the project
-Write blog post
Answer:

• Task: Create Presentation
 -Description: Prepare a presentation outlining the features, functionality, and development process of the My-PT project.
 -Due Date: 
• Task: Create Project Landing Page
 -Description: Develop a landing page for the My-PT project, showcasing its features and providing information for potential
 users.
 -Due Date: 
• Task: Write Comprehensive README.md
 -Description: Document the project in the README.md file, providing detailed instructions for setup, usage, and contribution
 guidelines.
 -Due Date: 
• Task: Make Demo of the Project
 -Description: Create a demo video or interactive demo showcasing the features and functionality of the My-PT project.
 -Due Date: 
• Task: Write Blog Post
 -Description: Write a blog post about the development process, challenges, and learnings from creating the My-PT project.
 -Due Date: 

Adding these tasks ensures that important project-related activities such as documentation, presentation, and promotion are
planned and executed alongside the development tasks.

<----------------------------------------------------------------------------------------------------------------------------->
<----------------------------------------------------------------------------------------------------------------------------->

<!-- Features -->

 • Timing: As you perform the exercise you will hear and see cues that help you time each repetition (rep). Cues such as
 Prepare, Start, Release, Rest. Timing parameters can be fine-tuned down to the finest detail in order to match your pace
 exactly.
 • Counting: You specify the number of reps and sets, and My-PT keeps track while you just follow the cues.
 • Scheduling: Assign a schedule to each exercise and My-PT will remind you when it is due. 
 • Instructions: You can enter instructions for each of your exercises, by typing them into the exercise, and / or by adding
 photos to the exercise. You can choose to automatically show or speak the instructions as you start the exercise. You can also
 record audio of your own instructions, if you prefer that. Thus, My-PT also serves as a convenient place to keep all your
 exercise instructions.
 • Feedback to your physical therapist: When you finish an exercise you can mark the difficulty and make notes with questions
 or feedback to your therapist. You can generate a report that shows this information (PDF format) and email it to your
 therapist.
 • Workouts: You can string multiple exercises together into workouts, which can play through your entire regimen automatically.
 
 That’s it. What My-PT does not do for you is to provide any pre-defined exercises (other than a couple of examples). You
 enter each exercise according to your own needs or directions from a physiotherapist
