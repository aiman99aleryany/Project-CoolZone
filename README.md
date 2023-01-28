# Project-CoolZone

> Project description goes here.
>
> > And here

## Design principles

1.  Mobile First Design
2.  Atomic Design

## Coding Guidelines

#### GENERAL Guidelines

-   If the code is not clear, write comments.
-   Use camalCase when creating variables.
-   Functions are your friends :)
    -   Abuse them.
    -   Create Functions for small processes, each function should do only 1 thing.
    -   Your functions should do exactly what they are named, otherwise write a comment to explain what is happening and why.
-   Always name your properties or variables in such a way that leaves absolutely no room for confusion/misunderstanding/ambiguity.
-   Always capture a complicated piece of logic in a very descriptive, self-reading variable.
-   Avoid double negative (const isNotBlocked = false --> const isBlocked = true).
-   Remove indentations by inverting if statements.
-   Be consistent with variable, method, and class names.
-   Be consistent with abbreviations.

#### CSS/SCSS Guidelines

-   Will be added later

#### JAVASCRIPT Guidelines

-   Will be added later

#### REACT Guidelines

-   Will be added later

#### FOLDER STRUCTURE Guidelines

-   The Project contains 1 main folder "src", inside this folder the following:
    -   "components" Folder
        -   Inside this folder, make a new folder for each new component you create
            -   Inside the new folder you create put:
                -   component file
                -   scss file
                -   scss media queries file
    -   "functions" Folder
        -   Inside this folder put all the global functions you will use across the project, each function has its own file.. use "export default".
    -   "pages" Folder
        -   Inside this folder put the Routes components e.g. "Home.jsx", which is the full page that will combine all the components. make sure to not style the pages, only style the components you import to the pages, pages should be pure.
    -   "styles" Folder
        -   Inside this folder you can find the general scss like "base" and "atomic", these scss files doesn't belong to any components, it's pure classes to use across the project.
    -   "store" Folder
        -   Inside this folder you can find Zustand stores, each store has its own dedicated folder with the mocking data
    -   "App.jsx" component
        -   According to the file name, it's the whole application.
    -   "AppRoutes.jsx" component
        -   All Routes are created here and exported to "App.jsx"
    -   "index.js" file
        -   The "run" function of the whole application.

## Testing Components Design

-   import components to Page "Test" if you want to test and see how the component looks alone.

## Git Branches naming convention

-   Format: "yourGitHubUsername/main/specific"
    -   e.g. "aiman99aleryany/navBar/links"
    -   e.g. "aiman99aleryany/BugFix/NavBarWidth"
    -   e.g. "aiman99aleryany/HomePage/AddingNavBarComponent"

## Commits naming convention

-   e.g. "Add: Added navbar languages menu"
-   e.g. "Fix: Fixed navbar horizontal scrollbar bug"
-   e.g. "Remove: Removed navbar background color"
-   e.g. "Update: Changed navbar width"
-   e.g. "Add: Added navbar langauges menu | Fix: Fixed navbar horizontal scrollbar bug | Update: Changed navbar width"

## Teamwork

-   Always check Trello and update your cards.
-   Read commits log and see what's new.
-   Attend daily scrums, if not possible to attend, use the tool "Daily updates" in Trello and update the Team leader about what you have done with your tasks.

## VScode Instructions.

-   Install these extensions to make your life easier

    -   Better comments -- publisher:"Aaron Bond"
    -   Banner comments -- publisher:"HEYIMFUZZ"
    -   GitLens -- publisher:"GitKraken"
    -   SCSS IntelliSense -- publisher:"mrmlnc"
    -   Todo tree -- publisher:"Gruntfuggly"
    -   Eslint
    -   Prettier

-   Activate the minimap to see the Banner comments.
