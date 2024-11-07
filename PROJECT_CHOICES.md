### 1) Tell us what pieces of software you think are necessary to develop for the working prototype and how they are related. We call each application (web, mobile or desktop), each API, each batch process that can be deployed independently a piece of software. Support yourself with a diagram if you think necessary. 


To have a robust prototype that can run the required features for months and be incremented over time, I would build two frontends, a responsive web application and a mobile application. I would use React and React Native to make the visual harmonic over platforms and reuse some code to speed up the project. The project also needs a server to execute the business logic and communicate with the database and third-party APIs. Then, developing the working prototype would require a web and mobile application, and a backend server to provide all the information for the frontend and communicate with the database and third-party APIs. Also, the database itself, and at least an API to generate the delivery routes.

### 2) Tell us about the type of architecture you chose for question (1). Monolithic? Micro-services? Any intermediate? Other? Comment on what you based to make this decision.

I choose to work with a Monolithic approach because it would be a simpler architecture, making it easier to set up, improve, and maintain the prototype. I would structure the server in a way where the route, business logic, and infrastructure (database and third-party APIs' calls) are completely independent which would make it easy to scale the project, change it to micro-service if needed, or turn to micro-services only the endpoints with heavy traffics to avoid an over complex architecture with no reason.

### 3) Describe the work methodology you would use for development. It can be someknown methodology (Scrum, XP, RUP), an adaptation, or a mixture between several methodologies. Whatever your experience has shown you works. Tell us why you think this form is appropriate for our problem.

I would start using Scrum with a Kanban board and adapting to the team's needs. The sprint approach from Scrum makes it easier for the team to see the priorities and what everyone is doing, keeping the deadlines clear while the backlog is present to remind the next steps. The daily meetings help to keep the entire team up to date which is really important in a prototype where requirements can change or not be very precisely specified. And, the Kanban board makes it easier to visualize what is happening in the sprint.

### 4) Describe the workflow you would use to collaborate using Git. As with (3), you can use something familiar or an adaptation.

For a prototype that needs a constant delivery of features and fixes I would use the GitHub Flow which allows for constant delivery while allowing testing and reviewing each feature or fix before delivering it to production. However, if the prototype shows a requirement for more stability or even multiple versions coexisting I would use Git Flow which allows us to have a more stable application with good version control allowing us to revert any version or make multiple versions to coexist.

### 5) Do you think it is necessary to add any extra member to the team during the development of the prototype? What would your role be? Do you think it would be necessary to add new members after the prototype phase? When and why?

Depending on the scale of the project and the deadlines we might need to add more developers during or after the prototype phase. After the prototype phase it would be good to add some testers to guarantee the quality of the application before delivering it to production.

### 6) What other considerations would you have to make the development process robust and efficient?

The scale of the project and the client's priority. The robustness and efficiency of the development process will strongly depend on the scale of the project and the client's priorities. For example, if it should be efficient in delivering stability or quickly reacting to changes, if security or usability is a priority, or if the application should be flawless.


