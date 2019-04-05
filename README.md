# NEM-SAMPLE-API
Testing Node.JS server to apply different NEM functionalities

Follow the steps below to download, install, and run this project.

## Dependencies
Install these prerequisites to follow along with the tutorial. See free video tutorial or a full explanation of each prerequisite.
- NPM: https://nodejs.org


## Step 1. Clone the project
`git clone https://github.com/khanani92/NEM-SAMPLE-API`

## Step 2. Install dependencies
```
$ cd NEM-SAMPLE-API
$ npm install
```
## Step 3. Start the Node Server
`$ npm run dev`


## Step 4. Use API's using POSTMAN

To Create a Wallet

`URL: http://localhost:3000/v1/wallets`
`MEHTOD: POST`
`DATA: {
	"password":"12345678" //8 charachter
}`

Get All Transaction for an account

`URL: http://localhost:3000/v1/transactions`
`MEHTOD: POST`
`DATA: {
	"accountAddress":"NEM WALLET PUBLIC KEY"
}`

Get All Namespaces for between the given ID

`URL: http://localhost:3000/v1/namespace`
`MEHTOD: POST`
`DATA: {
	"id": 12345678
}`

Get All Mosaics for with given name

`URL: http://localhost:3000/v1/mosaics`
`MEHTOD: POST`
`DATA: {
	"name": "server"
}`

