# EE542-IoT-Water-Quality-Monitoring-System
● Implemented LoRaWAN Communication between pH, TDS and Turbidity sensors. 
● Product was deployed on AWS, it leveraged Mbed Studios, Node Red and MQTT protocol for continuous monitoring.

EE 542: Internet and Cloud Computing
-------------------------------------

Final Project README:
---------------------

Product: Aquasense ProWater Monitor
-----------------------------------

Hardware Requirements:
----------------------
1. X-dot MultiTech - 2 to 3
2. MultiTech Conduit - 1
3. TDS Sensor - 1
4. pH Sensor - 1
5. Turbidity Sensor - 1
6. Misc. Items such as AWS services, wires, breadboard etc.,

Software Requirements:
-----------------------
1. Mbed Studio 
2. Conduit Setup - Connection to Internet
3. Node Red Setup
4. AWS Services:
a) AWS IoT Core - MQTT Server Setup to receive published Topics from Node Red
b) AWS S3 bucket
c) Lambda function
d) AWS SageMager 

Contents Submitted:
--------------------

-- MBed Studio code
-- AWS Lambda function codes
-- The train dataset from kaggle to train ML model
-- SageMaker ML model code

Procedure to Prepare, Compile and Install our Product:
-------------------------------------------------------

1. X-dot and Sensors:
----------------------
Step 1: Compile the Code provided in Mbed Studio and Flash it onto the X-dot(s).
Step 2: Make Connections using X-dot's Pin out diagram and Sensor's Diagrams.
Setp 3: Dip the sensors in various water test solutions.
Step 4: Verify values sent by sensors either in PUTTY or in Mbed studio.


2. Conduit:
------------
Step 1: Change the Conduit to acqiure IP address through your Home router by changing it from static to DHCP
Step 2: Find out the IP and Log in Normally
Step 3: Verify Internet Access to Conduit by ping test.
Step 4: Log-in to Node Red and Begin Setup.


3. Node Red & AWS Setup:
-------------------------

Step 1: Setup the flow in the node-red as explained in our demo video.
Step 2: Create a new 'Thing' on AWS Iot Core and Download the Private, Public and CA certificates.
Step 2: In HTTP Request Node, attach the certificates created so as to establish a connection with the MQTT test client.
Step 3: Subscribe to the MQTT Test Client Topic to receive Data from Node Red.
Step 4: Verify the data received on the output.
Step 5: Create the S3 bucket with the 2 csv files. One has been given and just create a placeholder for the test_data_potability.csv


4. ML Part
-----------
Step 1: Create 2 lambda functions with the code provided.
Step 2: Create a Sagemaker notebook and copy code to run. Make sure to add the OpenAI API keys and other AWS credentials as required.


Total Cost of Our Product is less than $775.

-- END OF README --
