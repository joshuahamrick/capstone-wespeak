# Wespeak

## Problem Solved

Wespeak is a currently rough draft of a social media platform where users can freely share information without outside censorship. 

Achieving this by having any intended information remain encrypted while online, and decryption running offline on your local machine!

## Technologies Used

- React
- Javascript
- JSON Server
- HTML5
- CSS

## Database

[Wespeak Database Repository](https://github.com/joshuahamrick/wespeak-api)

## Installation and Setup

Clone down this repository as well as the database repository linked above.
You will need to have npm installed on your machine.

### Installation
>npm install
### Database Initialization
In the source folder of the database project run the following command 
>json-server database.json -p 8088
### Project Hosting
In the source folder of this repository run the following command -
>npm run dev
### Open the App!
In your browser type in the following URL, unless otherwise specified by your terminal
>[http://localhost:5173/](http://localhost:5173/)
## How to Use
### When seeking to decipher posts you can access each groups cipher key followed by the # in the bottom right side of each post!

- Click on desired text and make note of the cipher key
- Navigate to Wespeak
- Paste in desired ciphered text to the spoken tab
- Enter the cipher key into the number field

### When seeking to cipher plain text to prepare to post you may do the following

- Enter desired plain text into the speak field
- Enter desired cipher key(use a groups key if posting to a group)
- Click on Submit
- Click the text to copy to clipboard

## Future Development
In this rough draft version of Wespeak all ciphering and deciphering is still run online and not at all encrypted.
The end goal of this project is to instead have a downloadable application that encrypts and decrypts any intended texts while running explicitly offline. This would create an enviroment where people may communicate without being concerned of outside influence, and no plain text would ever be displayed online. All encryption keys for groups and individual personal messages will be provided by offline and secure means. Only those intended to see your messages will. 
## WireFrame
[Wespeak Project WireFrame](https://miro.com/app/board/uXjVNjUxfSU=/?share_link_id=618278056910)
## ERDiagram

[Wespeak ERD](https://dbdiagram.io/d/Wespeak-Capstone-65eb537ab1f3d4062c79bfea)
