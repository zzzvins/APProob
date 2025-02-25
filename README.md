# APProob 👍

## Project Features

This program manages student clearance applications within an institution. Students can submit clearance applications via a GitHub link, wait for their applications to be approved/returned by their adviser and by a clearance officer, and then receive a PDF for their application if the application has been cleared.

## Usage Guidelines

### Student

To create an account, click Sign-In on the HomePage and enter your credentials. Wait for the Admin to approve the creation of your account.

After your account has been created, log in. After successfully logging in, you will be greeted with a Student Dashboard.

On your screen's left will be a drawer with the following tabs: Dashboard (current), Profile, and Application. To create a new application, click on the Application tab and input a GitHub link in the textbox that shows up.

### Approver

Approvers are created by the Admin. Thus, there is no need to make an account.

Upon logging in, you will be greeted with the Admin's Dashboard. On the left you will see details for the following:

- Number of Students
- Number of Approvers
- Number of Open Applications

If there are any open applications, they will be listed on your screen's right. There are icons for you to either approve or reject application requests. There are also sorting options for this.

### Admin

Admin is already built in. Thus, there is no need to make an account.

Upon logging in, you will be greeted with the Admin's Dashboard. On the left you will see details for the following:

- Number of Students
- Number of Approvers
- Number of Pending Accounts

If there are any pending account creations, they will be listed on your screen's right. There are icons for you to either approve or reject account creation requests. There are also sorting options for this.

On the far left of your screen will be a drawer with the following tabs:

- Dashboard (current)
- Application
- Student: Views All Students
- Approver: Views All Approvers

The pages for Student and Approver both have search and filter options so that you can sort through each respective list.

## How to Run

- `npm run install:dev `- use to install packages
- `npm run dev` - use to start up the program itself

## Environment Variables

Create a .env file in the root directory of the project and configure the following variables:

### Sample Environment Variables

`PORT=3000`

`SALT="THIS_IS_A_SAMPLE_SECRET"`

`DB_URL=mongodb://localhost:27017/sample-database`

Ensure that your .env file is included in your .gitignore to prevent exposing sensitive information in version control.
